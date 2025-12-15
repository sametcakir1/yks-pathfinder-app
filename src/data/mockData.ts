import { 
  User, Subject, Topic, Question, Video, Exam, LiveClass, 
  Homework, StudyPlan, Quiz, PrizeDraw, Notification, Publisher 
} from "@/types";

export const currentUser: User = {
  id: "1",
  name: "Ahmet Yılmaz",
  email: "ahmet@example.com",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150",
  grade: "12",
  targetExam: "Both",
  streak: 15,
  totalQuestions: 2847,
  correctAnswers: 2134,
  studyTime: 12450,
  rank: 1247,
  points: 8750,
  badges: [
    { id: "1", name: "İlk Adım", description: "İlk soruyu çözdün!", icon: "🎯", earnedAt: new Date() },
    { id: "2", name: "Devamlılık", description: "7 gün arka arkaya çalıştın", icon: "🔥", earnedAt: new Date() },
    { id: "3", name: "Matematik Ustası", description: "100 matematik sorusu çözdün", icon: "📐", earnedAt: new Date() },
    { id: "4", name: "Video Delisi", description: "50 video izledin", icon: "🎬", earnedAt: new Date() },
  ],
  createdAt: new Date("2024-01-01"),
};

export const publishers: Publisher[] = [
  { id: "1", name: "Palme Yayıncılık", logo: "📘", bookName: "TYT Matematik Soru Bankası" },
  { id: "2", name: "Tonguç Akademi", logo: "📗", bookName: "Dinamo Serisi" },
  { id: "3", name: "3D Yayınları", logo: "📕", bookName: "Soru Bankası" },
  { id: "4", name: "Hız ve Renk", logo: "📙", bookName: "Kolay Problemler" },
  { id: "5", name: "Esen Yayınları", logo: "📓", bookName: "Üstten Başaranlar" },
];

export const subjects: Subject[] = [
  { 
    id: "1", name: "Matematik", nameEn: "Mathematics", icon: "📐", color: "hsl(210, 60%, 25%)",
    totalTopics: 48, completedTopics: 32, totalQuestions: 15000, answeredQuestions: 1245, correctRate: 78
  },
  { 
    id: "2", name: "Türkçe", nameEn: "Turkish", icon: "📖", color: "hsl(0, 65%, 50%)",
    totalTopics: 24, completedTopics: 18, totalQuestions: 8000, answeredQuestions: 856, correctRate: 82
  },
  { 
    id: "3", name: "Fizik", nameEn: "Physics", icon: "⚡", color: "hsl(35, 95%, 55%)",
    totalTopics: 36, completedTopics: 24, totalQuestions: 12000, answeredQuestions: 654, correctRate: 71
  },
  { 
    id: "4", name: "Kimya", nameEn: "Chemistry", icon: "🧪", color: "hsl(145, 65%, 42%)",
    totalTopics: 30, completedTopics: 15, totalQuestions: 10000, answeredQuestions: 423, correctRate: 68
  },
  { 
    id: "5", name: "Biyoloji", nameEn: "Biology", icon: "🧬", color: "hsl(280, 60%, 50%)",
    totalTopics: 28, completedTopics: 12, totalQuestions: 9000, answeredQuestions: 312, correctRate: 75
  },
  { 
    id: "6", name: "Tarih", nameEn: "History", icon: "🏛️", color: "hsl(25, 80%, 50%)",
    totalTopics: 32, completedTopics: 20, totalQuestions: 11000, answeredQuestions: 578, correctRate: 80
  },
  { 
    id: "7", name: "Coğrafya", nameEn: "Geography", icon: "🌍", color: "hsl(175, 65%, 45%)",
    totalTopics: 20, completedTopics: 10, totalQuestions: 6000, answeredQuestions: 234, correctRate: 72
  },
  { 
    id: "8", name: "Felsefe", nameEn: "Philosophy", icon: "🎭", color: "hsl(260, 50%, 55%)",
    totalTopics: 16, completedTopics: 8, totalQuestions: 4000, answeredQuestions: 156, correctRate: 77
  },
];

