export default function Footer() {
  return (
    <footer className="bg-darkGreen text-white mt-16">
      <div className="section py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-white">Ulises — Guía en Corcovado</p>
            <p className="text-sm text-white">Guía local independiente • Puerto Jiménez, Costa Rica</p>
          </div>
          <div className="text-sm text-white">
            <p className="text-white">
              WhatsApp: 
              <a href="https://wa.me/50670000000" target="_blank" rel="noopener" className="text-white hover:text-white ml-1">+506 7000-0000</a>
            </p>
            <p className="text-white">
              Email: 
              <a href="mailto:ulises@example.com" className="text-white hover:text-white ml-1">ulises@example.com</a>
            </p>
          </div>
        </div>
        <div className="mt-6 text-xs text-white">
          © {new Date().getFullYear()} Ulises. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
