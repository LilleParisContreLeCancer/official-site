import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LPCC - La Petite Caravane du Coeur',
  description: 'Association humanitaire qui organise des convois solidaires pour aider les populations en difficulté. Rejoignez-nous pour faire la différence.',
  keywords: 'association, humanitaire, solidarité, convoi, aide, don, bénévolat',
  authors: [{ name: 'LPCC' }],
  openGraph: {
    title: 'LPCC - La Petite Caravane du Coeur',
    description: 'Association humanitaire qui organise des convois solidaires pour aider les populations en difficulté.',
    type: 'website',
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
      </head>
      <body className={'antialiased'}>
        {children}
      </body>
    </html>
  );
}
