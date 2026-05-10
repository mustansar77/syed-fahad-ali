"use client";

import FadeIn from "@/components/ui/FadeIn";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John van der Berg",
    role: "Property Owner",
    company: "Amsterdam Real Estate",
    avatar: "JB",
    avatarColor: "bg-blue-100 text-blue-700",
    rating: 5,
    text: "Fahad built our property management platform with exceptional attention to detail. The multi-role system works flawlessly and our tenants love how easy it is to submit maintenance requests. Truly professional work.",
  },
  {
    name: "Dr. Sadia Anwar",
    role: "Associate Professor",
    company: "Islamia University of Bahawalpur",
    avatar: "SA",
    avatarColor: "bg-purple-100 text-purple-700",
    rating: 5,
    text: "The feedback evaluation system Fahad developed for our university has transformed how we collect and analyze faculty performance data. Clean, intuitive, and exactly what we needed.",
  },
  {
    name: "Sarah Mitchell",
    role: "E-commerce Manager",
    company: "Xtreme Helmets",
    avatar: "SM",
    avatarColor: "bg-green-100 text-green-700",
    rating: 5,
    text: "Working with Fahad was a pleasure. He's highly professional, communicates clearly, and delivers high-quality work on time. His technical skills and proactive attitude made him an invaluable part of our team.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Testimonials
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              What clients say
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Building long-term relationships through quality, reliability, and clear communication.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 h-full flex flex-col hover:shadow-md hover:bg-white hover:border-gray-200 transition-all duration-300">
                {/* Quote icon */}
                <Quote className="w-6 h-6 text-gray-200 mb-4" />

                {/* Rating */}
                <StarRating count={t.rating} />

                {/* Text */}
                <p className="mt-4 text-sm text-gray-600 leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${t.avatarColor}`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
