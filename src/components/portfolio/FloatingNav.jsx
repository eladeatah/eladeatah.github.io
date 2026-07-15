import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const NAV_ITEMS = [
  { label: "00 — Homepage", href: "#hero" },
  { label: "01 — About", href: "#about" },
  { label: "02 — Experience", href: "#experience" },
  { label: "03 — Education", href: "#education" },
  { label: "04 — Technical Stack", href: "#skills" },
  { label: "05 — Portfolio", href: "#projects" },
  { label: "06 — Contact", href: "#contact" },
];

export default function FloatingNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-8 right-8 z-50 font-mono text-xs tracking-widest uppercase border border-obsidian/20 px-4 py-2 bg-alabaster/90 backdrop-blur-sm hover:border-cobalt hover:text-cobalt transition-colors"
      >
        Index
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-alabaster flex items-center justify-center"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-8 right-8 text-obsidian hover:text-cobalt transition-colors"
            >
              <X size={24} />
            </button>
            <nav className="w-full max-w-3xl px-8">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-4 border-b border-obsidian/10 font-mono text-sm md:text-base text-obsidian hover:text-cobalt hover:pl-4 transition-all"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}