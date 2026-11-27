import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, GraduationCap, MessageCircle } from 'lucide-react';
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';

const links = [
  { href: '#about', label: 'About' },
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#approach', label: 'My Approach' },
  { href: '#subjects', label: 'Subjects' },
  { href: '#wants', label: 'For Every Student' },
  { href: '#areas', label: 'Areas' },
  { href: '#faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open so the page doesn't jump.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close on Escape for accessibility.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Click-away: close when tapping outside the header (on the backdrop).
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    // Defer to avoid the same click that opened the menu from closing it.
    const t = window.setTimeout(() => {
      window.addEventListener('click', onClick);
    }, 0);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('click', onClick);
    };
  }, [open]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // Smooth-scroll to the section, then close the menu.
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setOpen(false);
    },
    []
  );

  const toggleMenu = useCallback(() => {
    setOpen((v) => !v);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
        scrolled || open ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_-12px_rgba(4,120,87,0.25)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5"
          aria-label="Irfan Tutor — home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg shadow-emerald-600/30">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold tracking-tight text-emerald-800">
              Irfan Tutor
            </span>
            <span className="text-[11px] font-medium text-emerald-600/80">Home Tuition · Hyderabad</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="cursor-pointer rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition-transform hover:scale-[1.03] active:scale-95 sm:flex"
          >
            <MessageCircle className="h-4 w-4" />
            Let&apos;s Talk on WhatsApp
          </a>
          <button
            type="button"
            onClick={toggleMenu}
            className="relative z-10 grid h-11 w-11 place-items-center rounded-xl border border-emerald-200 bg-white/90 text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50 active:scale-95 lg:hidden"
            style={{ touchAction: 'manipulation' }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop to catch taps outside the menu and guarantee click-away */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[64px] z-0 bg-emerald-950/20 lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="relative z-10 overflow-hidden bg-white/98 backdrop-blur-xl shadow-lg lg:hidden"
            >
              <ul className="flex flex-col gap-1 px-5 pb-6 pt-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={(e) => handleNavClick(e, l.href)}
                      className="block rounded-xl px-4 py-3.5 text-base font-medium text-slate-800 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <a
                    href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 px-4 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/30"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Let&apos;s Talk on WhatsApp
                  </a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
