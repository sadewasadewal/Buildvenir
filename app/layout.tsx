import './globals.css';
import { Great_Vibes, Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from '../components/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Buildvenir | Startup IT Services',
  description: 'Modern IT services, product engineering, automation, security, and cloud support for startups and growing teams.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('buildvenir-theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const isDark = savedTheme === 'dark' || (savedTheme !== 'light' && prefersDark);
                  document.documentElement.classList.toggle('dark', isDark);
                  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
                } catch (error) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${greatVibes.variable} bg-white text-slate-900 antialiased transition-colors dark:bg-slate-950 dark:text-slate-100`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
