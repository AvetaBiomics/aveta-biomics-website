import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Shell } from "../../components/SiteChrome";
import { JsonLd, pageMetadata, siteName, siteUrl } from "../../lib/seo";
import { findPerson, personSlugs, type Person } from "../people";

/** Prerenderable list of biography URLs, and the set the sitemap walks. */
export function generateStaticParams() {
  return personSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = findPerson(slug);
  if (!found) return { title: "Biography not found" };
  const { person } = found;
  return pageMetadata({
    title: `${person.name} — ${person.role}`,
    // The opening sentence of the biography, which is where each one states who
    // the person is. Trimmed to the length search results show.
    description: summarise(person),
    path: `/about/${person.slug}`,
  });
}

/** First sentence of the biography, capped at what a meta description shows. */
function summarise(person: Person) {
  const opening = person.bio?.[0] ?? "";
  const sentence = opening.split(/(?<=\.)\s/)[0];
  return sentence.length > 300 ? `${sentence.slice(0, 297).trimEnd()}…` : sentence;
}

function personJsonLd(person: Person, roles: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: roles,
    description: summarise(person),
    url: `${siteUrl}/about/${person.slug}`,
    ...(person.image ? { image: `${siteUrl}${person.image}` } : {}),
    worksFor: { "@type": "Organization", name: siteName, sameAs: siteUrl },
  };
}

export default async function PersonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const found = findPerson(slug);
  if (!found) notFound();

  const { person, group, memberships } = found;
  // A person can sit in more than one section — an executive who is also a board
  // director. The extra seats are named under the primary role rather than given
  // a second page.
  const alsoServes = memberships.slice(1);
  const back = `/about#${group.id}`;

  return <Shell active="/about"><JsonLd data={personJsonLd(person, memberships.map((m) => m.person.role))} /><main>
    <section className="bio-hero"><div className="container policy-wrap">
      <Link className="text-link jd-back" href={back}><Arrow /> Back to About</Link>
      <div className="bio-head">
        {person.image
          ? <img className="bio-portrait" src={person.image} alt={person.name} />
          : <span className="bio-portrait person-placeholder" aria-hidden="true">●</span>}
        <div className="bio-identity">
          <p className="eyebrow">{group.label}</p>
          <h1 className="bio-name">{person.name}</h1>
          <p className="bio-role">{person.role}</p>
          {alsoServes.length > 0 && <p className="bio-also">
            Also serves on the {alsoServes.map((m) => m.group.label.replace(/^THE /, "").toLowerCase()).join(" and the ")}.
          </p>}
        </div>
      </div>
    </div></section>

    <section className="section-sm bio-body-section"><div className="container policy-wrap bio-body">
      {person.bio?.map((paragraph) => <p className="body-copy" key={paragraph.slice(0, 40)}>{paragraph}</p>)}
      <Link className="button-outline bio-back-bottom" href={back}><Arrow /> Back to About</Link>
    </div></section>
  </main></Shell>;
}
