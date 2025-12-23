import Hero from '@components/Hero';
import Highlights from '@components/Highlights';
import About from '@components/About';
import ToursList from '@components/ToursList';
import Gallery from '@components/Gallery';
import FAQ from '@components/FAQ';
import ContactCTA from '@components/ContactCTA';
import FloatingWhatsApp from '@components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Highlights />
      <About />
      <ToursList />
      <Gallery />
      <FAQ />
      <ContactCTA />
      <FloatingWhatsApp />
    </main>
  );
}
