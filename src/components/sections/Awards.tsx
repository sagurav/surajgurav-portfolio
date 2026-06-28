"use client";
import { motion } from "framer-motion";
import { Trophy, Star, Zap } from "lucide-react";

const awards = [
  {
    title: "Dean's Commendation for Academic Excellence",
    org: "Queensland University of Technology (QUT)",
    year: "Dec 2024",
    icon: Trophy,
    color: "#F0B429",
    description: "Awarded for outstanding academic performance in Master of IT (Software Development).",
  },
  {
    title: "ACE Award — Associates Consistently Excel",
    org: "Tech Mahindra",
    year: "Dec 2022",
    icon: Star,
    color: "#00BFA5",
    description: "Recognised for consistent excellence in technical delivery and team leadership.",
  },
  {
    title: "Bravo Award (×3)",
    org: "Tech Mahindra",
    year: "2021 – 2022",
    icon: Star,
    color: "#3B82F6",
    description: "Three-time recipient — depth of Insurance domain knowledge and Go-Live delivery leadership.",
  },
  {
    title: "Automation Ninja Award",
    org: "Tech Mahindra",
    year: "2021",
    icon: Zap,
    color: "#A855F7",
    description: "Awarded for outstanding automation work in the Pentaho CI/CD and scripting domain.",
  },
  {
    title: "Letter of Appreciation (×2)",
    org: "Xavier Institute of Engineering, Mumbai University",
    year: "Apr 2018",
    icon: Trophy,
    color: "#EC4899",
    description: "Recognised for academic and extracurricular contributions during undergraduate studies.",
  },
];

const recommendations = [
  {
    name: "Jai Prakash Sharma",
    title: "Regional Head – Retail Assets",
    org: "IDBI Bank",
    quote:
      "Handled the complete payments process between LIC and our bank, from requirement understanding to end-to-end execution — API integrations, infrastructure setup, IP whitelisting, and network debugging. Strongly recommend him for any role demanding technical ownership, stakeholder handling, and large-scale integration expertise.",
  },
  {
    name: "Deepa Rathore",
    title: "Senior Product Manager",
    org: "Ex-IDBI Bank",
    quote:
      "His never-give-up attitude… without his contribution the project could not have been completed. He was the life of the project. Tech Mahindra made special efforts to bring him back.",
  },
];

export default function Awards() {
  return (
    <section id="awards" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#00BFA5] text-sm font-semibold tracking-widest uppercase mb-3">Recognition</p>
          <h2 className="section-heading mb-4">Awards & Recommendations</h2>
          <p className="text-[#8B949E] max-w-xl mx-auto text-base leading-relaxed">
            16 LinkedIn recommendations and multiple industry awards across enterprise and academic work.
          </p>
        </motion.div>

        {/* Awards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="card-glow rounded-xl p-5"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: `${award.color}18`, border: `1px solid ${award.color}40` }}
              >
                <award.icon size={18} style={{ color: award.color }} />
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs" style={{ color: award.color }}>{award.year}</span>
              </div>
              <h3 className="text-[#E6EDF3] font-semibold text-sm mb-1 leading-snug">{award.title}</h3>
              <p className="text-[#6E7681] text-xs mb-2">{award.org}</p>
              <p className="text-[#8B949E] text-xs leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-[#00BFA5] text-sm font-semibold tracking-widest uppercase mb-6 text-center">
            What People Say
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {recommendations.map((rec, i) => (
              <motion.div
                key={rec.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-glow rounded-xl p-6"
              >
                <div className="text-[#00BFA5] text-3xl mb-3 font-serif leading-none">&quot;</div>
                <p className="text-[#8B949E] text-sm leading-relaxed italic mb-4">{rec.quote}</p>
                <div className="border-t border-[#21262D] pt-3">
                  <p className="text-[#E6EDF3] font-semibold text-sm">{rec.name}</p>
                  <p className="text-[#6E7681] text-xs">{rec.title} · {rec.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[#6E7681] text-xs mt-5">
            + 14 more recommendations on{" "}
            <a
              href="https://linkedin.com/in/suraj-adhikrao-gurav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
