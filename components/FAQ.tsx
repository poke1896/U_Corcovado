"use client";
import Reveal from './Reveal';

export default function FAQ() {
  const faqs = [
    {
      q: '¿Cuál es la mejor época para visitar Corcovado?',
      a: 'Todo el año es posible, pero la época seca (dic–abr) ofrece senderos más accesibles. En lluvias la fauna también es muy activa.'
    },
    {
      q: '¿Qué equipo necesito?',
      a: 'Botas o zapatos de montaña, ropa ligera, impermeable, repelente, agua y snacks. Yo proveo orientación y checklist antes de salir.'
    },
    {
      q: '¿Es seguro recorrer el parque?',
      a: 'Sí, con guía certificado y siguiendo indicaciones de seguridad. Planificamos según tu condición física y clima.'
    },
    {
      q: '¿Se puede ver tapir o jaguar?',
      a: 'El tapir es relativamente frecuente en zonas como Sirena. El jaguar es esquivo, pero hay avistamientos ocasionales.'
    },
    {
      q: '¿Cómo reservo?',
      a: 'Contáctame por WhatsApp para confirmar fechas, permisos y logística. Recomiendo reservar con antelación.'
    },
  ];

  return (
    <section className="bg-gradient-to-b from-neutralLight to-white section py-20 md:py-28" id="faq">
      <Reveal>
        <h2 className="text-center">Preguntas frecuentes</h2>
      </Reveal>
      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {faqs.map((f, idx) => (
          <Reveal key={f.q} delay={0.05 * idx}>
            <details className="card p-6 group open:shadow-xl hover:shadow-lg transition-shadow">
              <summary className="cursor-pointer font-semibold text-lg text-darkGreen flex items-center justify-between">
                {f.q}
                <span className="ml-2 text-2xl text-verdant group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-base leading-relaxed">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
