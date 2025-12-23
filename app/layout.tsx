import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import StructuredData from '@components/StructuredData';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'), // Reemplazar por dominio real
  title: {
    default: 'Ulises — Guía turístico local en Corcovado',
    template: '%s | Ulises — Guía en Corcovado',
  },
  description:
    'Guía turístico local independiente con amplia experiencia en el Parque Nacional Corcovado, Costa Rica. Tours de vida silvestre, senderos y experiencias auténticas.',
  keywords: [
    'Guía turístico en Corcovado',
    'Tours en Corcovado Costa Rica',
    'Guía local Corcovado',
    'Corcovado National Park tours',
    'Wildlife tours Corcovado',
  ],
  openGraph: {
    type: 'website',
    title: 'Ulises — Guía turístico local en Corcovado',
    description:
      'Experiencias auténticas en Corcovado con un guía local independiente. Seguridad, fauna y trato personalizado.',
    siteName: 'Ulises Guía en Corcovado',
    url: 'https://example.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
