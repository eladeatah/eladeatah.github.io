import React from "react";
import { motion } from "framer-motion";

// 1. Add 'logo' paths to your EDUCATION array
const EDUCATION = [
  {
    degree: "M.Sc. in Applied Mathematics",
    school: "Tel-Aviv University, GPA: 94",
    location: "Tel-Aviv, Israel",
    period: "2017 – 2023",
    logo: "assets/logo-tau.png",
    items: [
      "Graduated with distinction.",
      "Conducted research for a master's thesis, developing a novel 3D-reconstruction technique using Cryo-EM images of dihedral-symmetric molecules, with angular error of less than 1 degree."
    ]
  },
  {
    degree: "B.Sc. in Applied Mathematics",
    school: "Bar-Ilan University, GPA: 95.6",
    location: "Ramat-Gan, Israel",
    period: "2011 – 2014",
    logo: "assets/logo-biu.png",
    items: [
      "Graduated with distinction at the age of 19 years old."
    ]
  }
];

// 2. Add 'logo' paths to your CERTIFICATES array
const CERTIFICATES = [
  {
    title: "Generative AI Applications",
    source: "School of AI & DT",
    period: "10–11.2023",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=48&h=48&fit=crop&auto=format"
  },
  {
    title: "Adversarial-Learning Course",
    source: "Y-DATA (Yandex)",
    period: "05–07.2021",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=48&h=48&fit=crop&auto=format"
  },
  {
    title: "Advanced Time-Series Course",
    source: "Y-DATA (Yandex)",
    period: "02–04.2021",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=48&h=48&fit=crop&auto=format"
  },
  {
    title: "Machine-Learning",
    source: "Stanford University (Coursera)",
    period: "09–12.2017",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=48&h=48&fit=crop&auto=format"
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="px-8 md:px-16 lg:px-32 py-32">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}>
          <h2 className="font-display font-800 text-obsidian text-3xl md:text-5xl mt-4 tracking-tight">
            Education
          </h2>
        </motion.div>

        {/* Degrees */}
        <div className="mt-16 grid md:grid-cols-2 gap-px bg-obsidian/10">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="bg-alabaster p-8 md:p-12 flex flex-col justify-between"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}>

              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] text-concrete/50 tracking-widest">
                    {edu.period}
                  </span>
                  {/* --- School Logo Added Here --- */}
                  {edu.logo && (
                  <div className="w-20 h-20 rounded-lg bg-white flex items-center justify-center p-1 flex-shrink-0 overflow-hidden">
                    <img
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                </div>

                <h3 className="font-display font-700 text-obsidian text-xl mt-3">
                  {edu.degree}
                </h3>
                <p className="font-mono text-xs text-cobalt mt-1">{edu.school}</p>
                <p className="font-mono text-[10px] text-concrete/40 mt-0.5">{edu.location}</p>

                <ul className="mt-4 space-y-2">
                  {edu.items.map((item, j) => (
                    <li key={j} className="text-sm text-concrete leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-cobalt/40">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}>

          <span className="font-mono text-xs text-concrete/50 tracking-[0.3em] uppercase">
            Certificates
          </span>
          <div className="mt-8 divide-y divide-obsidian/10">
            {CERTIFICATES.map((cert, i) => (
              <div key={cert.title} className="py-4 flex flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div>
                    <h4 className="font-display font-500 text-obsidian text-sm">
                      {cert.title}
                    </h4>
                    <span className="font-mono text-[11px] text-concrete/60 md:hidden">
                      {cert.source} • {cert.period}
                    </span>
                  </div>
                </div>

                <div className="hidden md:flex font-mono text-[11px] text-concrete/60 gap-4">
                  <span>{cert.source}</span>
                  <span className="text-concrete/40">{cert.period}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}