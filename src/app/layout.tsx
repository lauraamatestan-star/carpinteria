
import type { Metadata } from 'next';
// import { Inter, Roboto_Flex } from '@fontsource-variable/inter';
import "./globals.css";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { inter, roboto, metadata as siteMetadata } from '@/lib/site-metadata';

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${roboto.variable} h-full antialiased scroll-smooth bg-background`.trim()}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-primary/20">
        <Navbar />
        <main className="flex-1 flex flex-col w-full max-w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