export const topics: Topic[] = [
  { id: "1", subjectId: "1", name: "Temel Kavramlar", description: "Sayı sistemleri, bölünebilme kuralları", grade: "9", difficulty: "easy", videoCount: 12, questionCount: 250, isCompleted: true, progress: 100 },
  { id: "2", subjectId: "1", name: "Denklemler", description: "1. ve 2. dereceden denklemler", grade: "9", difficulty: "medium", videoCount: 15, questionCount: 320, isCompleted: true, progress: 100 },
  { id: "3", subjectId: "1", name: "Fonksiyonlar", description: "Fonksiyon kavramı ve türleri", grade: "10", difficulty: "medium", videoCount: 18, questionCount: 400, isCompleted: false, progress: 65 },
  { id: "4", subjectId: "1", name: "Türev", description: "Türev hesaplama ve uygulamaları", grade: "12", difficulty: "hard", videoCount: 24, questionCount: 500, isCompleted: false, progress: 30 },
  { id: "5", subjectId: "1", name: "İntegral", description: "Belirli ve belirsiz integral", grade: "12", difficulty: "hard", videoCount: 22, questionCount: 450, isCompleted: false, progress: 15 },
  { id: "6", subjectId: "2", name: "Sözcükte Anlam", description: "Gerçek, mecaz ve yan anlam", grade: "9", difficulty: "easy", videoCount: 8, questionCount: 200, isCompleted: true, progress: 100 },
  { id: "7", subjectId: "2", name: "Cümlede Anlam", description: "Öznel, nesnel, doğrudan ve dolaylı anlatım", grade: "10", difficulty: "medium", videoCount: 10, questionCount: 280, isCompleted: false, progress: 80 },
  { id: "8", subjectId: "3", name: "Kuvvet ve Hareket", description: "Newton hareket yasaları", grade: "9", difficulty: "medium", videoCount: 14, questionCount: 350, isCompleted: false, progress: 55 },
];

export const sampleQuestions: Question[] = [
  {
    id: "1",
    topicId: "3",
    subjectId: "1",
    publisher: publishers[0],
    text: "f(x) = 2x² - 3x + 1 fonksiyonunun x = 2 noktasındaki değeri kaçtır?",
    options: [
      { id: "A", text: "3" },
      { id: "B", text: "5" },
      { id: "C", text: "7" },
      { id: "D", text: "9" },
      { id: "E", text: "11" },
    ],
    correctAnswer: "A",
    explanation: "f(2) = 2(2)² - 3(2) + 1 = 8 - 6 + 1 = 3",
    difficulty: "easy",
    isBookmarked: false,
    isAnswered: false,
  },
  {
    id: "2",
    topicId: "3",
    subjectId: "1",
    publisher: publishers[1],
    text: "f(x) = x³ - 6x² + 11x - 6 fonksiyonunun kökleri hangileridir?",
    options: [
      { id: "A", text: "1, 2, 3" },
      { id: "B", text: "-1, -2, -3" },
      { id: "C", text: "1, -2, 3" },
      { id: "D", text: "2, 3, 4" },
      { id: "E", text: "0, 1, 2" },
    ],
    correctAnswer: "A",
    explanation: "Kökleri bulma yöntemi: x³ - 6x² + 11x - 6 = (x-1)(x-2)(x-3)",
    videoSolutionUrl: "https://example.com/solution1",
    difficulty: "medium",
    year: 2023,
    isBookmarked: true,
    isAnswered: true,
    userAnswer: "A",
  },
];

