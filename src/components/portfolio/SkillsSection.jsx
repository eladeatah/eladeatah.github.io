import React from "react";
import { motion } from "framer-motion";

const SKILL_GROUPS = [
{
  category: "Languages",
  tags: ["Python", "C++", "CUDA programming"]
},
{
  category: "Frameworks & Libraries",
  tags: ["OpenCV", "PyTorch", "Scikit-Learn", "TensorRT", "ONNX"]
},
{
  category: "Domains",
  tags: ["Generative AI (Diffusion, VAE)", "Classical Computer Vision", "3D Reconstruction", "SLAM", "Object Detection & Tracking"]
}];

export default function SkillsSection() {
  return (
    <section id="skills" className="px-8 md:px-16 lg:px-32 py-32 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}>
          
          

          
          <h2 className="font-display font-800 text-obsidian text-3xl md:text-5xl mt-4 tracking-tight">Skills & Technical Stack

          </h2>
        </motion.div>

        <div className="mt-16 space-y-12">
          {SKILL_GROUPS.map((group, i) =>
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}>
            
              <h3 className="font-mono text-[10px] text-concrete/50 tracking-[0.2em] uppercase mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.tags.map((tag) =>
              <span
                key={tag}
                className="font-mono text-xs border border-obsidian/15 px-4 py-2 text-obsidian hover:border-cobalt hover:text-cobalt transition-colors cursor-default">
                
                    {tag}
                  </span>
              )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}