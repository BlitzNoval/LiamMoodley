import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { site } from '@/data/site';
import { Spotlight } from '@/components/Spotlight';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  metadataBase: new URL('https://blitznoval.github.io/LiamMoodley'),
  icons: {
    icon: [{ url: './favicon.webp', type: 'image/webp' }],
    shortcut: './favicon.webp',
    apple: './favicon.webp',
  },
  openGraph: {
    title: site.name,
    description: site.description,
    type: 'website',
    images: ['./favicon.webp'],
  },
  twitter: {
    card: 'summary',
    title: site.name,
    description: site.description,
    images: ['./favicon.webp'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div className="group/spotlight relative">
          <Spotlight />
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
            <a
              href="#content"
              className="absolute left-0 top-0 block -translate-x-full rounded bg-yellow-500 px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-900 focus-visible:translate-x-0 focus-visible:text-slate-900"
            >
              Skip to Content
            </a>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
