import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Side: Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-xs font-black tracking-[0.2em] uppercase text-white/40 mb-4">About Me</h2>
          <h3 className="text-3xl md:text-5xl font-light text-white leading-tight mb-8">
            Engineering the <br />
            <span className="italic font-serif text-indigo-300">future of systems.</span>
          </h3>
          
          <div className="space-y-6 text-slate-400 font-light leading-relaxed">
            <p>
              I am a Software Engineering student at Polytech Tours with a deep passion for building robust, scalable infrastructure that empowers intelligent applications.
            </p>
            <p>
              My expertise lies at the intersection of backend engineering and applied AI. I thrive on solving complex technical challenges — whether it's architecting real-time WebSocket streams with the Gemini Live API, deploying scalable FastAPIs, or orchestrating multi-agent systems with LangGraph.
            </p>
            <p>
              When I'm not writing code or exploring the latest developments in AI research, you'll find me participating in hackathons, refining my architectural design skills, or building tools that bridge the gap between complex AI models and frictionless user experiences.
            </p>
          </div>
          
          <div className="mt-10">
            <a 
              href="/Mvoungou_Christ_Chadrak_Resume.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/30 text-white text-xs font-mono font-semibold tracking-widest uppercase rounded-xl transition-all duration-300"
            >
              Download Resume <Download size={14} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative h-[400px] rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-900/20 to-[#0a0a0c] overflow-hidden hidden md:block"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU5LjUgMEg2MHY2MEgwaC41VjBoNTl6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-50" />
          
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-48 h-48 rounded-full bg-indigo-600/20 blur-3xl absolute" />
             <div className="w-32 h-32 rounded-full border border-indigo-400/30 flex items-center justify-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 flex items-center justify-center text-xl font-bold font-serif text-white">
                  CM
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
