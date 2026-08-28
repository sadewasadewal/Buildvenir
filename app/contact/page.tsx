import Link from 'next/link';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { SiteFooter, SiteHeader } from '../../components/SiteShell';

const offices = [
  { label: 'Email', value: 'hello@buildvenir.com' },
  { label: 'Phone', value: '+94 71 904 4433' },
  { label: 'Location', value: 'Colombo, Sri Lanka' },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell pb-20 pt-28">
        <section className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Contact</p>
              <AnimatedTitle className="text-4xl font-semibold tracking-[-0.06em] text-slate-900 dark:text-slate-100 md:text-6xl">
                Tell us what your team is <span className="brand-script text-[3.5rem] font-light tracking-[-0.02em] text-slate-900 dark:text-slate-100 md:text-[5rem]">building</span>.
              </AnimatedTitle>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                We help <span className="brand-script text-[2rem] font-light leading-none text-slate-900 dark:text-slate-100">startups</span> and growth teams turn technical complexity into clear momentum. Share the challenge, and we’ll map the right next step.
              </p>

              <div className="mt-8 space-y-4">
                {offices.map((item) => (
                  <div key={item.label} className="soft-card rounded-2xl bg-white p-4 dark:bg-slate-900">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">{item.label}</div>
                    <div className="mt-2 text-base font-medium text-slate-800 dark:text-slate-100">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <form className="soft-card rounded-[28px] bg-white p-6 dark:bg-slate-900 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="text-sm text-slate-700 dark:text-slate-200">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">Name</span>
                  <input type="text" className="w-full rounded-2xl border-0 bg-slate-50 px-4 py-3 text-slate-900 outline-none shadow-[0_12px_24px_rgba(15,23,42,0.04)] transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-200 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-violet-500/40" placeholder="Your name" />
                </label>
                <label className="text-sm text-slate-700 dark:text-slate-200">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">Email</span>
                  <input type="email" className="w-full rounded-2xl border-0 bg-slate-50 px-4 py-3 text-slate-900 outline-none shadow-[0_12px_24px_rgba(15,23,42,0.04)] transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-200 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-violet-500/40" placeholder="name@company.com" />
                </label>
              </div>

              <label className="mt-5 block text-sm text-slate-700 dark:text-slate-200">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">Company</span>
                <input type="text" className="w-full rounded-2xl border-0 bg-slate-50 px-4 py-3 text-slate-900 outline-none shadow-[0_12px_24px_rgba(15,23,42,0.04)] transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-200 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-violet-500/40" placeholder="Your company" />
              </label>

              <label className="mt-5 block text-sm text-slate-700 dark:text-slate-200">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">Project details</span>
                <textarea rows={6} className="w-full rounded-2xl border-0 bg-slate-50 px-4 py-3 text-slate-900 outline-none shadow-[0_12px_24px_rgba(15,23,42,0.04)] transition placeholder:text-slate-400 focus:ring-2 focus:ring-violet-200 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:ring-violet-500/40" placeholder="Tell us about your goals, timeline, and current challenges." />
              </label>

              <div className="mt-8 flex flex-wrap gap-4">
                <button type="submit" className="soft-button inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-violet-500 dark:hover:bg-violet-400">
                  Send inquiry
                </button>
                <Link href="/services" className="soft-button-secondary inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-700 transition dark:bg-slate-900 dark:text-slate-200">
                  Review services
                </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
