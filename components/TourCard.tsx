"use client";
import { Tour } from '@lib/tours';
import Image from 'next/image';
import { useState } from 'react';

export default function TourCard({ tour }: { tour: Tour }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div className="card overflow-hidden group transition-all duration-300 flex flex-col bg-white">
      <div className="relative overflow-hidden h-64">
        <Image src={tour.image} alt={tour.name} width={800} height={480} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </div>
      
      <div className="p-6 sm:p-8 flex-1 flex flex-col min-h-[280px]">
        <h3 className="text-2xl font-bold mb-3 text-forest">{tour.name}</h3>
        <p className="text-verdant mb-4 flex-1 line-clamp-3">{tour.description}</p>
        
        <button
          type="button"
          onClick={handleToggle}
          className="flex items-center justify-center gap-2 text-forest hover:text-[#B6FF00] font-semibold transition-colors mt-4"
        >
          <span>{isExpanded ? 'Ver menos' : 'Ver detalles'}</span>
          <svg 
            className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div 
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-4 border-t border-verdant/20 pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-verdant/70 mb-1">Duración</p>
                <p className="font-semibold text-forest">{tour.duration}</p>
              </div>
              <div>
                <p className="text-sm text-verdant/70 mb-1">Dificultad</p>
                <p className="font-semibold text-forest">{tour.difficulty}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-verdant/70 mb-1">Precio</p>
              <p className="text-2xl font-bold text-forest">{tour.price}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-forest mb-2">Incluye</p>
                <ul className="space-y-1">
                  {tour.includes.map((item, i) => (
                    <li key={i} className="text-sm text-verdant flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#B6FF00] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <p className="font-semibold text-forest mb-2">No incluye</p>
                <ul className="space-y-1">
                  {tour.notIncludes.map((item, i) => (
                    <li key={i} className="text-sm text-verdant/70 flex items-start gap-2">
                      <svg className="w-4 h-4 text-verdant/40 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={`https://wa.me/50670000000?text=${encodeURIComponent(`Hola! Me interesa el tour: ${tour.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full hover:text-[#B6FF00] flex items-center justify-center gap-2 mt-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.01 0C5.38 0 .02 5.36.02 11.97a11.86 11.86 0 0 0 1.64 6l-1.66 6.07 6.22-1.63a11.86 11.86 0 0 0 5.79 1.53h.01c6.63 0 12-5.36 12-11.97 0-3.2-1.25-6.21-3.5-8.49ZM12 21.18h-.01a9.1 9.1 0 0 1-4.64-1.26l-.33-.2-3.69.97.99-3.59-.21-.34A9.12 9.12 0 0 1 2.87 12c0-5.02 4.1-9.1 9.14-9.1 2.44 0 4.73.95 6.46 2.68a9.1 9.1 0 0 1 2.69 6.43c0 5.02-4.1 9.1-9.14 9.1Zm5.06-6.79c-.27-.14-1.61-.8-1.86-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.85 1.07-.16.18-.32.21-.59.07-.27-.14-1.15-.42-2.19-1.34-.81-.72-1.36-1.6-1.52-1.88-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.03-.21-.56-.44-.49-.61-.49-.16 0-.34-.02-.52-.02-.18 0-.48.05-.74.34-.25.27-.97.95-.97 2.32 0 1.37 1 2.69 1.14 2.86.14.18 1.97 3.01 4.77 4.2.67.29 1.2.46 1.61.59.67.21 1.28.18 1.76.11.54-.08 1.61-.66 1.84-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32Z" />
              </svg>
              Reservar este tour
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
