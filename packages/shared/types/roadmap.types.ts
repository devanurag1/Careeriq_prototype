/** A single learnable task within a roadmap week */
export interface RoadmapTask {
  id: string;
  weekId: string;
  title: string;
  /** Estimated time in minutes */
  estimatedMins: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  resourceUrl?: string;
  skillName: string;
  isCompleted: boolean;
  completedAt?: string;
}

/** One week in the 12-week learning plan */
export interface RoadmapWeek {
  id: string;
  weekNumber: number;
  /** e.g. "Python fundamentals" */
  theme: string;
  tasks: RoadmapTask[];
}

/** The complete 12-week personalized roadmap */
export interface Roadmap {
  id: string;
  userId: string;
  /** e.g. 24 = 24% complete */
  progressPct: number;
  streakDays: number;
  lastActiveDate?: string;
  weeks: RoadmapWeek[];
  createdAt: string;
}
