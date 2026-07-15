import React from "react";
import { motion } from "framer-motion";

const FOCUS_AREAS = [
{
  title: "Generative AI",
  desc: "VAE and diffusion models for human mesh generation and distribution modeling.",
  metric: "VAE · Diffusion · Normalizing Flows"
},
{
  title: "Computer Vision",
  desc: "SLAM, 3D reconstruction, and high-performance real-time algorithm deployment.",
  metric: "SLAM · VIO · Object Detection"
},
{
  title: "Optimization",
  desc: "Production-grade deployment pipelines — TensorRT, ONNX, and real-time systems.",
  metric: "TensorRT · ONNX · Real-Time"
}];

export default function AboutSection() {
  return (
    <section id="about" className="px-8 md:px-16 lg:px-32 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}>
          
          

          
          <h2 className="font-display font-800 text-obsidian text-3xl md:text-5xl mt-4 tracking-tight">About

          </h2>
        </motion.div>

        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}>
          
          <div className="space-y-6 text-concrete text-base leading-relaxed">
            <p>
              Results-driven Algorithm Engineer and AI Researcher with a strong
              mathematical foundation (M.Sc. in Applied Mathematics, graduated
              B.Sc. with distinction at age 19) and over 8 years of experience.
            </p>
            <p>
              Proven track record of bridging the gap between cutting-edge
              research and production, specializing in generative AI (diffusion
              models, VAEs), computer vision, and classical optimization. Adept
              at designing, optimizing, and deploying high-performance, real-time
              algorithms from scratch to production-grade deployment (TensorRT/ONNX).
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="border border-obsidian/10 p-4">
                <div className="font-display font-800 text-2xl md:text-3xl text-obsidian">8+</div>
                <div className="font-mono text-[10px] text-concrete mt-1 uppercase tracking-wider">Years Exp.</div>
              </div>
              <div className="border border-obsidian/10 p-4">
                <div className="font-display font-800 text-2xl md:text-3xl text-obsidian">M.Sc.</div>
                <div className="font-mono text-[10px] text-concrete mt-1 uppercase tracking-wider">Applied Math</div>
              </div>
              

              
            </div>
          </div>
        </motion.div>

        {/* Focus areas */}
        <div className="mt-32 grid md:grid-cols-3 gap-px bg-obsidian/10">
          {FOCUS_AREAS.map((area, i) =>
          <motion.div
            key={area.title}
            className="bg-alabaster p-8 group hover:bg-white transition-colors"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}>
            
              

            
              <h3 className="font-display font-700 text-xl text-obsidian mt-4">
                {area.title}
              </h3>
              <p className="text-concrete text-sm mt-3 leading-relaxed">
                {area.desc}
              </p>
              <p className="font-mono text-[11px] text-concrete/60 mt-6 border-t border-obsidian/10 pt-4">
                {area.metric}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}