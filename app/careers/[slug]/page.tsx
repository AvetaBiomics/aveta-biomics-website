import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, Shell } from "../../components/SiteChrome";
import { applyHref, findRole } from "../roles";

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

  return <Shell active="/join-us"><main>
    <section className="jd-hero"><div className="container policy-wrap">
      <Link className="text-link jd-back" href="/careers"><Arrow /> All open roles</Link>
      <h1 className="jd-title">{role.title}</h1>
      <div className="jd-facts">{facts.map(([label, value])=><div className="jd-fact" key={label}><small>{label}</small><strong>{value}</strong></div>)}</div>
      <div className="actions"><a className="button" href={apply}>Apply for this role <Arrow /></a></div>
    </div></section>

    <section className="section-sm jd-body-section"><div className="container policy-wrap jd-body">
      <div className="jd-section"><h2>Position summary</h2>{role.overview.map((paragraph)=><p className="body-copy" key={paragraph.slice(0,40)}>{paragraph}</p>)}</div>
      <div className="jd-section"><h2>Key responsibilities</h2><ul className="jd-list">{role.responsibilities.map((item)=><li key={item.slice(0,40)}>{item}</li>)}</ul></div>
      <div className="jd-section"><h2>Qualifications and experience</h2><ul className="criteria-list">{role.qualifications.map((item)=><li key={item.slice(0,40)}>{item}</li>)}</ul></div>
    </div></section>

    <section className="section-sm soft-bg jd-attributes-section"><div className="container policy-wrap"><div className="policy-card jd-attributes"><h3>Personal attributes</h3><p className="body-copy">{role.attributes}</p></div></div></section>

    <section className="section-sm jd-cta"><div className="container"><div className="join-band navy-bg"><h2>Ready to move important work forward?</h2><div className="actions"><a className="button-outline" href={apply}>Apply for this role <Arrow /></a><Link className="button-outline" href="/careers">See all open roles <Arrow /></Link></div></div></div></section>
  </main></Shell>;
}
