export type Tour = {
  id: string;
  name: string;
  description: string;
  duration: string;
  difficulty: 'Fácil' | 'Moderada' | 'Exigente';
  price: string;
  includes: string[];
  notIncludes: string[];
  image: string;
};

export const tours: Tour[] = [
  {
    id: 'sirena-wildlife',
    name: 'Vida Silvestre en Estación Sirena',
    description:
      'Observación de fauna icónica (tapir, pecarí, monos, aves) en la zona de Sirena con senderos accesibles y alta biodiversidad.',
    duration: '1 día (full day)',
    difficulty: 'Moderada',
    price: 'Desde $160 por persona',
    includes: ['Guía certificado', 'Entradas al parque', 'Snack y agua'],
    notIncludes: ['Transporte hasta el punto de encuentro', 'Almuerzo'],
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'san-pedrillo-day-hike',
    name: 'Caminata a San Pedrillo',
    description:
      'Sendero escénico con cascadas y tramos de selva primaria; ideal para fotografía y observación de aves.',
    duration: '1 día',
    difficulty: 'Moderada',
    price: 'Desde $140 por persona',
    includes: ['Guía', 'Entradas', 'Botiquín básico'],
    notIncludes: ['Transporte', 'Comidas'],
    image: 'https://images.unsplash.com/photo-1527766833261-b94c0be89350?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'la-leona-sirena-trek',
    name: 'Trekking La Leona → Sirena',
    description:
      'Aventura exigente atravesando playa y selva hasta Sirena; recomendado para senderistas con buena condición física.',
    duration: '2 días / 1 noche',
    difficulty: 'Exigente',
    price: 'Desde $320 por persona',
    includes: ['Guía', 'Permisos', 'Alojamiento en Sirena'],
    notIncludes: ['Transporte', 'Comidas no especificadas'],
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
];
