"use client";
import TourCard from './TourCard';
import { tours } from '@lib/tours';
import Reveal from './Reveal';

export default function ToursList() {
  return (
    <section className="bg-gradient-to-b from-white to-neutralLight section py-20 md:py-28" id="tours">
      <Reveal>
        <h2 className="text-center">Tours disponibles</h2>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-4 text-xl text-center max-w-3xl mx-auto opacity-80">Experiencias auténticas diseñadas según tu interés y condición física</p>
      </Reveal>
      <div className="mt-12 grid md:grid-cols-3 gap-8 items-start">
        {tours.map((t, idx) => (
          <Reveal key={t.id} delay={0.06 * idx}>
            <TourCard tour={t} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
