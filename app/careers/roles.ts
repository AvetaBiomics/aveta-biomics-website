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
];

export const careersEmail = "betterhealth@avetabiomics.com";

/** mailto for a specific role. Subjects are encoded — they contain spaces and commas. */
export function applyHref(role: Role) {
  return `mailto:${careersEmail}?subject=${encodeURIComponent(`Application: ${role.title}`)}`;
}

export function findRole(slug: string) {
  return roles.find((role) => role.slug === slug);
}
