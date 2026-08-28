import Link from 'next/link';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { SiteFooter, SiteHeader } from '../../components/SiteShell';

const offices = [
  { label: 'Email', value: 'hello@buildvenir.com' },
  { label: 'Phone', value: '+1 (415) 488-4021' },
  { label: 'Location', value: 'San Francisco, CA' },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell pb-20 pt-28">
        <section className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</p>
              <AnimatedTitle className="text-4xl font-semibold tracking-[-0.06em] text-slate-900 md:text-6xl">
                Tell us what your team is <span className="brand-script text-[3.5rem] font-light tracking-[-0.02em] text-slate-900 md:text-[5rem]">building</span>.
              </AnimatedTitle>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                We help <span className="brand-script text-[2rem] font-light leading-none text-slate-900">startups</span> and growth teams turn technical complexity into clear momentum. Share the challenge, and we’ll map the right next step.
              </p>

              <div className="mt-8 space-y-4">
                {offices.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
                    <div className="mt-2 text-base font-medium text-slate-800">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <form className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.03)] md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="text-sm text-slate-700">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Name</span>
                  <input type="text" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-300" placeholder="Your name" />
                </label>
                <label className="text-sm text-slate-700">
                  <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Email</span>
                  <input type="email" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-300" placeholder="name@company.com" />
                </label>
              </div>

              <label className="mt-5 block text-sm text-slate-700">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Company</span>
                <input type="text" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-300" placeholder="Your company" />
              </label>

              <label className="mt-5 block text-sm text-slate-700">
                <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">Project details</span>
                <textarea rows={6} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-300" placeholder="Tell us about your goals, timeline, and current challenges." />
              </label>

              <div className="mt-8 flex flex-wrap gap-4">
                <button type="submit" className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700">
                  Send inquiry
                </button>
                <Link href="/services" className="inline-flex rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
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
