import { GraduationCap, BarChart3, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { scrollToSection } from '@/utils/scroll';

const services = [
  {
    icon: GraduationCap,
    title: 'Leadership-Level Training',
    description: 'We work with executives and top managers to explain how AI works, what it means for their business, and how to think about it strategically.',
    colorClass: 'text-[var(--brand-primary)]',
    highlights: [
      'Executive AI workshops',
      'Strategic planning sessions',
      'Change management guidance',
      'ROI assessment frameworks'
    ]
  },
  {
    icon: BarChart3,
    title: 'Digital Readiness',
    description: 'Many companies aren\'t ready to adopt AI yet. We assess their tools, workflows, and data and help them get to a place where AI can be used effectively.',
    colorClass: 'text-[var(--brand-secondary)]',
    highlights: [
      'Comprehensive AI readiness audit',
      'Process optimization',
      'Data infrastructure assessment',
      'Implementation roadmap'
    ]
  },
  {
    icon: Cpu,
    title: 'AI Agent Platform',
    description: 'Our platform connects with the digital tools a company already uses, processes their data, and enables AI agents to perform real business tasks.',
    colorClass: 'text-[var(--brand-accent)]',
    highlights: [
      'Seamless tool integration',
      'Intelligent automation',
      'Custom AI agents',
      'Real-time analytics'
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white/70">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to your organization's needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.title}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[rgba(var(--brand-primary-rgb),0.3)] hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-[rgba(var(--brand-primary-rgb),0.12)]">
                  <Icon className={`w-7 h-7 ${service.colorClass}`} />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.highlights.map((highlight, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-3 text-sm text-gray-700"
                    >
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${service.colorClass}`} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-[var(--brand-primary)] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-gray-50 rounded-2xl p-10 border border-gray-200">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              Ready to transform your business with AI?
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[var(--brand-primary)] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[var(--brand-primary-dark)] transition-colors flex items-center gap-2 mx-auto"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
