"use client";

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

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
  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === 'dark';
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${
        darkMode ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200/80 bg-white/80'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-1.5 p-0">
          <img
            src="/Images/31f9a486-61c0-40e6-afca-979f141720b3.png"
            alt="Buildvenir logo"
            className="m-0 block h-10 w-auto object-contain p-0"
          />
          <span className={`text-base font-semibold tracking-[-0.04em] ${darkMode ? 'text-slate-50' : 'text-slate-900'}`}>
            Buildvenir
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05, duration: 0.25 }}
            >
              <Link
                href={item.href}
                className={`inline-block text-xs font-medium tracking-[0.02em] transition duration-200 hover:scale-105 ${
                  darkMode ? 'text-slate-300 hover:text-violet-400' : 'text-slate-600 hover:text-violet-600'
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className={`soft-button flex h-9 w-9 items-center justify-center rounded-full text-sm transition ${
              darkMode ? 'bg-slate-900 text-yellow-300' : 'bg-slate-100 text-slate-700'
            }`}
          >
            {darkMode ? '☀' : '☾'}
          </button>

          <Link
            href="/contact"
            className={`soft-button hidden rounded-full px-4 py-2 text-sm font-medium transition md:inline-flex ${
              darkMode
                ? 'bg-slate-900 text-slate-100 hover:bg-violet-500/10 hover:text-violet-300'
                : 'bg-white text-slate-700 hover:bg-violet-50 hover:text-violet-700'
            }`}
          >
            Book a consult
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((value) => !value)}
            className={`soft-button flex h-9 w-9 items-center justify-center rounded-full md:hidden ${
              darkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-700'
            }`}
          >
            <span className="text-lg leading-none">{mobileOpen ? '×' : '☰'}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`border-t md:hidden ${darkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-white'}`}
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 md:px-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                    darkMode ? 'text-slate-200 hover:bg-slate-900 hover:text-violet-300' : 'text-slate-700 hover:bg-slate-100 hover:text-violet-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={`soft-button mt-2 inline-flex rounded-full px-4 py-2 text-sm font-medium ${
                  darkMode
                    ? 'bg-slate-900 text-slate-100 hover:text-violet-300'
                    : 'bg-slate-50 text-slate-700 hover:bg-violet-50 hover:text-violet-700'
                }`}
              >
                Book a consult
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export function SiteFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4 md:px-8">
        <div>
          <Link href="/" className="mb-4 flex items-center gap-1.5 p-0">
            <img
              src="/Images/31f9a486-61c0-40e6-afca-979f141720b3.png"
              alt="Buildvenir logo"
              className="m-0 block h-10 w-auto object-contain p-0"
            />
            <span className="text-base font-semibold text-slate-900 dark:text-slate-100">Buildvenir</span>
          </Link>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Minimal infrastructure for modern financial teams.</p>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Company</p>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/solutions">Solutions</Link></li>
            <li><Link href="/security">Security</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Capabilities</p>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li><Link href="/case-studies">Case studies</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Contact</p>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>hello@buildvenir.com</li>
            <li>+94 71 904 4433</li>
            <li>Colombo, Sri Lanka</li>
          </ul>
        </div>
      </div>
    </motion.footer>
  );
}
