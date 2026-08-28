import Link from 'next/link';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { SiteFooter, SiteHeader } from '../../components/SiteShell';

const plans = [
  {
    name: 'Launch',
    price: '$1.5k',
    blurb: 'For early-stage teams building clarity into the first version of their stack.',
    features: ['Wireframes and technical scoping', '1 product or workflow build', 'Basic integrations', 'Email support'],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$4.8k',
    blurb: 'For teams ready to scale products, automate operations, and formalize internal systems.',
    features: ['Full product or platform roadmap', 'Automation and integrations', 'Design system support', 'Priority async support'],
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    blurb: 'For mature organizations needing ongoing engineering, cloud, and operational support.',
    features: ['Dedicated engineering support', 'Cloud optimization and security', 'Strategic roadmap planning', 'Quarterly optimization reviews'],
    highlight: false,
  },
];

const faqs = [
  'Can we start with a smaller project?',
  'Do you support both product and internal workflow work?',
  'Can you work with our existing team and stack?',
  'What does onboarding look like?',
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell pb-20 pt-28">
        <section className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Pricing</p>
            <AnimatedTitle className="text-4xl font-semibold tracking-[-0.06em] text-slate-900 dark:text-slate-100 md:text-6xl">
              Simple <span className="brand-script text-[3.3rem] font-light tracking-[-0.02em] text-slate-900 dark:text-slate-100 md:text-[4.8rem]">packages</span>. Scalable support.
            </AnimatedTitle>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Flexible engagement models for <span className="brand-script text-[2rem] font-light leading-none text-slate-900 dark:text-slate-100">startup</span> teams, growth-stage operators, and leadership seeking a more dependable technical foundation.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl px-5 md:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className={`soft-card rounded-[28px] p-7 ${plan.highlight ? 'bg-slate-900 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]' : 'bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100'}`}>
                <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${plan.highlight ? 'text-slate-300' : 'text-slate-400 dark:text-slate-500'}`}>{plan.name}</p>
                <div className="mt-5 text-4xl font-semibold tracking-[-0.06em]">{plan.price}</div>
                <p className={`mt-4 text-base leading-7 ${plan.highlight ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>{plan.blurb}</p>

                <ul className={`mt-6 space-y-3 ${plan.highlight ? 'text-slate-200' : 'text-slate-700 dark:text-slate-200'}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0.5 text-xl">check_circle</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link href="/contact" className={`soft-button inline-flex rounded-full px-5 py-3 text-sm font-medium transition ${plan.highlight ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-slate-700 dark:bg-violet-500 dark:hover:bg-violet-400'}`}>
                    {plan.highlight ? 'Start with Growth' : 'Book a consultation'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-5xl px-5 md:px-8">
          <div className="soft-card rounded-[28px] bg-white p-8 dark:bg-slate-900 md:p-10">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">FAQs</p>
            <div className="space-y-4">
              {faqs.map((item) => (
                <div key={item} className="soft-card rounded-2xl bg-slate-50 p-4 text-base text-slate-700 dark:bg-slate-950 dark:text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
