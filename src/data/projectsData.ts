export interface Project {
  id: string;
  title: string;
  type: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  tags: string[];
  featured: boolean;
  repo: string;
  details: string;
  glowColor: string;
  iconName: 'scale' | 'bot' | 'brain' | 'code' | 'shopping' | 'zap';
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'jurisbox',
    title: 'JurisBox',
    featured: true,
    type: {
      fr: 'IA juridique · Recherche documentaire · Hors ligne',
      en: 'Legal AI · Document Search · Offline',
    },
    description: {
      fr: "Une application d’aide à la décision juridique consacrée au droit OHADA, conçue pour fonctionner entièrement hors ligne. Elle permet de rechercher et d’analyser des documents juridiques grâce à un moteur vectoriel développé en Rust et à des modèles d’intelligence artificielle exécutés localement.",
      en: 'An offline legal decision-support application dedicated to OHADA law. It helps users search and analyze legal documents through a Rust vector engine and locally running artificial intelligence models.',
    },
    tags: ['Rust', 'Python', 'Tauri', 'QuantixDB', 'ONNX', 'LLM Local', 'SQLCipher'],
    repo: '#',
    details: '#',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    iconName: 'scale',
  },
  {
    id: 'open-swe',
    title: 'Forge IA',
    featured: true,
    type: {
      fr: 'Assistant de développement · Automatisation · Agents IA',
      en: 'Development Assistant · Automation · AI Agents',
    },
    description: {
      fr: "Un assistant de développement qui accompagne le travail d’ingénierie, de la rédaction des spécifications jusqu’à l’implémentation. Il décompose les demandes en tâches, exécute le code dans des environnements isolés et facilite la création de demandes de fusion sur GitLab.",
      en: 'A development assistant that supports the engineering workflow from specifications to implementation. It breaks requests into tasks, runs code in isolated environments, and streamlines the creation of GitLab merge requests.',
    },
    tags: ['Python', 'LangGraph', 'FastAPI', 'React', 'GitLab API', 'Workflows Agentiques', 'Sandbox'],
    repo: '#',
    details: '#',
    glowColor: 'rgba(34, 211, 238, 0.15)',
    iconName: 'bot',
  },
  {
    id: 'careflow',
    title: 'CareFlow',
    featured: true,
    type: {
      fr: 'IA appliquée à la santé · Système multi-agent',
      en: 'Applied Healthcare AI · Multi-Agent System',
    },
    description: {
      fr: "Une solution de suivi destinée aux patients après leur sortie de l’hôpital. Des agents IA automatisent les appels de suivi, analysent les réponses et signalent au personnel soignant les situations présentant un risque élevé de réadmission.",
      en: 'A patient follow-up solution designed for the period after hospital discharge. AI agents automate follow-up calls, analyze responses, and alert clinical staff to situations with a high risk of readmission.',
    },
    tags: ['Python', 'Next.js', 'LangGraph', 'Twilio', 'Firestore', 'Cloud Scheduler'],
    repo: '#',
    details: 'https://careflow-pulse.vercel.app/',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    iconName: 'brain',
  },
  {
    id: 'mockinterview',
    title: 'MockInterview.ai',
    featured: true,
    type: {
      fr: 'IA multimodale · Communication en temps réel',
      en: 'Multimodal AI · Real-Time Communication',
    },
    description: {
      fr: "Un simulateur d’entretien technique permettant de s’entraîner avec une IA par la voix, le partage d’écran et un espace de programmation interactif. L’application utilise des échanges en temps réel pour offrir une conversation fluide et réactive.",
      en: 'A technical interview simulator for practicing with an AI through voice, screen sharing, and an interactive coding workspace. Real-time communication keeps the experience fluid and responsive.',
    },
    tags: ['FastAPI', 'React', 'Gemini Live API', 'GCP', 'WebSockets', 'WebRTC'],
    repo: '#',
    details: '#',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    iconName: 'code',
  },
  {
    id: 'vishop',
    title: 'ViShop',
    featured: false,
    type: {
      fr: 'Vision par IA / E-commerce',
      en: 'AI Vision / Commerce',
    },
    description: {
      fr: "Le Shazam du Video Shopping — une extension Chrome qui transforme n'importe quelle vidéo YouTube en expérience d'achat instantanée. Utilise Gemini 3 Flash pour la détection de produits en temps réel et un agent commercial avec protocole A2A pour comparer intelligemment les prix.",
      en: 'The Shazam of Video Shopping — a Chrome extension that transforms any YouTube video into an instant shopping experience. Uses Gemini 3 Flash for real-time product detection and a Commerce Agent with A2A protocol for intelligent price comparison.',
    },
    tags: ['Chrome Extension', 'Gemini 3', 'A2A Protocol', 'FastAPI', 'Plasmo', 'Google ADK'],
    repo: 'https://github.com/ChristChad-mv/vishop',
    details: 'https://www.youtube.com/watch?v=Oy2QY5pN_nY',
    glowColor: 'rgba(34, 211, 238, 0.12)',
    iconName: 'shopping',
  },
  {
    id: 'aura-ai',
    title: 'Aura AI',
    featured: false,
    type: {
      fr: 'Full-Stack / Assistant IA',
      en: 'Full-Stack / AI Assistant',
    },
    description: {
      fr: "Assistant numérique à commande vocale et espace de travail unifié (e-mail, calendrier, fichiers, musique) via conversations naturelles. Comprend un système d'apprentissage RAG complet avec flashcards IA, quiz et Q&A sur documents alimenté par Vertex AI.",
      en: 'Voice-powered digital assistant and study workspace unifying email, calendar, files, and music through natural conversations. Features a full RAG study system with AI flashcards, quizzes, and document Q&A powered by Vertex AI.',
    },
    tags: ['FastAPI', 'React', 'Google ADK', 'Vertex AI RAG', 'Supabase', 'Cloud Run'],
    repo: 'https://github.com/ChristChad-mv/aura_ai',
    details: '#',
    glowColor: 'rgba(251, 191, 36, 0.12)',
    iconName: 'zap',
  },
];
