import { motion } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';

export default function Header() {
  const { language, setLanguage, t } = useTranslation();

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-3 md:px-8 flex justify-center pointer-events-none">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-12 md:h-14 max-w-5xl w-full flex items-center justify-between px-4 md:px-6 glass rounded-2xl pointer-events-auto shadow-2xl shadow-black/50 border border-white/10"
      >
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <img src="/favicon.svg" alt="CM Logo" className="w-7 h-7 md:w-8 md:h-8 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
          <span className="font-semibold tracking-tight text-white text-[10px] md:text-xs font-mono uppercase hidden md:inline-block">
            C. MVOUNGOU <span className="text-indigo-400">/</span> <span className="text-slate-400">{t('nav_role')}</span>
          </span>
        </a>
        <div className="flex gap-3 md:gap-6 text-[9px] md:text-[10px] font-semibold tracking-widest uppercase items-center font-mono">
          <a href="#about" className="text-slate-400 hover:text-white transition-colors py-1 hidden md:inline-block">{t('nav_about')}</a>
          <a href="#projects" className="text-slate-400 hover:text-white transition-colors py-1">{t('nav_projects')}</a>
          <a href="#experience" className="text-slate-400 hover:text-white transition-colors py-1 hidden sm:inline-block">{t('nav_experience')}</a>
          <a href="#skills" className="text-slate-400 hover:text-white transition-colors py-1 hidden sm:inline-block">{t('nav_skills')}</a>
          <a href="/Mvoungou_Christ_Chadrak_Resume.pdf" target="_blank" className="text-slate-400 hover:text-white transition-colors py-1 hidden lg:inline-block">{t('nav_resume')}</a>
          <a href="#contact" className="px-3 md:px-4 py-1.5 border border-indigo-500/30 hover:border-indigo-500/80 rounded-xl hover:bg-indigo-600/10 transition-all text-slate-200 hover:text-white ml-1">
            {t('nav_contact')}
          </a>
          <button 
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="px-2 py-1 text-[8px] md:text-[9px] border border-white/10 hover:border-indigo-500/40 rounded-xl hover:bg-white/5 transition-all text-indigo-400 hover:text-indigo-300 ml-1 font-mono uppercase font-bold cursor-pointer shrink-0 animate-pulse"
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </motion.nav>
    </header>
  );
}

