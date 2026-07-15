import React from "react";
import { motion } from "framer-motion";

// 1. Add 'logo' paths to your EXPERIENCES array
const EXPERIENCES = [
  {
    role: "AI Researcher",
    company: "Bladerunner Labs Ltd.",
    period: "2025 – 2026",
    location: "Ramat-Gan, Israel",
    logo: "assets/logo-bladerunner.png",
    items: [
      "Developed and deployed a VAE model of human meshes.",
      "Developed a diffusion model for generating human meshes in various poses.",
      "Maintained a normalizing flow model for converting between different distributions.",
      "Converted a SAM3 model to ONNX & TensorRT for deployment and integrated it to production."
    ]
  },
  {
    role: "Computer Vision Engineer",
    company: "CyberBee Ltd.",
    period: "2023 – 2023",
    location: "Rosh-Haayin, Israel",
    logo: "assets/logo-cyberbee.png",
    items: [
      "Developed and deployed real-time solutions for drone simultaneous localization and mapping (SLAM), both in Python and in C++.",
      "Performed feature detection & matching, optical flow, PnP and structure from motion.",
      "Developed camera & IMU calibration solutions for different lenses models.",
      "Successfully deployed solutions for a drone in a lab and in a controlled environment."
    ]
  },
  {
    role: "Algorithm Engineer",
    company: "RTC-Vision Ltd.",
    period: "2021 – 2022",
    location: "Rosh-Haayin, Israel",
    logo: "assets/logo-rtc.png",
    items: [
      "Developed and delivered classical and deep-learning based solutions for 3D tomographic reconstruction, defect-detection, localization.",
      "Successfully performed POCs for multiple customers."
    ]
  },
  {
    role: "Algorithm Developer",
    company: "IDF Navy",
    period: "2014 – 2019",
    location: "Israel",
    logo: "assets/logo-navy.png",
    items: [
      "Developed and delivered real-time algorithms for marine defense-systems, currently installed on IDF navy vessels.",
      "Solving problems such as defense tactics optimization, motion estimation & planning, tasks & resources scheduling etc."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-8 md:px-16 lg:px-32 py-32 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}>
          <h2 className="font-display font-800 text-obsidian text-3xl md:text-5xl mt-4 tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="mt-16 relative">
          {/* Vertical trace */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-obsidian/10" />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative pl-8 md:pl-16 pb-16 last:pb-0 group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}>

              {/* Dot on timeline */}
              <div className="absolute left-0 md:left-4 top-2 -translate-x-1/2 w-2 h-2 bg-obsidian/20 group-hover:bg-cobalt transition-colors" />

              <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                {/* Date & Location column */}
                <div className="font-mono text-[11px] text-concrete/60 md:w-48 flex-shrink-0 pt-1">
                  {exp.period}
                  <br />
                  <span className="text-concrete/40">{exp.location}</span>
                </div>

                {/* Content & Logo column */}
                <div className="mt-2 md:mt-0 flex-1">
                  <div className="flex items-start gap-4">
                    {/* --- Company Logo added here --- */}
                    {exp.logo && (
                      <div className="w-20 h-20 rounded-lg  bg-white flex items-center justify-center p-1 flex-shrink-0 overflow-hidden">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-display font-700 text-obsidian text-lg leading-tight">
                        {exp.role}
                      </h3>
                      <p className="font-mono text-xs text-cobalt mt-1">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.items.map((item, j) => (
                      <li key={j} className="text-sm text-concrete leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-cobalt/40">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}