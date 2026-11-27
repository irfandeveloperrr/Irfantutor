import { motion } from 'framer-motion';
import { ClipboardCheck, Lightbulb, NotebookPen, Repeat2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/useReveal';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Understand the student first',
    text: 'We start by talking — what your child finds easy, what feels difficult, and how they currently approach the subject. No assumptions.',
  },
  {
    icon: Lightbulb,
    title: 'Explain in the way that suits them',
    text: 'Each topic is broken down with simple language and everyday examples. If one explanation doesn’t land, I try another until it does.',
  },
  {
    icon: NotebookPen,
    title: 'Practise together, patiently',
    text: 'We work through problems side by side. Mistakes are completely welcome — they show exactly what to focus on next.',
  },
  {
    icon: Repeat2,
    title: 'Revise until it feels easy',
    text: 'Regular, gentle revision keeps earlier topics fresh and builds the confidence to take on new ones without fear.',
  },
];

export default function Approach() {
  const { ref, visible } = useReveal();

  return (
    <section id="approach" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="My approach"
          title="How I help your child understand, step by step"
          subtitle="No rushed lectures. Each session follows a simple, patient rhythm so your child builds real understanding — and never feels left behind."
        />

        <div ref={ref as React.RefObject<HTMLDivElement>} className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-600/10"
            >
              <div className="absolute right-5 top-5 font-display text-5xl font-extrabold text-emerald-100">
                {i + 1}
              </div>
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 font-display text-base font-bold text-slate-900">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
