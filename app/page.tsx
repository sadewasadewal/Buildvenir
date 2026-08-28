"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import PhotoCarousel from '../components/PhotoCarousel';
import { SiteFooter, SiteHeader } from '../components/SiteShell';

const solutions = [
  { icon: 'dashboard', title: 'Operational clarity', text: 'Create simple, board-ready systems that align decisions, performance, and product delivery.' },
  { icon: 'precision_manufacturing', title: 'Product design', text: 'Human-centered experiences that feel premium without sacrificing speed or trust.' },
  { icon: 'payments', title: 'Financial tooling', text: 'Payments, treasury, onboarding, and workflow automation built around real business logic.' },
  { icon: 'shield', title: 'Security and governance', text: 'Reduce risk with organized controls, clear policies, and resilient systems architecture.' },
];

const credentials = [
  { icon: 'timeline', title: 'Execution discipline', text: 'We work with clear milestones and strong communication to keep projects on track.' },
  { icon: 'speed', title: 'Lean delivery', text: 'Fast-moving teams get structure without unnecessary process or overhead.' },
  { icon: 'verified', title: 'Trust-first work', text: 'Security and compliance are part of the design, not a late-stage patch.' },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="page-shell pb-20 pt-20 md:pt-24">
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-6 flex items-center pt-4 md:pt-8">
                <img
                  src="/images/31f9a486-61c0-40e6-afca-979f141720b3.png"
                  alt="Buildvenir logo"
                  className="h-14 w-auto object-contain md:h-16"
                />
              </div>

              <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] text-slate-900 dark:text-slate-100 md:text-6xl">
                <motion.span
                  initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.96 }}
                  animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className="inline-block"
                >
                  The <span className="brand-script text-[4rem] font-light tracking-[-0.02em] text-slate-900 dark:text-slate-100 md:text-[5rem]">architecture</span> of modern capital.
                </motion.span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                We design calm, secure infrastructure for the teams moving money, products, and trust at scale.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/services" className="soft-button inline-flex rounded-full bg-[#6659e9] px-5 py-3 text-sm font-medium text-white transition duration-200 hover:bg-[#3d358c] hover:text-white dark:bg-[#6659e9] dark:hover:bg-[#3d358c]">
                  Explore services
                </Link>
                <Link href="/security" className="soft-button-secondary inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-700 transition dark:bg-slate-900 dark:text-slate-200">
                  Security overview
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
              <motion.div
                className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-violet-200/70 blur-3xl"
                animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -right-8 bottom-8 h-32 w-32 rounded-full bg-violet-200/80 blur-3xl"
                animate={{ scale: [1, 1.35, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
            </motion.div>
          </div>
        </section>

        <motion.section id="services" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="mx-auto max-w-6xl px-5 py-20 md:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">What we do</p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-slate-100 md:text-5xl">Minimal complexity. Maximum confidence.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solutions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="soft-card rounded-3xl p-6"
              >
                <span className="material-symbols-outlined mb-5 block text-3xl text-slate-900 dark:text-slate-100">{item.icon}</span>
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
          <div className="mb-10 text-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Recent projects</p>
            <motion.h2
              initial={{ opacity: 0, filter: 'blur(12px)', scale: 0.96 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-3xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-slate-100 md:text-5xl"
            >
              Selected work from the <span className="brand-script text-[4rem] font-light tracking-[-0.02em] text-slate-900 dark:text-slate-100 md:text-[5rem]"> studio</span>
            </motion.h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300">
              A snapshot of the modern systems, product experiences, and operational clarity we build for ambitious teams.
            </p>
          </div>

          <PhotoCarousel />
        </section>

        <section className="bg-white py-20 dark:bg-slate-950">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Performance</p>
                <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-slate-100 md:text-5xl">A focused delivery model.</h2>
              </div>
              <Link href="/about" className="soft-button-secondary inline-flex rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition dark:text-slate-200">
                About the studio
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {credentials.map((item) => (
                <div key={item.title} className="soft-card rounded-3xl bg-slate-50 p-6 dark:bg-slate-900">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm dark:bg-slate-950 dark:text-slate-100">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                  <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-5xl px-5 py-20 md:px-8">
          <div className="rounded-[28px] bg-slate-900 p-8 text-white shadow-[0_24px_70px_rgba(15,23,42,0.14)] md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">Start a project</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.05em] md:text-5xl"><span className="brand-script text-[3rem] font-light tracking-[-0.02em] text-white md:text-[4.5rem]">build </span> a cleaner system for your next chapter.</h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="soft-button inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
                Explore solutions
              </Link>
              <a href="mailto:hello@buildvenir.com" className="soft-button-secondary inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-black transition hover:bg-slate-700">
                hello@buildvenir.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
