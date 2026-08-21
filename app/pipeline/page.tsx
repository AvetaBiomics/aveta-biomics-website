import { ExternalArrow, Shell } from "../components/SiteChrome";
import { pageMetadata } from "../lib/seo";

const trials = {
  hnc: "https://clinicaltrials.gov/study/NCT07667296?term=APG-157&viewType=Card&rank=3",
  glioma: "https://clinicaltrials.gov/study/NCT06011109?term=APG-157&viewType=Card&rank=1",
  dysplasia: "https://clinicaltrials.gov/study/NCT05865028?term=APG-157&viewType=Card&rank=4",
};

export const metadata = pageMetadata({
  title: "Clinical Pipeline",
  description:
    "Aveta's development programs, including the global Phase 3 AVTA-30-01 study of APG-157 in head and neck cancer and the glioblastoma program.",
  path: "/pipeline",
});

export default function PipelinePage() {
  return (
    <Shell active="/pipeline">
      <main>
        <h1 className="sr-only">APG-157 development programs</h1>
        <section className="image-banner"><picture>
    {/* The desktop asset is 2.99:1 — cropped to a near-square mobile box, cover
        would show only ~30% of its width, an extreme zoom on faces and hands.
        Below 860px, swap to a 1.685:1 crop of the same photo so most of the
        scene stays visible. */}
    <source media="(max-width: 860px)" srcSet="/assets/pipeline-patient-doctor-mobile.jpg" />
    <img src="/assets/pipeline-patient-doctor.jpg" width={2400} height={803} alt="A patient speaking with his physician" />
  </picture></section>
        <section className="pipeline-intro"><div className="container"><p className="lead">Aveta is advancing APG-157 across clinical and preclinical programs in cancers where reprogramming the tumor immune microenvironment may offer a new therapeutic approach.</p></div></section>

        <section className="section-sm"><div className="container">
          <div className="pipeline-table" role="table" aria-label="Aveta clinical development pipeline">
            <div className="pipeline-head" role="row"><div>Program</div><div>Indication</div><div className="stage-labels"><span>Preclinical</span><span>Phase 1</span><span>Phase 2</span><span>Phase 3</span></div><div>Study</div></div>
            <div className="pipeline-row" role="row">
              <div className="program-name">APG-157</div>
              <div className="indication">Newly Diagnosed Locally Advanced<br />Head and Neck Cancer<br /><span className="designation">FDA Fast Track Designation</span><span className="designation blue">FDA Orphan Drug Designation</span></div>
              <div><div className="stage-track"><div className="stage-bar p3">Phase 3</div></div></div>
              <div><a className="nct" href={trials.hnc} target="_blank" rel="noreferrer">NCT07667296 <ExternalArrow /></a></div>
            </div>
            <div className="pipeline-row" role="row">
              <div className="program-name">APG-157 +<br />Bevacizumab</div>
              <div className="indication">Recurrent High Grade Glioma</div>
              <div><div className="stage-track"><div className="stage-bar p12">Phase 1b/2a</div></div></div>
              <div><a className="nct" href={trials.glioma} target="_blank" rel="noreferrer">NCT06011109 <ExternalArrow /></a></div>
            </div>
            <div className="pipeline-row" role="row">
              <div className="program-name">APG-157</div>
              <div className="indication">Oral Dysplasia</div>
              <div><div className="stage-track"><div className="stage-bar p2">Phase 2</div></div></div>
              <div><a className="nct" href={trials.dysplasia} target="_blank" rel="noreferrer">NCT05865028 <ExternalArrow /></a></div>
            </div>
            <div className="pipeline-row" role="row"><div className="program-name">APG-126</div><div className="indication">Triple Negative Breast Cancer</div><div><div className="stage-track"><div className="stage-bar pre">Preclinical</div></div></div><div /></div>
            <div className="pipeline-row" role="row"><div className="program-name">APG-126</div><div className="indication">Diffuse Intrinsic Pontine Glioma (DIPG)</div><div><div className="stage-track"><div className="stage-bar pre">Preclinical</div></div></div><div /></div>
          </div>
          <p style={{fontSize:13,color:'var(--muted)',marginTop:14}}>Development stage reflects the most advanced study for each indication.</p>
        </div></section>

        <section className="section"><div className="container burden-grid">
          <article className="burden-card"><h2>Head &amp; Neck Cancer</h2><p className="big">950,000</p><p>new diagnoses worldwide each year</p><hr /><p className="big">400,000</p><p>deaths worldwide each year</p></article>
          <article className="burden-card"><h2>High Grade Glioma</h2><p className="big" style={{fontSize:38}}>300,000–335,000</p><p>new diagnoses worldwide each year</p><hr /><p className="big" style={{fontSize:38}}>220,000–250,000</p><p>deaths worldwide each year</p></article>
          <article className="burden-card"><h2>Oral Dysplasia</h2><p className="lead" style={{marginTop:46,color:'var(--navy)'}}>An opportunity to intervene before invasive cancer develops.</p><hr /><p className="lead" style={{color:'var(--navy)'}}>Oral dysplasia is a precancerous condition that can progress to invasive oral cancer.</p></article>
        </div></section>
      </main>
    </Shell>
  );
}
