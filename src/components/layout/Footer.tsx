import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[#21262D] bg-[#0D1117]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#00BFA5] flex items-center justify-center text-[#080C10] font-bold text-xs font-[family-name:var(--font-sora)]">
              SG
            </div>
            <span className="text-[#E6EDF3] font-semibold font-[family-name:var(--font-sora)]">
              Suraj Adhikrao Gurav
            </span>
          </div>
          <p className="text-[#8B949E] text-sm">CTO & AI Engineer · Brisbane, Australia</p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { icon: FaGithub, href: "https://github.com/sagurav", label: "GitHub" },
            { icon: FaLinkedinIn, href: "https://linkedin.com/in/suraj-adhikrao-gurav", label: "LinkedIn" },
            { icon: Mail, href: "mailto:sagurav0104@gmail.com", label: "Email" },
            { icon: Phone, href: "tel:+61449700104", label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-9 h-9 rounded-lg border border-[#21262D] flex items-center justify-center text-[#8B949E] hover:text-[#00BFA5] hover:border-[#00BFA5] hover:bg-[rgba(0,191,165,0.08)] transition-all duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-[#6E7681] text-xs text-center md:text-right">
          © {new Date().getFullYear()} Suraj Adhikrao Gurav · v1.0.0
          <br />
          Built with Next.js · TypeScript · Tailwind
        </p>
      </div>
    </footer>
  );
}
