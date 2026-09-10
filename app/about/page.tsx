import { PersonCard } from "../components/PersonCard";
import { Arrow, Shell } from "../components/SiteChrome";
import { pageMetadata } from "../lib/seo";
import { groups, type Person } from "./people";

function People({ people }: { people: Person[] }) {
  return <div className="people-grid people-portraits">{people.map(person => <PersonCard key={person.slug + person.role} person={person} />)}</div>;
}

export const metadata = pageMetadata({
  title: "About Aveta Biomics",
  description:
    "A clinical-stage biotechnology company advancing oral immunotherapies, led by an experienced team in oncology, drug development and translational science.",
  path: "/about",
});

export default function AboutPage(){return <Shell active="/about"><main>
  <section className="about-approved-hero container"><div><p className="eyebrow">ABOUT AVETA BIOMICS</p><h1>Built to <span className="accent">extend the reach</span><br />of immunotherapy.</h1><p className="lead">Aveta Biomics is a clinical-stage biotechnology company developing oral immunotherapies designed to extend the reach of immunotherapy across immune-cold and immune-hot tumors.</p><div className="actions"><a className="button" href="/science">Explore Our Science <Arrow /></a><a className="button-outline" href="#leadership">Meet Our Leadership <Arrow /></a></div></div><aside><p className="eyebrow">AVETA AT A GLANCE</p><div className="glance orange-line"><small>WHAT WE DEVELOP</small><strong>ORAL IMMUNOTHERAPIES FOR HARD-TO-TREAT CANCERS</strong></div><div className="glance green-line"><small>WHAT THEY DO</small><strong>CHANGE THE TUMOR IMMUNE MICROENVIRONMENT (TIME)</strong></div><div className="glance purple-line"><small>WHERE WE ARE</small><strong>PHASE 3, PHASE 2 AND PRECLINICAL PROGRAMS</strong></div></aside></section>
  <section className="section-sm soft-bg"><div className="container"><p className="eyebrow center">WHAT AVETA DOES</p><h2 className="center">Many oncology drugs are built around a target.<br />Aveta is built around the tumor ecosystem.</h2><div className="about-process"><article><b>01</b><span className="process-icon orange-border">◉</span><h3>ORAL THERAPY</h3><p>Designed around the body’s own immune regulation</p></article><i><Arrow /></i><article><b>02</b><span className="process-icon purple-border">✹</span><h3>REPROGRAM THE TUMOR ENVIRONMENT</h3><p>Counter immune suppression upstream of checkpoints</p></article><i><Arrow /></i><article><b>03</b><span className="process-icon green-border">✣</span><h3>COORDINATED ANTITUMOR IMMUNE RESPONSE</h3><p>Enable immune activity across cold and hot tumors</p></article></div></div></section>
  <section className="about-why"><div className="container split"><div><p className="eyebrow">WHY THIS WORK MATTERS</p><h2>The measure of progress is<br />what treatment allows people to keep.</h2><p className="body-copy">Cancer such as Head and neck cancer can affect the most human parts of daily life. Speaking, eating, smiling and connecting with others. That human reality remains at the center of why we do this work and our treatment is intended to not only treat active cancer and increase the lifespan but also preserve these most basic human needs and improve patients&apos; health span.</p></div><div className="about-why-media"><img src="/assets/about-approved-patients.jpg" width={1400} height={750} alt="A head and neck cancer patient talking with a family member" /></div></div></section>
  {/* Each section carries its own id so a biography page can send the visitor
      back to the group they came from. Alternating backgrounds as before. */}
  {groups.map((group, index) => <section key={group.id} id={group.id} className={index % 2 ? "section-sm people-section soft-bg" : "section-sm people-section"}><div className="container"><p className="eyebrow">{group.label}</p><People people={group.people} /></div></section>)}
  <section className="about-execution navy-bg"><div className="container"><h2>Science-led. Clinically focused. Built to execute.</h2><div><span>TRANSLATIONAL SCIENCE</span><span>GLOBAL CLINICAL DEVELOPMENT</span><span>REGULATORY &amp; MANUFACTURING READINESS</span></div></div></section>
  <section className="section-sm"><div className="container final-cta"><h2>Writing the next chapter of immuno-oncology</h2><div><p>We welcome conversations with those who share our ambition to extend the reach of immunotherapy.</p><div className="actions"><a className="button" href="mailto:betterhealth@avetabiomics.com?subject=Partnership inquiry">Partner With Us <Arrow /></a></div></div></div></section>
</main></Shell>}
