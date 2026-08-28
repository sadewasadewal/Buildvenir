'use client';

import { useMemo, useState } from 'react';
import {
  AWS,
  Azure,
  ClaudeAI,
  CursorDark,
  Cypress,
  Docker,
  FastAPI,
  Figma,
  Firebase,
  Flutter,
  Gemini,
  Kotlin,
  Kubernetes,
  MongoDB,
  NextJs,
  NodeJs,
  OpenAI,
  Playwright,
  Postman,
  PostgreSQL,
  Python,
  React,
  Supabase,
  Swift,
  Terraform,
  TypeScript,
} from 'developer-icons';
import { motion } from 'framer-motion';
import { AnimatedTitle } from '../../components/AnimatedTitle';
import { SiteFooter, SiteHeader } from '../../components/SiteShell';

const services = [
  {
    id: 'ai-strategy',
    number: '01',
    title: 'AI Adoption & Strategy',
    short: 'Assess workflows, prioritize use cases, and shape a safer path to responsible AI adoption.',
    icon: 'psychology',
    tools: [OpenAI, ClaudeAI, Gemini, Python],
    highlight: 'Strategy → Build → Deploy → Validate → Innovate → Transact',
  },
  {
    id: 'custom-software',
    number: '02',
    title: 'Custom Software',
    short: 'Design and build resilient digital products, internal platforms, and business-critical systems.',
    icon: 'code',
    tools: [React, NextJs, TypeScript, Python],
    highlight: 'Build with clarity and long-term maintainability.',
  },
  {
    id: 'mobile-development',
    number: '03',
    title: 'Mobile Development',
    short: 'Launch premium native and cross-platform mobile experiences for modern user journeys.',
    icon: 'smartphone',
    tools: [Swift, Kotlin, Flutter, React],
    highlight: 'Ship smooth, high-trust experiences across devices.',
  },
  {
    id: 'cloud-devops',
    number: '04',
    title: 'Cloud & DevOps',
    short: 'Create secure infrastructure, automation, and deployment pipelines built for scale and uptime.',
    icon: 'cloud',
    tools: [AWS, Azure, Docker, Kubernetes],
    highlight: 'Operational confidence without unnecessary overhead.',
  },
  {
    id: 'quality-assurance',
    number: '05',
    title: 'Quality Assurance',
    short: 'Reduce risk before launch through disciplined validation, automation, and performance testing.',
    icon: 'check_circle',
    tools: [Playwright, Cypress, Postman, TypeScript],
    highlight: 'Confidence before customers ever see the release.',
  },
  {
    id: 'ai-prototyping',
    number: '06',
    title: 'AI-Powered Prototyping',
    short: 'Turn ideas into rapid, validated prototypes and MVPs using AI-assisted product workflows.',
    icon: 'auto_awesome',
    tools: [OpenAI, Gemini, Figma, CursorDark],
    highlight: 'Accelerate from idea to evidence with less friction.',
  },
  {
    id: 'wallet-payments',
    number: '07',
    title: 'Wallet & Payment Solutions',
    short: 'Build secure, seamless and scalable digital payment experiences — from mobile wallets and payment platforms to QR and NFC-enabled transactions.',
    icon: 'account_balance_wallet',
    tools: [Firebase, Supabase, NodeJs, FastAPI],
    highlight: 'Complete digital payment ecosystems, not just API glue.',
    details: [
      {
        title: 'Digital Wallets',
        desc: 'Design and develop secure digital wallets for consumers, businesses and platforms.',
        capabilities: ['Wallet creation', 'Balance management', 'Deposits', 'Withdrawals', 'Transfers', 'Transaction history', 'Payment notifications', 'User authentication'],
      },
      {
        title: 'QR Payments',
        desc: 'Build QR-based payment experiences for customers and merchants.',
        capabilities: ['QR generation', 'QR scanning', 'Dynamic QR payments', 'Static QR payments', 'Merchant QR', 'Payment confirmation', 'Transaction tracking'],
      },
      {
        title: 'NFC & Contactless',
        desc: 'Develop NFC-enabled payment and interaction systems.',
        capabilities: ['NFC tag integration', 'NFC card integration', 'NDEF data handling', 'Contactless authentication', 'Tap-to-pay workflows', 'NFC-triggered transactions'],
      },
      {
        title: 'Payment Infrastructure',
        desc: 'Connect applications to secure payment infrastructure.',
        capabilities: ['Payment gateway integration', 'Payment APIs', 'Webhooks', 'Transaction processing', 'Payment verification', 'Refund workflows', 'Reconciliation', 'Payment status tracking'],
      },
      {
        title: 'Merchant Solutions',
        desc: 'Create tools that allow businesses to accept and manage digital payments.',
        capabilities: ['Merchant dashboards', 'QR payment acceptance', 'Transaction monitoring', 'Settlement tracking', 'Sales analytics', 'Payment history', 'Automated receipts'],
      },
    ],
    security: [
      'Secure API architecture',
      'Authentication and authorization',
      'Encryption',
      'Tokenization where applicable',
      'Role-based access control',
      'Transaction validation',
      'Fraud-prevention architecture',
      'Audit logging',
      'Secure payment-provider integration',
      'Data protection',
    ],
    technologyGroups: [
      { label: 'Payment & Financial Infrastructure', items: [Firebase, Supabase, NodeJs, FastAPI, PostgreSQL] },
      { label: 'QR Technologies', items: [React, TypeScript, Firebase, NodeJs, Postman] },
      { label: 'NFC Technologies', items: [Swift, Kotlin, Flutter, React, Firebase] },
      { label: 'Backend & Infrastructure', items: [NodeJs, FastAPI, PostgreSQL, MongoDB, Terraform] },
      { label: 'Mobile', items: [Swift, Kotlin, Flutter, React, TypeScript] },
    ],
  },
];

