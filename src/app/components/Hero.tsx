import { ArrowRight, Brain, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { scrollToSection } from '@/utils/scroll';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900">
              Transform Your Business with{' '}
              <span className="text-[var(--brand-primary)]">Intelligent AI Solutions</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              Strategic AI consulting that bridges the gap between cutting-edge technology and real business value
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[var(--brand-primary)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[var(--brand-primary-dark)] transition-colors flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-[var(--brand-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[rgba(var(--brand-primary-rgb),0.05)] transition-colors border-2 border-[rgba(var(--brand-primary-rgb),0.35)]"
              >
                Explore Services
              </button>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="relative bg-white rounded-2xl p-5 border border-[rgba(var(--brand-primary-rgb),0.2)] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--brand-primary-rgb),0.12),transparent_55%)]" />
              <div className="relative">
                <p className="text-sm font-semibold text-[var(--brand-primary)] mb-2">AI in Action</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We design adoption paths, equip leadership teams, and deploy practical AI workflows aligned with
                  measurable business outcomes.
                </p>
              </div>
            </div>
            {[
              { icon: Brain, title: 'Strategic AI Leadership', desc: 'Executive training for AI-driven transformation' },
              { icon: TrendingUp, title: 'Digital Readiness', desc: 'Comprehensive AI adoption assessment' },
              { icon: Zap, title: 'AI Agent Platform', desc: 'Connect your tools with intelligent agents' },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[rgba(var(--brand-primary-rgb),0.3)] hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35, delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-[rgba(var(--brand-primary-rgb),0.12)]">
                      <Icon className="w-6 h-6 text-[var(--brand-primary)]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
