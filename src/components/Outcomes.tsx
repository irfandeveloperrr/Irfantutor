import { motion } from 'framer-motion';
import { TrendingUp, Smile, ShieldCheck, Brain } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/useReveal';

// Note: qualitative outcomes, not invented metrics/percentages.
const outcomes = [
  {
    icon: Brain,
    title: 'Clearer understanding',
    text: 'Concepts finally make sense. Children move from memorising to genuinely understanding the “why” behind each topic.',
  },
  {
    icon: TrendingUp,
    title: 'Steady improvement',
    text: 'With regular practice and revision, performance improves gradually and consistently over the term.',
  },
  {
    icon: Smile,
    title: 'Renewed confidence',
    text: 'As gaps close, hesitation fades. Children start answering in class and attempting problems on their own.',
  },
  {
    icon: ShieldCheck,
    title: 'Less exam anxiety',
    text: 'Familiar topics, guided practice and a calm approach help children face tests with far less stress.',
  },
];

export default function Outcomes() {
  const { ref, visible } = useReveal();

  return (
    <section id="outcomes" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="grid-pattern absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Learning outcomes"
          title="What I hope personal attention helps your child achieve"
          subtitle="The goal isn’t only better marks — it’s a child who understands, enjoys the subject, and starts to believe in their own ability."
          center
        />

        <div ref={ref as React.RefObject<HTMLDivElement>} className="mt-14 grid gap-5 sm:grid-cols-2">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex gap-5 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-600/10"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <o.icon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{o.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-slate-400">
          Every child is different, and progress depends on effort, starting level and consistency. My aim is always steady, honest understanding — not rushed results.
        </p>
      </div>
    </section>
  );
}
