import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Impact } from './components/Impact';
import { Clients } from './components/Clients';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="min-h-screen relative bg-white">
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Services />
        <Impact />
        <Clients />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      <Toaster position="top-right" richColors />
    </div>
  );
}
