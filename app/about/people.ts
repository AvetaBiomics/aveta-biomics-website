/**
 * The people shown on /about.
 *
 * Each entry renders twice: as a card in its section on /about and as the full
 * biography at /about/<slug>. Adding a person is a matter of appending an
 * object to one of the arrays below — no new route or page file is needed.
 *
 * `slug` is the person's name in the URL, and matches the basename of their
 * headshot so the two stay easy to keep in step. A person who serves in more
 * than one section (Parag and David sit on the board as well as the executive
 * team) appears in each array with the role they hold there, but keeps a single
 * slug and therefore a single biography page.
 */
export type Person = {
  /** URL segment for this person's page: /about/<slug>. */
  slug: string;
  name: string;
  /** Title held in the section the entry sits in. */
  role: string;
  image?: string;
  /** Full biography, one paragraph per entry. Without it there is no page. */
  bio?: string[];
};

const paragBio = [
  "Parag is a serial entrepreneur with a track record of commercializing novel chemistry-based innovations. He has a strong background in biotechnology, organic, macromolecular, and biochemistry, and material science. His experience encompasses product R&D, global business development, manufacturing, and capitalization of companies through public and private financing.",
  "He received his PhD in Chemistry from Rensselaer Polytechnic Institute, Troy, NY, and MSc in Chemistry from the Indian Institute of Technology, Mumbai, India."
];

const davidBio = [
  "David brings broad business experience as a finance professional and entrepreneur/operator. Since 2012, David has served as Chairman and Chief Executive Officer of Boston Harbor, a financial industry asset management strategy platform. His track record spans the founding of two start-ups, two leveraged buyouts, and the management and sale of Tribotek to Methode Electronics.",
  "David holds a BS in Electrical Engineering from Cornell University and an MBA from Harvard University."
];

export const executives: Person[] = [
  { slug:"parag-mehta", name:"Parag G. Mehta, PhD", role:"Chief Executive Officer", image:"/assets/people/parag-mehta.jpg", bio:paragBio },
  { slug:"selda-samakoglu", name:"Selda Samakoglu, MD, PhD", role:"Chief Medical Officer", image:"/assets/people/selda-samakoglu.jpg", bio:["Selda is a distinguished medical oncologist, physician-scientist, and biopharmaceutical executive with over 20 years of experience spanning academia, clinical medicine, and industry. Most recently, she served as Vice President of Clinical Sciences at Iovance Biotherapeutics, where she led global development of cell-based therapies for hematologic malignancies and solid tumors, including non-small cell lung cancer and head and neck cancer. She has also held executive leadership roles at ImClone Systems, Gilead Sciences, Bristol Myers Squibb, CSL Behring, Boehringer Ingelheim, and Replimune.","Over her career, she has successfully led programs from IND through proof-of-concept to NDA/BLA approvals across monoclonal antibodies, small molecules, oncolytic viruses, and cell-based immunotherapies. She played pivotal roles in the regulatory approvals of Cetuximab, Imbruvica, Elotuzumab, and Amtagvi and has engaged with global health authorities including the FDA, EMA, CDE, and MHRA.","Dr. Samakoglu earned her BS and MD from Hacettepe University School of Medicine in Turkey, followed by specialization in Pediatric Hematology/Oncology at Hacettepe and Mount Sinai School of Medicine. She holds a PhD in Medical Biology and Human Genetics and completed postdoctoral clinical and research fellowships at Institut Pasteur and Memorial Sloan Kettering Cancer Center."] },
  { slug:"luis-avila", name:"Luis Z. Avila, PhD", role:"Chief Scientific Officer", image:"/assets/people/luis-avila.png", bio:["Luis brings to Aveta Biomics more than 20 years of industrial experience spanning early startup, biotech, and multinational pharmaceutical companies. He has successfully guided product concepts through discovery, optimization, product development, and CMC for clinical evaluation or product launch, both internally and with external collaborators.","He obtained his PhD in Bioorganic Chemistry from Stanford University and was a Postdoctoral Fellow at Harvard University in the Department of Chemistry and Chemical Biology. He holds more than twenty issued U.S. patents and coauthored more than twenty scientific articles and book chapters."] },
  { slug:"david-page", name:"David Page", role:"Chief Financial Officer", image:"/assets/people/david-page.jpg", bio:davidBio },
  { slug:"robert-charnas", name:"Robert Charnas, PhD", role:"Senior Vice President, Regulatory Affairs", image:"/assets/people/robert-charnas.jpg", bio:["Robert is a pharmaceutical executive with over 20 years of global regulatory and strategic program leadership experience. He has a proven track record in successful product registrations for small and large molecules across North America, Europe, and Asia, with expertise spanning development from pre-IND through Phase IV studies.","He most recently served as Worldwide Regulatory Affairs Transformation Lead and Head of U.S. Regulatory Affairs at Servier Bio-Innovation. Previously, he was Vice President and Head of Global Regulatory Affairs at Agios Pharmaceuticals and Vice President of Strategic Program Direction for Oncology at Regeneron Pharmaceuticals. He also held roles at Amgen, Novartis, and Hoffmann-La Roche. He received his PhD from Harvard."] },
  { slug:"kevin-zikaras", name:"Kevin Zikaras", role:"Vice President, Clinical Operations and Development", image:"/assets/people/kevin-zikaras.png", bio:["Kevin has over 14 years of experience in oncology clinical development spanning academic cancer centers, biotechnology companies, and global pharmaceutical organizations. His expertise includes clinical operations, clinical supply, data management, pharmacovigilance, quality systems, and execution of global oncology trials from early-stage development through pivotal Phase 3 studies.","Most recently, Kevin served as Vice President of Clinical Development Operations at Convergent Therapeutics. Previously, at TCR² Therapeutics, he built and led clinical operations, clinical supply, data management, and pharmacovigilance functions. Earlier, at Actinium Pharmaceuticals, he served as program lead for the pivotal Phase 3 SIERRA trial. He also managed global immuno-oncology studies at Bristol Myers Squibb and held clinical research leadership positions at Memorial Sloan Kettering Cancer Center and Columbia University Medical Center.","Kevin earned an MBA from Cornell University, an MS in Healthcare Leadership from Weill Cornell Graduate School of Medical Sciences, and an MS in Regulatory Affairs from Northeastern University."] },
  { slug:"murat-budak", name:"Murat Budak, MD, PhD", role:"Medical Director", image:"/assets/people/murat-budak.jpg", bio:["Dr. Budak brings over 20 years of experience at the intersection of oncology, translational science, and clinical research. A physician-scientist trained in both medicine and physiology, he has served as principal investigator for oncology trials, including a Phase 2 study evaluating pembrolizumab in combination with a personalized cancer vaccine in non-small cell lung cancer.","Before joining Aveta, Dr. Budak was an Associate Professor at Hacettepe University Medical School, where he led translational oncology research and contributed to patient care within the Lung Cancer Center. He previously held research leadership roles at the University of Pennsylvania and the Philadelphia VA Medical Center.","Dr. Budak earned his MD from Hacettepe University and his PhD in Physiology from Gazi University. He completed postdoctoral research fellowships at Mount Sinai School of Medicine and the University of Pennsylvania."] },
];

