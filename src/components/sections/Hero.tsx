"use client";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CountUp } from "@/components/ui/CountUp";
import { useEffect, useRef, useState } from "react";

const ROLES = [
  "CTO @ VPTech",
  "Forward Deployed AI Engineer",
  "Solution Architect",
  "Technical Delivery Lead",
  "AI Engineer",
  "Data Engineer",
  "Tech Leader",
];

/* ─── Character stagger reveal ─── */
function CharStagger({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.032, delayChildren: delay } },
  };
  const charVariant = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
      aria-label={text}
      style={{ display: "inline-block" }}
    >
      {Array.from(text).map((char, i) => (
        <motion.span
          key={i}
          variants={charVariant}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* ─── Word-by-word reveal (clip from below) ─── */
function WordReveal({
  text,
  delay = 0,
  className,
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", marginRight: "0.28em" }}
        >
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.045,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ─── Magnetic button ─── */
function MagneticBtn({
  children,
  className,
  href,
  target,
  rel,
  "aria-label": ariaLabel,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 22 });
  const sy = useSpring(y, { stiffness: 200, damping: 22 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.28);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.28);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.a>
  );
}

/* ─── Stats config ─── */
const STATS = [
  { countTo: 5, suffix: ".5+", label: "Years Exp." },
  { countTo: null, display: "CTO", label: "Current Role" },
  { countTo: 400, suffix: "+", label: "BI Reports" },
  { countTo: 16, suffix: "", label: "Recommendations" },
];

/* ─── Main Hero ─── */
export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-dvh flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-14 overflow-hidden section-dark"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,191,165,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,191,165,0.022) 1px, transparent 1px)`,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,191,165,0.06) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center w-full">

        {/* ── Status badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#1C2B3E] bg-[#0C1524]/80 text-sm text-[#8892A4] mb-10 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#00BFA5] animate-pulse" />
          Available for new opportunities · Brisbane, QLD, Australia
        </motion.div>

        {/* ── Name — editorial display ── */}
        <h1 className="hero-name mb-5 text-[#E8F0FF]" aria-label="Suraj Adhikrao Gurav">
          <CharStagger text="Suraj " delay={0.08} className="text-[#E8F0FF]" />
          <motion.span
            className="gradient-text inline-block"
            initial={{ opacity: 0, y: "35%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ delay: 0.42, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Adhikrao
          </motion.span>
          <CharStagger text=" Gurav" delay={0.52} className="text-[#E8F0FF]" />
        </h1>

        {/* ── Animated role rotator (slot machine) ── */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-7 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIdx}
              initial={{ y: 45, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -45, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl sm:text-2xl font-semibold text-[#00BFA5] font-[family-name:var(--font-sora)]"
            >
              {ROLES[roleIdx]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* ── Bio — word-by-word reveal ── */}
        <div className="max-w-2xl mx-auto text-[#8892A4] text-base sm:text-lg leading-relaxed mb-11">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }}>
            <WordReveal
              delay={0.9}
              text="Building EliteMx — a pre-launch healthcare technology platform. 5.5+ years across software engineering, data, AI, DevOps and technology leadership."
            />
          </motion.div>
        </div>

        {/* ── CTAs + social ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          {/* Primary CTAs */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <MagneticBtn
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3.5 rounded-xl font-semibold bg-[#00BFA5] text-[#080E1A] hover:bg-[#00D4B8] transition-all duration-200 hover:shadow-[0_0_36px_rgba(0,191,165,0.45)] text-sm"
            >
              View My Work
            </MagneticBtn>
            <MagneticBtn
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-3.5 rounded-xl font-semibold border border-[#1C2B3E] text-[#E8F0FF] hover:border-[#00BFA5] hover:text-[#00BFA5] hover:bg-[rgba(0,191,165,0.05)] transition-all duration-200 text-sm"
            >
              Get In Touch
            </MagneticBtn>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2.5">
            {[
              { icon: FaGithub, href: "https://github.com/sagurav", label: "GitHub" },
              { icon: FaLinkedinIn, href: "https://linkedin.com/in/suraj-adhikrao-gurav", label: "LinkedIn" },
              { icon: Mail, href: "mailto:sagurav0104@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <MagneticBtn
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="w-11 h-11 rounded-xl border border-[#1C2B3E] flex items-center justify-center text-[#8892A4] hover:text-[#00BFA5] hover:border-[#00BFA5] hover:bg-[rgba(0,191,165,0.08)] transition-all duration-200"
              >
                <Icon size={18} />
              </MagneticBtn>
            ))}
          </div>
        </motion.div>

        {/* ── Stats with CountUp ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto mb-14"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 1.5 + i * 0.07 }}
              className="card-glow rounded-xl p-4 text-center"
            >
              <div className="font-[family-name:var(--font-sora)] text-2xl font-bold text-[#00BFA5] mb-1 tabular-nums">
                {stat.countTo !== null ? (
                  <CountUp to={stat.countTo!} suffix={stat.suffix || ""} />
                ) : (
                  stat.display
                )}
              </div>
              <div className="text-[#5A6478] text-xs leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.9 }}
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center gap-1.5 text-[#3D4F65] hover:text-[#00BFA5] transition-colors duration-300 cursor-pointer mx-auto group"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
