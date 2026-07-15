const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HERO_IMAGE = "assets/background.jpeg";

export default function HeroSection() {
  const [loadTime, setLoadTime] = useState(null);

  useEffect(() => {
    const perf = performance.getEntriesByType("navigation")[0];
    if (perf) {
      setLoadTime(Math.round(perf.loadEventEnd - perf.startTime));
    }
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-end overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Precision optical instrument macro photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-alabaster via-alabaster/80 to-alabaster/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-32 pb-16 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-mono text-s text-cobalt tracking-[0.3em] uppercase mb-4">
            Algorithm Engineer · AI Researcher · Computer Vision Engineer
          </p>
          <h1 className="font-display font-900 text-obsidian leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(3rem, 12vw, 12rem)" }}>
            Elad Eatah
          </h1>
          <p className="mt-8 max-w-xl text-obsidian/70 text-base md:text-lg leading-relaxed font-medium">
            Bridging cutting-edge research and production — specializing in
            generative AI (diffusion models, VAEs), computer vision, and
            classical optimization. M.Sc. Applied Mathematics · 8+ years.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:eladeatah@gmail.com" className="font-mono text-xs text-obsidian/60 hover:text-cobalt transition-colors">eladeatah@gmail.com</a>
            <span className="font-mono text-xs text-obsidian/30">·</span>
            <a href="https://github.com/eladeatah" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-obsidian/60 hover:text-cobalt transition-colors">github/eladeatah</a>
            <span className="font-mono text-xs text-obsidian/30">·</span>
            <span className="font-mono text-xs text-obsidian/60">Petah-Tikva, Israel</span>
          </div>
        </motion.div>
      </div>

      {/* Performance metric */}
      <div className="absolute top-8 left-8 md:left-16 lg:left-32 z-10 font-mono text-[10px] text-concrete/60">
        <div>RENDER</div>
        <div className="text-cobalt">{loadTime ? `${loadTime}ms` : "—"}</div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-mono text-[10px] text-concrete/50 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-cobalt/30" />
      </motion.div>
    </section>
  );
}