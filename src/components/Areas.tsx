import { motion } from 'framer-motion';
import { MapPin, Navigation, MessageCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/useReveal';
import { areaWhatsAppLink, AREA_AVAILABILITY_LINK } from '@/lib/constants';

const areas = [
  'Malakpet',
  'Saidabad',
  'Kishanbagh',
  'Bahadurpura',
  'Puranapool',
  'Chanchalguda',
];

export default function Areas() {
  const { ref, visible } = useReveal();

  return (
    <section id="areas" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Service areas"
          title="Looking for a tutor in your area?"
          subtitle="I provide tuition in selected areas of Hyderabad, including Malakpet, Saidabad, Kishanbagh, Bahadurpura, Puranapool and Chanchalguda. Are you from a nearby locality? Just send me a WhatsApp message — I’ll personally confirm whether I can provide tuition in your area."
          center
        />

        <div ref={ref as React.RefObject<HTMLDivElement>} className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Map-style illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={visible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative min-h-[280px] overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50/70 p-6 sm:p-8"
          >
            <div className="grid-pattern absolute inset-0 opacity-50" />
            <svg viewBox="0 0 400 280" className="relative h-full w-full" fill="none">
              <path d="M20 220 C 120 120, 200 180, 380 60" stroke="#10b981" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
              <path d="M40 40 C 140 140, 220 100, 380 200" stroke="#34d399" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
              <path d="M200 20 L 200 260" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 8" opacity="0.6" />
              <circle cx="200" cy="140" r="10" fill="#047857" />
              <circle cx="200" cy="140" r="20" fill="#047857" opacity="0.15" />
              {[
                [60, 80],
                [120, 200],
                [300, 60],
                [340, 220],
                [80, 240],
                [320, 120],
              ].map(([x, y], i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="6" fill="#10b981" />
                  <circle cx={x} cy={y} r="12" fill="#10b981" opacity="0.15" />
                </g>
              ))}
            </svg>
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-emerald-700 shadow-sm backdrop-blur">
              <Navigation className="h-3.5 w-3.5" />
              Hyderabad, Telangana
            </div>
          </motion.div>

          {/* Area cards + availability note */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {areas.map((a, i) => (
                <motion.a
                  key={a}
                  href={areaWhatsAppLink(a)}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                  className="group flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4 transition-all hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-600/20"
                  aria-label={`Check tuition availability in ${a}`}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-white/20 group-hover:text-white">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-display text-base font-bold text-emerald-800 group-hover:text-white">{a}</span>
                    <span className="text-xs text-emerald-600/80 group-hover:text-emerald-50">Tap to check on WhatsApp</span>
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Availability note — honest, not a guarantee */}
            <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
              <p className="text-sm leading-relaxed text-slate-600">
                From a nearby locality that isn&apos;t listed here? Send me a message with your area
                and I&apos;ll personally confirm whether I can come there. Tuition in surrounding
                areas is always subject to confirmation.
              </p>
            </div>

            <a
              href={AREA_AVAILABILITY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Check Tuition Availability in My Area
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
