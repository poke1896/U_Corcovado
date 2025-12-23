"use client";
import Reveal from './Reveal';

export default function Highlights() {
  const items = [
    {
      title: 'Guía local independiente',
      desc: 'Experiencia real en Corcovado, no agencia corporativa.',
      icon: (
        <svg className="h-6 w-6 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1l3 5 6 .9-4 4 .9 6-5-3-5 3 .9-6-4-4 6-.9z"/></svg>
      ),
    },
    {
      title: 'Fauna y fotografía',
      desc: 'Tapir, monos, aves; horarios y hábitats óptimos.',
      icon: (
        <svg className="h-6 w-6 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M5 7h3l2-2h4l2 2h3v10H5z"/></svg>
      ),
    },
    {
      title: 'Seguridad y logística',
      desc: 'Briefing, permisos y planificación según clima.',
      icon: (
        <svg className="h-6 w-6 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      ),
    },
    {
      title: 'Grupos pequeños',
      desc: 'Experiencia cercana y personalizada.',
      icon: (
        <svg className="h-6 w-6 text-forest" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      ),
    },
  ];
  return (
    <section className="section py-10 md:py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((i, idx) => (
          <Reveal key={i.title} delay={0.05 * idx}>
            <div className="card p-5 flex items-start gap-3 h-full min-h-[140px]">
              {i.icon}
              <div>
                <p className="font-semibold text-darkGreen">{i.title}</p>
                <p className="text-sm mt-1">{i.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
