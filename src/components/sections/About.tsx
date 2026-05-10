"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 3, suffix: "+", label: "Years Experience", color: "text-indigo-600 dark:text-indigo-400" },
  { value: 10, suffix: "+", label: "Projects Shipped", color: "text-violet-600 dark:text-violet-400" },
  { value: 8, suffix: "+", label: "Technologies", color: "text-blue-600 dark:text-blue-400" },
  { value: 5, suffix: "+", label: "Happy Clients", color: "text-emerald-600 dark:text-emerald-400" },
];

const highlights = [
  {
    emoji: "⚛️",
    title: "React & Next.js Expert",
    desc: "3+ years building scalable frontends from pixel-perfect UIs to robust integrations.",
    light: "bg-blue-50 border-blue-100",
    dark: "dark:bg-blue-950/30 dark:border-blue-900/50",
    iconBg: "bg-blue-600",
  },
  {
    emoji: "🧠",
    title: "Deep Learning Research",
    desc: "M.Phil thesis on Plant Disease Detection using CNNs — AI research meets real-world impact.",
    light: "bg-violet-50 border-violet-100",
    dark: "dark:bg-violet-950/30 dark:border-violet-900/50",
    iconBg: "bg-violet-600",
  },
  {
    emoji: "🌍",
    title: "Client-Focused Delivery",
    desc: "Production-grade platforms for Amsterdam-based clients and local educational institutions.",
    light: "bg-emerald-50 border-emerald-100",
    dark: "dark:bg-emerald-950/30 dark:border-emerald-900/50",
    iconBg: "bg-emerald-600",
  },
  {
    emoji: "🎓",
    title: "M.Phil Computer Science",
    desc: "GPA 3.74 at IUB — combining academic research with professional engineering discipline.",
    light: "bg-amber-50 border-amber-100",
    dark: "dark:bg-amber-950/30 dark:border-amber-900/50",
    iconBg: "bg-amber-500",
  },
];

function Counter({ value, suffix, color }: { value: number; suffix: string; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const steps = 40;
    let current = 0;
    const timer = setInterval(() => {
      current += value / steps;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 1400 / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className={`text-4xl font-bold ${color}`}>
        {count}<span className="text-gray-300 dark:text-gray-700">{suffix}</span>
      </p>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="relative py-20 px-6 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="section-number">01</div>
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>

        <motion.p initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
          About
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6 max-w-2xl">
          The person behind the code
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mb-10 space-y-3 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
          <p>I&apos;m a Frontend Developer and Software Engineer with 3+ years of experience building high-efficiency web applications — from React component libraries to full-stack MERN platforms.</p>
          <p>Pursuing my M.Phil in CS at IUB, I blend academic research with real-world engineering. My Deep Learning thesis on Plant Disease Detection reflects my passion for applying AI to meaningful problems.</p>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-10 border-b border-gray-100 dark:border-gray-800 mb-10">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter value={s.value} suffix={s.suffix} color={s.color} />
              <p className="text-xs text-gray-400 dark:text-gray-600 text-center mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {highlights.map((h, i) => (
            <motion.div key={h.title}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
              className={`p-5 rounded-2xl border ${h.light} ${h.dark} hover:shadow-md transition-all duration-300`}>
              <div className={`w-9 h-9 flex items-center justify-center rounded-xl ${h.iconBg} text-white text-lg mb-3`}>
                {h.emoji}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1.5">{h.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
