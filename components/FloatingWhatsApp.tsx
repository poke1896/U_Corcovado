"use client";
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  const phone = '50670000000';
  const message = encodeURIComponent('Hola Ulises, me interesa reservar un tour en Corcovado.');
  const href = `https://wa.me/${phone}?text=${message}`;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener"
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-forest text-white shadow-lg hover:bg-verdant transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.01 0C5.38 0 .02 5.36.02 11.97a11.86 11.86 0 0 0 1.64 6l-1.66 6.07 6.22-1.63a11.86 11.86 0 0 0 5.79 1.53h.01c6.63 0 12-5.36 12-11.97 0-3.2-1.25-6.21-3.5-8.49ZM12 21.18h-.01a9.1 9.1 0 0 1-4.64-1.26l-.33-.2-3.69.97.99-3.59-.21-.34A9.12 9.12 0 0 1 2.87 12c0-5.02 4.1-9.1 9.14-9.1 2.44 0 4.73.95 6.46 2.68a9.1 9.1 0 0 1 2.69 6.43c0 5.02-4.1 9.1-9.14 9.1Zm5.06-6.79c-.27-.14-1.61-.8-1.86-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.85 1.07-.16.18-.32.21-.59.07-.27-.14-1.15-.42-2.19-1.34-.81-.72-1.36-1.6-1.52-1.88-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.03-.21-.56-.44-.49-.61-.49-.16 0-.34-.02-.52-.02-.18 0-.48.05-.74.34-.25.27-.97.95-.97 2.32 0 1.37 1 2.69 1.14 2.86.14.18 1.97 3.01 4.77 4.2.67.29 1.2.46 1.61.59.67.21 1.28.18 1.76.11.54-.08 1.61-.66 1.84-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32Z" />
      </svg>
      WhatsApp
    </motion.a>
  );
}
