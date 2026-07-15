const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
{
  title: "Cryo-EM 3D Reconstruction",
  category: "Research · Dihedral-Symmetric Molecules",
  efficiency: "<1° Angular Error",
  image: "assets/cryo_em_images.png",
  link: "https://github.com/PrincetonUniversity/aspire",
  desc: "Novel 3D-reconstruction technique using Cryo-EM images of dihedral-symmetric molecules."
},
/*{
  title: "SAM3 Production Deployment",
  category: "Optimization · TensorRT & ONNX",
  efficiency: "+25% Throughput",
  image: "https://media.base44.com/images/public/6a5766f514687c6724ae5d4b/4df9b3bf8_generated_ff21456a.png",
  link: "#",
  desc: "Converted SAM3 model to ONNX & TensorRT for real-time production deployment."
},*/
{
  title: "Human Mesh Generation",
  category: "Generative AI · VAE & Diffusion",
  efficiency: "Real-Time Inference",
  image: "assets/smpl-vae-architecture.png",
  link: "#",
  desc: "VAE and diffusion models for generating human meshes in various poses."
},
/*{
  title: "Visual Positioning System",
  category: "SLAM · GPS-Denied Navigation",
  efficiency: "Sub-meter Accuracy",
  image: "assets/naval",
  link: "#",
  desc: "VPS algorithms for autonomous drone navigation in GPS-denied environments."
}*/];

export default function ProjectsSection() {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      setScrollProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="projects" className="py-32">
      <div className="px-8 md:px-16 lg:px-32 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}>




          <h2 className="font-display font-800 text-obsidian text-3xl md:text-5xl mt-4 tracking-tight">
            Problem → Algorithm → Impact
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto hide-scrollbar px-8 md:px-16 lg:px-32 pb-8">

        {PROJECTS.map((project, i) =>
        <motion.a
          key={project.title}
          href={project.link}
          target={project.link !== "#" ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="flex-shrink-0 w-80 md:w-96 group"
          initial={{ opacity: 0, x: 64 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}>

            {/* Image with bounding box hover */}
            <div className="relative overflow-hidden bg-obsidian/5 aspect-[3/2]">
              <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

              {/* Bounding box on hover */}
              <div className="absolute inset-2 border border-cobalt/0 group-hover:border-cobalt/40 transition-colors pointer-events-none">
                <span className="absolute top-1 left-1 font-mono text-[9px] text-cobalt/0 group-hover:text-cobalt/60 transition-colors">
                  960×640
                </span>
                <span className="absolute bottom-1 right-1 font-mono text-[9px] text-cobalt/0 group-hover:text-cobalt/60 transition-colors">
                  IMG_{String(i).padStart(3, "0")}
                </span>
              </div>
              {/* Efficiency badge */}
              <div className="absolute top-4 right-4 bg-cobalt text-white font-mono text-[10px] px-3 py-1 tracking-wider">
                {project.efficiency}
              </div>
            </div>

            {/* Card content */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-600 text-obsidian text-lg group-hover:text-cobalt transition-colors">
                  {project.title}
                </h3>
                <ArrowRight size={16} className="text-concrete group-hover:text-cobalt group-hover:translate-x-1 transition-all" />
              </div>
              <p className="font-mono text-[11px] text-concrete/60 mt-1">
                {project.category}
              <div className="mt-4 pt-4 border-t border-obsidian/10 font-mono text-[10px] text-concrete/50">
                COMPLEXITY: {project.complexity}
              </div>
              </p>
              <p className="text-sm text-concrete mt-3 leading-relaxed">
                {project.desc}
              </p>
            </div>
          </motion.a>
        )}
      </div>

      {/* Scroll progress bar */}
      <div className="mx-8 md:mx-16 lg:mx-32 mt-8 h-px bg-obsidian/10 relative">
        <div
          className="absolute top-0 left-0 h-full bg-cobalt transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }} />

      </div>
    </section>);

}