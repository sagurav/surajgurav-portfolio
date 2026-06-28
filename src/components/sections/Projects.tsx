"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useRef, useState } from "react";

const projects = [
  {
    title: "EliteMx",
    subtitle: "Healthcare Technology Platform",
    description:
      "Pre-launch healthcare platform I'm building as CTO at VPTech. Designed to transform how healthcare operators and clinicians manage their workflows — shaped by direct feedback from the healthcare community.",
    tags: ["CTO", "Healthcare", "AWS", "SDLC", "Product"],
    status: "In Development",
    statusColor: "#00BFA5",
    featured: true,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
    github: null,
    live: null,
  },
  {
    title: "Portfolio Website",
    subtitle: "Next.js · TypeScript · Tailwind",
    description:
      "This portfolio — built with Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion, Lenis smooth scroll, and shadcn/ui. Deployed on Vercel with a custom domain.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
    status: "Live",
    statusColor: "#00BFA5",
    featured: false,
    github: "https://github.com/sagurav/surajgurav-portfolio",
    live: "https://surajgurav.com",
  },
];

/* ─── 3D Tilt Card ─── */
function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 350, damping: 35 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 350, damping: 35 });
  const scale   = useSpring(1, { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };
  const handleEnter = () => { scale.set(1.02); setHovered(true); };
  const handleLeave = () => { x.set(0); y.set(0); scale.set(1); setHovered(false); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        background: hovered
          ? `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,191,165,0.06) 0%, transparent 55%), #0C1524`
          : "#0C1524",
        transition: "background 0.15s ease",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 section-mid">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Projects</p>
          <h2 className="section-heading mb-4">What I&apos;ve Built</h2>
          <p className="text-[#8892A4] max-w-xl mx-auto text-base leading-relaxed">
            From founding-team startup builds to enterprise BI at scale — every project has a purpose.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" style={{ perspective: "1200px" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <TiltCard
                className={`rounded-xl p-5 flex flex-col h-full border ${
                  project.featured
                    ? "border-[rgba(0,191,165,0.35)] shadow-[0_0_40px_rgba(0,191,165,0.08)]"
                    : "border-[#1C2B3E]"
                }`}
              >
                {project.featured && (
                  <div className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{ background: "linear-gradient(135deg, rgba(0,191,165,0.04) 0%, transparent 60%)" }}
                  />
                )}

                <div className="relative flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-[#E8F0FF] font-semibold font-[family-name:var(--font-sora)] text-base">
                      {project.title}
                    </h3>
                    <p className="text-[#5A6478] text-xs mt-0.5">{project.subtitle}</p>
                  </div>
                  <span
                    className="shrink-0 ml-2 px-2 py-0.5 rounded text-[10px] font-medium"
                    style={{
                      backgroundColor: `${project.statusColor}18`,
                      color: project.statusColor,
                      border: `1px solid ${project.statusColor}40`,
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="relative text-[#8892A4] text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                <div className="relative flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge-skill text-[10px] px-2.5 py-0.5">{tag}</span>
                  ))}
                </div>

                <div className="relative flex items-center gap-2 mt-auto pt-3 border-t border-[#1C2B3E]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[#8892A4] hover:text-[#E8F0FF] transition-colors duration-200"
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
                    <span className="text-xs text-[#3D4F65]">Enterprise / Confidential</span>
                  )}
                </div>
              </TiltCard>
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#1C2B3E] text-[#8892A4] hover:text-[#E8F0FF] hover:border-[#8892A4] transition-all duration-200 text-sm"
          >
            <FaGithub size={15} /> View all repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
