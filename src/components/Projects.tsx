import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ExternalLink, 
  Github, 
  Code2, 
  BrainCircuit, 
  Sparkles, 
  Zap, 
  ShoppingBag, 
  Youtube, 
  Scale, 
  Bot, 
  X 
} from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { PROJECTS_DATA } from '../data/projectsData';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'scale':
      return <Scale className="text-emerald-400" size={22} />;
    case 'bot':
      return <Bot className="text-cyan-400" size={22} />;
    case 'brain':
      return <BrainCircuit className="text-indigo-400" size={22} />;
    case 'code':
      return <Code2 className="text-violet-400" size={22} />;
    case 'shopping':
      return <ShoppingBag className="text-cyan-400" size={22} />;
    case 'zap':
      return <Zap className="text-amber-400" size={22} />;
    default:
      return <Code2 className="text-indigo-400" size={22} />;
  }
};

export default function Projects() {
  const { language, t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Top 4 featured projects for the main landing page
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);

  return (
    <section id="projects" className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-white/40 mb-2">
            {t('proj_title')}
          </h2>
          <div className="text-4xl md:text-6xl font-light text-white leading-tight">
            {t('proj_subtitle')}
          </div>
        </div>
        <div className="w-full h-[1px] bg-white/10 mb-4 flex-1 hidden md:block mx-8" />
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-indigo-400 hover:text-indigo-300 text-xs font-mono font-semibold uppercase tracking-widest flex items-center gap-2 group transition-colors cursor-pointer bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-indigo-500/20"
        >
          {t('proj_all')} ({PROJECTS_DATA.length}){' '}
          <Sparkles className="group-hover:translate-x-1 transition-transform" size={14} />
        </button>
      </div>

      {/* Main Grid: Only Top 4 Featured Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredProjects.map((project, index) => {
          const isYoutube = project.details.includes('youtube');
          const hasExternalLink = project.details.startsWith('https') && !isYoutube;
          const isOfficialSite = project.id === 'careflow';
          const typeText = project.type[language as 'fr' | 'en'] || project.type.fr;
          const descText = project.description[language as 'fr' | 'en'] || project.description.fr;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                boxShadow: `0 0 40px -15px ${project.glowColor}`,
              }}
              className="group relative p-7 md:p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-[#0a0a0c] overflow-hidden transition-all duration-500 hover:border-white/15 flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="absolute top-4 right-6 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <span className="text-8xl font-serif italic text-white">0{index + 1}</span>
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6 flex-wrap">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shadow-inner">
                      {getIcon(project.iconName)}
                    </div>
                    <span className="text-[10px] text-slate-300 font-mono font-semibold uppercase tracking-widest">
                      {typeText}
                    </span>
                    {hasExternalLink && isOfficialSite && (
                      <span className="ml-auto px-2.5 py-0.5 text-[8px] font-mono font-bold uppercase tracking-widest rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                        {language === 'fr' ? 'Site officiel' : 'Official site'}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 max-w-[95%]">
                    {descText}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white/[0.02] border border-white/5 rounded-lg text-[9px] font-mono text-slate-400 tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/5 pt-5">
                    {project.repo && project.repo !== '#' && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors uppercase tracking-wider"
                      >
                        <Github size={14} /> Repository
                      </a>
                    )}
                    {project.details && project.details !== '#' && (
                      <a
                        href={project.details}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors ml-auto uppercase tracking-wider"
                      >
                        {isYoutube ? <Youtube size={14} /> : <ExternalLink size={14} />}{' '}
                        {isYoutube
                          ? 'Demo Video'
                          : isOfficialSite
                            ? language === 'fr' ? 'Site officiel' : 'Official site'
                            : language === 'fr' ? 'Voir le projet' : 'View project'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Modal: All Projects Archive */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl max-h-[85vh] bg-[#0c0c10] border border-white/10 rounded-3xl p-6 md:p-10 overflow-y-auto shadow-2xl flex flex-col justify-between overscroll-contain"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8 bg-[#0c0c10] shrink-0">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-indigo-400 mb-1">
                    {language === 'fr' ? 'Archive Complète' : 'Full Repository'}
                  </h3>
                  <h2 className="text-2xl md:text-3xl font-light text-white">
                    {language === 'fr' ? 'Tous les Projets' : 'All Selected Projects'}
                  </h2>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Projects Grid in Modal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS_DATA.map((project) => {
                  const typeText = project.type[language as 'fr' | 'en'] || project.type.fr;
                  const descText = project.description[language as 'fr' | 'en'] || project.description.fr;
                  const isYoutube = project.details.includes('youtube');
                  const isOfficialSite = project.id === 'careflow';

                  return (
                    <div
                      key={project.id}
                      className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                            {getIcon(project.iconName)}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                            <p className="text-[10px] font-mono text-indigo-300 uppercase tracking-wider">
                              {typeText}
                            </p>
                          </div>
                        </div>

                        <p className="text-xs text-slate-400 font-light leading-relaxed mb-6">
                          {descText}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[9px] font-mono text-slate-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-3 border-t border-white/5 pt-3">
                          {project.repo && project.repo !== '#' && (
                            <a
                              href={project.repo}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-white"
                            >
                              <Github size={13} /> Code
                            </a>
                          )}
                          {project.details && project.details !== '#' && (
                            <a
                              href={project.details}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1.5 text-[11px] font-mono text-indigo-400 hover:text-indigo-300 ml-auto"
                            >
                              {isYoutube ? <Youtube size={13} /> : <ExternalLink size={13} />}{' '}
                              {isYoutube
                                ? 'Demo'
                                : isOfficialSite
                                  ? language === 'fr' ? 'Site officiel' : 'Official site'
                                  : language === 'fr' ? 'Lien' : 'Link'}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-xs font-mono text-slate-500">
                <span>
                  {language === 'fr'
                    ? 'Projets conçus & développés par Christ Chadrak Mvoungou'
                    : 'Projects designed & engineered by Christ Chadrak Mvoungou'}
                </span>
                <a
                  href="https://github.com/ChristChad-mv"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:underline flex items-center gap-1"
                >
                  GitHub Profile <Github size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}


