import { motion } from 'motion/react';
import { ExternalLink, Github, Code2, BrainCircuit, Sparkles, Zap, ShoppingBag, Youtube } from 'lucide-react';

const PROJECTS = [
  {
    title: "CareFlow",
    description: "Post-hospitalization patient monitoring with dual-agent medical AI. Automates telephone check-ins following AHRQ RED protocols and instantly triages high-risk readmissions to a nurse dashboard.",
    tags: ["Python", "Next.js", "LangGraph", "Twilio", "Firestore", "Cloud Scheduler"],
    type: "AI / Multi-Agent System",
    icon: <BrainCircuit className="text-indigo-400" size={22} />,
    glowColor: "rgba(99, 102, 241, 0.15)",
    repo: "https://github.com/ChristChad-mv/careflow",
    details: "#"
  },
  {
    title: "MockInterview.ai",
    description: "Multimodal AI interview simulator with real-time voice, screen-sharing, and interactive coding. Zero-latency WebSocket streams built on top of the Gemini Live API.",
    tags: ["FastAPI", "React", "Gemini Live API", "GCP", "WebSockets", "WebRTC"],
    type: "Systems / Multimodal Streaming",
    icon: <Code2 className="text-violet-400" size={22} />,
    glowColor: "rgba(139, 92, 246, 0.15)",
    repo: "https://github.com/ChristChad-mv/mockInterview.ai",
    details: "#"
  },
  {
    title: "ViShop",
    description: "The Shazam of Video Shopping — a Chrome extension that transforms any YouTube video into an instant shopping experience. Uses Gemini 3 Flash for real-time product detection and a Commerce Agent with A2A protocol for intelligent price comparison.",
    tags: ["Chrome Extension", "Gemini 3", "A2A Protocol", "FastAPI", "Plasmo", "Google ADK"],
    type: "AI Vision / Commerce",
    icon: <ShoppingBag className="text-cyan-400" size={22} />,
    glowColor: "rgba(34, 211, 238, 0.12)",
    repo: "https://github.com/ChristChad-mv/vishop",
    details: "https://www.youtube.com/watch?v=Oy2QY5pN_nY"
  },
  {
    title: "Aura AI",
    description: "Voice-powered digital assistant and study workspace unifying email, calendar, files, and music through natural conversations. Features a full RAG study system with AI flashcards, quizzes, and document Q&A powered by Vertex AI.",
    tags: ["FastAPI", "React", "Google ADK", "Vertex AI RAG", "Supabase", "Cloud Run"],
    type: "Full-Stack / AI Assistant",
    icon: <Zap className="text-amber-400" size={22} />,
    glowColor: "rgba(251, 191, 36, 0.12)",
    repo: "https://github.com/ChristChad-mv/aura_ai",
    details: "https://aura-ai-five.vercel.app"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-white/40 mb-2">Selected Works</h2>
          <div className="text-4xl md:text-6xl font-light text-white leading-tight">
            Featured <br />
            <span className="italic font-serif text-indigo-300">Projects.</span>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white/10 mb-4 flex-1 hidden md:block mx-8" />
        <a 
          href="https://github.com/ChristChad-mv" 
          target="_blank" 
          rel="noreferrer" 
          className="text-indigo-400 hover:text-indigo-300 max-w-xs text-xs font-mono font-semibold uppercase tracking-widest flex items-center gap-2 group transition-colors"
        >
          View All Projects <Sparkles className="group-hover:translate-x-1 transition-transform" size={14} />
        </a>
      </div>

      {/* Uniform 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => {
          const isYoutube = project.details.includes('youtube');
          const isLive = project.details.startsWith('https') && !isYoutube;
          return (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{ 
              boxShadow: `0 0 40px -15px ${project.glowColor}` 
            } as any}
            className="group relative p-7 md:p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-[#0a0a0c] overflow-hidden transition-all duration-500 hover:border-white/15 flex flex-col justify-between"
          >
            {/* Background Hover glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* Project Number */}
            <div className="absolute top-4 right-6 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
              <span className="text-8xl font-serif italic text-white">0{index + 1}</span>
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                {/* Type & Icon */}
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shadow-inner">
                    {project.icon}
                  </div>
                  <span className="text-[10px] text-slate-300 font-mono font-semibold uppercase tracking-widest">
                    {project.type}
                  </span>
                  {isLive && (
                    <span className="ml-auto px-2.5 py-0.5 text-[8px] font-mono font-bold uppercase tracking-widest rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                      ● Live
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 max-w-[95%]">
                  {project.description}
                </p>
              </div>
              
              {/* Tech Badges & CTA */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-white/[0.02] border border-white/5 rounded-lg text-[9px] font-mono text-slate-400 tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 border-t border-white/5 pt-5 font-mono text-[10px] tracking-widest uppercase">
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                  >
                    <Github size={14} /> Repository
                  </a>
                  {project.details !== '#' && (
                    <a 
                      href={project.details}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                      {isYoutube ? <><Youtube size={14} /> Demo Video</> : <><ExternalLink size={14} /> Live Demo</>}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>
    </section>
  );
}
