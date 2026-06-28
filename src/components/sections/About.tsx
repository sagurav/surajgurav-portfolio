"use client";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Award, BookOpen } from "lucide-react";

const highlights = [
  { icon: MapPin, label: "Location", value: "Brisbane, QLD, Australia" },
  { icon: GraduationCap, label: "Education", value: "Master of IT · QUT (Dean's Commendation)" },
  { icon: Award, label: "Current", value: "CTO @ VPTech · EliteMx Platform" },
  { icon: BookOpen, label: "Published", value: "IEEE & IJSER Research Author" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 section-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#00BFA5] text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
          <h2 className="section-heading mb-4">Building What Truly Matters</h2>
          <p className="text-[#8B949E] max-w-xl mx-auto text-base leading-relaxed">
            From enterprise BI at scale to founding-team CTO — the full arc of modern tech leadership.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-5 text-[#8B949E] text-base leading-relaxed"
          >
            <p>
              I&apos;m <span className="text-[#E6EDF3] font-medium">Suraj Adhikrao Gurav</span>, currently serving as{" "}
              <span className="text-[#00BFA5] font-medium">Chief Technology Officer at VPTech</span>, where I&apos;m
              leading the technology strategy and engineering of{" "}
              <span className="text-[#E6EDF3] font-medium">EliteMx</span> — a pre-launch healthcare technology platform
              designed to transform how healthcare operators and clinicians work.
            </p>
            <p>
              My career spans 5.5+ years across enterprise software engineering, data engineering, business intelligence
              (Pentaho BI), DevOps, and full-stack development. At Tech Mahindra, I delivered the{" "}
              <span className="text-[#E6EDF3] font-medium">LIC ePGS Project</span> — building 400+ Pentaho reports, 50+
              CDE dashboards, and an automated payments system handling three major Indian banks.
            </p>
            <p>
              I recently earned my{" "}
              <span className="text-[#E6EDF3] font-medium">Master&apos;s in IT (Software Development) from QUT</span>{" "}
              with Dean&apos;s Commendation, and hold{" "}
              <span className="text-[#00BFA5] font-medium">Anthropic Claude certifications</span> on both Google Cloud
              Vertex AI and Amazon Bedrock — reflecting my commitment to AI engineering at the frontier.
            </p>
            <p>
              Beyond the keyboard, I bring the same energy to cricket, carrom, and guitar as I do to server logs and
              architecture decisions. I have 16 LinkedIn recommendations and an IEEE publication to my name.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {["Healthcare Tech", "AI Engineering", "Enterprise BI", "AWS Cloud", "Full Stack", "Team Leadership"].map((tag) => (
                <span key={tag} className="badge-skill">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Right — highlights cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-glow rounded-xl p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,191,165,0.1)] border border-[rgba(0,191,165,0.2)] flex items-center justify-center mb-3">
                  <item.icon size={18} className="text-[#00BFA5]" />
                </div>
                <p className="text-[#6E7681] text-xs mb-1">{item.label}</p>
                <p className="text-[#E6EDF3] text-sm font-medium leading-snug">{item.value}</p>
              </motion.div>
            ))}

            {/* Certifications card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="sm:col-span-2 card-glow rounded-xl p-5"
            >
              <p className="text-[#6E7681] text-xs mb-3">Featured Certifications</p>
              <div className="flex flex-col gap-2">
                {[
                  { name: "Claude with Google Cloud Vertex AI", org: "Anthropic · May 2026" },
                  { name: "Claude in Amazon Bedrock", org: "Anthropic · May 2026" },
                  { name: "Google Data Analytics", org: "Coursera · Nov 2024" },
                  { name: "Google Project Management", org: "Coursera · Jul 2024" },
                ].map((cert) => (
                  <div key={cert.name} className="flex items-center justify-between py-1 border-b border-[#21262D] last:border-0">
                    <span className="text-[#E6EDF3] text-sm">{cert.name}</span>
                    <span className="text-[#6E7681] text-xs ml-3 shrink-0">{cert.org}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
