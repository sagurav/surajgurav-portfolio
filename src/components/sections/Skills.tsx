"use client";
import { motion } from "framer-motion";

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

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#00BFA5] text-sm font-semibold tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="section-heading mb-4">Technical Skills</h2>
          <p className="text-[#8B949E] max-w-xl mx-auto text-base leading-relaxed">
            A broad, deep stack built across 5.5 years of enterprise and startup engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="card-glow rounded-xl p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-5 rounded-full" style={{ backgroundColor: group.color }} />
                <h3 className="text-[#E6EDF3] font-semibold font-[family-name:var(--font-sora)] text-sm">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="badge-skill text-xs"
                    style={{
                      ['--hover-color' as string]: group.color,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 card-glow rounded-xl p-6"
        >
          <p className="text-[#6E7681] text-xs mb-4 uppercase tracking-widest">Research Publications</p>
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
                  <p className="text-[#E6EDF3] text-sm font-medium">{pub.title}</p>
                  <p className="text-[#6E7681] text-xs mt-0.5">{pub.venue}</p>
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
