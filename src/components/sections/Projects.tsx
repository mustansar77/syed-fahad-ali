"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, GitFork, ArrowRight, Star } from "lucide-react";

const projects = [
 {
    label: "Featured Project",
    title: "Vaulta E-commerce Store",
    subtitle: "Full-Stack MERN System",
    description: "A premium high-performance retail platform specializing in luxury bags. Features a seamless shopping experience with real-time inventory management, secure payment integration, and a dedicated administrative dashboard for order fulfillment.",
    bullets: [
      "Dynamic product catalog with advanced filtering and search",
      "Secure Stripe/PayPal integration for streamlined checkout",
      "User profile management with order tracking and wishlists",
      "Admin panel for inventory control and sales analytics",
    ],
    tech: ["React", "Next.js","Typescript" , "Supabases", "JWT", "Tailwind CSS"],
    status: "Production",
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    tagLight: "bg-blue-50 text-blue-600 border-blue-200",
    tagDark: "dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-800/50",
    emoji: "🛍️", // Updated from 🏢 to 🛍️
  },
 
  {
    label: "Featured Project",
    title: "IBEX Institute",
    subtitle: "Educational Website & CMS",
    description: "A high-performance institutional platform designed to showcase academic programs and streamline student inquiries. Built with an SEO-first architecture to maximize local search visibility and a custom CMS for real-time course updates.",
    bullets: [
      "Modular UI components for dynamic course and faculty listings",
      "SEO-optimized structure for improved ranking and search reach",
      "Fully responsive, mobile-first design using Tailwind CSS",
      "Integrated lead generation forms and student resources",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Cloudinary"],
    status: "Production",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    tagLight: "bg-violet-50 text-violet-600 border-violet-200",
    tagDark: "dark:bg-violet-950/30 dark:text-violet-400 dark:border-violet-800/50",
    emoji: "🎓", // Updated from 📊 to 🎓
  },
  {
    label: "Research Project",
    title: "Plant Disease Detection",
    subtitle: "M.Phil Thesis — Deep Learning & Computer Vision",
    description: "AI-powered web application using CNNs trained on 50,000+ annotated leaf images to diagnose 38 plant disease categories, giving farmers real-time results via a clean web interface.",
    bullets: [
      "92%+ accuracy across 38 plant disease categories",
      "Trained on 50,000+ annotated plant leaf images",
      "Real-time inference via Flask REST API",
      "Upload interface with confidence score display",
    ],
    tech: ["Python", "TensorFlow",   "MATLAB", "OpenCV","CNN",],
    status: "Research",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    tagLight: "bg-emerald-50 text-emerald-700 border-emerald-200",
    tagDark: "dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800/50",
    emoji: "🌿",
  },
  {
    label: "Full-Stack Project",
    title: "Hurtech LLC",
    subtitle: "Modern company website",
    description: "The official digital presence for a global technology agency. Built with a focus on SEO-first architecture and clean code principles, it showcases high-performance web solutions, AI-driven automation services, and a 'Squad-in-a-Box' talent model.",
    bullets: [
      "Optimized for high-speed performance and search engine visibility",
      "Dynamic service modules showcasing MERN and Next.js expertise",
      "Lead generation system for technical consultancy and partnerships",
      "Modern, scalable architecture using modular design patterns",
    ],
    tech: ["Next.js", "MongoDB", "Stripe", "NextAuth", "TypeScript", "Tailwind CSS"],
    status: "Live",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    tagLight: "bg-rose-50 text-rose-700 border-rose-200",
    tagDark: "dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-800/50",
    emoji: "👜",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" className="relative py-20 px-6 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="section-number">03</div>
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>

        <motion.p initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
          Projects
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-12 max-w-2xl">
          Things I&apos;ve built
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.09 }}
              className="group bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50 overflow-hidden hover:shadow-2xl dark:hover:shadow-gray-900/70 hover:-translate-y-1.5 transition-all duration-300 flex flex-col">

              {/* Gradient banner */}
              <div className={`relative bg-gradient-to-br ${p.gradient} p-6 overflow-hidden`}>
                {/* Decorative blobs */}
                <div className="absolute -top-8 -right-8 w-36 h-36 bg-white/10 rounded-full pointer-events-none" />
                <div className="absolute -bottom-10 -left-6 w-28 h-28 bg-black/10 rounded-full pointer-events-none" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/25 mb-3">
                      <Star className="w-3 h-3" />
                      {p.label}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight mb-1">{p.title}</h3>
                    <p className="text-white/70 text-xs leading-relaxed">{p.subtitle}</p>
                  </div>
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center border border-white/20 text-2xl">
                    {p.emoji}
                  </div>
                </div>

                {/* Status + actions */}
                <div className="relative flex items-center justify-between mt-4 pt-4 border-t border-white/20">
                  <span className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    {p.status}
                  </span>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-medium transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />Live
                    </button>
                    <button className="flex items-center gap-1.5 text-white/60 hover:text-white/90 text-xs transition-colors">
                      <GitFork className="w-3.5 h-3.5" />Code
                    </button>
                  </div>
                </div>
              </div>

              {/* Content body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{p.description}</p>

                <ul className="space-y-2 mb-5 flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                      <ArrowRight className="w-3.5 h-3.5 mt-0.5 text-gray-400 dark:text-gray-600 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-700/50">
                  {p.tech.map((t) => (
                    <span key={t}
                      className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${p.tagLight} ${p.tagDark}`}>
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
