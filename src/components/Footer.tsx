import { GraduationCap, Instagram, MessageCircle, Phone, MapPin } from 'lucide-react';
import { INSTAGRAM_URL, whatsappLink, WHATSAPP_DISPLAY, DEFAULT_WHATSAPP_MESSAGE } from '@/lib/constants';

const nav = [
  { href: '#about', label: 'About' },
  { href: '#philosophy', label: 'Philosophy' },
  { href: '#approach', label: 'My Approach' },
  { href: '#subjects', label: 'Subjects' },
  { href: '#wants', label: 'For Every Student' },
  { href: '#areas', label: 'Areas' },
  { href: '#faq', label: 'FAQ' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-slate-300">
      <div className="grid-pattern absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-extrabold text-white">Irfan Tutor</span>
                <span className="text-[11px] text-emerald-400">Home Tuition · Hyderabad</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Personal Attention. Better Understanding. Brighter Futures. One-to-one home tuition
              for children across Hyderabad.
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-emerald-400 transition-colors hover:bg-emerald-600 hover:text-white"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-emerald-400 transition-colors hover:bg-emerald-600 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Explore</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-slate-400 transition-colors hover:text-emerald-400">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 transition-colors hover:text-emerald-400"
                >
                  <Phone className="h-4 w-4 text-emerald-400" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 transition-colors hover:text-emerald-400"
                >
                  <Instagram className="h-4 w-4 text-emerald-400" />
                  @irfan__tutor
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="h-4 w-4 text-emerald-400" />
                Hyderabad, Telangana
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Irfan Tutor. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Home tuition in Hyderabad · Maths & Science tutor · Enquiries on WhatsApp
          </p>
        </div>
      </div>
    </footer>
  );
}
