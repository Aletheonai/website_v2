import { Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote:
      'We attended the Generative AI and Data Analysis training. Thank you, Aletheon, for these three amazing days! We truly delved into AI and gained numerous practical insights. The interaction and passion you brought to the sessions were both memorable and highly beneficial. In a time where everything is driven by AI, this training is truly a must.',
    name: 'L&D Director',
    company: 'Café Najjar',
  },
  {
    quote:
      'Today, e-world beams with pride as we wrap up Prompt Engineering for AI training for our esteemed client, CMA CGM. Under the expert guidance of Aletheon, participants displayed unmatched zeal, commitment, and an insatiable curiosity. To all our stellar students: Your AI journey is just taking off! With the vast universe of prompt engineering ahead. Stay ignited, keep the questions coming, and forge ahead in the AI frontier!',
    name: 'Chief Executive Officer',
    company: 'e-world',
  },
  {
    quote:
      'Unlocking Achievement: Prompt Engineering Certification feat. Aletheon With great enthusiasm, I share the successful completion of the Prompt Engineering for AI certification, guided by Aletheon. Standing as one of the pioneers in Lebanon to attain this accolade fills me with immense pride. Under Aletheon\'s mentorship, I\'ve cultivated a deep understanding of AI and chatbot technologies, positioning myself to drive innovation and shape the AI landscape.',
    name: 'Senior Data  Engineer',
    company: 'CMA CGM',
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
