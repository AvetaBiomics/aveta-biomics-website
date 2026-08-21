import Link from "next/link";
import { Arrow, Shell } from "../components/SiteChrome";
import { careersEmail, roles } from "./roles";

const introduce = `mailto:${careersEmail}?subject=${encodeURIComponent("Introduction to Aveta")}`;

export default function CareersPage(){return <Shell active="/join-us"><main>
  {/* Same photo-hero construction as /join-us: the artwork carries a white
      gradient baked into its left 40%, which the overlaid copy sits on, and the
      stacked layout swaps in a crop of the ungraded right side. Reusing those
      classes keeps one source of truth for the pattern. */}
  <section className="join-approved-hero careers-hero"><div className="join-approved-copy"><p className="eyebrow">CAREERS AT AVETA</p><h1>Open <span className="accent">roles.</span></h1><p className="lead">We are a small, entrepreneurial team working across science, medicine and drug development. Every role here carries real responsibility for moving important work forward.</p></div><picture>
    <source media="(max-width: 860px)" srcSet="/assets/careers-hero-mobile.jpg" />
    <img src="/assets/careers-hero.jpg" alt="Two Aveta colleagues working together at a shared desk" />
  </picture></section>

  <section className="section-sm careers-roles"><div className="container">
    <div className="role-list">{roles.map((role)=><article className="role-row" key={role.slug}>
      <p className="role-dept">{role.department}</p>
      <div className="role-copy"><h3>{role.title}</h3><p className="role-meta"><span>{role.location}</span><span>{role.employment}</span></p><p>{role.summary}</p></div>
      <Link className="button-outline" href={`/careers/${role.slug}`}>View role <Arrow /></Link>
    </article>)}</div>
    <p className="body-copy careers-note">Roles are posted as they open. We welcome exceptional people even when a specific position is not listed.</p>
  </div></section>

  <section className="section-sm careers-cta"><div className="container"><div className="join-band navy-bg"><h2>Do not see your role?<br/>Tell us what you would build here.</h2><div className="actions"><a className="button-outline" href={introduce}>Introduce yourself <Arrow /></a></div></div></div></section>
</main></Shell>}
