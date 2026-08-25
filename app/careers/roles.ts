/**
 * Open roles.
 *
 * Each entry renders twice: as a row on /careers and as the full description at
 * /careers/<slug>. Adding a role is a matter of appending an object here — no
 * new route or page file is needed.
 */
export type Role = {
  slug: string;
  title: string;
  department: string;
  reportsTo: string;
  location: string;
  employment: string;
  /** ISO date the role was published. Feeds JobPosting.datePosted. */
  postedOn: string;
  /**
   * Where applications for this role are sent. Each opening has its own
   * hiring manager, so this is per-role rather than a single site-wide
   * address. Never rendered in the page — the API route reads it server-side
   * from the slug, so the address is not exposed to scrapers.
   */
  hiringManagerEmail: string;
  /** One-line summary for the listing row. */
  summary: string;
  /** Position summary, one paragraph per entry. */
  overview: string[];
  responsibilities: string[];
  qualifications: string[];
  attributes: string;
};

export const roles: Role[] = [
  {
    slug: "senior-clinical-trial-manager-associate-director-clinical-operations",
    title: "Senior Clinical Trial Manager / Associate Director, Clinical Operations",
    department: "Clinical Development",
    reportsTo: "Vice President, Clinical Development Operations",
    location: "Boston, MA",
    employment: "Hybrid · Full time",
    postedOn: "2026-08-21",
    hiringManagerEmail: "kzikaras@avetabiomics.com",
    summary:
      "Hands-on Sponsor operational lead for the global Phase 3 AVTA30-01 head and neck cancer study, the glioblastoma program and other emerging clinical studies.",
    overview: [
      "The Senior Clinical Trial Manager / Associate Director, Clinical Operations will serve as a hands-on Sponsor operational lead responsible for the execution of Aveta Biomics’ clinical development programs. The primary focus will be the global Phase 3 AVTA30-01 study in head and neck cancer, with additional responsibility for the glioblastoma program and other emerging clinical studies.",
      "Working closely with Clinical Development, Medical, Regulatory, Clinical Science, Translational Medicine, Safety, Data Management, Biostatistics, Quality, CMC/Clinical Supply, and external partners, this individual will provide day-to-day leadership of study operations and ensure high-quality, timely, and compliant trial execution.",
    ],
    responsibilities: [
      "Lead Sponsor-side clinical operations for the global Phase 3 AVTA30-01 study and other assigned programs, with responsibility for high-quality, timely execution from study start-up through closeout.",
      "Lead Sponsor oversight of CROs and specialized vendors, serving as the primary operational contact and ensuring accountability for timelines, quality, monitoring, deliverables, budgets, contractual commitments, and timely resolution of study and site issues.",
      "Drive study planning and execution, including operational feasibility, integrated study plans, timelines, milestones, metrics, critical paths, risk management, decision tracking, and timely escalation and resolution of operational issues.",
      "Lead global country and site execution, including country and site selection, feasibility, qualification, activation, enrollment planning, site performance and remediation, while building effective relationships with investigators and site teams.",
      "Translate the protocol into effective operational execution, ensuring alignment of the protocol and Schedule of Activities across eCRFs, IRT, laboratory, imaging, radiotherapy, pharmacy, pathology, biomarker, safety, and data-management plans and systems.",
      "Oversee study documentation, training, and data-review activities, including development and review of study and site materials, operational manuals and plans, informed consent forms, CRFs, and study-specific training, while supporting ongoing data review and identification of emerging trends.",
      "Ensure quality and regulatory compliance with ICH/GCP, applicable regulations, and company SOPs, including risk-based quality management, CRO monitoring oversight, TMF completeness, protocol-deviation and CAPA management, audit and inspection readiness, and support for regulatory and ethics committee activities.",
      "Provide operational leadership across the study team, including study management and investigator meetings, training and oversight of clinical research personnel, and participation in site monitoring visits as appropriate.",
      "Manage study financial performance, including budgets, forecasts, vendor proposals and assumptions, change orders, pass-through expenses, site payments, and clinical invoices to ensure alignment with approved scope and financial goals.",
      "Partner closely across Clinical Development, Medical, Clinical Science/Translational Medicine, Safety, Data Management, Biostatistics, Regulatory, Quality, and CMC/Clinical Supply, ensuring coordinated execution and timely operational implementation of medical, scientific, safety, and functional decisions.",
    ],
    qualifications: [
      "7+ years of clinical operations experience in biotechnology or biopharma, with significant responsibility for global clinical trials. Direct leadership experience in a global Phase 3 oncology study is strongly preferred.",
      "Demonstrated experience successfully managing outsourced CRO-led clinical trials and specialized vendors, ideally within a small or emerging biotechnology company.",
      "Strong oncology experience preferred. Experience in head and neck cancer, neuro-oncology/GBM, immuno-oncology, or complex multimodality trials is particularly valuable.",
      "Strong working knowledge of ICH/GCP, global regulatory requirements, risk-based quality management, and current ICH E6 principles, with experience supporting audits, inspections, and regulatory filings.",
      "Familiarity with clinical data review and major clinical trial systems, including EDC, CTMS, eTMF, IRT, eCOA, and safety/data-review platforms.",
      "BS/BA/RN in a life science or health-related field preferred; an advanced degree is desirable. Ability to travel up to 25% domestically and internationally.",
    ],
    attributes:
      "We are building new cancer therapeutics and a company along with them. We are looking for someone who finds that exciting, is entrepreneurial and resourceful, mission-driven and energized by the science, with high ownership and low ego. Someone resilient and adaptable, because building a biotech rarely follows a straight line, and with a healthy sense of humor. We take the mission very seriously; ourselves, a little less so.",
  },
  {
    slug: "associate-director-executive-director-clinical-science-medical-affairs",
    title: "Associate Director – Executive Director, Clinical Science & Medical Affairs",
    department: "Clinical Science & Medical Affairs",
    reportsTo: "Chief Medical Officer",
    location: "Boston, MA",
    employment: "Hybrid · Full time",
    postedOn: "2026-08-25",
    hiringManagerEmail: "ssamakoglu@avetabiomics.com",
    summary:
      "Clinical-science and medical-affairs lead for the global Phase 3 AVTA30-01 head and neck cancer program, with responsibility across glioblastoma, oral dysplasia and emerging development programs.",
    overview: [
      "The Senior Clinical Scientist and Medical Affairs Lead will help shape the scientific direction of Aveta Biomics’ clinical portfolio and translate emerging data into clear, credible medical insights. The primary focus will be the global Phase 3 AVTA30-01 program in head and neck cancer, with additional responsibility for glioblastoma, oral dysplasia, and emerging development programs.",
      "Working closely with the CMO and cross-functional teams, this individual will combine clinical science, rigorous data interpretation, and external scientific engagement to strengthen study delivery, evidence generation, and development strategy. The position may be filled at the Associate Director, Director, Senior Director or Executive Director level, depending on the candidate’s experience and qualifications.",
    ],
    responsibilities: [
      "Provide clinical-science leadership across Aveta’s development programs, contributing to study design, protocols, Investigator’s Brochures, eCRFs, data-review and statistical analysis plans, Clinical Study Reports, and regulatory submissions.",
      "Lead scientific review and interpretation of clinical data, integrating efficacy, safety, exposure, laboratory, imaging, pathology, ctDNA, biomarker, translational, and patient-reported outcomes. Identify meaningful trends, inconsistencies, outliers, and potential protocol deviations and escalate medically important findings appropriately.",
      "Translate complex clinical and translational findings into actionable insights for development strategy, internal decisions, regulatory discussions, and scientific communication, working across Clinical Operations, Data Management, Biostatistics, Translational Medicine, Pharmacovigilance, and the CRO.",
      "Lead medical-affairs and external scientific engagement, building trusted relationships with investigators, KOLs, academic institutions, cooperative groups, and scientific organizations and supporting advisory boards, investigator meetings, scientific workshops, congresses, and training.",
      "Coordinate external scientific collaborations and investigator-sponsored research, evaluating opportunities for scientific value and strategic fit and establishing clear objectives, governance, milestones, data/sample requirements, publication terms, and deliverables while protecting confidential and restricted information.",
      "Drive evidence generation and scientific communication, including publication planning, abstracts, posters, presentations, manuscripts, congress submissions, and scientific materials, ensuring accurate, balanced, and evidence-based interpretation.",
      "Bring external scientific insights into Aveta, monitoring emerging science, treatment guidelines, competitive developments, unmet needs, and evolving clinical practice and translating these insights into clinical and portfolio strategy.",
      "Partner across functions on development and portfolio strategy, providing scientific input into study design, endpoints, biomarkers, regulatory interactions, evidence-generation priorities, portfolio assessments, partnering discussions, and consistent implementation of scientific requirements across study execution.",
    ],
    qualifications: [
      "PhD, PharmD, MD, MD/PhD, or comparable advanced scientific or healthcare degree, with 5+ years of relevant biotechnology or pharmaceutical experience in clinical development, clinical science, medical affairs, or translational medicine.",
      "Strong oncology experience preferred; experience in head and neck cancer, immuno-oncology, neuro-oncology, or cancer interception is particularly valuable.",
      "Hands-on experience reviewing and interpreting clinical and translational data, including EDC records, listings, tables, figures, and statistical outputs.",
      "Experience developing clinical, regulatory, and scientific documents, including protocols, Investigator’s Brochures, Clinical Study Reports, regulatory materials, abstracts, presentations, and manuscripts.",
      "Strong understanding of clinical-trial design, drug development, ICH/GCP, publication standards, and medical-affairs compliance.",
      "Strong scientific writing, presentation, and relationship-building skills, with the ability to communicate complex science clearly and work effectively with investigators, KOLs, academic collaborators, and cross-functional teams.",
      "Ability to travel domestically and internationally for investigator meetings, advisory boards, congresses, and collaborator meetings.",
    ],
    attributes:
      "We are building new cancer therapeutics and a company along with them. We are looking for someone who finds that exciting, is scientifically curious, intellectually rigorous, entrepreneurial and resourceful, with high ownership and low ego. Someone resilient and adaptable, because building a biotech rarely follows a straight line, and with a healthy sense of humor. We take the mission very seriously; ourselves, a little less so. Above all, we want someone excited by the opportunity to help shape both science and the company.",
  },
];

export const careersEmail = "betterhealth@avetabiomics.com";

/**
 * mailto fallback, used when the application form cannot be reached — a failed
 * send, or JavaScript unavailable. Subjects are encoded; they contain spaces
 * and commas.
 */
export function applyHref(role: Role) {
  return `mailto:${careersEmail}?subject=${encodeURIComponent(`Application: ${role.title}`)}`;
}

export function findRole(slug: string) {
  return roles.find((role) => role.slug === slug);
}
