
export enum AppView {
  HOME = 'HOME',
  CHAT = 'CHAT',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  LIVE = 'LIVE'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface GeneratedImage {
  url: string;
  prompt: string;
}

export interface GeneratedVideo {
  url: string;
  prompt: string;
}

export interface LocalizedString {
  el: string;
  en: string;
}

export interface Character {
  id: string;
  name: string;
  role: string | LocalizedString;
  image: string;
  motto?: string;
  description?: string | LocalizedString;
  color: string;
  avatar?: string; // For compatibility
  heroClass?: string; 
  isUserGenerated?: boolean;
  type?: 'default' | 'user' | 'uploaded';
}

export interface QuizQuestion {
  q: LocalizedString;
  options: {
    el: string[];
    en: string[];
  };
  correct: number;
  explanation?: LocalizedString;
}

export interface BookPage {
  title: LocalizedString;
  image?: string;
  imageCaption?: LocalizedString;
  text: LocalizedString;
}

export interface Book {
  id: number | string; // Allow both for compatibility across components
  title: string | LocalizedString;
  author: string;
  category?: string;
  theme?: LocalizedString;
  coverImage?: string;
  cover?: string; // Compatibility
  locked?: boolean;
  requiredXp?: number;
  xp?: number;
  description?: LocalizedString;
  meaning?: LocalizedString;
  parentMessage?: LocalizedString; // Message for parents
  content?: LocalizedString;    // Legacy HTML content
  pages?: BookPage[];           // New structured pages (preferred)
  videoUrl?: string;
  questions?: QuizQuestion[];
  stepLabel?: LocalizedString;
}

export interface Song {
  id: string;
  title: string;
  lyrics: string;
  style: string;
  coverArt: string;
  mood: string;
}

// Declarations for window.aistudio
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    webkitAudioContext: typeof AudioContext;
    aistudio?: AIStudio;
  }
}
