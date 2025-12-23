"use client";
import WhatsAppButton from './WhatsAppButton';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[80vh] md:h-[90vh]">
      <Image
        src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2400&auto=format&fit=crop"
        alt="Selva tropical en Corcovado"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/60" />
      <div className="section relative h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-semibold drop-shadow-md text-white">
            Guía turístico local en el Parque Nacional Corcovado
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-95 leading-relaxed text-white drop-shadow">
            Experiencias auténticas en la selva tropical: vida silvestre, senderos y fotografía.
            Seguridad, conocimiento de fauna y trato personalizado.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <WhatsAppButton />
            <a href="#tours" className="btn-primary bg-verdant hover:bg-forest hover:text-[#B6FF00] transition-all">Ver tours disponibles</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
