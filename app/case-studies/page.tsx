import Link from 'next/link';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { SiteFooter, SiteHeader } from '../../components/SiteShell';

const stories = [
  {
    company: 'Northstar AI',
    result: 'Reduced manual ops by 68%',
    summary: 'We rebuilt their internal workflow engine and customer-facing dashboard to connect lead scoring, automation, and account management in one system.',
    metrics: ['9-week delivery', '3 systems unified', '99.9% uptime'],
  },
  {
    company: 'Harbor Health',
    result: 'New patient portal launched in 8 weeks',
    summary: 'Our team mapped the patient journey, unified data sources, and delivered a secure portal with scheduling, messaging, and intake automation.',
    metrics: ['4x faster onboarding', '42% less admin load', 'HIPAA-aligned design'],
  },
  {
    company: 'Signal Ops',
    result: 'Improved pipeline visibility across sales + operations',
    summary: 'We designed a reporting layer and automation stack that gave leadership real-time operational insight without spreadsheet chaos.',
    metrics: ['7 dashboards created', '3 approval flows', 'daily reporting automation'],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell pb-20 pt-28">
        <section className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Case studies</p>
            <AnimatedTitle className="text-4xl font-semibold tracking-[-0.06em] text-slate-900 md:text-6xl">
              <span className="brand-script text-[3.5rem] font-light tracking-[-0.02em] text-slate-900 md:text-[5rem]">systems</span>. Measurable impact.
            </AnimatedTitle>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We work best with teams that need technology to make <span className="brand-script text-[2rem] font-light leading-none text-slate-900">growth</span>, compliance, and operations simpler—not more complicated.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl px-5 md:px-8">
          <div className="space-y-6">
            {stories.map((story) => (
              <article key={story.company} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.03)] md:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">{story.company}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-slate-900">{story.result}</h2>
                  </div>
                  <Link href="/contact" className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                    Discuss a similar project
                  </Link>
                </div>

                <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600">{story.summary}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {story.metrics.map((metric) => (
                    <span key={metric} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-slate-600">
                      {metric}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-5xl px-5 md:px-8">
          <div className="rounded-[28px] bg-slate-900 p-8 text-white md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">Want similar outcomes?</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.05em] md:text-5xl">Build a sharper, calmer operating model for your growth stage.</h2>
            <div className="mt-8">
              <Link href="/services" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
                Explore our services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
