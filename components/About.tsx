"use client";
import Image from 'next/image';
import Reveal from './Reveal';

export default function About() {
  return (
    <section className="section py-20 md:py-28" id="sobre">
      <Reveal>
        <h2 className="text-center">Sobre Ulises</h2>
        <p className="text-center mt-4 text-xl max-w-3xl mx-auto opacity-80">Guía local independiente con más de 10 años explorando Corcovado</p>
      </Reveal>
      <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
        <Reveal>
          <div className="card p-8 hover:scale-[1.02] transition-transform">
            <p className="text-lg">
              Nací y crecí cerca del Parque Nacional Corcovado. Desde hace más de
              10 años acompaño a viajeros a descubrir la riqueza natural del
              bosque lluvioso: aves, mamíferos, reptiles y senderos inolvidables.
            </p>
            <ul className="mt-4 list-disc list-inside space-y-1">
              <li>Seguridad primero: planificación, briefing y equipo necesario.</li>
              <li>Conocimiento de fauna: mejores horarios y hábitats.</li>
              <li>Trato personalizado: grupos pequeños y experiencia cercana.</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card p-6">
            <Image
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1600&auto=format&fit=crop"
              alt="Ulises guiando en Corcovado"
              width={800}
              height={600}
              className="rounded-md object-cover w-full h-auto"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
