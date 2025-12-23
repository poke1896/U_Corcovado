"use client";
import { useState, FormEvent } from 'react';
import Reveal from './Reveal';
import DatePicker from './DatePicker';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    phone: '',
    email: '',
    adults: '0',
    children: '0',
    date: '',
    message: ''
  });

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `
*Nueva Consulta de Tour*

*Nombre:* ${formData.name}
*País:* ${formData.country}
*Teléfono:* ${formData.phone}
*Email:* ${formData.email}
*Adultos:* ${formData.adults}
*Niños:* ${formData.children}
*Fecha:* ${formData.date || 'Por definir'}
*Mensaje:*
${formData.message || 'Sin mensaje adicional'}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/50670000000?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="section py-20 md:py-28" id="contacto">
      <Reveal>
        <div className="relative overflow-hidden bg-gradient-to-br from-forest to-darkGreen text-white p-12 md:p-16 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-white text-center mb-4">¿Listo para explorar Corcovado?</h2>
            <p className="text-xl text-white text-center max-w-2xl mx-auto mb-8">
              Completa el formulario y coordinaremos tu experiencia
            </p>

            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 text-left space-y-4 sm:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2">
                    Nombre <span className="text-[#B6FF00]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#B6FF00] focus:border-transparent text-sm md:text-base"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-xs sm:text-sm font-medium mb-2">
                    País <span className="text-[#B6FF00]">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#B6FF00] focus:border-transparent text-sm md:text-base"
                    placeholder="País de origen"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-2">
                    Teléfono/WhatsApp <span className="text-[#B6FF00]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#B6FF00] focus:border-transparent text-sm md:text-base"
                    placeholder="+506 1234 5678"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2">
                    Email <span className="text-[#B6FF00]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#B6FF00] focus:border-transparent text-sm md:text-base"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="adults" className="block text-xs sm:text-sm font-medium mb-2">
                    Adultos
                  </label>
                  <select
                    id="adults"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B6FF00] focus:border-transparent text-sm md:text-base"
                  >
                    {[0,1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num} className="bg-darkGreen">{num}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="children" className="block text-xs sm:text-sm font-medium mb-2">
                    Niños
                  </label>
                  <select
                    id="children"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B6FF00] focus:border-transparent text-sm md:text-base"
                  >
                    {[0,1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num} className="bg-darkGreen">{num}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="date" className="block text-xs sm:text-sm font-medium mb-2">
                  Fecha
                </label>
                <DatePicker
                  value={formData.date}
                  onChange={(date) => setFormData({ ...formData, date })}
                  minDate={today}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#B6FF00] focus:border-transparent resize-none text-sm md:text-base"
                  placeholder="Cuéntame sobre tu interés en visitar Corcovado..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full hover:text-[#B6FF00] flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.01 0C5.38 0 .02 5.36.02 11.97a11.86 11.86 0 0 0 1.64 6l-1.66 6.07 6.22-1.63a11.86 11.86 0 0 0 5.79 1.53h.01c6.63 0 12-5.36 12-11.97 0-3.2-1.25-6.21-3.5-8.49ZM12 21.18h-.01a9.1 9.1 0 0 1-4.64-1.26l-.33-.2-3.69.97.99-3.59-.21-.34A9.12 9.12 0 0 1 2.87 12c0-5.02 4.1-9.1 9.14-9.1 2.44 0 4.73.95 6.46 2.68a9.1 9.1 0 0 1 2.69 6.43c0 5.02-4.1 9.1-9.14 9.1Zm5.06-6.79c-.27-.14-1.61-.8-1.86-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.85 1.07-.16.18-.32.21-.59.07-.27-.14-1.15-.42-2.19-1.34-.81-.72-1.36-1.6-1.52-1.88-.16-.27-.02-.41.12-.54.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.03-.21-.56-.44-.49-.61-.49-.16 0-.34-.02-.52-.02-.18 0-.48.05-.74.34-.25.27-.97.95-.97 2.32 0 1.37 1 2.69 1.14 2.86.14.18 1.97 3.01 4.77 4.2.67.29 1.2.46 1.61.59.67.21 1.28.18 1.76.11.54-.08 1.61-.66 1.84-1.29.23-.63.23-1.17.16-1.29-.07-.11-.25-.18-.52-.32Z" />
                </svg>
                Enviar por WhatsApp
              </button>
            </form>

            <p className="text-white mt-6 text-center">
              O escríbeme directamente: <a href="mailto:ulises@example.com" className="underline hover:text-[#B6FF00] transition-colors">ulises@example.com</a>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
