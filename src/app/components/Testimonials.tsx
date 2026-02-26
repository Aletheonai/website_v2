import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote:
      'Aletheon helped us move from AI curiosity to a practical roadmap in just a few weeks. Their approach was clear, strategic, and measurable.',
    name: 'Operations Director',
    company: 'Regional Logistics Group',
  },
  {
    quote:
      'The leadership training sessions aligned our executive team and gave us confidence to prioritize the right AI opportunities across departments.',
    name: 'Chief Strategy Officer',
    company: 'Consumer Goods Company',
  },
  {
    quote:
      'Their team translated complex AI concepts into concrete business actions. We improved delivery speed and decision quality almost immediately.',
    name: 'General Manager',
    company: 'Travel & Services Enterprise',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[rgba(var(--brand-primary-rgb),0.03)]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">What Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feedback from leaders who partnered with Aletheon to turn AI strategy into business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.article
              key={`${item.name}-${item.company}`}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[rgba(var(--brand-primary-rgb),0.3)] hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <Quote className="w-8 h-8 text-[var(--brand-primary)] mb-5" />
              <p className="text-gray-700 leading-relaxed mb-6">&ldquo;{item.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.company}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
