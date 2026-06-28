"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sagurav0104@gmail.com",
    href: "mailto:sagurav0104@gmail.com",
    color: "#00BFA5",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+61 449 700 104",
    href: "tel:+61449700104",
    color: "#3B82F6",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "suraj-adhikrao-gurav",
    href: "https://linkedin.com/in/suraj-adhikrao-gurav",
    color: "#0A66C2",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "sagurav",
    href: "https://github.com/sagurav",
    color: "#E6EDF3",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Brisbane, QLD, Australia",
    href: null,
    color: "#F0B429",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-[#0D1117]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#00BFA5] text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
          <h2 className="section-heading mb-4">Let&apos;s Work Together</h2>
          <p className="text-[#8B949E] max-w-xl mx-auto text-base leading-relaxed">
            Open to CTO, AI Engineering, Senior Leadership, and consulting opportunities.
            Based in Brisbane — available for on-site, hybrid, or remote roles.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — contact details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {contactLinks.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl card-glow group cursor-pointer"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}18`, border: `1px solid ${item.color}40` }}
                    >
                      <item.icon size={16} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[#6E7681] text-xs">{item.label}</p>
                      <p className="text-[#E6EDF3] text-sm font-medium group-hover:text-[#00BFA5] transition-colors truncate">
                        {item.value}
                      </p>
                    </div>
                    <ExternalLink size={13} className="text-[#6E7681] group-hover:text-[#00BFA5] transition-colors shrink-0" />
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-xl card-glow">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}18`, border: `1px solid ${item.color}40` }}
                    >
                      <item.icon size={16} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-[#6E7681] text-xs">{item.label}</p>
                      <p className="text-[#E6EDF3] text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right — CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="card-glow rounded-2xl p-8 border-[#00BFA5]/30 shadow-[0_0_40px_rgba(0,191,165,0.06)]"
          >
            <div className="w-12 h-12 rounded-xl bg-[rgba(0,191,165,0.1)] border border-[rgba(0,191,165,0.2)] flex items-center justify-center mb-6">
              <Mail size={22} className="text-[#00BFA5]" />
            </div>
            <h3 className="text-[#E6EDF3] font-bold font-[family-name:var(--font-sora)] text-xl mb-3">
              Ready to build something great?
            </h3>
            <p className="text-[#8B949E] text-sm leading-relaxed mb-8">
              Whether you&apos;re looking for a CTO to lead your technology team, an AI engineer to build intelligent
              systems, or a senior developer to architect your next platform — let&apos;s talk.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:sagurav0104@gmail.com"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold bg-[#00BFA5] text-[#080C10] hover:bg-[#00D4B8] transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,191,165,0.35)] text-sm"
              >
                <Mail size={16} /> Send Me an Email
              </a>
              <a
                href="https://linkedin.com/in/suraj-adhikrao-gurav"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold border border-[#21262D] text-[#8B949E] hover:border-[#0A66C2] hover:text-[#0A66C2] hover:bg-[rgba(10,102,194,0.05)] transition-all duration-200 text-sm"
              >
                <FaLinkedinIn size={16} /> Connect on LinkedIn
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-[#21262D] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00BFA5] animate-pulse" />
              <span className="text-[#6E7681] text-xs">Usually responds within 24 hours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
