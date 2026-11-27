import { motion } from 'framer-motion';
import { MessageCircleQuestion, ShieldOff, Layers, Clock, TrendingUp } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/useReveal';
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';
import { MessageCircle } from 'lucide-react';

const wants = [
  {
    icon: MessageCircleQuestion,
    title: 'Confidence to ask questions',
    text: 'I want every student to feel comfortable asking anything, without hesitation. Questions are how understanding begins.',
  },
  {
    icon: ShieldOff,
    title: 'No fear of making mistakes',
    text: 'Mistakes are part of learning, not something to hide. In our sessions, they simply show us what to work on next.',
  },
  {
    icon: Layers,
    title: 'Strong understanding of fundamentals',
    text: 'When the basics are clear, everything built on top becomes easier. I make sure the foundations are truly solid.',
  },
  {
    icon: Clock,
    title: 'Learning at a comfortable pace',
    text: 'We move forward only when your child is ready — never at a speed set by a crowded classroom.',
  },
  {
    icon: TrendingUp,
    title: 'Gradual academic improvement',
    text: 'Progress may be step by step, but it’s honest and lasting. I value steady understanding over quick, shaky results.',
  },
];

export default function PersonalAttention() {
  const { ref, visible } = useReveal();

  return (
    <section id="wants" className="relative bg-emerald-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="For every student"
          title="What I want for every student"
          subtitle="Personal attention does more than cover the syllabus — it can gently uncover the small learning difficulties that often go unnoticed in a crowded classroom. That’s where real progress begins."
          center
        />

        <div ref={ref as React.RefObject<HTMLDivElement>} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {wants.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex gap-4 rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-600/10"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <w.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-slate-900">{w.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{w.text}</p>
              </div>
            </motion.div>
          ))}

          {/* Highlight card — quiet, not criticising schools */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: wants.length * 0.08 }}
            className="relative flex flex-col justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-6 text-white shadow-lg shadow-emerald-600/20"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/30 blur-2xl" />
            <h3 className="relative font-display text-lg font-bold">The quiet value of one-to-one</h3>
            <p className="relative text-sm leading-relaxed text-emerald-50">
              In a large class, a small difficulty can quietly slip by. Sitting with one student,
              I notice the little hesitations — and we sort them out before they grow.
            </p>
          </motion.div>
        </div>

        <div className="mt-10 text-center">
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-5 w-5" />
            Discuss your child on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
