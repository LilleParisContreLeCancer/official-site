import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lille-Paris contre le cancer',
  description: 'Association caritative qui lutte contre le cancer par le sport. Soutenez la recherche médicale en rejoignant notre aventure cycliste solidaire.',
  keywords: 'association, cancer, solidarité, fondation de france, aide, don, bénévolat, cyclisme, recherche médicale',
  authors: [{ name: 'LPCC' }],
  openGraph: {
    title: 'Lille-Paris contre le cancer',
    description: 'Association caritative qui lutte contre le cancer par le sport. Soutenez la recherche médicale.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://formspree.io" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8B5CF6" />
      </head>
      <body className={'antialiased'}>
        {children}
      </body>
    </html>
  );
}
