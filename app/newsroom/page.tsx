import { NewsList, type NewsItem } from "../components/NewsList";
import { Arrow, Shell } from "../components/SiteChrome";
import { pageMetadata } from "../lib/seo";

const news: NewsItem[] = [
  {year:"2026",date:"JUNE 29, 2026",category:"STRATEGIC PARTNERSHIP",title:"Natera and Aveta Biomics Announce Strategic Partnership Supporting Global Phase 3 Registrational Trial of APG-157 in Head and Neck Cancer",summary:"The collaboration integrates serial tumor-informed ctDNA testing into Aveta’s global registrational Phase 3 program.",href:"https://www.businesswire.com/news/home/20260629746130/en/Natera-and-Aveta-Biomics-Announce-Strategic-Partnership-Supporting-Global-Phase-3-Registrational-Trial-of-APG-157-in-Head-and-Neck-Cancer"},
  {year:"2026",date:"APRIL 9, 2026",category:"SCIENTIFIC PRESENTATION",title:"APG-157 Reduces HPV Viral Load and Activates Anti-Tumor Immunity in Head & Neck Cancer: Presentation at AACR 2026",summary:"New Phase 2A analyses examine HPV16, NF-κB signaling and immune activation following APG-157 treatment.",href:"/assets/newsroom/aacr-2026-apg-157.pdf"},
  {year:"2026",date:"MARCH 24, 2026",category:"CLINICAL DEVELOPMENT",title:"Aveta Biomics Announces Podium Presentation of Registrational Phase 3 Head and Neck Cancer Trial at AHNS 2026 Conference",summary:"The global AVTA-30-01 study design will be presented to the head and neck oncology community.",href:"/assets/newsroom/ahns-2026-phase-3-presentation.pdf"},
  {year:"2025",date:"OCTOBER 13, 2025",category:"SCIENTIFIC PRESENTATION",title:"Aveta Biomics to Present at the Upcoming 2025 ESMO Congress",summary:"Spatial profiling data describe APG-157-induced remodeling of the tumor immune microenvironment.",href:"/assets/newsroom/esmo-2025-presentation.pdf"},
  {year:"2025",date:"APRIL 30, 2025",category:"CLINICAL RESULTS",title:"Aveta Biomics Announces Abstract Acceptance for Presentation at the 2025 ASCO Annual Meeting",summary:"Phase 2A results evaluate neoadjuvant APG-157 monotherapy in locally advanced head and neck cancer.",href:"/assets/newsroom/asco-2025-announcement.pdf"},
  {year:"2024",date:"AUGUST 22, 2024",category:"REGULATORY",title:"FDA Grants Fast Track Designation to Aveta Biomics’ Drug APG-157 for Neoadjuvant Treatment of Head and Neck Cancer",summary:"The designation supports expedited development and review of APG-157 in this serious disease.",href:"/assets/newsroom/fda-fast-track-apg-157.pdf"},
  {year:"2024",date:"AUGUST 1, 2024",category:"CORPORATE",title:"Peter R. Dolan, Former Chairman and CEO of Bristol Myers Squibb, Joins the Board of Aveta Biomics",summary:"Experienced biopharmaceutical leader joins Aveta as the company advances APG-157.",href:"/assets/newsroom/peter-dolan-board-appointment.pdf"},
];

export const metadata = pageMetadata({
  title: "Newsroom",
  description:
    "Press releases and company news from Aveta Biomics, including regulatory milestones, clinical presentations and partnership announcements.",
  path: "/newsroom",
});

export default function NewsroomPage(){
  return <Shell active="/newsroom"><main>
    {/* The newsroom design opens straight into the release list with no page
        title. /pipeline has the same situation and solves it with a
        screen-reader-only h1; matched here so the page has the single top-level
        heading crawlers and assistive tech expect, with no visual change. */}
    <h1 className="sr-only">Newsroom</h1>
    <section className="section-sm"><div className="container">
      <NewsList items={news} />
    </div></section>
    <section className="section-sm"><div className="container media-band navy-bg"><div><p className="eyebrow" style={{color:'#9ec0ff'}}>MEDIA INQUIRIES</p><h2>For company information or interview requests, contact Aveta.</h2></div><a className="button-outline" href="mailto:betterhealth@avetabiomics.com?subject=Media inquiry">Contact Us <Arrow /></a></div></section>
  </main></Shell>
}
