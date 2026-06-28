"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Chief Technology Officer",
    company: "VPTech",
    project: "EliteMx Healthcare Platform",
    period: "Feb 2026 – Present",
    location: "Gold Coast, QLD · Hybrid",
    type: "Full-time",
    color: "#00BFA5",
    bullets: [
      "Leading technology strategy and engineering for EliteMx — a pre-launch healthcare technology platform.",
      "Engaged with the healthcare-tech community at Digital Health Festival; feedback loops with clinicians and healthcare operators.",
      "Owning full technology stack decisions, architecture, team building, and product-tech alignment.",
    ],
    tags: ["CTO", "Healthcare Tech", "Product Leadership", "Architecture", "AWS"],
  },
  {
    role: "Founding Engineer",
    company: "VPTech",
    project: "EliteMx Healthcare Platform",
    period: "Aug 2025 – Jan 2026",
    location: "Gold Coast, QLD · Hybrid",
    type: "Full-time",
    color: "#3B82F6",
    bullets: [
      "Joined as a founding-team engineer to build the EliteMx platform from the ground up.",
      "Designed and implemented the core platform architecture and initial engineering systems.",
      "Established development practices, infrastructure, and deployment pipelines from zero.",
    ],
    tags: ["Founding Engineer", "AWS", "SDLC", "Platform Engineering"],
  },
  {
    role: "Senior Software Engineer · Tech Lead",
    company: "Tech Mahindra",
    project: "LIC ePGS — Integration Lead",
    period: "Jul 2023 – Aug 2024",
    location: "Remote · India",
    type: "Contract (VIS Band)",
    color: "#F0B429",
    bullets: [
      "Led end-to-end SDLC for integration work — planning to deployment across all phases.",
      "Spearheaded Pentaho ETL development, PRD reporting, and real-time CDE dashboards.",
      "Established and managed CI/CD pipelines (Jenkins, Ansible, Bitbucket) for Pentaho infrastructure.",
      "Conducted requirement gathering, engaged directly with LIC and three major bank stakeholders.",
      "Designed SFTP automation scripts using GAMFT for secure file transfers.",
    ],
    tags: ["Pentaho PDI/PRD/CDE", "Jenkins", "Oracle SQL", "CI/CD", "Leadership"],
  },
  {
    role: "Software Engineer",
    company: "Tech Mahindra",
    project: "LIC ePGS — Full Stack & BI",
    period: "Sep 2019 – Feb 2023",
    location: "Mumbai, India",
    type: "Full-time",
    color: "#A855F7",
    bullets: [
      "Delivered full SDLC for enterprise applications: SRS authoring, design, development, testing, integration.",
      "Built 400+ Pentaho PDI ETL pipelines, 50+ PRD reports, Chairman Dashboard for LIC.",
      "Developed full-stack applications: Angular + Java Spring Boot over Oracle SQL databases.",
      "Led Annuity Extraction System — automated fortnightly, monthly, quarterly payments to annuitants.",
      "Managed AWS Console, EC2, Red Hat OCP, Nagios monitoring across Dev/SIT/UAT/QA/Prod/DR.",
    ],
    tags: ["Java", "Angular", "Spring Boot", "Pentaho", "Oracle SQL", "AWS", "Red Hat"],
  },
];

const education = [
  {
    degree: "Master of Information Technology (Software Development)",
    institution: "Queensland University of Technology (QUT)",
    period: "Feb 2023 – Dec 2024",
    note: "Dean's Commendation for Academic Excellence",
    color: "#00BFA5",
  },
  {
    degree: "Bachelor of Engineering — Electronics & Telecommunication",
    institution: "University of Mumbai · Xavier Institute of Engineering",
    period: "2014 – 2018",
    note: "1st Class · IEEE Research Publication",
    color: "#3B82F6",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 section-mid">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#00BFA5] text-sm font-semibold tracking-widest uppercase mb-3">Career</p>
          <h2 className="section-heading mb-4">Professional Journey</h2>
          <p className="text-[#8B949E] max-w-xl mx-auto text-base leading-relaxed">
            From Software Engineer to CTO — 5.5 years of consistent growth and impact.
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative pl-6 sm:pl-8 mb-20">
          <div className="timeline-line rounded-full" />
          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-[29px] sm:-left-[33px] top-5 w-4 h-4 rounded-full border-2 border-[#080C10]"
                  style={{ backgroundColor: exp.color }}
                />
                <div className="card-glow rounded-xl p-5 sm:p-6 ml-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-[#E6EDF3] font-semibold font-[family-name:var(--font-sora)] text-base">
                        {exp.role}
                      </h3>
                      <p className="text-sm" style={{ color: exp.color }}>
                        {exp.company} · {exp.project}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-[#8B949E] text-xs">{exp.period}</p>
                      <p className="text-[#6E7681] text-xs">{exp.location}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] border border-[#21262D] text-[#6E7681]">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {exp.bullets.map((b) => (
                      <li key={b} className="text-[#8B949E] text-sm flex gap-2">
                        <span style={{ color: exp.color }} className="mt-1.5 shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="badge-skill text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-[#00BFA5] text-sm font-semibold tracking-widest uppercase mb-6 text-center">Education</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-glow rounded-xl p-5"
              >
                <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: edu.color }} />
                <h4 className="text-[#E6EDF3] font-semibold text-sm mb-1">{edu.degree}</h4>
                <p className="text-[#8B949E] text-sm">{edu.institution}</p>
                <p className="text-[#6E7681] text-xs mt-1">{edu.period}</p>
                <p className="text-xs mt-2 font-medium" style={{ color: edu.color }}>{edu.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
