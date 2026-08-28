'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const slides = [
  {
    title: 'Capital systems',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Product operations',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Trust infrastructure',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Finance workflows',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Board visibility',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function PhotoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((activeIndex + 1) % slides.length);
  const prev = () => setActiveIndex((activeIndex - 1 + slides.length) % slides.length);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative flex min-h-[420px] items-center justify-center gap-2 overflow-hidden px-2 md:px-12">
        {slides.map((slide, index) => {
          const offset = index - activeIndex;
          const isVisible = Math.abs(offset) <= 2;
          if (!isVisible) return null;

          const isActive = index === activeIndex;
          const translateX = offset * 170;
          const scale = isActive ? 1 : 0.82;
          const opacity = isActive ? 1 : 0.6;
          const width = isActive ? 'w-[52%] min-w-[240px]' : 'w-[18%] min-w-[140px]';

          return (
            <motion.div
              key={slide.title}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{
                opacity,
                scale,
                x: translateX,
                filter: isActive ? 'blur(0px)' : 'blur(0.4px)',
              }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className={`soft-card relative overflow-hidden rounded-[28px] bg-slate-100 ${width}`}
              style={{ zIndex: isActive ? 10 : 5 - Math.abs(offset) }}
            >
              <img src={slide.image} alt={slide.title} className="h-[300px] w-full object-cover md:h-[360px]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/55 via-slate-950/5 to-transparent p-4 text-white md:p-5">
                {isActive && (
                  <>
                    <p className="mb-1 text-[10px] uppercase tracking-[0.22em] text-slate-200">Featured project</p>
                    <p className="text-lg font-medium tracking-[-0.04em]">{slide.title}</p>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prev}
          className="soft-button-secondary flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 transition"
        >
          <span className="material-symbols-outlined text-base">chevron_left</span>
        </button>

        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? 'w-8 bg-slate-900' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Next slide"
          onClick={next}
          className="soft-button-secondary flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 transition"
        >
          <span className="material-symbols-outlined text-base">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
