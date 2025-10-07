export type ViewType = 'learn' | 'build' | 'code' | 'quiz';

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
  type: 'Lesson' | 'Activity';
  pdfUrl?: string;
  sprint: number;
}
