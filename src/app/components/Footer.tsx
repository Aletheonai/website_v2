import { Mail } from 'lucide-react';
import { scrollToSection } from '@/utils/scroll';
import { BrandLogo } from './BrandLogo';

export function Footer() {
  return (
    <footer className="bg-[#E9E0F8] text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <BrandLogo className="h-10 w-auto" />
            </div>
            <p className="text-gray-700 mb-6 max-w-md leading-relaxed">
              Strategic AI consulting that bridges the gap between cutting-edge technology and real business value. Transform your organization with intelligent solutions.
            </p>
            <div className="flex gap-3 items-center">
              <a
                href="mailto:info@aletheon.ai"
                className="w-10 h-10 rounded-lg bg-white hover:bg-gray-100 transition-colors flex items-center justify-center"
                aria-label="Email Aletheon"
              >
                <Mail className="w-5 h-5 text-[var(--brand-primary)]" />
              </a>
              <span className="text-sm text-gray-700">info@aletheon.ai</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-700 hover:text-[var(--brand-primary)] transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-700 hover:text-[var(--brand-primary)] transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('impact')}
                  className="text-gray-700 hover:text-[var(--brand-primary)] transition-colors text-sm"
                >
                  Impact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('clients')}
                  className="text-gray-700 hover:text-[var(--brand-primary)] transition-colors text-sm"
                >
                  Clients
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-700 hover:text-[var(--brand-primary)] transition-colors text-sm"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>
                <a href="mailto:info@aletheon.ai" className="hover:text-[var(--brand-primary)] transition-colors">
                  info@aletheon.ai
                </a>
              </li>
              <li>Global Services</li>
              <li>Virtual & On-site</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#C9C7EF] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 text-sm">
            © {new Date().getFullYear()} aletheon.ai. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy-policy.html" className="text-gray-700 hover:text-[var(--brand-primary)] transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service.html" className="text-gray-700 hover:text-[var(--brand-primary)] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
