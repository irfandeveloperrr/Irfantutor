import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';
import { whatsappLink, WHATSAPP_DISPLAY, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';

export default function FinalCTA() {
  const { ref, visible } = useReveal();

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <motion.div
          ref={ref as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-700 via-emerald-700 to-emerald-900 px-6 py-12 text-center shadow-2xl shadow-emerald-700/30 sm:px-12 sm:py-16"
        >
          {/* Decorative */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-teal-300/20 blur-3xl" />
          <div className="grid-pattern absolute inset-0 opacity-20" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-emerald-50 backdrop-blur">
              <MessageCircle className="h-3.5 w-3.5" />
              Available on WhatsApp
            </span>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Give your child the attention they deserve
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-emerald-100 sm:text-lg">
              Send me a quick WhatsApp message today. Tell me your child’s class, subject and area —
              and we’ll take it from there. I’m happy to listen and help.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-white px-7 py-4 text-base font-bold text-emerald-700 shadow-xl transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                Let&apos;s Talk on WhatsApp
              </a>
            </div>

            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-100 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              {WHATSAPP_DISPLAY}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
