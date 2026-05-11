"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import profileImage from "../../../public/profilepic.jpg"

const socials = [
  {
    href: "https://github.com/fahadali6",
    label: "GitHub",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/sfahada/",
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  { href: "mailto:itsfahad92@gmail.com", label: "Email", svg: <Mail className="w-4 h-4" /> },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-40 dot-grid" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white dark:from-gray-950 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-blue-500/10 dark:from-indigo-500/5 dark:via-violet-500/5 dark:to-blue-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── Left: text ── */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center lg:justify-start mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/50 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 leading-none"
            >
              Syed{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                Fahad
              </span>{" "}
              Ali
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg font-medium text-gray-400 dark:text-gray-500 mb-5"
            >
              Full-Stack Developer &amp; Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-gray-500 dark:text-gray-400 max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0"
            >
              "Over the last 3+ years, I have specialized in transforming complex business requirements
              into high-efficiency web applications. By leveraging the React ecosystem, Next.js, and TypeScript,
              I build more than just interfaces I build scalable systems. My focus is on clean, type-safe architecture
              and SEO-first development, ensuring that every product is not only reliable but also discoverable and ready for growth."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25"
              >
                View My Work
              </button>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-7 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                Get In Touch
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              {socials.map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-all duration-200"
                >
                  {svg}
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-shrink-0 relative"
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-indigo-400 via-violet-400 to-blue-400 opacity-15 dark:opacity-20 blur-2xl" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-blue-500 p-0.5">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-950" />
            </div>

            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl shadow-indigo-200/40 dark:shadow-indigo-900/30">
              <Image
                src={profileImage}
                alt="Syed Fahad Ali"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -right-4 top-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 px-3 py-2"
            >
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">Experience</p>
              <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">3+ Years</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -left-4 bottom-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 px-3 py-2"
            >
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">Projects</p>
              <p className="text-lg font-bold text-violet-600 dark:text-violet-400">10+ Done</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 px-3 py-2 whitespace-nowrap"
            >
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium">M.Phil GPA</p>
              <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">3.74 / 4.0</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 dark:text-gray-600"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
