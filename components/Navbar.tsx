"use client";
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-darkGreen/70 backdrop-blur text-white fixed top-0 left-0 right-0 z-50 shadow-sm"
    >
      <div className="section h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#hero" className="font-semibold text-white hover:text-[#B6FF00] cursor-pointer transition-colors">
            Ulises • Corcovado
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <motion.a
            href="#sobre"
            className="inline-flex items-center leading-none text-white hover:text-[#B6FF00] focus:text-[#B6FF00] transition-colors"
            whileHover={{ y: -2, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            Sobre
          </motion.a>
          <motion.a
            href="#tours"
            className="inline-flex items-center leading-none text-white hover:text-[#B6FF00] focus:text-[#B6FF00] transition-colors"
            whileHover={{ y: -2, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            Tours
          </motion.a>
          <motion.a
            href="#galeria"
            className="inline-flex items-center leading-none text-white hover:text-[#B6FF00] focus:text-[#B6FF00] transition-colors"
            whileHover={{ y: -2, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            Galería
          </motion.a>
          <motion.a
            href="#faq"
            className="inline-flex items-center leading-none text-white hover:text-[#B6FF00] focus:text-[#B6FF00] transition-colors"
            whileHover={{ y: -2, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            FAQ
          </motion.a>
          <motion.a
            href="#contacto"
            className="btn-primary inline-flex items-center leading-none hover:text-[#B6FF00]"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            Reservar por WhatsApp
          </motion.a>
        </nav>
      </div>
    </motion.header>
  );
}
