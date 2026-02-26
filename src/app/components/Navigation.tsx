import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { scrollToSection } from '@/utils/scroll';
import { BrandLogo } from './BrandLogo';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        const sections = ['hero', 'services', 'impact', 'clients', 'testimonials', 'contact'];
        const current = sections.find((section) => {
          const element = document.getElementById(section);
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        });
        if (current) setActiveSection(current);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const onNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'impact', label: 'Impact' },
    { id: 'clients', label: 'Clients' },
    { id: 'testimonials', label: 'Testimonials' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md border-b border-gray-100' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => onNavClick('hero')} className="flex items-center" aria-label="Go to home">
              <BrandLogo className="h-10 w-auto" />
            </button>

            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-[var(--brand-primary)] bg-[rgba(var(--brand-primary-rgb),0.1)]'
                      : 'text-gray-700 hover:text-[var(--brand-primary)] hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => onNavClick('contact')}
                className="bg-[var(--brand-primary)] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[var(--brand-primary-dark)] transition-colors ml-2"
              >
                Contact
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/25 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed left-4 right-4 top-20 z-50 md:hidden bg-white rounded-xl shadow-xl border border-gray-100 p-3"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavClick(item.id)}
                    className={`px-4 py-3 rounded-lg font-medium text-left transition-colors ${
                      activeSection === item.id
                        ? 'text-[var(--brand-primary)] bg-[rgba(var(--brand-primary-rgb),0.1)]'
                        : 'text-gray-700 hover:text-[var(--brand-primary)] hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => onNavClick('contact')}
                  className="mt-1 bg-[var(--brand-primary)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--brand-primary-dark)] transition-colors"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
