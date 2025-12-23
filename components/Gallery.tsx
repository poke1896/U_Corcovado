"use client";
import Image from 'next/image';
import Reveal from './Reveal';

export default function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=800&auto=format&fit=crop', alt: 'Tapir en Corcovado' },
    { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop', alt: 'Sendero en selva' },
    { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop', alt: 'Costa y bosque' },
    { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=800&auto=format&fit=crop', alt: 'Monos en el dosel' },
    { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop', alt: 'Aves en humedal' },
    { src: 'https://images.unsplash.com/photo-1527766833261-b94c0be89350?q=80&w=800&auto=format&fit=crop', alt: 'Cascada en San Pedrillo' },
  ];

  return (
    <section className="section py-20 md:py-28" id="galeria">
      <Reveal>
        <h2 className="text-center">Galería</h2>
        <p className="mt-4 text-xl text-center max-w-2xl mx-auto opacity-80">Fauna, senderos y momentos reales vividos con viajeros</p>
      </Reveal>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <Reveal key={img.src} delay={0.05 * idx}>
            <div className="relative group overflow-hidden rounded-2xl h-64">
              <Image src={img.src} alt={img.alt} width={600} height={400} className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