export const videos: Video[] = [
  { id: "1", topicId: "3", subjectId: "1", title: "Fonksiyon Kavramı ve Tanımı", thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400", duration: 1245, watchedDuration: 1245, instructor: "Mehmet Hoca", publishedAt: new Date("2024-01-15"), views: 45678 },
  { id: "2", topicId: "3", subjectId: "1", title: "Fonksiyon Türleri", thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400", duration: 1580, watchedDuration: 890, instructor: "Mehmet Hoca", publishedAt: new Date("2024-01-18"), views: 38912 },
  { id: "3", topicId: "4", subjectId: "1", title: "Türev Kuralları", thumbnail: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400", duration: 2100, watchedDuration: 0, instructor: "Ayşe Hoca", publishedAt: new Date("2024-02-01"), views: 52341 },
  { id: "4", topicId: "8", subjectId: "3", title: "Newton'un Hareket Yasaları", thumbnail: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400", duration: 1890, watchedDuration: 450, instructor: "Ali Hoca", publishedAt: new Date("2024-02-10"), views: 31245 },
];

export const exams: Exam[] = [
  { id: "1", title: "TYT Deneme 1", type: "TYT", mode: "offline", totalQuestions: 120, duration: 165, isCompleted: true, score: 87.5, rank: 1245, totalParticipants: 15000 },
  { id: "2", title: "TYT Deneme 2", type: "TYT", mode: "offline", totalQuestions: 120, duration: 165, isCompleted: true, score: 92.3, rank: 856, totalParticipants: 15000 },
  { id: "3", title: "TYT Canlı Deneme", type: "TYT", mode: "live", totalQuestions: 120, duration: 165, startTime: new Date(Date.now() + 86400000), isCompleted: false },
  { id: "4", title: "AYT Matematik", type: "AYT", mode: "offline", totalQuestions: 40, duration: 75, isCompleted: false },
  { id: "5", title: "AYT Fen Bilimleri", type: "AYT", mode: "offline", totalQuestions: 40, duration: 75, isCompleted: false },
];

export const liveClasses: LiveClass[] = [
  { id: "1", title: "Türev Uygulamaları", subject: "Matematik", instructor: "Prof. Dr. Ahmet Özkan", startTime: new Date(Date.now() + 3600000), duration: 60, isLive: false, attendees: 0 },
  { id: "2", title: "Paragraf Çözüm Teknikleri", subject: "Türkçe", instructor: "Zeynep Öğretmen", startTime: new Date(Date.now() + 7200000), duration: 45, isLive: false, attendees: 0 },
  { id: "3", title: "Elektrik Devreleri", subject: "Fizik", instructor: "Murat Hoca", startTime: new Date(Date.now() - 1800000), duration: 60, isLive: true, attendees: 1247 },
];

export const homeworks: Homework[] = [
  { id: "1", title: "Fonksiyonlar Ödev Seti", subject: "Matematik", assignedAt: new Date(Date.now() - 86400000), dueAt: new Date(Date.now() + 172800000), totalQuestions: 20, completedQuestions: 12, isCompleted: false },
  { id: "2", title: "Paragraf Çalışması", subject: "Türkçe", assignedAt: new Date(Date.now() - 172800000), dueAt: new Date(Date.now() + 86400000), totalQuestions: 15, completedQuestions: 15, isCompleted: true },
  { id: "3", title: "Newton Hareket Yasaları", subject: "Fizik", assignedAt: new Date(), dueAt: new Date(Date.now() + 259200000), totalQuestions: 25, completedQuestions: 0, isCompleted: false },
];

export const studyPlan: StudyPlan = {
  id: "1",
  date: new Date(),
  tasks: [
    { id: "1", title: "Türev video izle", subject: "Matematik", type: "video", duration: 45, isCompleted: true },
    { id: "2", title: "20 soru çöz", subject: "Matematik", type: "questions", duration: 30, isCompleted: true },
    { id: "3", title: "Paragraf tekrar", subject: "Türkçe", type: "review", duration: 25, isCompleted: false },
    { id: "4", title: "Fizik deneme", subject: "Fizik", type: "exam", duration: 60, isCompleted: false },
    { id: "5", title: "Kimya konusu", subject: "Kimya", type: "video", duration: 40, isCompleted: false },
  ],
  completionRate: 40,
};

export const quizzes: Quiz[] = [
  { id: "1", title: "Matematik Yarışması", subject: "Matematik", startTime: new Date(Date.now() + 3600000), duration: 10, totalQuestions: 15, participants: 856 },
  { id: "2", title: "Türkçe Bilgi Yarışması", subject: "Türkçe", startTime: new Date(Date.now() + 7200000), duration: 8, totalQuestions: 12, participants: 1245, prizePool: "500 TL" },
];

export const prizeDraws: PrizeDraw[] = [
  { id: "1", title: "Tablet Çekilişi", prize: "Samsung Galaxy Tab S9", prizeImage: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400", endDate: new Date(Date.now() + 604800000), totalEntries: 45678, userEntries: 127 },
  { id: "2", title: "Kulaklık Çekilişi", prize: "Sony WH-1000XM5", prizeImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", endDate: new Date(Date.now() + 1209600000), totalEntries: 32145, userEntries: 89 },
];

export const notifications: Notification[] = [
  { id: "1", type: "homework", title: "Yeni Ödev", message: "Matematik ödeviniz atandı", read: false, createdAt: new Date(), actionUrl: "/homework/1" },
  { id: "2", type: "live", title: "Canlı Ders", message: "Fizik dersi 15 dakika sonra başlıyor", read: false, createdAt: new Date(Date.now() - 600000) },
  { id: "3", type: "achievement", title: "Rozet Kazandın!", message: "100 soru çözme rozetini kazandın 🎉", read: true, createdAt: new Date(Date.now() - 86400000) },
  { id: "4", type: "reminder", title: "Günlük Hedef", message: "Bugünkü hedefinin %60'ını tamamladın", read: true, createdAt: new Date(Date.now() - 172800000) },
];

export const motivationalQuotes = [
  "Başarı, her gün küçük adımlar atmaktır. 🚀",
  "Bugün zorlandığın konular, yarın en güçlü yanların olacak. 💪",
  "Her soru çözdüğünde hedefe bir adım daha yaklaşıyorsun! 🎯",
  "Disiplin, motivasyonun bittiği yerde başlar. ⭐",
  "Küçük ilerlemeler, büyük başarılara dönüşür. 🌟",
];