export const directors: Person[] = [
  { slug:"parag-mehta", name:"Parag G. Mehta, PhD", role:"Board Director", image:"/assets/people/parag-mehta.jpg", bio:paragBio },
  { slug:"peter-dolan", name:"Peter Dolan", role:"Board Director", image:"/assets/people/peter-dolan.jpg", bio:["As the former CEO and Chairman of Bristol-Myers Squibb, Mr. Dolan has an impressive track record of leadership in the pharmaceutical industry. His 18 transformative years at BMS included the addition of Eliquis to its portfolio, investment in ImClone’s Erbitux, licensing of Yervoy, and substantial investments in biologics.","Post-BMS, Mr. Dolan led GeminX to a $225 million acquisition by Cephalon Pharmaceuticals. He served as Chairman of the Board of Trustees at Tufts University and chairs the Partnership for A Healthier America. He holds a BA magna cum laude from Tufts University and an MBA from Dartmouth’s Tuck School of Business."] },
  { slug:"bharat-tewarie", name:"Bharat Tewarie, MD, MBA", role:"Board Director", image:"/assets/people/bharat-tewarie.jpg", bio:["Bharat Tewarie is currently the CEO of Helio Genomics, a cancer diagnostics company. He brings deep strategic and operational expertise to the Aveta Biomics board. Trained as a medical doctor with an MBA, Dr. Tewarie held positions of increasing responsibility at Boehringer Ingelheim, Roche, Merck Serono, and UCB in Europe and the USA.","Most recently, he was Executive Vice President and Chief Marketing Officer and a member of the Executive Committee of UCB. Since 2021 he has been CEO and Chair of the Board of ViroCarb Inc and the founder of Boston Biopharma Consultants. He received his MD from Utrecht University and MBA from Webster University."] },
  { slug:"david-page", name:"David Page", role:"Board Director", image:"/assets/people/david-page.jpg", bio:davidBio },
  { slug:"thomas-rudolph", name:"Thomas Rudolph, MD", role:"Board Director", image:"/assets/people/thomas-rudolph.jpg", bio:["Dr. Thomas Rudolph brings deep expertise in life sciences, pharmaceuticals, and private equity, with a distinguished career spanning more than two decades. Most recently, he was CEO of EHC N.V. and currently holds board and advisory roles in biotechnology and specialty pharma companies.","Before leaving McKinsey & Company as a Senior Partner in 2021, he advised leading pharmaceutical and specialty pharma companies in the U.S. and Europe. He founded the McKinsey Cancer Center and the European Healthcare Transactions team.","Dr. Rudolph holds a Medical Doctor degree from the University of Tuebingen Medical School, where his doctoral research focused on Molecular Biology and Oncology. He also earned a minor in Business Administration from the University of Tuebingen Business School."] },
];

