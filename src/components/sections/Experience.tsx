"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Senior Web Developer",
    company: "HurTech LLC",
    location: "Pakistan",
    period: "2022 — Present",
    type: "Full-time",
    gradient: "from-blue-600 to-indigo-600",
    tagLight: "bg-blue-50 text-blue-600 border-blue-200",
    tagDark: "dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/50",
    points: [
      "Managing and enhancing React and Angular-based web systems across multiple product lines.",
      "Built reusable component libraries reducing development time by 30% across modules.",
      "Integrated REST APIs and managed application state with Redux and Context API.",
      "Optimized Core Web Vitals, rendering performance, and overall page load speed.",
      "Conducted code reviews and maintained engineering standards across the team.",
    ],
    tech: ["React", "Angular", "TypeScript", "Redux", "REST APIs", "Tailwind CSS"],
  },
  {
    role: "Virtual Assistant",
    company: "Xtreme Helmets",
    location: "Remote",
    period: "2021 — Present",
    type: "Remote",
    gradient: "from-emerald-500 to-teal-600",
    tagLight: "bg-emerald-50 text-emerald-600 border-emerald-200",
    tagDark: "dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/50",
    points: [
      "Managed product listings and inventory across multiple e-commerce platforms.",
      "Coordinated with international clients and vendors on order fulfilment.",
      "Streamlined customer support workflows and reduced response times.",
      "Created weekly performance reports to support business decision-making.",
    ],
    tech: ["Shopify", "E-commerce", "Client Management", "Data Entry"],
  },
  // {
  //   role: "Leads Expert",
  //   company: "Epic Technology",
  //   location: "Pakistan",
  //   period: "2020 — 2021",
  //   type: "Full-time",
  //   gradient: "from-violet-500 to-purple-600",
  //   tagLight: "bg-violet-50 text-violet-600 border-violet-200",
  //   tagDark: "dark:bg-violet-950/40 dark:text-violet-400 dark:border-violet-800/50",
  //   points: [
  //     "Generated high-quality B2B leads using Apollo.io, Hunter.io, and LinkedIn Sales Navigator.",
  //     "Consistently hit monthly lead targets with 85%+ data accuracy.",
  //     "Built and maintained CRM databases to improve sales team efficiency.",
  //     "Developed outreach sequences that improved reply rates by 20%.",
  //   ],
  //   tech: ["Apollo.io", "Hunter.io", "LinkedIn Sales Navigator", "CRM"],
  // },

   {
    role: "Software Developer",
    company: "Islamia University of Bahawalpur",
    location: "Pakistan",
    period: "2016 — 2017",
    type: "Full-time",
    gradient: "from-violet-500 to-purple-600",
    tagLight: "bg-violet-50 text-violet-600 border-violet-200",
    tagDark: "dark:bg-violet-950/40 dark:text-violet-400 dark:border-violet-800/50",
    points: [
      "Generated high-quality B2B leads using Apollo.io, Hunter.io, and LinkedIn Sales Navigator.",
      "Consistently hit monthly lead targets with 85%+ data accuracy.",
      "Built and maintained CRM databases to improve sales team efficiency.",
      "Developed outreach sequences that improved reply rates by 20%.",
    ],
    tech: ["Apollo.io", "Hunter.io", "LinkedIn Sales Navigator", "CRM"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="relative py-20 px-6 bg-gray-50/60 dark:bg-gray-900/60 overflow-hidden">
      <div className="section-number">02</div>
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>

        <motion.p initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
          Experience
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-12 max-w-2xl">
          Where I&apos;ve made an impact
        </motion.h2>

        <div className="grid grid-cols-1 gap-5">
          {experiences.map((exp, i) => (
            <motion.div key={exp.company}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              className="group bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900/60 hover:-translate-y-1 transition-all duration-300">

              {/* Gradient header */}
              <div className={`bg-gradient-to-r ${exp.gradient} px-6 py-5`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">{exp.role}</h3>
                      <p className="text-white/75 text-sm font-medium mt-0.5">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-start sm:items-end gap-2">
                    <span className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                      {exp.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-white/70 text-xs font-mono">
                      <Calendar className="w-3 h-3" />{exp.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-5">
                  <MapPin className="w-3.5 h-3.5" />{exp.location}
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
                  {exp.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-indigo-400 dark:bg-indigo-500 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700/50">
                  {exp.tech.map((t) => (
                    <span key={t}
                      className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${exp.tagLight} ${exp.tagDark}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
