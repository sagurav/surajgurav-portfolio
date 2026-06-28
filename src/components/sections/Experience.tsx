"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Chief Technology Officer",
    company: "VPTech",
    project: "EliteMx — AI-Native Healthcare Platform",
    period: "Feb 2026 – Present",
    location: "Gold Coast, QLD · Hybrid",
    type: "Full-time",
    color: "#00BFA5",
    bullets: [
      "Promoted from Founding Engineer to CTO within ~6 months — own product and platform end-to-end while staying hands-on in the code.",
      "Built an ambient voice scribe (consultation → structured clinical note) and a patient agent that answers from the record and drafts letters under human-in-the-loop approval.",
      "Architected a multi-agent system on LangGraph + AWS Bedrock with agentic tool-based retrieval; built FHIR R4 + SMART on FHIR auth server (29 resource types, AU Core).",
      "Run 10 CDK TypeScript stacks deployed via a 16-workflow GitHub Actions pipeline with OIDC and ephemeral per-PR environments — cut cloud cost ~75% via Bedrock AgentCore migration.",
    ],
    tags: ["TypeScript", "Next.js", "LangGraph", "AWS Bedrock", "FHIR", "PostgreSQL", "Multi-Agent AI", "CDK"],
  },
  {
    role: "Founding Engineer",
    company: "VPTech",
    project: "EliteMx — AI-Native Healthcare Platform",
    period: "Aug 2025 – Jan 2026",
    location: "Gold Coast, QLD · Hybrid",
    type: "Full-time",
    color: "#3B82F6",
    bullets: [
      "Joined as founding engineer — built the full product stack from zero: Next.js / React frontend, Node.js (Fastify + oRPC) backend, PostgreSQL + Drizzle across ~150 typed API procedures and 30+ tables.",
      "Built the original clinical AI as four agents (agent-to-agent architecture) with a vector RAG pipeline, then evolved into a unified multi-agent system.",
      "Designed and built an Agentic SDLC on Claude Code (custom skills, hooks, MCP servers) that shortened the spec-to-PR cycle and authored SRS / SDLC documents as the team's source of truth.",
      "Designed and prototyped the EliteMx mobile experience in React Native — iterated through 13+ prototype versions.",
    ],
    tags: ["Founding Engineer", "TypeScript", "React Native", "Claude Code", "AWS", "Agentic SDLC"],
  },
  {
    role: "Senior Software Engineer · Integration Technical Lead",
    company: "Tech Mahindra",
    project: "LIC ePGS — Forward Deployed",
    period: "Jul 2023 – Aug 2024",
    location: "Remote / On-site · India",
    type: "Contract (VIS Band)",
    color: "#F0B429",
    bullets: [
      "Effectively forward-deployed: worked on-site with LIC India and three major banks, engaged stakeholders directly to extract domain logic, and built integrations that removed manual steps from a national payments workflow.",
      "Owned API integrations, infrastructure setup, IP whitelisting, and network debugging enabling secure transactions across LIC systems and three banks.",
      "Led the integration team across full SDLC; coordinated distributed teams remotely to deliver critical milestones on schedule.",
      "Established CI/CD pipelines (Jenkins, Ansible, Bitbucket) and SFTP automation (GAMFT) for reliable, auditable delivery.",
    ],
    tags: ["Integration Lead", "Forward Deployed", "Jenkins", "Ansible", "Oracle SQL", "GAMFT", "ITIL"],
  },
  {
    role: "Software Engineer",
    company: "Tech Mahindra",
    project: "LIC ePGS — Full Stack, Payments & BI",
    period: "Sep 2019 – Feb 2023",
    location: "Mumbai, India",
    type: "Full-time",
    color: "#A855F7",
    bullets: [
      "Built the LIC Payments Module across three banks (~300,000 payments processed daily) and the Annuity Extraction System automating recurring payments for ~15,000 annuitants.",
      "Built full-stack applications (Angular, Java / Spring Boot, Oracle) and 400+ reports / 50+ dashboards including the Chairman Dashboard for LIC.",
      "Set up Pentaho BI servers on Red Hat and OpenShift (OCP); owned disaster recovery with a ~10-minute recovery objective — ran DR procedures and drills under ITIL change management.",
      "Delivered complete SDLC across Dev, SIT, UAT, QA, Production, and DR on both AWS and Red Hat.",
    ],
    tags: ["Angular", "Java", "Spring Boot", "Pentaho", "Oracle SQL", "Red Hat", "OpenShift", "AWS", "DR"],
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
                  className="absolute -left-[29px] sm:-left-[33px] top-5 w-4 h-4 rounded-full border-2 border-[#080E1A]"
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
