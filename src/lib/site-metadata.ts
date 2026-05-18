import type { Metadata } from 'next';
import { Inter, Roboto_Flex } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Carpintería Los Artesanos',
  description: 'Muebles a medida, restauración y carpintería estructural de alta calidad.',
  keywords: [
    'carpintería',
    'muebles a medida',
    'restauración',
    'proyectos',
    'taller',
    'artesanos',
    'galería',
    'contacto',
    'Next.js',
    'Shadcn UI',
  ],
  openGraph: {
    title: 'Carpintería Los Artesanos',
    description: 'Muebles a medida, restauración y carpintería estructural de alta calidad.',
    url: 'https://carpinteria-artesanos.vercel.app',
    siteName: 'Carpintería Los Artesanos',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Carpintería Los Artesanos',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};


export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
export const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' });
