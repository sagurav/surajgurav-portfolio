"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Awards",     href: "#awards" },
  { label: "Contact",    href: "#contact" },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > 100) {
        setHidden(y > lastY && y > 200);
      } else {
        setHidden(false);
      }
      setLastY(y);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [lastY]);

  return (
    <motion.header
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080E1A]/90 backdrop-blur-xl border-b border-[#1C2B3E]/60 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#00BFA5] flex items-center justify-center text-[#080E1A] font-bold text-sm font-[family-name:var(--font-sora)] group-hover:shadow-[0_0_18px_rgba(0,191,165,0.55)] transition-shadow duration-300">
            SG
          </div>
          <span className="text-[#E8F0FF] font-semibold text-sm font-[family-name:var(--font-sora)] hidden sm:block group-hover:text-[#00BFA5] transition-colors duration-200">
            Suraj Gurav
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="px-3 py-2 rounded-lg text-sm text-[#8892A4] hover:text-[#E8F0FF] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200 font-medium cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="mailto:sagurav0104@gmail.com"
            className="px-4 py-2 rounded-xl text-sm font-semibold border border-[#00BFA5] text-[#00BFA5] hover:bg-[#00BFA5] hover:text-[#080E1A] transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,191,165,0.35)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[#1C2B3E] text-[#8892A4] hover:text-[#E8F0FF] transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#080E1A]/95 backdrop-blur-xl border-b border-[#1C2B3E]"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => { scrollTo(link.href); setMenuOpen(false); }}
                  className="text-left px-3 py-2.5 rounded-lg text-sm text-[#8892A4] hover:text-[#E8F0FF] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href="mailto:sagurav0104@gmail.com"
                className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold text-center border border-[#00BFA5] text-[#00BFA5] hover:bg-[#00BFA5] hover:text-[#080E1A] transition-all duration-200"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
