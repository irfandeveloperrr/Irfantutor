import { motion } from 'framer-motion';
import { MessageCircle, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import ThreeHero from './ThreeHero';
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-white">
      {/* Background grid + blobs */}
      <div className="absolute inset-0 grid-pattern opacity-70" />
      <div className="blob left-[-10%] top-[5%] h-72 w-72 bg-emerald-300/50" />
      <div className="blob right-[-5%] top-[20%] h-80 w-80 bg-emerald-400/40" />
      <div className="blob left-[20%] bottom-[-10%] h-72 w-72 bg-teal-200/40" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-2 lg:gap-4 lg:pt-32">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-4 py-1.5 text-xs font-semibold text-emerald-700 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Personal Home Tuition in Hyderabad
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Personal Attention.
            <br />
            <span className="text-gradient">Better Understanding.</span>
            <br />
            Brighter Futures.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
            Every child learns differently. My job is to understand how your child learns best and
            teach accordingly. I believe in patience, personal attention and making even difficult
            concepts easier to understand.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-600/30 transition-all hover:shadow-2xl hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-95 sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" />
              Let&apos;s Talk on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#approach"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#approach')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-white/80 px-6 py-4 text-base font-semibold text-emerald-700 backdrop-blur transition-colors hover:bg-emerald-50 sm:w-auto"
            >
              <BookOpen className="h-5 w-5" />
              Know My Teaching Approach
            </a>
          </div>

          <div className="mt-9 flex items-center justify-center gap-6 text-sm text-slate-500 lg:justify-start">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-soft" />
              Happy to discuss your child&apos;s needs
            </div>
          </div>
        </motion.div>

        {/* 3D visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="order-1 relative h-[320px] w-full sm:h-[380px] lg:order-2 lg:h-[520px]"
        >
          {/* pointer-events-none so the canvas never steals nav/scroll touches */}
          <div className="absolute inset-0 pointer-events-none">
            <ThreeHero />
          </div>
          {/* Soft glow ring behind */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/30 blur-3xl" />
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="h-16 w-full sm:h-24">
          <path d="M0 120L60 105C120 90 240 60 360 55C480 50 600 70 720 75C840 80 960 70 1080 60C1200 50 1320 40 1380 35L1440 30V120H0Z" fill="#ecfdf5" />
        </svg>
      </div>
    </section>
  );
}
