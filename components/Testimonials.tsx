export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah, Canadá',
      text: 'Vimos tapir y muchísimas aves. Ulises conoce cada sendero y cuida mucho la seguridad.',
    },
    {
      name: 'Marco, Italia',
      text: 'Experiencia auténtica y cercana. Las recomendaciones de fotografía fueron clave para mis tomas.',
    },
    {
      name: 'Laura, Costa Rica',
      text: 'Excelente guía local. Respetuoso con la naturaleza y muy profesional en la logística.',
    },
  ];
  return (
    <section className="section py-16" id="testimonios">
      <h2>Testimonios</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="card p-6">
            <p className="italic">“{t.text}”</p>
            <p className="mt-3 text-sm font-medium text-darkGreen">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
