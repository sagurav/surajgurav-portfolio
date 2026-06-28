"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Briefcase, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useRef, useState } from "react";

/* ─── Data ─── */
const professional = [
  {
    title: "EliteMx",
    subtitle: "AI-Native Healthcare Platform · CTO @ VPTech",
    role: "Founding Engineer → Chief Technology Officer",
    description:
      "Promoted from Founding Engineer to CTO within ~6 months. Built the entire product full-stack on TypeScript — Next.js / React frontend, Node.js (Fastify + oRPC) backend, PostgreSQL + Drizzle, across ~150 typed API procedures and 30+ tables. Embedded directly with clinicians and operators at the Digital Health Festival to learn how care work is actually done, then built AI that completes the work: an ambient voice scribe that turns a consultation into a structured clinical note, and a patient agent that answers from the record and drafts letters under human approval.",
    impact: [
      "Multi-agent system on LangGraph + AWS Bedrock with human-in-the-loop on every write",
      "FHIR R4 + SMART on FHIR auth server — 29 resource types, AU Core compliant",
      "10 AWS CDK stacks deployed via 16-workflow GitHub Actions pipeline with OIDC",
      "Cut cloud cost ~75% migrating to Bedrock AgentCore + pgvector consolidation",
    ],
    tags: ["TypeScript", "Next.js", "LangGraph", "AWS Bedrock", "FHIR", "PostgreSQL", "React Native", "Multi-Agent AI"],
    status: "In Development",
    statusColor: "#00BFA5",
    link: "https://elitemx.com.au",
    linkLabel: "Visit EliteMx →",
    github: null,
    color: "#00BFA5",
  },
  {
    title: "LIC ePGS — National Payments & BI Platform",
    subtitle: "Life Insurance Corporation of India · Tech Mahindra · 5 Years",
    role: "Software Engineer → Integration Technical Lead",
    description:
      "Forward-deployed for 5+ years with LIC India and three major banks — embedded on-site to extract domain logic, then built the integrations, automations, and platform that now processes ~300,000 payments daily. Far beyond BI: built the national payments infrastructure, full-stack applications (Angular, Java / Spring Boot, Oracle), government-scheme batch processes integrated with external agencies, and the complete Pentaho BI platform — all owned through Dev, UAT, QA, Production, and DR.",
    impact: [
      "~300,000 payments processed daily across 3 major banks",
      "~15,000 annuitants automated via the Annuity Extraction System",
      "400+ Pentaho reports + 50+ CDE dashboards incl. Chairman Dashboard",
      "10-minute disaster recovery objective — owned DR procedures & drills",
    ],
    tags: ["Angular", "Java", "Spring Boot", "Oracle SQL", "Pentaho PDI", "Red Hat", "OpenShift", "Jenkins", "ITIL"],
    status: "Delivered",
    statusColor: "#3B82F6",
    link: null,
    linkLabel: null,
    github: null,
    color: "#3B82F6",
  },
];

const personal = [
  {
    title: "AWS Video Compressor",
    subtitle: "QUT Capstone · Cloud Architecture",
    description: "Production-grade video compression web app built with React on AWS microservices (EC2, S3, ECS, CloudFront, Lambda). Designed for scalability and cost efficiency.",
    tags: ["React", "AWS", "Microservices", "S3", "Lambda", "CloudFront"],
    status: "Completed",
    statusColor: "#A855F7",
    github: "https://github.com/sagurav",
    live: null,
  },
  {
    title: "GardenGuru",
    subtitle: "React Native · AI / AR",
    description: "Mobile app using AI and augmented reality for real-time plant health diagnostics. Users point their camera at plants to receive care recommendations.",
    tags: ["React Native", "AI", "AR", "Mobile", "Computer Vision"],
    status: "Completed",
    statusColor: "#F0B429",
    github: "https://github.com/sagurav",
    live: null,
  },
  {
    title: "Task Manager App",
    subtitle: "React · Node.js · MongoDB",
    description: "Full-stack task management with real-time updates, JWT authentication, and collaborative features. Clean architecture, performant.",
    tags: ["React", "Node.js", "MongoDB", "REST API", "JWT"],
    status: "Completed",
    statusColor: "#EC4899",
    github: "https://github.com/sagurav",
    live: null,
  },
  {
    title: "This Portfolio",
    subtitle: "Next.js · TypeScript · Tailwind",
    description: "Built with Next.js 16, Framer Motion, Lenis smooth scroll, Tailwind CSS v4, and shadcn/ui. Deployed on Vercel with a Cloudflare custom domain.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
    status: "Live",
    statusColor: "#00BFA5",
    github: "https://github.com/sagurav/surajgurav-portfolio",
    live: "https://surajgurav.com",
  },
];

