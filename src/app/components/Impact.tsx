import { TrendingUp, DollarSign, Zap, Layers, Headphones, BarChart3 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'motion/react';

const stats = [
  {
    icon: Zap,
    value: 40,
    suffix: '%',
    label: 'Faster workflows',
    color: 'var(--brand-secondary)'
  },
  {
    icon: DollarSign,
    value: 25,
    suffix: 'x',
    label: 'Reduction in operational costs',
    color: 'var(--brand-secondary)'
  },
  {
    icon: TrendingUp,
    value: 15,
    suffix: '%',
    label: 'Improvement in delivery quality',
    color: 'var(--brand-primary)'
  }
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-5xl font-bold">
      {count}
      <span>{suffix}</span>
    </div>
  );
}

export function Impact() {
  return (
    <section id="impact" className="py-24 relative overflow-hidden bg-[rgba(var(--brand-primary-rgb),0.03)]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            AI-Powered Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real, measurable results from organizations that embraced AI transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="bg-white rounded-xl p-8 border border-gray-200 text-center hover:border-[rgba(var(--brand-primary-rgb),0.3)] hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center mx-auto bg-[rgba(var(--brand-primary-rgb),0.12)]">
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="mb-3" style={{ color: stat.color }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-700 font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-900">
            Transforming Industries with AI
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our clients see measurable improvements across all key metrics. From streamlining operations to enhancing decision-making capabilities, AI integration delivers tangible business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Layers, title: 'Proven Methodology', desc: 'Tested frameworks across multiple industries', color: 'var(--brand-primary)' },
            { icon: Headphones, title: 'Continuous Support', desc: 'Ongoing guidance throughout your AI journey', color: 'var(--brand-secondary)' },
            { icon: BarChart3, title: 'Measurable ROI', desc: 'Clear metrics and KPIs to track success', color: 'var(--brand-primary)' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="bg-white rounded-xl p-8 border border-gray-200 text-center hover:border-[rgba(var(--brand-primary-rgb),0.3)] hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
              >
                <div className="w-12 h-12 rounded-lg mb-6 flex items-center justify-center mx-auto bg-[rgba(var(--brand-primary-rgb),0.12)]">
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
