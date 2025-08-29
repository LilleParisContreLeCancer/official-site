import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/index';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'LPCC - Lille Paris Contre le Cancer',
  description: 'Association de lutte contre le cancer, soutien à la recherche et accompagnement des patients.',
  keywords: 'cancer, recherche, association, Lille, Paris, soutien, patients, dons',
  authors: [{ name: 'LPCC' }],
  creator: 'LPCC',
  publisher: 'LPCC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lpcc.org'),
  openGraph: {
    title: 'LPCC - Lille Paris Contre le Cancer',
    description: 'Association de lutte contre le cancer, soutien à la recherche et accompagnement des patients.',
    url: 'https://lillepariscontrelecancer.fr',
    siteName: 'LPCC',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LPCC - Lille Paris Contre le Cancer',
    description: 'Association de lutte contre le cancer, soutien à la recherche et accompagnement des patients.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://formspree.io" />
        <link rel="icon" href="/images/logo.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/images/logo.webp" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8B5CF6" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main>
          {children}
        </main>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Optimize Critical Rendering Path
              if ('requestIdleCallback' in window) {
                requestIdleCallback(() => {
                  // Preload critical resources
                  const criticalImages = document.querySelectorAll('img[data-priority="high"]');
                  criticalImages.forEach(img => {
                    const link = document.createElement('link');
                    link.rel = 'preload';
                    link.as = 'image';
                    link.href = img.src;
                    document.head.appendChild(link);
                  });
                });
              }
              
              // Reduce layout shifts
              const observer = new ResizeObserver(entries => {
                for (let entry of entries) {
                  if (entry.target.tagName === 'IMG') {
                    entry.target.style.aspectRatio = 'auto';
                  }
                }
              });
              
              document.addEventListener('DOMContentLoaded', () => {
                document.querySelectorAll('img').forEach(img => observer.observe(img));
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
