import Link from "next/link";
import { notFound } from "next/navigation";
import { ApplyModal } from "../../components/ApplyModal";
import { Arrow, Shell } from "../../components/SiteChrome";
import { JsonLd, contactEmail, pageMetadata, siteName, siteUrl } from "../../lib/seo";
import { applyHref, findRole, roles, type Role } from "../roles";

/** Prerenderable list of role URLs, and the set the sitemap walks. */
export function generateStaticParams() {
  return roles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = findRole(slug);
  if (!role) return { title: "Role not found" };
  return pageMetadata({
    // The full title runs past what search results show, so the listing title
    // carries the location instead of the second half of the job title.
    title: `${role.title.split(" / ")[0]} — ${role.location}`,
    description: role.summary,
    path: `/careers/${role.slug}`,
  });
}

/**
 * JobPosting markup, which is what makes a role eligible to appear in Google
 * Jobs. `description` is required to be HTML, so the list sections are emitted
 * as markup rather than as plain text.
 */
function jobPostingJsonLd(role: Role) {
  const list = (items: string[]) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: role.title,
    datePosted: role.postedOn,
    employmentType: "FULL_TIME",
    description: [
      role.overview.map((p) => `<p>${p}</p>`).join(""),
      `<h3>Key responsibilities</h3>${list(role.responsibilities)}`,
      `<h3>Qualifications and experience</h3>${list(role.qualifications)}`,
    ].join(""),
    hiringOrganization: {
      "@type": "Organization",
      name: siteName,
      sameAs: siteUrl,
      logo: `${siteUrl}/assets/aveta-biomics-logo.jpg`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Boston",
        addressRegion: "MA",
        addressCountry: "US",
      },
    },
    jobLocationType: "TELECOMMUTE",
    directApply: false,
    applicantLocationRequirements: { "@type": "Country", name: "USA" },
    url: `${siteUrl}/careers/${role.slug}`,
    applicationContact: { "@type": "ContactPoint", email: contactEmail },
  };
}

export default async function RolePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = findRole(slug);
  if (!role) notFound();

  const apply = applyHref(role);
  const facts = [
    ["REPORTS TO", role.reportsTo],
    ["LOCATION", role.location],
    ["TYPE", role.employment],
    ["TEAM", role.department],
  ] as const;

  return <Shell active="/join-us"><JsonLd data={jobPostingJsonLd(role)} /><main>
    <section className="jd-hero"><div className="container policy-wrap">
      <Link className="text-link jd-back" href="/careers"><Arrow /> All open roles</Link>
      <h1 className="jd-title">{role.title}</h1>
      <div className="jd-facts">{facts.map(([label, value])=><div className="jd-fact" key={label}><small>{label}</small><strong>{value}</strong></div>)}</div>
      <div className="actions"><ApplyModal slug={role.slug} title={role.title} fallbackHref={apply} /></div>
    </div></section>

    <section className="section-sm jd-body-section"><div className="container policy-wrap jd-body">
      <div className="jd-section"><h2>Position summary</h2>{role.overview.map((paragraph)=><p className="body-copy" key={paragraph.slice(0,40)}>{paragraph}</p>)}</div>
      <div className="jd-section"><h2>Key responsibilities</h2><ul className="jd-list">{role.responsibilities.map((item)=><li key={item.slice(0,40)}>{item}</li>)}</ul></div>
      <div className="jd-section"><h2>Qualifications and experience</h2><ul className="criteria-list">{role.qualifications.map((item)=><li key={item.slice(0,40)}>{item}</li>)}</ul></div>
    </div></section>

    <section className="section-sm soft-bg jd-attributes-section"><div className="container policy-wrap"><div className="policy-card jd-attributes"><h3>Personal attributes</h3><p className="body-copy">{role.attributes}</p></div></div></section>

    <section className="section-sm jd-cta"><div className="container"><div className="join-band navy-bg"><h2>Ready to move important work forward?</h2><div className="actions"><ApplyModal slug={role.slug} title={role.title} fallbackHref={apply} /><Link className="button-outline" href="/careers">See all open roles <Arrow /></Link></div></div></div></section>
  </main></Shell>;
}
