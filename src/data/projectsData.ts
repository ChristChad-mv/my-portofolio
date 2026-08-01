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
      fr: 'Infrastructure d’IA juridique privée · Droit OHADA',
      en: 'Private Legal AI Infrastructure · OHADA Law',
    },
    description: {
      fr: "Une infrastructure d’intelligence juridique privée conçue pour le droit OHADA. JurisBox associe une appliance matérielle prête à l’emploi à des modèles open source, dont Mistral, un corpus juridique local et QuantixDB, un moteur vectoriel développé en Rust. Les professionnels peuvent analyser leurs documents confidentiels sur site, même avec une connectivité ou des ressources informatiques limitées.",
      en: 'A private legal AI infrastructure designed for OHADA law. JurisBox combines a ready-to-use hardware appliance with open-source models, including Mistral models, a local legal corpus, and QuantixDB, an embedded Rust vector engine. Legal professionals can analyze confidential documents on-premise, even with constrained connectivity or computing resources.',
    },
    tags: ['Python', 'Rust', 'Mistral', 'ONNX', 'Tauri', 'QuantixDB', 'SQLCipher'],
    repo: '#',
    details: '#',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    iconName: 'scale',
  },
  {
    id: 'forge-ia',
    title: 'Forge IA',
    featured: true,
    type: {
      fr: 'Assistant de développement · Automatisation · Agents IA',
      en: 'Development Assistant · Automation · AI Agents',
    },
    description: {
      fr: "Un agent de développement local que j’utilise sur mes projets personnels. Il transforme les demandes en spécifications et plans d’implémentation, exécute les tâches dans des environnements isolés et s’intègre aux issues, branches, revues et pull requests GitHub.",
      en: 'A local-first development agent I use across my personal projects. It turns requests into specifications and implementation plans, executes tasks in isolated environments, and integrates with GitHub issues, branches, reviews, and pull requests.',
    },
    tags: ['Python', 'LangGraph', 'FastAPI', 'React', 'GitHub API', 'Agentic Workflows', 'Sandbox'],
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
