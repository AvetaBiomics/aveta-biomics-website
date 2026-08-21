import { Shell } from "../components/SiteChrome";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Our Mission, Our Heroes",
  description:
    "Why Aveta Biomics exists: extending and improving the lives of patients with hard-to-treat cancers, and the people who make that work possible.",
  path: "/mission",
});

export default function MissionPage() {
  return <Shell active="/mission"><main>
    <section className="mission-hero"><div className="container mission-hero-inner">
      <h1>A world where no one dies from cancer.</h1>
      <p className="mission-opening">Everything we do begins with that goal.</p>
    </div></section>

    <section className="section mission-intro-section"><div className="container mission-copy">
      <h2>Our Mission</h2>
      <p>Achieving it demands science without compromise. We strive to discover and develop medicines that set a new standard for both effectiveness and safety, so that patients and physicians are never forced to accept the false choice between a treatment that works and one they can tolerate.</p>
      <h3>But breakthrough medicines alone are not enough.</h3>
      <p>A life-saving therapy has little value if it cannot reach the people who need it. We believe innovation and access must advance together.</p>
      <div className="mission-principles">
        <article><h3>Innovation and access must advance together.</h3></article>
        <article><h3>How we define success.</h3><p>Our mission is not complete when a drug is approved. It is complete only when it changes lives.</p></article>
      </div>
      <p className="mission-promise">We are committed to expanding access to our medicines, including for patients facing financial barriers.</p>
    </div></section>

    <section className="section soft-bg"><div className="container mission-copy">
      <p className="eyebrow">OUR HEROES</p>
      <h2>Our heroes are the patients and families who face cancer with extraordinary courage every day.</h2>
      <p>Head and neck cancer is among the most devastating of diseases. Beyond the threat to life itself, it can take away the ability to speak, eat, swallow, smile, or simply share a meal with loved ones. The physical suffering is profound, and the emotional toll on patients and their families is immeasurable.</p>
      <p>For many members of the Aveta team, this mission is deeply personal. Collectively, we have lost loved ones and close friends to head and neck cancer. We have witnessed firsthand not only the disease itself, but also the suffering it leaves behind. Those experiences continue to remind us why this work matters.</p>
      <p>Every patient who joins one of our clinical trials places extraordinary trust in us. They choose to participate in research, often at one of the most difficult moments of their lives. Their courage challenges us to work harder, think bigger, and never lose sight of the human lives behind every experiment, every dataset, and every decision.</p>
      <h3 className="heroes-statement">They are our heroes.</h3>
      <p className="mission-closing">Their courage fuels our science. Their hope defines our mission. And until cancer no longer takes the people we love, our work is not finished.</p>
    </div></section>
  </main></Shell>;
}
