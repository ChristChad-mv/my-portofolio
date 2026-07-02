import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-24 pb-16 bg-[#030303]">
      {/* Tech Grid Background with Mask */}
      <div className="absolute inset-0 grid-pattern grid-mask opacity-40 pointer-events-none" />

      {/* Decorative Radial Glowing Elements */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="w-[600px] md:w-[850px] h-[600px] md:h-[850px] bg-indigo-600 rounded-full blur-[100px] md:blur-[140px] mix-blend-screen animate-pulse-slow"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
          className="w-[400px] md:w-[650px] h-[400px] md:h-[650px] bg-purple-500 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen absolute ml-16 md:ml-32 mt-16 md:mt-32 animate-pulse-slow"
        />
      </div>

      <div className="z-10 text-center px-5 md:px-4 max-w-4xl w-full flex flex-col items-center">

        {/* Greeting & Role Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 glass rounded-full border border-indigo-500/20 mb-8 md:mb-10 cursor-default shadow-lg shadow-indigo-950/20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
          <span className="text-indigo-300 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.25em] font-semibold">
            {t('hero_badge')}
          </span>
        </motion.div>

        {/* Big Name — This is a portfolio, YOUR name is the headline */}
        <motion.h1 
          className="text-[42px] sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-5 font-sans"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <span className="text-gradient-primary">Christ Chadrak</span> <br />
          <span className="text-gradient-purple">Mvoungou</span>
        </motion.h1>

        {/* Tagline — what you do, punchy and elegant */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-indigo-300/80 font-serif italic font-light tracking-tight mb-6 text-glow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {t('hero_tagline')}
        </motion.p>

        {/* Bio */}
        <motion.p 
          className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10 md:mb-12 font-sans font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t('hero_bio')}
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 text-xs font-semibold tracking-widest uppercase font-mono w-full sm:w-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <a href="#projects" className="w-full sm:w-auto px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:shadow-indigo-600/30 flex items-center justify-center gap-2 hover:-translate-y-0.5 border border-indigo-500/30">
            {t('hero_cta')} <ArrowRight size={14} />
          </a>
          
          <div className="flex items-center gap-3">
            <a href="https://github.com/ChristChad-mv" target="_blank" rel="noreferrer" className="p-3 md:p-3.5 rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5 text-slate-300 hover:text-white glass">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/mvoungouchad18" target="_blank" rel="noreferrer" className="p-3 md:p-3.5 rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5 text-slate-300 hover:text-white glass">
              <Linkedin size={16} />
            </a>
            <a href="mailto:ccmvoungou@gmail.com" className="p-3 md:p-3.5 rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5 text-slate-300 hover:text-white glass">
              <Mail size={16} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Indicator */}
      <motion.div 
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-[8px] md:text-[9px] font-mono tracking-[0.3em] text-indigo-400/80 animate-bounce">↓</span>
      </motion.div>
    </section>
  );
}
