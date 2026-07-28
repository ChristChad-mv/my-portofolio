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
      fr: 'IA Souveraine / Hors-Ligne & Systèmes',
      en: 'Sovereign / Offline AI & Systems',
    },
    description: {
      fr: "Suite logicielle d'aide à la décision juridique 100% hors-ligne pour le droit OHADA. Moteur vectoriel propriétaire QuantixDB (Rust/SIMD), chunker hiérarchique, embeddings BGE-M3 ONNX et inférence LLM locale chiffrée (SQLCipher, Tauri sidecar).",
      en: 'Sovereign, 100% offline legal AI decision-support suite for OHADA law. Built with custom Rust vector engine QuantixDB (SIMD), hierarchical legal chunking, ONNX BGE-M3 embeddings, and encrypted local LLM inference (SQLCipher, Tauri).',
    },
    tags: ['Rust', 'Python', 'Tauri', 'QuantixDB', 'ONNX', 'LLM Local', 'SQLCipher'],
    repo: 'https://github.com/ChristChad-mv/jurisbox',
    details: '#',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    iconName: 'scale',
  },
  {
    id: 'open-swe',
    title: 'Open SWE',
    featured: true,
    type: {
      fr: 'IA Agentique / Génie Logiciel',
      en: 'Agentic AI / SWE Assistant',
    },
    description: {
      fr: "Assistant de développement local-first offrant un contrôle total sur le workflow d'ingénierie grâce à des compétences explicites (/grill-with-docs, /to-spec, /to-tickets, /implement). Il exécute les tâches en sandbox isolé, produit des spécifications durables dans .agents/, génère des plans révisables et automatise la création de Merge Requests GitLab.",
      en: 'Local-first software engineering assistant offering total workflow control through structured skills (/grill-with-docs, /to-spec, /to-tickets, /implement). Executes tasks in thread-isolated sandboxes, maintains durable repo specs in .agents/, enforces reviewable execution plans, and automates GitLab Merge Requests.',
    },
    tags: ['Python', 'LangGraph', 'FastAPI', 'React', 'GitLab API', 'Workflows Agentiques', 'Sandbox'],
    repo: 'https://github.com/ChristChad-mv/open-swe',
    details: '#',
    glowColor: 'rgba(34, 211, 238, 0.15)',
    iconName: 'bot',
  },
  {
    id: 'careflow',
    title: 'CareFlow',
    featured: true,
    type: {
      fr: 'IA / Système Multi-Agent',
      en: 'AI / Multi-Agent System',
    },
    description: {
      fr: "Suivi post-hospitalisation des patients via une IA médicale double-agent. Automatisation des suivis téléphoniques selon les protocoles AHRQ RED et tri instantané des réadmissions à haut risque sur un tableau de bord infirmier.",
      en: 'Post-hospitalization patient monitoring with dual-agent medical AI. Automates telephone check-ins following AHRQ RED protocols and instantly triages high-risk readmissions to a nurse dashboard.',
    },
    tags: ['Python', 'Next.js', 'LangGraph', 'Twilio', 'Firestore', 'Cloud Scheduler'],
    repo: 'https://github.com/ChristChad-mv/careflow',
    details: '#',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    iconName: 'brain',
  },
  {
    id: 'mockinterview',
    title: 'MockInterview.ai',
    featured: true,
    type: {
      fr: 'Systèmes / Streaming Multimodal',
      en: 'Systems / Multimodal Streaming',
    },
    description: {
      fr: "Simulateur d'entretien d'embauche par IA multimodale avec voix en temps réel, partage d'écran et codage interactif. Flux WebSocket à latence ultra-faible basés sur l'API Gemini Live.",
      en: 'Multimodal AI interview simulator with real-time voice, screen-sharing, and interactive coding. Zero-latency WebSocket streams built on top of the Gemini Live API.',
    },
    tags: ['FastAPI', 'React', 'Gemini Live API', 'GCP', 'WebSockets', 'WebRTC'],
    repo: 'https://github.com/ChristChad-mv/mockInterview.ai',
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
