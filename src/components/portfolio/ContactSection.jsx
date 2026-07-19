import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import LegalFooter from "@/components/portfolio/LegalFooter";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:eladeatah@gmail.com?subject=Connection Request&body=From: ${email}`;
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="px-8 md:px-16 lg:px-32 py-32 bg-obsidian text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display font-800 text-white text-3xl md:text-5xl mt-4 tracking-tight">
            Contact
          </h2>
        </motion.div>

        {/* Terminal interface */}
        <motion.div
          className="mt-16 border border-white/10 p-8 md:p-12"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="font-mono text-xs text-white/30 mb-6">
            <span className="text-cobalt">~/elad</span> $ connect --protocol=email
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center gap-2 border-b border-white/20 pb-2 focus-within:border-cobalt transition-colors">
              <span className="font-mono text-sm text-white/40">[user@logic ~]$</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter_email_to_connect_"
                className="flex-1 bg-transparent font-mono text-sm text-white placeholder:text-white/20 outline-none"
                required
              />
              <span className="cursor-blink text-cobalt font-mono">▎</span>
            </div>
            <button
              type="submit"
              className="font-mono text-xs tracking-widest uppercase border border-cobalt text-cobalt px-6 py-3 hover:bg-cobalt hover:text-white transition-colors"
            >
              {submitted ? "CONNECTED" : "EXECUTE"}
            </button>
          </form>

          <div className="mt-8 font-mono text-[11px] text-white/30">
            <p>$ direct: <a href="mailto:eladeatah@gmail.com" className="text-cobalt hover:underline" aria-label="Email Elad Eatah">eladeatah@gmail.com</a></p>
            <p>$ location: Petah Tikva, Israel</p>
          </div>
        </motion.div>

        {/* Social links & footer */}
        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex gap-6">
            <a
              href="https://github.com/eladeatah"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-white/40 hover:text-cobalt transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/elad-eatah-1b56b9186/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-white/40 hover:text-cobalt transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <p className="font-mono text-[10px] text-white/20">
            © {new Date().getFullYear()} Elad Eatah — Engineered with precision
          </p>
        </div>

        <LegalFooter />
      </div>
    </section>
  );
}