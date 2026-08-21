import Link from "next/link";
import { Arrow, ExternalArrow, Shell } from "../components/SiteChrome";
import { pageMetadata } from "../lib/seo";

const email="betterhealth@avetabiomics.com";
export const metadata = pageMetadata({
  title: "Join Us",
  description:
    "Build with Aveta or collaborate alongside us. We welcome scientists, clinicians and partners who share our urgency to turn good science into treatments.",
  path: "/join-us",
});

export default function JoinUsPage(){return <Shell active="/join-us"><main>
  <section className="join-approved-hero"><div className="join-approved-copy"><h1>Some problems are<br />too important to<br />solve alone.</h1><p className="lead">Aveta brings together scientists, clinicians, builders and partners to create safe, oral immunotherapies for hard-to-treat cancers.</p></div><picture>
    {/* Desktop artwork carries a white gradient baked into its left 45%, which the
        overlaid copy sits on. Stacked layouts put the copy below the photo, so
        they get the ungraded original instead — the baked fade would otherwise
        read as a washed-out band across the image. */}
    <source media="(max-width: 860px)" srcSet="/assets/join-us-approved-hero-mobile.jpg" />
    <img src="/assets/join-us-approved-hero.jpg" width={2400} height={803} alt="Scientists, clinicians and partners collaborating around a table" />
  </picture></section>

  <section className="section join-paths-section"><div className="container"><div className="dual-head"><h2>Different paths. A shared purpose.</h2><p className="lead">Whether you want to build from within Aveta or collaborate alongside us, what matters is a willingness to think differently and a shared urgency to turn good science into meaningful treatments.</p></div><div className="join-paths"><article><p className="eyebrow green">BUILD WITH US</p><h2>Careers at Aveta</h2><p>We are a small, entrepreneurial team working across science, medicine and drug development. We value scientific depth, versatility, candid thinking and people who take responsibility for moving important work forward.</p><hr/><p>If curiosity keeps you asking better questions—and urgency keeps you moving—you may feel at home here.</p><Link className="button" href="/careers">Explore opportunities <Arrow /></Link><a className="arrow-link" href={`mailto:${email}?subject=Introduction to Aveta`}>Introduce yourself <ExternalArrow /></a></article><article id="collaborate"><p className="eyebrow">WORK WITH US</p><h2>Collaborate with Aveta</h2><p>Important advances rarely come from one organization alone. We welcome conversations with academic researchers, clinicians, biotechnology and pharmaceutical companies, and others who see opportunities across our platform and pipeline.</p><hr/><p>Bring a complementary capability, a compelling biological question or a shared ambition for patients.</p><a className="button" href={`mailto:${email}?subject=Collaboration with Aveta`}>Start a conversation <Arrow /></a><a className="arrow-link" href="/science">Explore our science <ExternalArrow /></a></article></div></div></section>

  <section className="section-sm soft-bg join-mindset-section"><div className="container"><div className="dual-head"><h2>The mindset matters.</h2></div><div className="mindset-grid"><article className="mindset-item"><h3>Think beyond the obvious.</h3><p>We challenge familiar assumptions and follow the biology where it leads.</p></article><article className="mindset-item"><h3>Work across boundaries.</h3><p>Science, clinical development and execution advance together—not in isolation.</p></article><article className="mindset-item"><h3>Move with purpose.</h3><p>Patients cannot wait for perfect conditions. We pair rigor with a real sense of urgency.</p></article></div></div></section>

  <section className="section-sm join-contribute-section"><div className="container"><div className="dual-head"><p className="eyebrow">WHERE YOU CAN CONTRIBUTE</p><h2>Help build what comes next.</h2></div><div className="contribute-grid"><div className="contribute-item">Scientific &amp;<br/>Translational Research</div><div className="contribute-item">Clinical<br/>Development</div><div className="contribute-item">Regulatory, CMC &amp;<br/>Operations</div><div className="contribute-item">Business &amp; Strategic<br/>Partnerships</div></div><p className="center body-copy">We welcome exceptional people even when a specific position is not posted.</p><div className="join-band navy-bg"><h2>Bring your expertise. Challenge our thinking.<br/>Help change what is possible.</h2><div className="actions"><a className="button-outline" href={`mailto:${email}?subject=Career opportunity at Aveta`}>Join our team <Arrow /></a><a className="button-outline" href={`mailto:${email}?subject=Partnership with Aveta`}>Partner with Aveta <Arrow /></a></div></div></div></section>
</main></Shell>}
