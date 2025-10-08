export type ViewType = 'learn' | 'build' | 'code' | 'quiz' | 'concepts';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizResponse {
  questions: QuizQuestion[];
}

export interface Lesson {
  title: string;
  level: 'Beginner' | 'Intermediate';
  description: string;
  concepts: string[];
  type: 'Lesson' | 'Activity' | 'Overview';
  pdfUrl?: string;
  sprint: number;
}

export interface LessonContent {
    title: string;
    subtitle?: string;
    description: string;
    stepByStep: string[];
    levelUp: { title: string; points: string[] };
    proTips: { title: string; points: string[] };
    standards?: string;
    codeSnippet?: {
        lang: string;
        code: string;
    }
}

export interface ConceptContentSection {
  heading?: string;
  text: string;
  list?: string[];
}

export interface ConceptTopic {
  id: string;
  title: string;
  content: ConceptContentSection[];
}

// Fix: Add missing Video and VideoCategory types
export interface Video {
  title: string;
  description: string;
  videoId: string;
}

export interface VideoCategory {
  title: string;
  videos: Video[];
}
