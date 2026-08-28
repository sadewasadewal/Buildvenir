import Link from 'next/link';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { SiteFooter, SiteHeader } from '../../components/SiteShell';

const offerings = [
  {
    icon: 'rocket_launch',
    title: 'Product engineering',
    text: 'Design and build the digital products your roadmap needs, from prototype to production-ready systems that can scale with your market.',
  },
  {
    icon: 'smart_toy',
    title: 'AI workflows',
    text: 'Automate repetitive back-office work, customer support flows, and internal operations with practical AI systems that remain secure and measurable.',
  },
  {
    icon: 'cloud',
    title: 'Cloud migration',
    text: 'Move legacy systems to resilient, cloud-native infrastructure with better performance, lower operational drag, and clearer recovery paths.',
  },
  {
    icon: 'support_agent',
    title: 'Managed IT support',
    text: 'Keep your internal tools, user access, and technical stack stable with responsive support and proactive monitoring for growing teams.',
  },
];

const deliverables = [
  'Discovery workshops and product scoping',
  'UX/UI systems for product and customer journeys',
  'API integrations and workflow automation',
  'Launch support, maintenance, and optimization',
];

export default function SolutionsPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell pb-20 pt-28">
        <section className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Solutions</p>
            <AnimatedTitle className="text-4xl font-semibold tracking-[-0.06em] text-slate-900 md:text-6xl">
              Technology systems designed for <span className="brand-script text-[3.3rem] font-light tracking-[-0.02em] text-slate-900 md:text-[4.8rem]">startup</span> momentum.
            </AnimatedTitle>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              From custom platforms to AI automation and cloud reliability, we help early-stage and growth-stage teams turn technical complexity into operational leverage.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {offerings.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.03)]">
                <span className="material-symbols-outlined mb-5 block text-3xl text-slate-900">{item.icon}</span>
                <h2 className="mb-3 text-xl font-semibold text-slate-900">{item.title}</h2>
                <p className="text-base leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">What you get</p>
              <h2 className="text-3xl font-semibold tracking-[-0.05em] text-slate-900 md:text-4xl">
                A <span className="brand-script text-[3rem] font-light leading-none text-slate-900 md:text-[4rem]">delivery</span> system built around real business priorities.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                We align engineering, design, and operational <span className="brand-script text-[2rem] font-light leading-none text-slate-900">decision-making</span> so your tooling keeps pace with customer demand, compliance requirements, and internal growth.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-8">
              <ul className="space-y-4 text-base text-slate-700">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined mt-0.5 text-xl text-slate-900">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-5xl px-5 md:px-8">
          <div className="rounded-[28px] bg-slate-900 p-8 text-white md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">Need tailored support?</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-[-0.05em] md:text-5xl">Let’s map the right solution for your team.</h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100">
                Book a discovery call
              </Link>
              <Link href="/pricing" className="inline-flex rounded-full border border-slate-600 px-5 py-3 text-sm font-medium text-white transition hover:border-slate-500 hover:bg-slate-800">
                View pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
