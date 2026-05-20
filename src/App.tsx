import Cursor from './components/Cursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-[#080809] text-slate-300 min-h-screen font-sans flex flex-col">
      <Header />
      <Cursor />
      
      <main className="flex-1 mt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
