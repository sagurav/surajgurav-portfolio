"use client";
import { motion } from "framer-motion";
import { ArrowDown, Mail, FileText } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const roles = ["CTO @ VPTech", "AI Engineer", "Software Architect", "Data Engineer", "Tech Leader"];

const stats = [
  { value: "5.5+", label: "Years Experience" },
  { value: "CTO", label: "Current Role" },
  { value: "400+", label: "BI Reports Built" },
  { value: "16", label: "LinkedIn Recommendations" },
];

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-10 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,191,165,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,191,165,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00BFA5]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#3B82F6]/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#21262D] bg-[#0D1117] text-sm text-[#8B949E] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00BFA5] animate-pulse" />
          Available for new opportunities · Brisbane, QLD, Australia
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-sora)] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#E6EDF3] mb-4"
        >
          Suraj{" "}
          <span className="gradient-text">Adhikrao</span>{" "}
          Gurav
        </motion.h1>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <RoleAnimator roles={roles} />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-[#8B949E] text-lg leading-relaxed mb-10"
        >
          Building{" "}
          <span className="text-[#E6EDF3] font-medium">EliteMx</span> — a pre-launch healthcare technology platform.
          5.5+ years across software engineering, data integration, AI, DevOps, and technology leadership.
          IEEE published · Dean&apos;s Commendation · QUT.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-14"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-6 py-3 rounded-xl font-semibold bg-[#00BFA5] text-[#080C10] hover:bg-[#00D4B8] transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,191,165,0.35)] text-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-6 py-3 rounded-xl font-semibold border border-[#21262D] text-[#E6EDF3] hover:border-[#00BFA5] hover:text-[#00BFA5] hover:bg-[rgba(0,191,165,0.05)] transition-all duration-200 text-sm"
          >
            Get In Touch
          </a>
          <a
            href="https://www.linkedin.com/in/suraj-adhikrao-gurav/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold border border-[#21262D] text-[#8B949E] hover:border-[#3B82F6] hover:text-[#3B82F6] hover:bg-[rgba(59,130,246,0.05)] transition-all duration-200 flex items-center gap-2 text-sm"
          >
            <FileText size={15} /> Resume
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-14"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
              className="card-glow rounded-xl p-4 text-center"
            >
              <div className="font-[family-name:var(--font-sora)] text-2xl font-bold text-[#00BFA5] mb-1">
                {stat.value}
              </div>
              <div className="text-[#6E7681] text-xs">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          {[
            { icon: FaGithub, href: "https://github.com/sagurav", label: "GitHub" },
            { icon: FaLinkedinIn, href: "https://linkedin.com/in/suraj-adhikrao-gurav", label: "LinkedIn" },
            { icon: Mail, href: "mailto:sagurav0104@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-10 h-10 rounded-xl border border-[#21262D] flex items-center justify-center text-[#8B949E] hover:text-[#00BFA5] hover:border-[#00BFA5] hover:bg-[rgba(0,191,165,0.08)] transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center gap-1 text-[#6E7681] hover:text-[#00BFA5] transition-colors duration-200 cursor-pointer mx-auto"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}

function RoleAnimator({ roles }: { roles: string[] }) {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {roles.map((role, i) => (
        <motion.span
          key={role}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
          className={`px-3 py-1 rounded-full text-sm font-medium border ${
            i === 0
              ? "border-[#00BFA5] text-[#00BFA5] bg-[rgba(0,191,165,0.08)]"
              : i === 1
              ? "border-[#3B82F6] text-[#3B82F6] bg-[rgba(59,130,246,0.08)]"
              : "border-[#21262D] text-[#8B949E] bg-[#0D1117]"
          }`}
        >
          {role}
        </motion.span>
      ))}
    </div>
  );
}
