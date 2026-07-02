import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  fr: {
    // Header
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_experience: "Parcours",
    nav_skills: "Compétences",
    nav_resume: "CV",
    nav_contact: "Contact",
    nav_role: "Génie Logiciel & IA",

    // Hero
    hero_badge: "Ingénieur Logiciel · IA Appliquée",
    hero_tagline: "Je construis des systèmes distribués et des agents IA.",
    hero_bio: "Étudiant ingénieur à Polytech Tours. Je conçois des backends scalables, des systèmes temps réel et des architectures d’agents autonomes. Actuellement chez SNCF Voyageurs.",
    hero_cta: "Voir les Projets",

    // About
    about_title: "À propos",
    about_subtitle: "Façonner des systèmes robustes et intelligents.",
    about_p1: "Je suis étudiant en ingénierie logicielle à Polytech Tours, spécialisé dans la conception de systèmes backend distribués et d’applications IA.",
    about_p2: "Je travaille à l’intersection de trois axes :",
    about_axis1: "architecture backend scalable",
    about_axis2: "systèmes temps réel (WebSockets, streaming)",
    about_axis3: "intelligence artificielle appliquée (agents, orchestration, LLMs)",
    about_p3: "J’ai conçu des architectures de services et des API scalables, développé des systèmes temps réel distribués, et déployé des solutions d’intelligence artificielle combinant agents intelligents et modèles de langage (LLMs).",
    about_p4: "Mon objectif est simple : construire des systèmes fiables, capables de traiter de l’information complexe en temps réel.",
    about_cv: "Télécharger le CV",

    // Experience
    exp_title: "Parcours",
    exp_subtitle: "Expérience Professionnelle.",
    exp_positions: "Postes",
    exp_current: "Actuel",
    exp_list: [
      {
        role: "Stagiaire en IA Appliquée",
        company: "SNCF Voyageurs Matériel",
        location: "St-Denis, Île-de-France",
        period: "Avr 2026 — Présent",
        type: "Stage · Sur site",
        description: "Développement de flux de travail assistés par l'IA pour harmoniser la documentation de maintenance ferroviaire rédigée selon la spécification S1000D. Transformation de PDF complexes en données structurées et requêtables via des pipelines NLP, benchmarking de stratégies de similarité sémantique et exploration d'approches assistées par LLM pour réconcilier les incohérences entre les versions de documents.",
        tags: ["Python", "NLP", "Workflows LLM", "S1000D", "Regex", "Recherche Sémantique"],
        active: true
      },
      {
        role: "Développeur Full-Stack",
        company: "MAKAV Service Digital",
        location: "Tours, Centre-Val de Loire",
        period: "Juin 2025 — Août 2025",
        type: "Stage · Hybride",
        description: "Conception et développement complet d'une application de gestion de biens locatifs. Développement d'une interface moderne en React et TypeScript, d'API évolutives avec FastAPI, gestion de la base de données avec Supabase/PostgreSQL, et conteneurisation de l'application avec Docker.",
        tags: ["React", "TypeScript", "FastAPI", "Supabase", "PostgreSQL", "Docker"],
        active: false
      },
      {
        role: "Assistant Pédagogique",
        company: "Les Cordées de la Réussite",
        location: "Tours, Centre-Val de Loire",
        period: "Oct 2024 — Avr 2025",
        type: "Contrat · Sur site",
        description: "Enseignement de la programmation et de la robotique à des collégiens à l'aide de Python et Scratch. Conception de cours interactifs et de projets robotiques concrets pour rendre les concepts fondamentaux de l'informatique accessibles et stimulants pour les jeunes apprenants.",
        tags: ["Python", "Scratch", "Pédagogie", "Robotique"],
        active: false
      }
    ],

    // Projects
    proj_title: "Projets Sélectionnés",
    proj_subtitle: "Projets Phares.",
    proj_all: "Voir tous les projets",
    proj_list: [
      {
        title: "CareFlow",
        description: "Suivi post-hospitalisation des patients via une IA médicale double-agent. Automatisation des suivis téléphoniques selon les protocoles AHRQ RED et tri instantané des réadmissions à haut risque sur un tableau de bord infirmier.",
        tags: ["Python", "Next.js", "LangGraph", "Twilio", "Firestore", "Cloud Scheduler"],
        type: "IA / Système Multi-Agent",
      },
      {
        title: "MockInterview.ai",
        description: "Simulateur d'entretien d'embauche par IA multimodale avec voix en temps réel, partage d'écran et codage interactif. Flux WebSocket à latence ultra-faible basés sur l'API Gemini Live.",
        tags: ["FastAPI", "React", "Gemini Live API", "GCP", "WebSockets", "WebRTC"],
        type: "Systèmes / Streaming Multimodal",
      },
      {
        title: "ViShop",
        description: "Le Shazam du Video Shopping — une extension Chrome qui transforme n'importe quelle vidéo YouTube en expérience d'achat instantanée. Utilise Gemini 3 Flash pour la détection de produits en temps réel et un agent commercial avec protocole A2A pour comparer intelligemment les prix.",
        tags: ["Chrome Extension", "Gemini 3", "A2A Protocol", "FastAPI", "Plasmo", "Google ADK"],
        type: "Vision par IA / E-commerce",
      },
      {
        title: "Aura AI",
        description: "Assistant numérique à commande vocale et espace de travail unifié (e-mail, calendrier, fichiers, musique) via conversations naturelles. Comprend un système d'apprentissage RAG complet avec flashcards IA, quiz et Q&A sur documents alimenté par Vertex AI.",
        tags: ["FastAPI", "React", "Google ADK", "Vertex AI RAG", "Supabase", "Cloud Run"],
        type: "Full-Stack / Assistant IA",
      }
    ],

    // Skills
    skills_title: "Expertises & Stack",
    skills_subtitle: "Compétences Clés.",
    skills_intro: "Étudiant ingénieur à Polytech Tours. Je fais le lien entre l'ingénierie des systèmes haute performance, l'architecture cloud et l'IA agentique moderne pour concevoir des produits à la pointe.",
    skills_categories: [
      {
        title: "IA & Systèmes Intelligents",
        description: "Conception de workflows autonomes, frameworks multi-agents et intégrations d'IA multimodales."
      },
      {
        title: "Backend & Architectures",
        description: "Conception de points de terminaison de streaming à faible latence, systèmes distribués et WebSockets temps réel."
      },
      {
        title: "Langages",
        description: "Développement de code typé, optimisé et performant pour les systèmes backend."
      },
      {
        title: "Cloud & Infrastructure",
        description: "Automatisation du scaling serverless, déploiements immuables et schémas de bases de données multi-locataires."
      }
    ],

    // Contact
    contact_subtitle: "Bâtissons des architectures.",
    contact_intro: "Actuellement spécialisé en conception de systèmes et en IA appliquée chez SNCF Voyageurs. Je suis toujours ouvert à discuter de nouveaux défis logiciels, de backends distribués ou d'opportunités en ingénierie agentique.",
    contact_badge: "Ouvert aux opportunités",
    contact_footer: "© 2026 CHRIST CHADRAK MVOUNGOU. TOUS DROITS RÉSERVÉS."
  },
  en: {
    // Header
    nav_about: "About",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_resume: "Resume",
    nav_contact: "Contact",
    nav_role: "SWE & AI",

    // Hero
    hero_badge: "Software Engineer · Applied AI",
    hero_tagline: "I build distributed systems and AI agents.",
    hero_bio: "Software engineering student at Polytech Tours. I design scalable backends, real-time systems, and autonomous agent architectures. Currently at SNCF Voyageurs.",
    hero_cta: "View Projects",

    // About
    about_title: "About Me",
    about_subtitle: "Shaping robust and intelligent systems.",
    about_p1: "I am a software engineering student at Polytech Tours, specializing in the design of distributed backend systems and AI applications.",
    about_p2: "I operate at the intersection of three core areas:",
    about_axis1: "scalable backend architecture",
    about_axis2: "real-time systems (WebSockets, streaming)",
    about_axis3: "applied artificial intelligence (agents, orchestration, LLMs)",
    about_p3: "I have designed scalable service architectures and APIs, developed distributed real-time systems, and deployed artificial intelligence solutions combining intelligent agents and large language models (LLMs).",
    about_p4: "My goal is straightforward: build reliable systems capable of processing complex information in real-time.",
    about_cv: "Download Resume",

    // Experience
    exp_title: "Career Path",
    exp_subtitle: "Work Experience.",
    exp_positions: "Positions",
    exp_current: "Current",
    exp_list: [
      {
        role: "Applied AI Intern",
        company: "SNCF Voyageurs Matériel",
        location: "St-Denis, Île-de-France",
        period: "Apr 2026 — Present",
        type: "Internship · On-site",
        description: "Building AI-assisted workflows to harmonize railway maintenance documentation across technical documents written to the S1000D specification. Transforming complex PDFs into structured, queryable data using NLP pipelines, benchmarking semantic similarity strategies, and exploring LLM-assisted approaches for reconciling inconsistencies across document versions.",
        tags: ["Python", "NLP", "LLM Workflows", "S1000D", "Regex", "Semantic Search"],
        active: true
      },
      {
        role: "Full-Stack Developer",
        company: "MAKAV Service Digital",
        location: "Tours, Centre-Val de Loire",
        period: "Jun 2025 — Aug 2025",
        type: "Internship · Hybrid",
        description: "Built a rental property management application from scratch covering both frontend and backend. Developed a modern interface with React & TypeScript, scalable APIs with FastAPI, managed the database layer with Supabase/PostgreSQL, and containerized the application with Docker.",
        tags: ["React", "TypeScript", "FastAPI", "Supabase", "PostgreSQL", "Docker"],
        active: false
      },
      {
        role: "Teaching Assistant",
        company: "Les Cordées de la Réussite",
        location: "Tours, Centre-Val de Loire",
        period: "Oct 2024 — Apr 2025",
        type: "Contract · On-site",
        description: "Taught programming and robotics to middle school students using Python and Scratch. Designed interactive lessons and hands-on robotics projects to make foundational computer science concepts accessible and engaging for young learners.",
        tags: ["Python", "Scratch", "Teaching", "Robotics"],
        active: false
      }
    ],

    // Projects
    proj_title: "Selected Works",
    proj_subtitle: "Featured Projects.",
    proj_all: "View All Projects",
    proj_list: [
      {
        title: "CareFlow",
        description: "Post-hospitalization patient monitoring with dual-agent medical AI. Automates telephone check-ins following AHRQ RED protocols and instantly triages high-risk readmissions to a nurse dashboard.",
        tags: ["Python", "Next.js", "LangGraph", "Twilio", "Firestore", "Cloud Scheduler"],
        type: "AI / Multi-Agent System",
      },
      {
        title: "MockInterview.ai",
        description: "Multimodal AI interview simulator with real-time voice, screen-sharing, and interactive coding. Zero-latency WebSocket streams built on top of the Gemini Live API.",
        tags: ["FastAPI", "React", "Gemini Live API", "GCP", "WebSockets", "WebRTC"],
        type: "Systems / Multimodal Streaming",
      },
      {
        title: "ViShop",
        description: "The Shazam of Video Shopping — a Chrome extension that transforms any YouTube video into an instant shopping experience. Uses Gemini 3 Flash for real-time product detection and a Commerce Agent with A2A protocol for intelligent price comparison.",
        tags: ["Chrome Extension", "Gemini 3", "A2A Protocol", "FastAPI", "Plasmo", "Google ADK"],
        type: "AI Vision / Commerce",
      },
      {
        title: "Aura AI",
        description: "Voice-powered digital assistant and study workspace unifying email, calendar, files, and music through natural conversations. Features a full RAG study system with AI flashcards, quizzes, and document Q&A powered by Vertex AI.",
        tags: ["FastAPI", "React", "Google ADK", "Vertex AI RAG", "Supabase", "Cloud Run"],
        type: "Full-Stack / AI Assistant",
      }
    ],

    // Skills
    skills_title: "Expertise & Stack",
    skills_subtitle: "Core Capabilities.",
    skills_intro: "Engineering student at Polytech Tours. I bridge the gap between high-performance systems engineering, cloud architecture, and modern agentic AI to build bleeding-edge products.",
    skills_categories: [
      {
        title: "AI & Intelligent Systems",
        description: "Building autonomous workflows, multi-agent frameworks, and multimodal AI integrations."
      },
      {
        title: "Backend & Architectures",
        description: "Designing low-latency streaming endpoints, distributed systems, and real-time WebSockets."
      },
      {
        title: "Languages",
        description: "Writing type-safe, optimized, and performant code for backend systems."
      },
      {
        title: "Cloud & Infrastructure",
        description: "Automating serverless scaling, immutable deployments, and multi-tenant DB schemas."
      }
    ],

    // Contact
    contact_subtitle: "Let's build architectures.",
    contact_intro: "Currently specializing in Systems Design and Applied AI at SNCF Voyageurs. I am always open to discussing new software challenges, distributed backends, or agentic engineering opportunities.",
    contact_badge: "Open for Opportunities",
    contact_footer: "© 2026 CHRIST CHADRAK MVOUNGOU. ALL RIGHTS RESERVED."
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to detect user language or default to 'fr'
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang') as Language;
    if (saved === 'fr' || saved === 'en') return saved;
    const browserLang = navigator.language.slice(0, 2);
    return browserLang === 'fr' ? 'fr' : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);
  };

  const t = (key: string): any => {
    const dict = translations[language];
    return (dict as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};

