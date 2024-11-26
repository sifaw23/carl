// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crazy Carl Coin ($CARL) - The Wildest Meme in Crypto',
  description: 'From 9-to-5 wage slave to crypto legend, Carl is the face of pure meme energy! Why so serious when we can meme to the moon? 🚀',
  openGraph: {
    title: 'Crazy Carl Coin ($CARL)',
    description: 'The most unhinged token in crypto! 🤪',
    images: ['/crazy-carl-og.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crazy Carl Coin ($CARL)',
    description: 'Why so serious when we can meme to the moon? 🚀',
    images: ['/crazy-carl-og.png'],
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden antialiased`}>{children}</body>
    </html>
  );
}