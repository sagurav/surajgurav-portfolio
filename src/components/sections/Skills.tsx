"use client";
import { motion } from "framer-motion";
import { MarqueeRow } from "@/components/ui/Marquee";

const skillGroups = [
  {
    title: "Leadership & Delivery",
    color: "#00BFA5",
    skills: ["Full SDLC", "Agile / Scrum", "Sprint Planning", "CTO Leadership", "Stakeholder Management", "Technology Strategy", "Team Building", "ITIL / CMR / CAB"],
  },
  {
    title: "AI & Cloud",
    color: "#3B82F6",
    skills: ["Claude (Vertex AI)", "Claude (Amazon Bedrock)", "AWS EC2 / ECS / S3", "API Gateway", "Lambda", "CloudFront", "CloudWatch", "SQS / Route53", "Azure Databricks"],
  },
  {
    title: "Full Stack Development",
    color: "#A855F7",
    skills: ["React", "Next.js", "TypeScript", "Angular", "Java", "Spring Boot", "Node.js", "React Native", "HTML / CSS / Bootstrap"],
  },
  {
    title: "Data & BI Engineering",
    color: "#F0B429",
    skills: ["Pentaho PDI", "Pentaho PRD", "Pentaho CDE", "Oracle SQL", "PL/SQL", "Python", "Pandas", "Tableau", "Power BI", "Data Migration"],
  },
  {
    title: "DevOps & Infrastructure",
    color: "#EC4899",
    skills: ["Jenkins", "Ansible", "Docker", "Kubernetes", "Bitbucket", "CI/CD Pipelines", "Nagios", "Linux Scripting", "GAMFT / SFTP"],
  },
  {
    title: "Red Hat & Integration",
    color: "#FB923C",
    skills: ["Red Hat Fuse", "OpenShift (OCP)", "Red Hat PAM", "3scale", "SSO", "API Integrations", "IP Whitelisting", "MongoDB"],
  },
];

const MARQUEE_ROW_1 = [
  "Next.js", "TypeScript", "React", "AWS", "Claude AI", "Python", "Docker",
  "Kubernetes", "Java", "Spring Boot", "Node.js", "Pentaho", "Oracle SQL",
  "Azure", "Terraform", "MongoDB", "CI/CD", "React Native",
];
const MARQUEE_ROW_2 = [
  "CTO", "Tech Lead", "SDLC", "Agile", "Red Hat", "OpenShift", "Jenkins",
  "Ansible", "Tableau", "Power BI", "Angular", "REST APIs", "GraphQL",
  "Microservices", "ETL", "Data Engineering", "AI Engineering", "Healthcare Tech",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 section-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Expertise</p>
          <h2 className="section-heading mb-4">Technical Skills</h2>
          <p className="text-[#8892A4] max-w-xl mx-auto text-base leading-relaxed">
            A broad, deep stack built across 5.5 years of enterprise and startup engineering.
          </p>
        </motion.div>

        {/* ── Scrolling tech stack marquee ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 space-y-3"
        >
          <MarqueeRow items={MARQUEE_ROW_1} speed={40} />
          <MarqueeRow items={MARQUEE_ROW_2} reverse speed={45} />
        </motion.div>

        {/* ── Skill group cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-40px" }}
              className="card-glow rounded-xl p-5"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-2 h-5 rounded-full shrink-0"
                  style={{ backgroundColor: group.color }}
                />
                <h3
                  className="text-[#E8F0FF] font-semibold font-[family-name:var(--font-sora)] text-sm"
                >
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="badge-skill text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Research Publications ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 card-glow rounded-xl p-6"
        >
          <p className="text-[#3D4F65] text-xs mb-4 uppercase tracking-widest font-medium">
            Research Publications
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                journal: "IEEE",
                title: "Interactive Scene Analysis",
                venue: "ICRIEECE 2018 International Conference",
                doi: "https://doi.org/10.1109/ICRIEECE44171.2018.9008931",
                color: "#3B82F6",
              },
              {
                journal: "IJSER",
                title: "Interactive Scene Analysis",
                venue: "Vol. 9, Issue 3, March 2018 · ISSN 2229-5518",
                doi: null,
                color: "#00BFA5",
              },
            ].map((pub) => (
              <div key={pub.journal} className="flex gap-3">
                <div
                  className="shrink-0 px-2 py-1 rounded text-xs font-bold h-fit"
                  style={{ backgroundColor: `${pub.color}20`, color: pub.color }}
                >
                  {pub.journal}
                </div>
                <div>
                  <p className="text-[#E8F0FF] text-sm font-medium">{pub.title}</p>
                  <p className="text-[#5A6478] text-xs mt-0.5">{pub.venue}</p>
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#3B82F6] hover:underline mt-1 inline-block"
                    >
                      View Publication →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
