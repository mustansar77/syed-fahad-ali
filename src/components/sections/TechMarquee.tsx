"use client";

import FadeIn from "@/components/ui/FadeIn";

const techStack = [
  { name: "React", emoji: "⚛️" },
  { name: "Next.js", emoji: "▲" },
  { name: "TypeScript", emoji: "🔷" },
  { name: "Tailwind CSS", emoji: "🎨" },
  { name: "Framer Motion", emoji: "✨" },
  { name: "Angular", emoji: "🅰️" },
  { name: "MongoDB", emoji: "🍃" },
  { name: "Supabase", emoji: "⚡" },
  { name: "Node.js", emoji: "💚" },
  { name: "Python", emoji: "🐍" },
  { name: "TensorFlow", emoji: "🧠" },
  { name: "MySQL", emoji: "🗄️" },
  { name: "SASS", emoji: "💅" },
  { name: "Material UI", emoji: "🎭" },
  { name: "Git & GitHub", emoji: "🐙" },
];

function TechBadge({ name, emoji }: { name: string; emoji: string }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm mx-2 flex-shrink-0">
      <span className="text-lg">{emoji}</span>
      <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function TechMarquee() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="py-20 bg-gray-50/50 overflow-hidden">
      <FadeIn>
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Technology Toolbox
          </span>
          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            Tools I work with
          </h2>
        </div>
      </FadeIn>

      {/* Marquee wrapper */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="animate-marquee flex items-center py-2">
            {doubled.map((tech, i) => (
              <TechBadge key={`${tech.name}-${i}`} name={tech.name} emoji={tech.emoji} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
