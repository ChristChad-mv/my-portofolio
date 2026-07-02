import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Brain, Code, Cpu, Server } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

const SKILLS = [
  "Python", "TypeScript", "Rust", "FastAPI", "Next.js", "React",
  "LangGraph", "Docker", "GCP", "Terraform", "WebSockets", "RAG", "MongoDB"
];

const CATEGORY_CONFIGS = [
  {
    icon: <Brain className="text-indigo-400" size={20} />,
    skills: ["LangGraph", "Gemini Live API", "RAG", "Agentic Workflows"]
  },
  {
    icon: <Server className="text-indigo-400" size={20} />,
    skills: ["FastAPI", "Next.js", "WebSockets", "Node.js", "Express"]
  },
  {
    icon: <Code className="text-indigo-400" size={20} />,
    skills: ["Python", "TypeScript", "Rust", "Java", "C++"]
  },
  {
    icon: <Cpu className="text-indigo-400" size={20} />,
    skills: ["GCP", "Docker", "Terraform", "Firebase", "MongoDB"]
  }
];

export default function Skills() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  const translatedCategories = t('skills_categories') as Array<{
    title: string;
    description: string;
  }>;

  const categories = CATEGORY_CONFIGS.map((config, index) => ({
    ...config,
    ...translatedCategories[index]
  }));

  return (
    <section id="skills" ref={containerRef} className="py-32 overflow-hidden bg-[#050507] border-y border-white/5 relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="px-4 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h2 className="text-xs font-black tracking-[0.2em] uppercase text-white/40 mb-2">{t('skills_title')}</h2>
            <div className="text-4xl md:text-6xl font-light text-white leading-tight">
              {t('skills_subtitle')}
            </div>
          </div>
          <p className="text-slate-400 max-w-md text-sm font-light leading-relaxed">
            {t('skills_intro')}
          </p>
        </div>

        {/* Categorized Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 border border-indigo-500/20">
                  {cat.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{cat.title}</h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed font-light">{cat.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                {cat.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-[9px] font-mono text-slate-300 uppercase tracking-wider">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Scrolling Ribbon */}
      <div className="w-[200vw] -ml-[50vw] border-t border-white/5 pt-10">
        <motion.div style={{ x: x1 }} className="flex gap-4 items-center whitespace-nowrap">
          {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
            <div 
              key={`row1-${index}`}
              className="px-6 py-3 border border-white/5 rounded-xl font-mono text-xs md:text-sm bg-[#0c0c0f] text-slate-500 hover:text-white hover:border-indigo-500/30 transition-all duration-300 uppercase tracking-widest cursor-default"
            >
              ⚡ {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


