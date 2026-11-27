import { motion } from 'framer-motion';
import { UserSearch, MessageSquareDashed, Smile } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/useReveal';

const principles = [
  {
    icon: UserSearch,
    title: 'Understand the student first',
    text: 'Before I teach anything, I take time to understand how your child learns — their comfort level, their difficulties, and what already confuses them.',
  },
  {
    icon: MessageSquareDashed,
    title: 'Explain concepts in different ways',
    text: 'Some students learn by listening, some through examples, some through practice. If one explanation doesn’t work, I happily try another until it clicks.',
  },
  {
    icon: Smile,
    title: 'Make sure they feel confident',
    text: 'Understanding isn’t enough if a child still feels unsure. I want every student to feel satisfied and confident with what they’ve learnt before we move on.',
  },
];

export default function Methodology() {
  const { ref, visible } = useReveal();

  return (
    <section id="philosophy" className="relative overflow-hidden bg-emerald-50/60 py-20 sm:py-28">
      <div className="blob right-[-10%] top-[10%] h-72 w-72 bg-emerald-200/40" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="My teaching philosophy"
          title="I don’t believe in one teaching method for every student"
          subtitle="Some students learn by listening. Some understand better through examples. Others need to practise a concept several times before it becomes clear. That’s completely okay. I adapt my teaching to the student — not the other way around."
        />

        <div ref={ref as React.RefObject<HTMLDivElement>} className="mt-14 grid gap-5 md:grid-cols-3">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-600/10"
            >
              <div className="absolute right-5 top-5 font-display text-5xl font-extrabold text-emerald-100">
                {i + 1}
              </div>
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 font-display text-lg font-bold text-slate-900">{p.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-sm">
          <p className="text-base leading-relaxed text-slate-700">
            I take time to understand each student’s learning style, difficulties and comfort level.
            I adapt my teaching approach so that the student doesn’t just memorise an answer — they
            actually understand what they are learning.
          </p>
        </div>
      </div>
    </section>
  );
}
