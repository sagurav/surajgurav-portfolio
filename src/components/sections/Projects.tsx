"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "EliteMx",
    subtitle: "Healthcare Technology Platform",
    description:
      "Pre-launch healthcare platform I'm building as CTO at VPTech. Designed to transform how healthcare operators and clinicians manage their workflows — shaped by direct feedback from the healthcare community.",
    tags: ["CTO", "Healthcare", "AWS", "SDLC", "Product"],
    status: "In Development",
    statusColor: "#00BFA5",
    highlight: true,
    github: null,
    live: null,
  },
  {
    title: "AWS Video Compressor",
    subtitle: "QUT Capstone · Cloud Architecture",
    description:
      "Production-grade video compression web application built with React frontend on AWS microservices architecture (EC2, S3, ECS, CloudFront, Lambda). Designed for scalability and cost efficiency.",
    tags: ["React", "AWS", "Microservices", "S3", "Lambda", "CloudFront"],
    status: "Completed",
    statusColor: "#3B82F6",
    highlight: false,
    github: "https://github.com/sagurav",
    live: null,
  },
  {
    title: "GardenGuru",
    subtitle: "React Native · AI / AR",
    description:
      "Mobile app using AI and augmented reality for plant health analysis. Users point their camera at plants to receive real-time health diagnostics and care recommendations.",
    tags: ["React Native", "AI", "AR", "Mobile", "Computer Vision"],
    status: "Completed",
    statusColor: "#A855F7",
    highlight: false,
    github: "https://github.com/sagurav",
    live: null,
  },
  {
    title: "Task Manager App",
    subtitle: "React · Node.js · MongoDB",
    description:
      "Scalable full-stack task management application with real-time updates, user authentication, and collaborative features. Built with a focus on performance and clean architecture.",
    tags: ["React", "Node.js", "MongoDB", "REST API", "JWT"],
    status: "Completed",
    statusColor: "#F0B429",
    highlight: false,
    github: "https://github.com/sagurav",
    live: null,
  },
  {
    title: "LIC ePGS — BI Platform",
    subtitle: "Enterprise · Pentaho · 3 Banks",
    description:
      "Enterprise-grade Business Intelligence platform for Life Insurance Corporation of India. 400+ Pentaho reports, 50+ CDE dashboards including the Chairman Dashboard. Integrated payment systems across three major banks.",
    tags: ["Pentaho PDI", "PRD", "CDE", "Oracle SQL", "ETL", "Jenkins"],
    status: "Delivered",
    statusColor: "#EC4899",
    highlight: false,
    github: null,
    live: null,
  },
  {
    title: "Portfolio Website",
    subtitle: "Next.js · TypeScript · Tailwind",
    description:
      "This portfolio — built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui. Deployed on Vercel. Reflects the design intelligence from ui-ux-pro-max and impeccable skill frameworks.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
    status: "Live",
    statusColor: "#00BFA5",
    highlight: false,
    github: "https://github.com/sagurav/surajgurav-portfolio",
    live: "https://surajgurav.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#00BFA5] text-sm font-semibold tracking-widest uppercase mb-3">Projects</p>
          <h2 className="section-heading mb-4">What I&apos;ve Built</h2>
          <p className="text-[#8B949E] max-w-xl mx-auto text-base leading-relaxed">
            From founding-team startup builds to enterprise BI at scale — every project has a purpose.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className={`card-glow rounded-xl p-5 flex flex-col ${
                project.highlight ? "border-[#00BFA5] shadow-[0_0_24px_rgba(0,191,165,0.1)]" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-[#E6EDF3] font-semibold font-[family-name:var(--font-sora)] text-base">
                    {project.title}
                  </h3>
                  <p className="text-[#6E7681] text-xs mt-0.5">{project.subtitle}</p>
                </div>
                <span
                  className="shrink-0 px-2 py-0.5 rounded text-[10px] font-medium"
                  style={{
                    backgroundColor: `${project.statusColor}18`,
                    color: project.statusColor,
                    border: `1px solid ${project.statusColor}40`,
                  }}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-[#8B949E] text-sm leading-relaxed flex-1 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="badge-skill text-[10px]">{tag}</span>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-auto pt-2 border-t border-[#21262D]">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[#8B949E] hover:text-[#E6EDF3] transition-colors duration-200"
                  >
                    <FaGithub size={13} /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[#00BFA5] hover:text-[#00D4B8] transition-colors duration-200 ml-auto"
                  >
                    <ExternalLink size={13} /> Live Site
                  </a>
                )}
                {!project.github && !project.live && (
                  <span className="text-xs text-[#6E7681]">Enterprise / Confidential</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/sagurav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#21262D] text-[#8B949E] hover:text-[#E6EDF3] hover:border-[#8B949E] transition-all duration-200 text-sm"
          >
            <FaGithub size={15} /> View all repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
