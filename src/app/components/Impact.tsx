import { TrendingUp, DollarSign, CheckCircle, Zap } from 'lucide-react';
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
  },
  {
    icon: CheckCircle,
    value: 98,
    suffix: '%',
    label: 'Client satisfaction rate',
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

function AnimatedMetric({ label, value, color }: { label: string; value: number; color: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-gray-900">{label}</span>
        <span className="font-bold" style={{ color }}>{value}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${value}%` : 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        <div className="bg-gray-50 rounded-2xl p-12 border border-gray-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">
                Transforming Industries with AI
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our clients see measurable improvements across all key metrics. From streamlining operations to enhancing decision-making capabilities, AI integration delivers tangible business value.
              </p>
              <ul className="space-y-4">
                {[
                  { title: 'Proven Methodology', desc: 'Tested frameworks across multiple industries' },
                  { title: 'Continuous Support', desc: 'Ongoing guidance throughout your AI journey' },
                  { title: 'Measurable ROI', desc: 'Clear metrics and KPIs to track success' },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--brand-secondary)] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold mb-1 text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="space-y-6">
                {[
                  { label: 'Productivity Gains', value: 85, color: 'var(--brand-primary)' },
                  { label: 'Cost Efficiency', value: 92, color: 'var(--brand-secondary)' },
                  { label: 'Time Savings', value: 78, color: 'var(--brand-accent)' },
                ].map((metric, idx) => (
                  <AnimatedMetric key={idx} label={metric.label} value={metric.value} color={metric.color} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
