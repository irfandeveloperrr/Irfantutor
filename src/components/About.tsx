import { motion } from 'framer-motion';
import { Heart, Lightbulb, RefreshCw, Quote } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';
import { MessageCircle } from 'lucide-react';

const principles = [
  {
    icon: Heart,
    title: 'Teaching is something I genuinely enjoy',
    text: 'What makes me happiest is when a student finally understands something they were struggling with. That moment is why I do this.',
  },
  {
    icon: Lightbulb,
    title: 'Understanding over memorising',
    text: 'I don’t want tuition to feel like just another place to sit and memorise. I want your child to actually understand and enjoy the process.',
  },
  {
    icon: RefreshCw,
    title: 'Always ready to adjust my method',
    text: 'If one explanation doesn’t work, I’ll explain it differently, use a practical example, simplify it, or try another approach entirely.',
  },
];

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" className="relative bg-emerald-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
          {/* Portrait card — CSS illustration */}
          <motion.div
            ref={ref as React.RefObject<HTMLDivElement>}
            initial={{ opacity: 0, x: -24 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="gradient-border relative overflow-hidden p-2"
          >
            <div className="relative flex h-full min-h-[360px] flex-col justify-end overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 p-8 text-white">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-emerald-400/30 blur-2xl" />
              <div className="absolute right-8 top-8 h-24 w-24 rounded-2xl border-2 border-white/20" />
              <div className="absolute right-16 top-20 h-16 w-16 rounded-full border-2 border-white/15" />
              <div className="absolute bottom-24 left-6 h-12 w-12 rounded-lg bg-white/10 backdrop-blur" />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="grid h-28 w-28 place-items-center rounded-full bg-white/15 backdrop-blur-md ring-4 ring-white/20">
                  <span className="font-display text-5xl font-extrabold text-white">I</span>
                </div>
              </div>

              <div className="relative z-10">
                <p className="font-display text-2xl font-bold">Irfan</p>
                <p className="mt-1 text-emerald-100">Home Tutor · Hyderabad</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium">Maths</span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium">Science</span>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium">Classes 6–12</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Personal message */}
          <div>
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
              A little about how I teach
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Teaching, for me, is about understanding — not just finishing the syllabus
            </h2>

            <div className="relative mt-6 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <Quote className="h-7 w-7 text-emerald-300" />
              <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
                Teaching has always been something I genuinely enjoy. What makes me happiest is when
                a student finally understands something they were struggling with.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                I don’t want students to feel that tuition is just another place where they have to
                sit and memorise. I want them to feel comfortable, ask questions freely and enjoy the
                process of learning.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
                I am always willing to adjust my teaching method according to what works best for the
                student. Because at the end of the day, what matters to me is that the student
                understands, feels confident and is satisfied with their progress.
              </p>
              <p className="mt-5 font-display text-sm font-bold text-emerald-700">— Irfan</p>
            </div>

            <div className="mt-6 grid gap-3">
              {principles.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="group flex gap-4 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-600/10"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-900">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" />
              Talk to me on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
