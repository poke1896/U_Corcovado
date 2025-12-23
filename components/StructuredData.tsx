import React from 'react';
import { tours } from '@lib/tours';

const StructuredData = () => {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ulises — Guía en Corcovado',
    description:
      'Guía turístico local independiente especializado en tours de vida silvestre y senderos en el Parque Nacional Corcovado, Costa Rica.',
    areaServed: 'Parque Nacional Corcovado, Costa Rica',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Puerto Jiménez',
      addressRegion: 'Puntarenas',
      addressCountry: 'CR',
    },
    telephone: '+50670000000',
    email: 'ulises@example.com',
    priceRange: '$$-$$$',
    sameAs: [
      'https://www.instagram.com/',
      'https://www.facebook.com/'
    ],
  };

  const parsePrice = (price: string) => {
    const match = price.match(/\$?(\d+)/);
    const value = match ? Number(match[1]) : undefined;
    return value;
  };

  const trips = tours.map((t) => ({
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: t.name,
    description: t.description,
    image: t.image,
    touristType: ['Wildlife', 'Photography', 'Hiking'],
    areaServed: 'Parque Nacional Corcovado, Costa Rica',
    itinerary: {
      '@type': 'ItemList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Briefing de seguridad' },
        { '@type': 'ListItem', position: 2, name: 'Recorrido guiado por senderos' },
        { '@type': 'ListItem', position: 3, name: 'Observación de fauna' },
      ],
    },
    offers: {
      '@type': 'Offer',
      price: parsePrice(t.price),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://example.com',
      validFrom: new Date().toISOString(),
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Ulises — Guía en Corcovado',
      areaServed: 'Parque Nacional Corcovado, Costa Rica',
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trips) }}
      />
    </>
  );
};

export default StructuredData;
