"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#080C10]/90 backdrop-blur-xl border-b border-[#21262D]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-[#00BFA5] flex items-center justify-center text-[#080C10] font-bold text-sm font-[family-name:var(--font-sora)]">
              SG
            </div>
            <span className="text-[#E6EDF3] font-semibold font-[family-name:var(--font-sora)] hidden sm:block group-hover:text-[#00BFA5] transition-colors duration-200">
              Suraj Gurav
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  active === link.href
                    ? "text-[#00BFA5] bg-[rgba(0,191,165,0.08)]"
                    : "text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#161B22]"
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:sagurav0104@gmail.com"
              className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#00BFA5] text-[#080C10] hover:bg-[#00D4B8] transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,191,165,0.3)]"
            >
              Hire Me
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#161B22] transition-colors duration-200 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#0D1117]/95 backdrop-blur-xl border-b border-[#21262D] md:hidden"
          >
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-3 rounded-lg text-left text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#161B22] transition-all duration-200 font-medium cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="mailto:sagurav0104@gmail.com"
                className="mt-2 px-4 py-3 rounded-lg text-center font-semibold bg-[#00BFA5] text-[#080C10] hover:bg-[#00D4B8] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
