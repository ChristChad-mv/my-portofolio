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
    nav_role: "Ingénierie logicielle & IA",

    // Hero
    hero_badge: "Ingénieur logiciel · Intelligence artificielle",
    hero_tagline: "Je transforme des idées complexes en solutions utiles.",
    hero_bio: "Étudiant ingénieur à Polytech Tours, je conçois des applications robustes, des systèmes en temps réel et des solutions basées sur l’IA. Je travaille actuellement sur des projets d’IA appliquée chez SNCF Voyageurs.",
    hero_cta: "Découvrir mes projets",

    // About
    about_title: "À propos",
    about_subtitle: "Concevoir des solutions utiles, fiables et bien pensées.",
    about_p1: "Je suis étudiant ingénieur en informatique à Polytech Tours, avec un intérêt particulier pour le développement backend et l’intelligence artificielle.",
    about_p2: "Mes principaux domaines de travail sont :",
    about_axis1: "développement backend et conception d’API",
    about_axis2: "applications et échanges en temps réel",
    about_axis3: "intelligence artificielle appliquée et agents IA",
    about_p3: "Mes projets m’ont amené à concevoir des API, des applications en temps réel et des solutions utilisant des agents IA et des modèles de langage.",
    about_p4: "J’aime transformer des problématiques complexes en outils concrets, fiables et faciles à utiliser.",
    about_cv: "Télécharger le CV",

    // Experience
    exp_title: "Parcours",
    exp_subtitle: "Les expériences qui ont façonné mon parcours.",
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
    proj_title: "Projets sélectionnés",
    proj_subtitle: "Quelques réalisations dont je suis fier.",
    proj_all: "Voir tous les projets",
    proj_list: [
      {
        title: "JurisBox",
        description: "Infrastructure d’intelligence juridique privée pour le droit OHADA, associant une appliance matérielle, des modèles open source dont Mistral, un corpus local et QuantixDB. Les documents confidentiels et l’inférence restent entièrement sur site.",
        tags: ["Rust", "Python", "Tauri", "QuantixDB", "ONNX", "LLM Local", "SQLCipher"],
        type: "Infrastructure d’IA Juridique Privée",
      },
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
        title: "Forge IA",
        description: "Agent de développement local utilisé sur mes projets personnels. Il transforme les demandes en spécifications et plans d’implémentation, exécute les tâches dans des environnements isolés et s’intègre aux workflows GitHub.",
        tags: ["Python", "LangGraph", "FastAPI", "React", "GitHub API", "Workflows Agentiques", "Sandbox"],
        type: "IA Agentique / Génie Logiciel",
      }
    ],

    // Skills
    skills_title: "Compétences & technologies",
    skills_subtitle: "Ce que je mets au service de mes projets.",
    skills_intro: "Je développe des applications en combinant ingénierie backend, infrastructure cloud et intelligence artificielle. Je privilégie des solutions performantes, maintenables et adaptées aux besoins réels.",
    skills_categories: [
      {
        title: "IA & Systèmes Intelligents",
        description: "Conception d’agents IA, de workflows automatisés et d’expériences multimodales."
      },
      {
        title: "Backend & Architectures",
        description: "Création d’API, de services backend et de systèmes de communication en temps réel."
      },
      {
        title: "Langages",
        description: "Écriture de code lisible, typé et performant, adapté aux besoins du produit."
      },
      {
        title: "Cloud & Infrastructure",
        description: "Déploiement d’applications cloud, automatisation de l’infrastructure et conception de bases de données."
      }
    ],

    // Contact
    contact_subtitle: "Construisons quelque chose d’utile.",
    contact_intro: "Une idée, un projet ou une opportunité ? Je suis disponible pour échanger autour du développement logiciel, des systèmes backend et de l’intelligence artificielle appliquée.",
    contact_badge: "Disponible pour échanger",
    contact_form_name: "Votre nom",
    contact_form_name_placeholder: "Comment vous appelez-vous ?",
    contact_form_message: "Votre idée ou votre message",
    contact_form_message_placeholder: "Parlez-moi de votre projet, de votre idée ou de l’opportunité que vous souhaitez discuter.",
    contact_form_whatsapp: "Continuer sur WhatsApp",
    contact_form_note: "Aucune donnée n’est envoyée par ce site. Votre message sera préparé, puis vous déciderez de l’envoyer dans WhatsApp.",
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
    nav_role: "Software Engineering & AI",

    // Hero
    hero_badge: "Software Engineer · Artificial Intelligence",
    hero_tagline: "I turn complex ideas into useful solutions.",
    hero_bio: "An engineering student at Polytech Tours, I build robust applications, real-time systems, and AI-powered solutions. I currently work on applied AI projects at SNCF Voyageurs.",
    hero_cta: "Explore My Projects",

    // About
    about_title: "About Me",
    about_subtitle: "Designing useful, reliable, and thoughtful solutions.",
    about_p1: "I am a computer engineering student at Polytech Tours with a particular interest in backend development and artificial intelligence.",
    about_p2: "My main areas of focus are:",
    about_axis1: "backend development and API design",
    about_axis2: "real-time applications and communication",
    about_axis3: "applied artificial intelligence and AI agents",
    about_p3: "My projects have led me to design APIs, real-time applications, and solutions built with AI agents and language models.",
    about_p4: "I enjoy turning complex problems into practical, reliable, and easy-to-use tools.",
    about_cv: "Download Resume",

    // Experience
    exp_title: "Career Path",
    exp_subtitle: "The experiences that shaped my journey.",
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
    proj_title: "Selected Projects",
    proj_subtitle: "A few projects I am proud of.",
    proj_all: "View All Projects",
    proj_list: [
      {
        title: "JurisBox",
        description: "Private legal AI infrastructure for OHADA law combining a dedicated hardware appliance, open-source models including Mistral, a local legal corpus, and QuantixDB. Confidential documents and inference remain entirely on-premise.",
        tags: ["Rust", "Python", "Tauri", "QuantixDB", "ONNX", "Local LLM", "SQLCipher"],
        type: "Private Legal AI Infrastructure",
      },
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
        title: "Forge IA",
        description: "A local-first development agent used across my personal projects. It turns requests into specifications and implementation plans, executes tasks in isolated environments, and integrates with GitHub workflows.",
        tags: ["Python", "LangGraph", "FastAPI", "React", "GitHub API", "Agentic Workflows", "Sandbox"],
        type: "Agentic AI / SWE Assistant",
      }
    ],

    // Skills
    skills_title: "Skills & Technologies",
    skills_subtitle: "What I bring to each project.",
    skills_intro: "I build applications by combining backend engineering, cloud infrastructure, and artificial intelligence. I focus on solutions that are performant, maintainable, and grounded in real needs.",
    skills_categories: [
      {
        title: "AI & Intelligent Systems",
        description: "Designing AI agents, automated workflows, and multimodal experiences."
      },
      {
        title: "Backend & Architectures",
        description: "Building APIs, backend services, and real-time communication systems."
      },
      {
        title: "Languages",
        description: "Writing clear, type-safe, and efficient code that serves the product."
      },
      {
        title: "Cloud & Infrastructure",
        description: "Deploying cloud applications, automating infrastructure, and designing databases."
      }
    ],

    // Contact
    contact_subtitle: "Let’s build something useful.",
    contact_intro: "Have an idea, a project, or an opportunity? I am always happy to discuss software development, backend systems, and applied artificial intelligence.",
    contact_badge: "Available to Connect",
    contact_form_name: "Your name",
    contact_form_name_placeholder: "What should I call you?",
    contact_form_message: "Your idea or message",
    contact_form_message_placeholder: "Tell me about your project, your idea, or the opportunity you would like to discuss.",
    contact_form_whatsapp: "Continue on WhatsApp",
    contact_form_note: "No data is sent by this website. Your message will be prepared, and you will choose whether to send it in WhatsApp.",
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

