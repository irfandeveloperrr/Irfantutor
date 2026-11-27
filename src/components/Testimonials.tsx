import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/useReveal';
import { INSTAGRAM_URL, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section id="testimonials" className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 to-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Real parent voices from my Instagram"
          subtitle="I share genuine parent experiences over on Instagram. Visit the page to see what families say about learning with me."
          center
        />

        <div ref={ref as React.RefObject<HTMLDivElement>} className="mt-14">
          <motion.a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="group relative mx-auto block max-w-3xl overflow-hidden rounded-3xl border border-emerald-200 bg-white p-8 shadow-xl shadow-emerald-600/10 transition-all hover:-translate-y-1 hover:shadow-2xl sm:p-12"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-pink-400/20 to-emerald-300/30 blur-2xl" />
            <div className="absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-emerald-200/30 blur-2xl" />

            <div className="relative flex flex-col items-center text-center">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500 via-pink-500 to-amber-400 text-white shadow-lg">
                <Instagram className="h-8 w-8" />
              </span>

              <Quote className="mt-6 h-8 w-8 text-emerald-300" />
              <p className="mt-3 max-w-xl font-display text-xl font-semibold leading-relaxed text-slate-800 sm:text-2xl">
                See what parents share about their child’s journey with me on my Instagram page.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-transform group-hover:scale-[1.03]">
                Visit @irfan__tutor on Instagram
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </motion.a>

          <div className="mx-auto mt-6 max-w-3xl text-center">
            <p className="text-sm text-slate-500">
              Prefer to talk directly? Enquiries are welcome on WhatsApp.
            </p>
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:underline"
            >
              Message on WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
