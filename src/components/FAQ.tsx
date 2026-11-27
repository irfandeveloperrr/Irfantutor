import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/useReveal';
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';

const faqs = [
  {
    q: 'Which classes and subjects do you teach?',
    a: 'I teach Maths, Physics, Chemistry and supporting subjects for Classes 6 to 12. For younger classes I also cover general science and English. Share your child’s class and the subject you need, and I’ll confirm on WhatsApp.',
  },
  {
    q: 'Where are the classes held?',
    a: 'Classes are held at your home in selected areas of Hyderabad, including Malakpet, Saidabad, Kishanbagh, Bahadurpura, Puranapool and Chanchalguda. If you’re in a nearby locality, message me on WhatsApp and I’ll personally confirm whether I can come there.',
  },
  {
    q: 'How often are the sessions?',
    a: 'Session frequency depends on your child’s needs and your preference. We can discuss a suitable weekly schedule on WhatsApp before starting.',
  },
  {
    q: 'How do I book or enquire?',
    a: 'All enquiries are handled over WhatsApp. Tap any “Let’s Talk on WhatsApp” button, and it opens a chat with me directly — no forms to fill.',
  },
  {
    q: 'Do you teach exam preparation and revision?',
    a: 'Yes. Alongside regular syllabus support, sessions include guided practice and revision to help children prepare confidently for school tests and exams.',
  },
  {
    q: 'Can I see what other parents say?',
    a: 'Of course. Parent experiences are shared on our Instagram page, @irfan__tutor. You’re welcome to visit and read through them.',
  },
];

export default function FAQ() {
  const { ref, visible } = useReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-emerald-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions parents often ask"
          subtitle="Still have a question? A quick WhatsApp message is the fastest way to get a clear answer."
          center
        />

        <div ref={ref as React.RefObject<HTMLDivElement>} className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-slate-900 sm:text-lg">{f.q}</span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${isOpen ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-600'}`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pb-6">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 transition-transform hover:scale-[1.03]"
          >
            Ask your question on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