/* ─── 3D Tilt Card (personal projects) ─── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 350, damping: 35 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 350, damping: 35 });
  const scale   = useSpring(1, { stiffness: 300, damping: 30 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => { scale.set(1.02); setHovered(true); }}
      onMouseLeave={() => { x.set(0); y.set(0); scale.set(1); setHovered(false); }}
      style={{
        rotateX, rotateY, scale,
        transformStyle: "preserve-3d",
        background: hovered
          ? `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,191,165,0.06) 0%, transparent 55%), #0C1524`
          : "#0C1524",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Professional Card ─── */
function ProfessionalCard({ project, index }: { project: typeof professional[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-60px" }}
      className="relative rounded-2xl p-7 border overflow-hidden"
      style={{
        borderColor: `${project.color}35`,
        background: `linear-gradient(135deg, #0C1524 0%, #0D1E35 100%)`,
        boxShadow: `0 0 40px ${project.color}08`,
      }}
    >
      {/* Subtle glow corner */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${project.color}10 0%, transparent 70%)`,
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span
                className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide"
                style={{ backgroundColor: `${project.color}18`, color: project.color, border: `1px solid ${project.color}40` }}
              >
                {project.status}
              </span>
              <span className="text-[#3D4F65] text-[11px] font-medium">{project.role}</span>
            </div>
            <h3 className="text-[#E8F0FF] font-bold font-[family-name:var(--font-sora)] text-xl sm:text-2xl">
              {project.title}
            </h3>
            <p className="text-[#5A6478] text-sm mt-0.5">{project.subtitle}</p>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
              style={{ color: project.color }}
            >
              <ExternalLink size={14} />
              {project.linkLabel}
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-[#8892A4] text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Impact bullets */}
        <ul className="grid sm:grid-cols-2 gap-2 mb-5">
          {project.impact.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-[#8892A4]">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: project.color }} />
              {item}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="badge-skill text-[10px] px-2.5 py-0.5">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 section-mid">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Work</p>
          <h2 className="section-heading mb-4">What I&apos;ve Built</h2>
          <p className="text-[#8892A4] max-w-xl mx-auto text-base leading-relaxed">
            Enterprise platforms at scale, and personal projects that push my skills further.
          </p>
        </motion.div>

        {/* ── Professional Work ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <Briefcase size={15} className="text-[#00BFA5]" />
          <span className="text-[#00BFA5] text-xs font-semibold tracking-widest uppercase">
            Professional Work
          </span>
          <div className="flex-1 h-px bg-[#1C2B3E]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 mb-14">
          {professional.map((project, i) => (
            <ProfessionalCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* ── Personal Projects ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <Code2 size={15} className="text-[#3B82F6]" />
          <span className="text-[#3B82F6] text-xs font-semibold tracking-widest uppercase">
            Personal Projects
          </span>
          <div className="flex-1 h-px bg-[#1C2B3E]" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10" style={{ perspective: "1200px" }}>
          {personal.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <TiltCard className="rounded-xl p-4 flex flex-col h-full border border-[#1C2B3E]">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-[#E8F0FF] font-semibold font-[family-name:var(--font-sora)] text-sm">
                      {project.title}
                    </h3>
                    <p className="text-[#3D4F65] text-[11px] mt-0.5">{project.subtitle}</p>
                  </div>
                  <span
                    className="shrink-0 ml-1 px-1.5 py-0.5 rounded text-[9px] font-medium"
                    style={{
                      backgroundColor: `${project.statusColor}18`,
                      color: project.statusColor,
                      border: `1px solid ${project.statusColor}40`,
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-[#8892A4] text-xs leading-relaxed flex-1 mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="badge-skill text-[9px] px-2 py-0.5">{tag}</span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="badge-skill text-[9px] px-2 py-0.5">+{project.tags.length - 3}</span>
                  )}
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-[#1C2B3E]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] text-[#8892A4] hover:text-[#E8F0FF] transition-colors"
                    >
                      <FaGithub size={11} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[11px] text-[#00BFA5] hover:text-[#00D4B8] transition-colors ml-auto"
                    >
                      <ExternalLink size={11} /> Live
                    </a>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/sagurav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#1C2B3E] text-[#8892A4] hover:text-[#E8F0FF] hover:border-[#8892A4] transition-all duration-200 text-sm"
          >
            <FaGithub size={14} /> View all repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
