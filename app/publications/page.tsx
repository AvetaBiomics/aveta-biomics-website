import { Arrow, DownloadArrow, ExternalArrow, Shell } from "../components/SiteChrome";
import { pageMetadata } from "../lib/seo";

const conferences = [
  { meeting:"AACR", year:"2026", type:"POSTER", phase:"PHASE 2", title:"Down regulation of HPV 16 and NF-κB and upregulation of gigaxonin and immune markers in APG-157 treated head and neck cancer: A phase 2A clinical investigation", summary:"Phase 2A biomarker analyses linked APG-157 treatment to reduced HPV16 and NF-κB signaling, increased gigaxonin and activation of systemic immune pathways.", view:"/docs/aacr-2026-poster.pdf", download:"/docs/aacr-2026-poster.pdf", downloadLabel:"Download Poster" },
  { meeting:"AHNS", year:"2026", type:"PODIUM PRESENTATION", phase:"PHASE 3", title:"APG-157 in Resectable and Unresected Head and Neck Squamous Cell Carcinoma (HNSCC)", summary:"Presented by Jonathan D. Schoenfeld, MD. Trial-in-progress presentation of AVTA-30-01, a global randomized Phase 3 study across surgical and nonsurgical pathways.", view:"/docs/ahns-2026-presentation.pdf", download:"/docs/ahns-2026-presentation.pdf", downloadLabel:"Download Slides" },
  { meeting:"ESMO", year:"2025", type:"POSTER", phase:"PHASE 2", title:"Spatial Profiling of Immune Architecture Reveals APG-157-Induced Anti-Tumor Immune Remodeling in Early Stage and Locally Advanced Head and Neck Cancer", summary:"Spatial profiling showed APG-157 remodeling immune-cold tumors into immune-engaged states with coordinated cytotoxic and helper T-cell organization.", view:"/docs/esmo-2025-poster.pdf", download:"/docs/esmo-2025-poster.pdf", downloadLabel:"Download Poster" },
  { meeting:"ASCO", year:"2025", type:"POSTER", phase:"PHASE 2", title:"Neoadjuvant APG-157 monotherapy in patients with locally advanced squamous cell carcinoma of head and neck: A phase IIA, Single Arm Trial", summary:"Phase 2A results reported disease control, deep ctDNA reductions, clinical-to-pathological downstaging and a favorable safety profile.", view:"https://ascopubs.org/doi/10.1200/JCO.2025.43.16_suppl.6087", download:"/docs/asco-2025-poster.pdf", downloadLabel:"Download Poster" },
];

const papers = [
  {year:"2026",meta:"PRECLINICAL · GLIOBLASTOMA",title:"First-in-Class Immuno-Oncology Drug APG157DS Repolarizes Innate Immune Cells and Induces Durable Remission in a Syngeneic Glioblastoma Model",citation:"International Journal of Molecular Sciences. 2026;27(15):6687.",summary:"APG-157 reprogrammed innate immune cells and produced durable remission in an immune-intact glioblastoma model.",href:"https://www.mdpi.com/1422-0067/27/15/6687"},
  {year:"2024",meta:"PRECLINICAL · HEAD & NECK CANCER",title:"Enhanced CTLA-4 Blockade Anti-Tumor Immunity with APG-157 Combination in a Murine Head and Neck Cancer",citation:"Cancer Medicine. 2024;13(9):e7212.",summary:"APG-157 enhanced checkpoint blockade and improved tumor control by reshaping the tumor immune environment.",href:"https://pubmed.ncbi.nlm.nih.gov/38686626/"},
  {year:"2022",meta:"PHASE 1 · BIOMARKERS",title:"Cell-Free RNA as a Novel Biomarker for Response to Therapy in Head & Neck Cancer",citation:"Frontiers in Oncology. 2022;12:869108.",summary:"Cell-free RNA revealed early immune and inflammatory responses to APG-157 through a non-invasive blood test.",href:"https://pubmed.ncbi.nlm.nih.gov/35600369/"},
  {year:"2020",meta:"PHASE 1 · CLINICAL",title:"A Randomized, Phase 1, Placebo-Controlled Trial of APG-157 in Oral Cancer Demonstrates Systemic Absorption and an Inhibitory Effect on Cytokines and Tumor-Associated Microbes",citation:"Cancer. 2020;126(8):1668–1682.",summary:"Oral APG-157 demonstrated systemic absorption, reduced inflammatory signals and increased T-cell recruitment into the tumor.",href:"https://pubmed.ncbi.nlm.nih.gov/32022261/"},
];

export const metadata = pageMetadata({
  title: "Publications and Presentations",
  description:
    "Peer-reviewed publications and conference presentations on APG-157, covering Phase 1 and Phase 2A clinical data, biomarkers and preclinical research.",
  path: "/publications",
});

export default function PublicationsPage(){
  return <Shell active="/publications"><main>
    <section className="simple-hero"><div className="container"><p className="eyebrow">PUBLICATIONS</p><h1>Science, <span className="accent">shared.</span></h1></div></section>
    <section className="section-sm"><div className="container">
      <div className="tabs"><a className="active" href="#conferences">CONFERENCE PRESENTATIONS</a><a href="#papers">PEER-REVIEWED PUBLICATIONS</a></div>
      <div id="conferences" className="conference-grid">{conferences.map((item)=><article className="conference-card" key={item.meeting}>
        <div className="meeting">{item.meeting} <span>{item.year}</span></div><div><span className="tag">{item.type}</span><span className="tag orange">{item.phase}</span></div><h2 style={{marginTop:18}}>{item.title}</h2><p>{item.summary}</p><div className="link-row"><a className="text-link" href={item.view} target="_blank" rel="noreferrer">View {item.meeting==='AHNS'?'Presentation':'Abstract'} <ExternalArrow /></a><a className="text-link" href={item.download} download>{item.downloadLabel} <DownloadArrow /></a></div>
      </article>)}</div>
    </div></section>
    <section id="papers" className="section"><div className="container"><p className="eyebrow">PEER-REVIEWED PUBLICATIONS</p><div className="pub-list">{papers.map(p=><article className="pub-row" key={p.year+p.title}><div className="pub-year">{p.year}<small>{p.meta}</small></div><div className="pub-copy"><h2>{p.title}</h2><em>{p.citation}</em><p>{p.summary}</p></div><a className="button-outline" href={p.href} target="_blank" rel="noreferrer">View Paper <ExternalArrow /></a></article>)}</div></div></section>
    <section className="section-sm navy-bg"><div className="container publications-contact"><h2>Interested in Aveta’s research?</h2><p>For scientific inquiries, collaboration opportunities or access to supporting materials, contact our team.</p><div className="actions"><a className="button-outline" href="mailto:betterhealth@avetabiomics.com?subject=Scientific inquiry">Scientific Inquiry <Arrow /></a><a className="button-outline" href="mailto:betterhealth@avetabiomics.com?subject=Partnership inquiry">Partner with Aveta <Arrow /></a></div></div></section>
  </main></Shell>
}
