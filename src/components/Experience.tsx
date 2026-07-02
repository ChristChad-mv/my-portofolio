import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function Experience() {
  const { t } = useTranslation();

  const experiences = t('exp_list') as Array<{
    role: string;
    company: string;
    location: string;
    period: string;
    type: string;
    description: string;
    tags: string[];
    active: boolean;
  }>;

  return (
    <section id="experience" className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-white/40 mb-2">{t('exp_title')}</h2>
          <div className="text-4xl md:text-6xl font-light text-white leading-tight">
            {t('exp_subtitle')}
          </div>
        </div>
        <div className="w-full h-[1px] bg-white/10 mb-4 flex-1 hidden md:block mx-8" />
        <span className="text-slate-500 text-xs font-mono font-semibold uppercase tracking-widest">
          {experiences.length} {t('exp_positions')}
        </span>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-white/5" />

        <div className="flex flex-col gap-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative pl-12 md:pl-16 group"
            >
              {/* Timeline Dot */}
              <div className={`absolute left-[14px] md:left-[18px] top-8 w-[11px] h-[11px] rounded-full border-2 z-10 transition-colors duration-300 ${
                exp.active 
                  ? 'bg-indigo-500 border-indigo-400 shadow-lg shadow-indigo-500/30' 
                  : 'bg-[#0a0a0c] border-white/20 group-hover:border-indigo-400/60'
              }`} />

              {/* Card */}
              <div className={`p-6 md:p-8 rounded-2xl border transition-all duration-500 ${
                exp.active
                  ? 'border-indigo-500/20 bg-indigo-500/[0.03]'
                  : 'border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.02]'
              }`}>
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-indigo-400 text-sm font-medium">
                      {exp.company}
                    </p>
                  </div>
                  {exp.active && (
                    <span className="self-start px-2.5 py-0.5 text-[8px] font-mono font-bold uppercase tracking-widest bg-indigo-500/15 text-indigo-400 border border-indigo-500/20 rounded-full shrink-0">
                      ● {t('exp_current')}
                    </span>
                  )}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-slate-500 font-mono mb-5">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={11} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={11} /> {exp.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Briefcase size={11} /> {exp.type}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-white/[0.02] border border-white/5 rounded-lg text-[9px] font-mono text-slate-400 tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

