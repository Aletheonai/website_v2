import { motion } from 'motion/react';

export function Clients() {
  const clients = [
    { name: 'CMA CGM', logo: '/logos/cma-cgm-logo.png', subtitle: 'in partnership with e-World' },
    { name: 'NAJJAR', logo: '/logos/cafe-najjar-logo.png', subtitle: '' },
    { name: 'Eid Travel', logo: '/logos/eid-travel-logo.png', subtitle: '' },
    { name: 'e-World', logo: '/logos/e-world-logo.jpg', subtitle: '' }
  ];
  const loopingClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-24 relative overflow-hidden bg-white/70">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Trusted By Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leading organizations worldwide choose Aletheon
          </p>
        </motion.div>

        <div className="relative overflow-hidden mb-20">
          <div className="logo-marquee-track">
            {loopingClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="logo-marquee-item flex flex-col items-center justify-center px-10 py-8 bg-transparent rounded-xl"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className={`object-contain ${
                    client.name === 'NAJJAR' ? 'h-24' : 'h-16'
                  }`}
                />
                {client.subtitle && (
                  <p className="text-xs text-gray-500 mt-4 text-center whitespace-nowrap">
                    {client.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-3 text-[var(--brand-primary)]">50+</div>
              <div className="text-gray-900 font-semibold text-lg mb-1">Projects Delivered</div>
              <div className="text-gray-500 text-sm">Across multiple industries</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3 text-[var(--brand-secondary)]">95%</div>
              <div className="text-gray-900 font-semibold text-lg mb-1">Client Retention</div>
              <div className="text-gray-500 text-sm">Long-term partnerships</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3 text-[var(--brand-primary)]">12+</div>
              <div className="text-gray-900 font-semibold text-lg mb-1">Industries Served</div>
              <div className="text-gray-500 text-sm">Diverse expertise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
