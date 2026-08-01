import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Linkedin, Github, Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function Contact() {
  const { language, t } = useTranslation();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const openWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const greeting = language === 'fr' ? 'Bonjour Christ' : 'Hello Christ';
    const introduction = language === 'fr'
      ? `Je m’appelle ${name}. Je vous contacte depuis votre portfolio.`
      : `My name is ${name}. I am contacting you from your portfolio.`;
    const whatsappMessage = `${greeting},\n\n${introduction}\n\n${message}`;
    window.open(`https://wa.me/33744533386?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
    <section id="contact" className="py-32 px-4 md:px-12 max-w-7xl mx-auto border-t border-white/5 relative overflow-hidden bg-[#030303]">
      {/* Background Glow */}
      <div className="absolute bottom-[-40%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 pb-24">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 cursor-default text-white font-sans leading-[1.05]">
            Let's build <br /> 
            <span className="italic font-serif font-light text-indigo-300 text-glow">{t('contact_subtitle')}</span>
          </h2>
          <p className="text-sm text-slate-400 font-sans max-w-md leading-relaxed font-light">
            {t('contact_intro')}
          </p>
        </div>

        {/* Contact Links Capsule Grid */}
        <div className="flex flex-col gap-4 w-full lg:w-auto min-w-[320px] font-mono">
          <div className="flex items-center gap-2 mb-4 px-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-[10px] font-semibold tracking-widest text-indigo-300 uppercase">{t('contact_badge')}</span>
          </div>

          <form onSubmit={openWhatsApp} className="p-5 rounded-2xl border border-white/10 bg-white/[0.025] space-y-3">
            <div>
              <label htmlFor="contact-name" className="block text-[10px] uppercase tracking-widest text-slate-400 mb-2">
                {t('contact_form_name')}
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-600 focus:border-indigo-500/50"
                placeholder={t('contact_form_name_placeholder')}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-[10px] uppercase tracking-widest text-slate-400 mb-2">
                {t('contact_form_message')}
              </label>
              <textarea
                id="contact-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm leading-relaxed text-white outline-none transition-colors placeholder:text-slate-600 focus:border-indigo-500/50"
                placeholder={t('contact_form_message_placeholder')}
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-xs font-semibold text-emerald-300 transition-colors hover:border-emerald-500/50 hover:bg-emerald-500/15 cursor-pointer"
            >
              <MessageCircle size={16} /> {t('contact_form_whatsapp')}
            </button>
            <p className="text-[9px] leading-relaxed text-slate-500">
              {t('contact_form_note')}
            </p>
          </form>

          <a href="mailto:ccmvoungou@gmail.com" className="group flex items-center justify-between gap-8 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all text-xs font-semibold text-slate-300 hover:text-white">
            <span className="flex items-center gap-3"><Mail size={16} className="text-indigo-400" /> Email</span>
            <ArrowUpRight className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-slate-500 group-hover:text-indigo-400" size={16} />
          </a>
          
          <a href="https://www.linkedin.com/in/mvoungouchad18" target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-8 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all text-xs font-semibold text-slate-300 hover:text-white">
            <span className="flex items-center gap-3"><Linkedin size={16} className="text-indigo-400" /> LinkedIn</span>
            <ArrowUpRight className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-slate-500 group-hover:text-indigo-400" size={16} />
          </a>
          
          <a href="https://github.com/ChristChad-mv" target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-8 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all text-xs font-semibold text-slate-300 hover:text-white">
            <span className="flex items-center gap-3"><Github size={16} className="text-indigo-400" /> GitHub</span>
            <ArrowUpRight className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-slate-500 group-hover:text-indigo-400" size={16} />
          </a>
          
          <a href="tel:+33744533386" className="group flex items-center justify-between gap-8 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-indigo-500/30 transition-all text-xs font-semibold text-slate-300 hover:text-white">
            <span className="flex items-center gap-3"><Phone size={16} className="text-indigo-400" /> Phone</span>
            <ArrowUpRight className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-slate-500 group-hover:text-indigo-400" size={16} />
          </a>
        </div>
      </div>
    </section>

    {/* Footer Section */}
    <footer className="h-16 border-t border-white/5 bg-[#030303] flex items-center justify-center px-6 md:px-12 text-[10px] font-mono tracking-tighter w-full mt-auto relative z-10">
      <div className="flex gap-4 md:gap-8 items-center h-full">
        <span className="text-slate-500">
          {t('contact_footer')}
        </span>
      </div>
    </footer>
    </>
  );
}


