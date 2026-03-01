import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';
import { type ChangeEvent, type FormEvent, useState } from 'react';
import { toast } from 'sonner';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    if (formData.message.trim().length < 20) {
      toast.error('Please provide a bit more detail (at least 20 characters).');
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error('Contact form is not configured yet. Add EmailJS environment variables.');
      return;
    }

    try {
      setIsSubmitting(true);
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'Not provided',
          message: formData.message,
        },
        {
          publicKey,
        }
      );
      toast.success('Message sent successfully. We will get back to you soon.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      const error = err as { status?: number; text?: string };
      console.error('EmailJS error:', error);
      const msg = error.status === 401
        ? 'Invalid EmailJS configuration. Check your Service ID, Template ID, and Public Key in .env.local'
        : error.status === 403
          ? 'EmailJS blocked this request. Add localhost to allowed referrers in your EmailJS dashboard.'
          : error.text || 'Message failed to send. Please try again in a moment.';
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[rgba(var(--brand-primary-rgb),0.03)]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business with AI? Let's start the conversation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-10 border border-gray-200">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[rgba(var(--brand-primary-rgb),0.2)] transition-all outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[rgba(var(--brand-primary-rgb),0.2)] transition-all outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[rgba(var(--brand-primary-rgb),0.2)] transition-all outline-none"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[var(--brand-primary)] focus:ring-2 focus:ring-[rgba(var(--brand-primary-rgb),0.2)] transition-all outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--brand-primary)] disabled:opacity-70 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg font-semibold hover:bg-[var(--brand-primary-dark)] transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5" />
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-4 text-center">We usually reply within one business day.</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-10 border border-gray-200">
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-[rgba(var(--brand-primary-rgb),0.12)]">
                    <Mail className="w-6 h-6 text-[var(--brand-primary)]" />
                  </div>
                  <div>
                    <div className="font-bold mb-1 text-gray-900">Email</div>
                    <a href="mailto:info@aletheon.ai" className="text-gray-600 hover:text-[var(--brand-primary)] transition-colors">
                      info@aletheon.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-[rgba(var(--brand-secondary-rgb),0.12)]">
                    <Phone className="w-6 h-6 text-[var(--brand-secondary)]" />
                  </div>
                  <div>
                    <div className="font-bold mb-1 text-gray-900">Phone</div>
                    <p className="text-gray-600">Available on request</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-[rgba(var(--brand-primary-rgb),0.12)]">
                    <MapPin className="w-6 h-6 text-[var(--brand-primary)]" />
                  </div>
                  <div>
                    <div className="font-bold mb-1 text-gray-900">Location</div>
                    <p className="text-gray-600">
                      Global consulting services<br />
                      Virtual and on-site available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose */}
            <div className="bg-[var(--brand-primary)] rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Aletheon?</h3>
              <ul className="space-y-4">
                {[
                  'Expert AI consultants with proven track record',
                  'Tailored solutions for your specific needs',
                  'End-to-end support from strategy to implementation',
                  'Measurable ROI and business impact',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