export default function ServicesPage() {
  const [selectedId, setSelectedId] = useState('wallet-payments');

  const selectedService = useMemo(
    () => services.find((service) => service.id === selectedId) ?? services[0],
    [selectedId],
  );

  return (
    <>
      <SiteHeader />
      <main className="page-shell pb-20 pt-28">
        <section className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">Services</p>
            <AnimatedTitle className="text-4xl font-semibold tracking-[-0.06em] text-slate-900 dark:text-slate-100 md:text-6xl">
              Strategy <span className="brand-script text-[3.4rem] leading-[0.82] text-slate-900 dark:text-slate-100 md:text-[5rem]">→</span>{' '}
              <span className="brand-script text-[4rem] font-light tracking-[-0.02em] text-slate-900 dark:text-slate-100 md:text-[5rem]">build</span>{' '}
              <span className="brand-script text-[3.4rem] leading-[0.82] text-slate-900 dark:text-slate-100 md:text-[5rem]">→</span> Deploy{' '}
              <span className="brand-script text-[3.4rem] leading-[0.82] text-slate-900 dark:text-slate-100 md:text-[5rem]">→</span> Validate
            </AnimatedTitle>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg">
              We help startups and growing businesses bring ambitious digital products, cloud platforms, AI systems, and secure payment experiences to life.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl px-5 md:px-8">
          <div className="grid gap-4">
            {services.map((service, index) => {
              const isSelected = selectedId === service.id;

              return (
                <motion.button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedId(service.id)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`soft-card group flex h-full flex-col rounded-[18px] p-5 text-left transition-all duration-300 ease-out md:p-6 ${
                    isSelected
                      ? 'bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100'
                      : 'bg-white/80 text-slate-900 dark:bg-slate-950/60 dark:text-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${isSelected ? 'text-slate-500 dark:text-slate-400' : 'text-slate-400 dark:text-slate-500'}`}>
                      {service.number}
                    </span>
                    <span className={`text-[10px] font-medium uppercase tracking-[0.22em] ${isSelected ? 'text-slate-500 dark:text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                      {service.id === 'wallet-payments' ? 'Core capability' : 'Service'}
                    </span>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-2xl font-semibold tracking-[-0.05em] dark:text-slate-100">{service.title}</h2>
                    <p className={`mt-3 text-sm leading-6 md:text-base ${isSelected ? 'text-slate-600 dark:text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>
                      {service.short}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {service.tools.slice(0, 4).map((Tool, index) => (
                      <Tool key={`${service.id}-${index}`} className={`h-5 w-5 ${isSelected ? 'text-slate-700 dark:text-slate-200' : 'text-slate-700 dark:text-slate-200'}`} />
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-current/10 pt-5">
                    <span className={`text-sm font-medium ${isSelected ? 'text-slate-700 dark:text-slate-200' : 'text-slate-700 dark:text-slate-200'}`}>
                      Explore service
                    </span>
                    <span className={`material-symbols-outlined text-2xl ${isSelected ? 'text-slate-900 dark:text-slate-100' : 'text-slate-900 dark:text-slate-100'}`}>
                      {service.icon}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-6xl px-5 md:px-8">
          <div className="soft-card rounded-[28px] bg-white p-6 dark:bg-slate-900 md:p-8">
            <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-5 dark:border-slate-700/80 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">Active focus</p>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-900 dark:text-slate-100 md:text-4xl">{selectedService.title}</h2>
              </div>
              <div className="soft-pill rounded-full bg-slate-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-600 dark:bg-slate-950 dark:text-slate-300">
                {selectedService.highlight}
              </div>
            </div>

            {selectedService.id === 'wallet-payments' ? (
              <div className="mt-8 space-y-8">
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
                  {selectedService.details?.map((detail, index) => (
                    <div key={detail.title} className="soft-card rounded-2xl bg-slate-50 p-5 dark:bg-slate-950">
                      <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">0{index + 1}</div>
                      <h3 className="text-lg font-semibold tracking-[-0.04em] text-slate-900 dark:text-slate-100">{detail.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{detail.desc}</p>
                      <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        {detail.capabilities.map((capability) => (
                          <li key={capability} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-slate-100" />
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="soft-card rounded-[24px] bg-slate-50 p-5 dark:bg-slate-950 md:p-6">
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-slate-100">Security Built Into Every Transaction</h3>
                  <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    {selectedService.security?.map((item) => (
                      <div key={item} className="soft-card rounded-2xl bg-white px-3 py-2 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="soft-card rounded-[24px] bg-white p-5 dark:bg-slate-900 md:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">Tools & Technologies</p>
                  <div className="mt-5 space-y-4">
                    {selectedService.technologyGroups?.map((group) => (
                      <div key={group.label}>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{group.label}</p>
                        <div className="flex flex-wrap gap-3">
                          {group.items.map((Tool, index) => (
                            <Tool key={`${group.label}-${index}`} className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div className="soft-card rounded-[24px] bg-slate-50 p-5 dark:bg-slate-950 md:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500">Service overview</p>
                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-700 dark:text-slate-300">
                    We bring together product thinking, system design, implementation, and delivery discipline so teams can launch better experiences with less operational risk.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                    {selectedService.details?.map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold text-white dark:bg-slate-100 dark:text-slate-900">
                          {selectedService.details.indexOf(item) + 1}
                        </span>
                        <span>{item.title}</span>
                      </li>
                    )) ?? [
                      'Discovery and decision framing',
                      'Design and architecture review',
                      'Implementation and iteration',
                      'Monitoring and optimization',
                    ].map((item, index) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold text-white dark:bg-slate-100 dark:text-slate-900">
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="soft-card rounded-[18px] bg-white p-5 dark:bg-slate-900 md:p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">Tools & Technologies</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {selectedService.tools.map((Tool, index) => (
                      <Tool key={`${selectedService.id}-tool-${index}`} className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
