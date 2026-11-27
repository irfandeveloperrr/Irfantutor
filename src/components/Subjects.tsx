import { motion } from 'framer-motion';
import { Calculator, Atom, FlaskConical, BookOpen, Globe, Sigma } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/useReveal';
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';

const subjects = [
  { icon: Calculator, name: 'Mathematics', desc: 'Arithmetic to algebra, geometry, trigonometry and calculus foundations.' },
  { icon: Atom, name: 'Physics', desc: 'Motion, energy, light and electricity — explained with real-world examples.' },
  { icon: FlaskConical, name: 'Chemistry', desc: 'Atoms, reactions and equations made simple and memorable.' },
  { icon: Sigma, name: 'Accountancy', desc: 'Bookkeeping, journal entries and accounts basics for senior classes.' },
  { icon: BookOpen, name: 'English & Social Studies', desc: 'Reading, writing, comprehension and social science support.' },
  { icon: Globe, name: 'General Science', desc: 'Concept-building for younger classes across science topics.' },
];

const classes = [
  { range: 'Classes 6–8', note: 'Foundation years' },
  { range: 'Classes 9–10', note: 'Board exam readiness' },
  { range: 'Classes 11–12', note: 'Senior subjects' },
];

export default function Subjects() {
  const { ref, visible } = useReveal();

  return (
    <section id="subjects" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Subjects & classes"
          title="Support across the subjects that matter most"
          subtitle="From building basics in middle school to senior secondary concepts, sessions are tailored to your child’s class and syllabus."
          center
        />

        <div ref={ref as React.RefObject<HTMLDivElement>} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-600/10"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-50 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg shadow-emerald-600/30">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-5 font-display text-lg font-bold text-slate-900">{s.name}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Class bands */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {classes.map((c, i) => (
            <motion.div
              key={c.range}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/60 p-6 text-center"
            >
              <p className="font-display text-xl font-extrabold text-emerald-800">{c.range}</p>
              <p className="mt-1 text-sm text-emerald-700/80">{c.note}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={whatsappLink("Hello Irfan, I'd like to know which subjects you can teach for my child. Could you please share the details?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-emerald-200 bg-white px-6 py-3.5 text-base font-semibold text-emerald-700 transition-colors hover:bg-emerald-50"
          >
            Ask about a specific subject
          </a>
        </div>
      </div>
    </section>
  );
}
