'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const slides = [
  {
    title: 'Capital infrastructure',
    subtitle: 'Modern treasury and payments systems for trust-driven teams.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Secure product operations',
    subtitle: 'Operational clarity built into every service layer.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Board-ready reporting',
    subtitle: 'Metrics visibility that supports confident decision making.',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function PhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = slides[activeIndex];

  const next = () => setActiveIndex((activeIndex + 1) % slides.length);
  const prev = () => setActiveIndex((activeIndex - 1 + slides.length) % slides.length);

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
      <div className="relative overflow-hidden rounded-[22px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.title}
            src={current.image}
            alt={current.title}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="h-[420px] w-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent p-6 text-white">
          <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-slate-300">Featured work</p>
          <h3 className="text-2xl font-semibold tracking-[-0.04em]">{current.title}</h3>
          <p className="mt-2 max-w-md text-sm text-slate-200">{current.subtitle}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 px-2 pb-2">
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? 'w-7 bg-slate-900' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={prev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            <span className="material-symbols-outlined text-base">chevron_left</span>
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={next}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-900 text-white transition hover:bg-slate-700"
          >
            <span className="material-symbols-outlined text-base">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
