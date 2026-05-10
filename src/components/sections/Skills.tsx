"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    name: "Frontend",
    emoji: "⚛️",
    label: "text-blue-600 dark:text-blue-400",
    bar: "bg-gradient-to-r from-blue-500 to-indigo-500",
    cardLight: "bg-blue-50/60 border-blue-100",
    cardDark: "dark:bg-blue-950/20 dark:border-blue-900/40",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    name: "Frameworks & Tools",
    emoji: "🛠️",
    label: "text-violet-600 dark:text-violet-400",
    bar: "bg-gradient-to-r from-violet-500 to-purple-500",
    cardLight: "bg-violet-50/60 border-violet-100",
    cardDark: "dark:bg-violet-950/20 dark:border-violet-900/40",
    skills: [
      { name: "Angular", level: 78 },
      { name: "Framer Motion", level: 80 },
      { name: "Material UI / SASS", level: 85 },
      { name: "Git & GitHub", level: 90 },
    ],
  },
  {
    name: "Backend & Database",
    emoji: "🗄️",
    label: "text-emerald-600 dark:text-emerald-400",
    bar: "bg-gradient-to-r from-emerald-500 to-teal-500",
    cardLight: "bg-emerald-50/60 border-emerald-100",
    cardDark: "dark:bg-emerald-950/20 dark:border-emerald-900/40",
    skills: [
      { name: "Node.js / Express", level: 75 },
      { name: "MongoDB", level: 78 },
      { name: "Supabase", level: 82 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    name: "AI & Research",
    emoji: "🧠",
    label: "text-amber-600 dark:text-amber-400",
    bar: "bg-gradient-to-r from-amber-500 to-orange-500",
    cardLight: "bg-amber-50/60 border-amber-100",
    cardDark: "dark:bg-amber-950/20 dark:border-amber-900/40",
    skills: [
      { name: "Python", level: 72 },
      { name: "TensorFlow", level: 68 },
      { name: "Deep Learning (CNN)", level: 70 },
      { name: "OpenCV", level: 65 },
    ],
  },
];

function SkillBar({ name, level, delay, inView, bar }: {
  name: string; level: number; delay: number; inView: boolean; bar: string;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-xs font-mono text-gray-400 dark:text-gray-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${bar}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="relative py-20 px-6 bg-gray-50/60 dark:bg-gray-900/60 overflow-hidden">
      <div className="section-number">04</div>
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>

        <motion.p initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
          Skills
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-3 max-w-2xl">
          My tech arsenal
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-500 dark:text-gray-400 text-sm mb-10 max-w-xl">
          Technologies I use to craft high-performance, maintainable, and scalable products.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((cat, ci) => (
            <motion.div key={cat.name}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + ci * 0.08 }}
              className={`rounded-2xl border ${cat.cardLight} ${cat.cardDark} p-6 hover:shadow-md dark:hover:shadow-gray-900/50 transition-all duration-300`}>

              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-gray-100 dark:border-gray-700/50">
                <span className="text-xl">{cat.emoji}</span>
                <h3 className={`text-sm font-bold ${cat.label}`}>{cat.name}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((sk, si) => (
                  <SkillBar key={sk.name} name={sk.name} level={sk.level}
                    delay={0.2 + ci * 0.08 + si * 0.07} inView={inView} bar={cat.bar} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