export const advisors: Person[] = [
  { slug:"anastasia-tousimis", name:"Anastasia Tousimis, MD, FACS, MBA", role:"Scientific and Medical Advisor", image:"/assets/people/anastasia-tousimis.jpg", bio:["Dr. Anastasia Tousimis serves as deputy director of Baptist Health Cancer Care, chief of breast surgery at Baptist Health Cancer Care, medical director of the Al and Jane Nahmad Women’s Cancer Center and chief medical liaison of the Memorial Sloan Kettering Cancer Center Alliance. Previously, she served as the Director of the Scully Welsh Cancer Center at Cleveland Clinic Indian River Hospital. She also served as Professor of Surgery and Director of the Breast Center at Georgetown University Hospital, where she led the Division of Breast Surgery and the Clinical Research program.","Dr. Tousimis was an Associate Professor of Surgery at Weill Cornell Medical College. She earned her MD from Albany Medical College and MBA from the Sloan School of Management at MIT. Recognized for her innovations in breast cancer management, she has published extensively and was the 99th President of the American Medical Women’s Association. In 2023, Georgetown University Hospital named an operating room in her honor."] },
  { slug:"sid-puram", name:"Sid Puram, MD, PhD", role:"Scientific and Medical Advisor", image:"/assets/people/sid-puram.jpg", bio:["Dr. Sidharth (Sid) V. Puram, MD, PhD, FACS, is the Lindburg Professor and Chair of the Department of Otolaryngology — Head & Neck Surgery at Washington University School of Medicine in St. Louis. He concurrently serves as the Chief of Otolaryngology at Barnes-Jewish Hospital and the Director of the Head and Neck Tumor Center at the Siteman Cancer Center. As a nationally recognized physician-scientist and Key Opinion Leader (KOL), Dr. Puram specializes in head and neck surgical oncology and microvascular reconstructive surgery. His clinical expertise centers on the comprehensive treatment of advanced head and neck cancers, including squamous cell carcinoma, salivary gland tumors, and thyroid malignancies.","In addition to his surgical practice, Dr. Puram leads pioneering translational research that applies single-cell genomics to map intra-tumoral heterogeneity and identify the mechanisms driving tumor metastasis and treatment resistance. His academic pedigree includes a Bachelor of Science in Biology and Neuroscience from the Massachusetts Institute of Technology (MIT), followed by a combined MD/PhD in Neurobiology from Harvard Medical School. He completed his residency training within the Harvard Combined Program at Massachusetts Eye and Ear, and a specialized fellowship in Head and Neck Surgical Oncology at the Ohio State University's James Cancer Center. Dr. Puram’s profound contributions to biomedical research have earned him numerous accolades, including his prestigious election into the American Society for Clinical Investigation (ASCI)."] },
  { slug:"andrew-sikora", name:"Andrew Sikora, MD, PhD", role:"Scientific and Medical Advisor", image:"/assets/people/andrew-sikora.jpg", bio:["Dr. Andrew Sikora is a renowned head and neck cancer surgeon, tumor immunologist, and professor of Head and Neck Surgery and Immunology at The University of Texas MD Anderson Cancer Center. His clinical expertise includes oropharyngeal and HPV-related head and neck cancers and oral premalignancy. His research focuses on understanding and reversing cancer-mediated immunosuppression through innovative tumor models and biospecimen analysis.","Dr. Sikora holds an MD and PhD in Microbiology and Immunology from Albert Einstein College of Medicine. He completed his undergraduate studies at Yale University, postgraduate training in General Surgery and Otolaryngology at New York University School of Medicine, and a fellowship in Head and Neck Surgical Oncology at MD Anderson."] },
  { slug:"jonathan-schoenfeld", name:"Jonathan Schoenfeld, MD, MPH", role:"Scientific and Medical Advisor", image:"/assets/people/jonathan-schoenfeld.jpg", bio:["Dr. Jonathan Schoenfeld is a Professor of Radiation Oncology at Harvard Medical School and an MGB Endowed Cancer Chair. He serves as Director of Head and Neck, Cutaneous, and Melanoma Radiation Oncology at Dana-Farber Brigham Cancer Center, Senior Physician at Dana-Farber Cancer Institute, and Associate Director of Clinical Research in the Department of Radiation Oncology.","Dr. Schoenfeld’s research focuses on clinical, epidemiologic, and translational studies in head and neck and skin cancers, including the immunologic effects of radiation therapy and studies combining radiation with novel oncology agents.","Dr. Schoenfeld earned his medical degree from Harvard Medical School following a research fellowship as a Gates Scholar at the University of Cambridge. He completed his medical internship at Memorial Sloan Kettering Cancer Center and residency in the Harvard Radiation Oncology Program. He also holds an MPH in Clinical Effectiveness from the Harvard T.H. Chan School of Public Health."] },
  { slug:"daniel-hartl", name:"Daniel L. Hartl, PhD", role:"Scientific Advisor", image:"/assets/people/daniel-hartl.jpg", bio:["Daniel is Higgins Professor of Biology and former Chair of the Department of Organismic and Evolutionary Biology at Harvard University. His laboratory studies genetics, genomics and molecular evolution. His seminal contributions to experimental evolutionary genetics have far-reaching impact on understanding the development of resistance to drugs in human diseases.","An elected member of the National Academy of Sciences, the American Academy of Arts and Sciences, and the National Academy of Sciences of India, Prof. Hartl has authored or coauthored more than 400 scientific articles and 20 books."] },
  { slug:"eugene-shakhnovich", name:"Eugene I. Shakhnovich, PhD", role:"Scientific Advisor", image:"/assets/people/eugene-shakhnovich.jpg", bio:["Eugene is a Professor of Chemistry and Chemical Biology at Harvard University. He is a leading researcher in protein folding and has carried out crucial work tying the physical chemistry of proteins to evolutionary biology. His laboratory has made fundamental contributions to understanding mechanisms of drug resistance by studying mutational fitness and organismal evolution using biophysical principles.","He is the author of more than 200 publications and co-founded Vitae Pharmaceuticals, which was acquired by Allergan for $639 million."] },
  { slug:"ajay-gupta", name:"Ajay Gupta", role:"Executive Advisor", image:"/assets/people/ajay-gupta.jpg", bio:["Ajay Gupta, Senior Partner Emeritus at McKinsey & Company, brings over 30 years of healthcare expertise spanning pharmaceuticals, biotech, medtech, health systems, academic centers, and healthcare services. At McKinsey, he led the Midwest Healthcare and North America Medical Products practices, advising on strategy, growth, M&A, and innovation.","Gupta serves on multiple boards and is an active investor focused on growth companies and innovation. He holds an MBA from Stanford, where he was an Arjay Miller Scholar, and a B.Tech from IIT Delhi, where he received the President’s Gold Medal."] },
  { slug:"jan-hagemeier", name:"Jan Hagemeier", role:"Executive Advisor", image:"/assets/people/jan-hagemeier.jpg", bio:["Jan Hagemeier is a seasoned financial executive with three decades of experience in global equity capital markets, investor engagement, and institutional fundraising. Previously, Jan served as CEO and Head of Sales at Sanford C. Bernstein Ltd in the UK and as Partner at AllianceBernstein in New York. He also held senior management roles at Deutsche Bank.","As an Executive Advisor, Jan provides strategic financial guidance, drawing on his experience in IPOs, secondary offerings, and debt financing, where he helped raise several billion dollars. His understanding of investor expectations and market positioning supports Aveta’s financing strategy and investor relations."] },
];
/**
 * The sections of /about, in the order the page renders them.
 *
 * `id` is the anchor on /about, which is what a biography page links back to,
 * so a visitor returns to the group they came from rather than the top of the
 * page. `label` is the eyebrow above the section and on the biography page.
 */
