import Link from 'next/link';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { SiteFooter, SiteHeader } from '../../components/SiteShell';

const controls = [
  { icon: 'shield', title: 'Identity and access', text: 'Role-based controls and clear separation of functions across critical workflows.' },
  { icon: 'lock', title: 'Encryption by default', text: 'Built-in protections for data in transit and at rest, aligned to operational needs.' },
  { icon: 'monitor_heart', title: 'Continuous monitoring', text: 'Alerting and visibility across core systems, with clear escalation paths.' },
  { icon: 'verified_user', title: 'Governance', text: 'Audit-ready policies and process documentation designed to stay maintainable.' },
];

const checklist = ['SOC 2-aligned controls', 'Secure deployment pipelines', 'Access reviews and logging', 'Disaster recovery planning'];

export default function SecurityPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell pb-20 pt-28">
        <section className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Security</p>
            <AnimatedTitle className="text-4xl font-semibold tracking-[-0.06em] text-slate-900 md:text-6xl">
              The trust layer <span className="brand-script text-[3.5rem] font-light tracking-[-0.02em] text-slate-900 md:text-[5rem]">behind</span> every workflow.
            </AnimatedTitle>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {controls.map((control) => (
              <div key={control.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.03)]">
                <span className="material-symbols-outlined mb-5 block text-3xl text-slate-900">{control.icon}</span>
                <h2 className="mb-3 text-xl font-semibold text-slate-900">{control.title}</h2>
                <p className="text-base leading-7 text-slate-600">{control.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Security model</p>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-900">Risk controls that stay usable.</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                We reduce security friction by aligning controls to real user and operational needs, not generic checklists. The result is a more <span className="brand-script text-[2rem] font-light leading-none text-slate-900">resilient</span> system, not a heavier one.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-8">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Included</p>
              <ul className="space-y-4 text-base text-slate-700">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-xl text-slate-900">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-5xl px-5 md:px-8">
          <div className="rounded-[28px] bg-slate-900 p-8 text-white md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">Need a safer foundation?</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.05em] md:text-5xl">Build more confidence into every customer touchpoint.</h2>
            <div className="mt-8">
              <Link href="/services" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
                Review service options
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
