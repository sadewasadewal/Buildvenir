import Link from 'next/link';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { SiteFooter, SiteHeader } from '../../components/SiteShell';

const values = [
  { icon: 'groups', title: 'People-first', text: 'We build calm systems that support teams, not friction.' },
  { icon: 'verified', title: 'Trust by default', text: 'Security, governance, and reliability are designed in from the start.' },
  { icon: 'insights', title: 'Measured growth', text: 'Every roadmap decision is connected to business outcomes and operational clarity.' },
];

const timeline = [
  { year: '2016', label: 'Started with a focus on fintech infrastructure and secure tooling.' },
  { year: '2019', label: 'Expanded into product strategy and operations for scaling businesses.' },
  { year: '2024', label: 'Working with modern capital teams across payments, compliance, and platform modernization.' },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell pb-20 pt-28">
        <section className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="soft-pill mb-10 inline-flex items-center rounded-full bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500 dark:bg-slate-900 dark:text-slate-300">
            About Buildvenir
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <AnimatedTitle className="max-w-xl text-4xl font-semibold tracking-[-0.06em] text-slate-900 dark:text-slate-100 md:text-6xl">
                Quietly <span className="brand-script text-[3.5rem] font-light tracking-[-0.02em] text-slate-900 dark:text-slate-100 md:text-[4.5rem]">powerful</span> digital systems.
              </AnimatedTitle>
            </div>
            <p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              We design reliable <span className="brand-script text-[2rem] font-light leading-none text-slate-900 dark:text-slate-100">operating</span> layers for financial teams that need clarity, control, and confidence in how they scale.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="soft-card rounded-3xl bg-white p-6 dark:bg-slate-900">
                <span className="material-symbols-outlined mb-5 block text-3xl text-slate-900 dark:text-slate-100">{value.icon}</span>
                <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">{value.title}</h2>
                <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">By the numbers</p>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-slate-100">Measured outcomes.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-2">
              {[
                ['48', 'launches guided'],
                ['99.98%', 'platform uptime'],
                ['12M+', 'annual transactions'],
              ].map(([value, label]) => (
                <div key={label} className="soft-card rounded-2xl bg-white p-5 dark:bg-slate-900">
                  <div className="text-3xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-slate-100">{value}</div>
                  <div className="mt-2 text-sm text-slate-500 dark:text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-5xl px-5 md:px-8">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Our context</p>
          <div className="space-y-5">
            {timeline.map((item) => (
              <div key={item.year} className="soft-card flex gap-5 rounded-2xl bg-white p-5 dark:bg-slate-900">
                <div className="min-w-[70px] text-2xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-slate-100">{item.year}</div>
                <div className="h-10 w-px bg-slate-200 dark:bg-slate-700" />
                <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto mt-20 max-w-5xl px-5 md:px-8">
          <div className="rounded-[28px] bg-slate-900 p-8 text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)] md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">Let’s build</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.05em] md:text-5xl">Need a clearer system for growth?</h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/services" className="soft-button inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
                Explore services
              </Link>
              <a href="mailto:hello@buildvenir.com" className="soft-button-secondary inline-flex rounded-full bg-slate-800 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
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
