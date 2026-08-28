"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Security', href: '/security' },
  { label: 'Contact', href: '/contact' },
];

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-1.5 p-0">
          <img
            src="/Images/31f9a486-61c0-40e6-afca-979f141720b3.png"
            alt="Buildvenir logo"
            className="m-0 block h-10 w-auto object-contain p-0"
          />
          <span className="text-base font-semibold tracking-[-0.04em] text-slate-900">Buildvenir</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.25 }}
            >
              <Link href={item.href} className="text-sm text-slate-600 transition hover:text-slate-900">
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 md:inline-flex">
            Book a consult
          </Link>
          <Link href="/pricing" className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
            Start a project
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

export function SiteFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="border-t border-slate-200 bg-white"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4 md:px-8">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-1.5 p-0">
            <img
              src="/Images/31f9a486-61c0-40e6-afca-979f141720b3.png"
              alt="Buildvenir logo"
              className="m-0 block h-10 w-auto object-contain p-0"
            />
            <span className="text-base font-semibold text-slate-900">Buildvenir</span>
          </Link>
          <p className="text-sm leading-6 text-slate-600">Minimal infrastructure for modern financial teams.</p>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Company</p>
          <ul className="space-y-3 text-sm text-slate-600">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/solutions">Solutions</Link></li>
            <li><Link href="/security">Security</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Capabilities</p>
          <ul className="space-y-3 text-sm text-slate-600">
            <li><Link href="/case-studies">Case studies</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</p>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>hello@buildvenir.com</li>
            <li>+1 (415) 488-4021</li>
            <li>San Francisco, CA</li>
          </ul>
        </div>
      </div>
    </motion.footer>
  );
}
