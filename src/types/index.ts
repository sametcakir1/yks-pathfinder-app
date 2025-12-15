export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  grade: "9" | "10" | "11" | "12";
  targetExam: "TYT" | "AYT" | "Both";
  streak: number;
  totalQuestions: number;
  correctAnswers: number;
  studyTime: number; // in minutes
  rank: number;
  points: number;
  badges: Badge[];
  createdAt: Date;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
}

export interface Subject {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  color: string;
  totalTopics: number;
  completedTopics: number;
  totalQuestions: number;
  answeredQuestions: number;
  correctRate: number;
}

export interface Topic {
  id: string;
  subjectId: string;
  name: string;
  description: string;
  grade: "9" | "10" | "11" | "12";
  difficulty: "easy" | "medium" | "hard";
  videoCount: number;
  questionCount: number;
  isCompleted: boolean;
  progress: number;
}

export interface Question {
  id: string;
  topicId: string;
  subjectId: string;
  publisher: Publisher;
  text: string;
  image?: string;
  options: QuestionOption[];
  correctAnswer: string;
  explanation?: string;
  videoSolutionUrl?: string;
  difficulty: "easy" | "medium" | "hard";
  year?: number;
  isBookmarked: boolean;
  isAnswered: boolean;
  userAnswer?: string;
}

export interface QuestionOption {
  id: string;
  text: string;
  image?: string;
}

export interface Publisher {
  id: string;
  name: string;
  logo: string;
  bookName: string;
}

export interface Video {
  id: string;
  topicId: string;
  subjectId: string;
  title: string;
  thumbnail: string;
  duration: number; // in seconds
  watchedDuration: number;
  instructor: string;
  publishedAt: Date;
  views: number;
}

export interface Exam {
  id: string;
  title: string;
  type: "TYT" | "AYT";
  mode: "offline" | "live";
  totalQuestions: number;
  duration: number; // in minutes
  startTime?: Date;
  endTime?: Date;
  isCompleted: boolean;
  score?: number;
  rank?: number;
  totalParticipants?: number;
}

export interface LiveClass {
  id: string;
  title: string;
  subject: string;
  instructor: string;
  startTime: Date;
  duration: number; // in minutes
  isLive: boolean;
  recordingUrl?: string;
  attendees: number;
}

export interface Homework {
  id: string;
  title: string;
  subject: string;
  assignedAt: Date;
  dueAt: Date;
  totalQuestions: number;
  completedQuestions: number;
  isCompleted: boolean;
}

export interface StudyPlan {
  id: string;
  date: Date;
  tasks: StudyTask[];
  completionRate: number;
}

export interface StudyTask {
  id: string;
  title: string;
  subject: string;
  type: "video" | "questions" | "exam" | "review";
  duration: number; // in minutes
  isCompleted: boolean;
}

export interface University {
  id: string;
  name: string;
  city: string;
  type: "state" | "private" | "foundation";
  programs: Program[];
}

export interface Program {
  id: string;
  universityId: string;
  name: string;
  department: string;
  type: "2-year" | "4-year";
  quota: number;
  baseScore: number;
  ranking: number;
  yearlyData: YearlyProgramData[];
}

export interface YearlyProgramData {
  year: number;
  baseScore: number;
  quota: number;
  placedStudents: number;
}

export interface Quiz {
  id: string;
  title: string;
  subject: string;
  startTime: Date;
  duration: number; // in seconds per question
  totalQuestions: number;
  participants: number;
  prizePool?: string;
}

export interface PrizeDraw {
  id: string;
  title: string;
  prize: string;
  prizeImage: string;
  endDate: Date;
  totalEntries: number;
  userEntries: number;
  isWinner?: boolean;
}

export interface Notification {
  id: string;
  type: "homework" | "live" | "achievement" | "reminder" | "announcement";
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
  actionUrl?: string;
}