export type Group = { id: string; label: string; people: Person[] };

export const groups: Group[] = [
  { id: "leadership", label: "EXECUTIVE LEADERSHIP", people: executives },
  { id: "board-of-directors", label: "BOARD OF DIRECTORS", people: directors },
  { id: "board-of-advisors", label: "THE BOARD OF ADVISORS", people: advisors },
];

/** True when the person has a biography, and so a page to link to. */
export function hasPage(person: Person) {
  return Boolean(person.bio?.length);
}

/**
 * Every place a person appears, in page order. The first is treated as their
 * primary role: it is what the biography page leads with, and the section its
 * back link returns to.
 */
export function membershipsOf(slug: string) {
  return groups.flatMap((group) => {
    const person = group.people.find((entry) => entry.slug === slug);
    return person ? [{ group, person }] : [];
  });
}

/** The person behind a /about/<slug> URL, or null if the slug is unknown. */
export function findPerson(slug: string) {
  const memberships = membershipsOf(slug);
  const primary = memberships[0];
  if (!primary || !hasPage(primary.person)) return null;
  return { ...primary, memberships };
}

/** Prerenderable list of biography URLs, and the set the sitemap walks. */
export const personSlugs = [
  ...new Set(groups.flatMap((group) => group.people.filter(hasPage).map((person) => person.slug))),
];
