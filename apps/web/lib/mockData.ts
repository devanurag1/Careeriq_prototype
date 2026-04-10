/**
 * Static mock data used for the prototype UI.
 * In production these would come from the API via hooks.
 * Centralising here means only one file changes when the API is ready.
 */

import type {
  DiagnosticResult,
  Roadmap,
  MarketData,
  ResumeAnalysis,
  ChatMessage,
} from '@careeriq/shared/types';

// ── USER ─────────────────────────────────────────────────────────────────────

export const MOCK_USER = {
  id: 'user-001',
  name: 'Arjun Kumar',
  email: 'arjun@company.com',
  initials: 'AK',
  plan: 'FREE' as const,
  streakDays: 4,
  tasksCompleted: 7,
  weeksActive: 3,
  memberSince: 'Jan 2025',
};

// ── DIAGNOSTIC ────────────────────────────────────────────────────────────────

export const MOCK_DIAGNOSTIC: DiagnosticResult = {
  id: 'diag-001',
  readinessScore: 68,
  aiRiskScore: 35,
  targetRole: 'Senior Software Engineer',
  careerSummary:
    'You are a software engineer with solid Java fundamentals. Your biggest gap is Python for data engineering, which is increasingly demanded for SDE roles at product companies.',
  generatedAt: new Date().toISOString(),
  gaps: [
    {
      skillId: 'python-data',
      skillName: 'Python for data engineering',
      userLevel: 2,
      marketDemand: 92,
      gapScore: 89,
      severity: 'critical',
      category: 'Programming',
    },
    {
      skillId: 'sql-advanced',
      skillName: 'Advanced SQL & query optimization',
      userLevel: 3,
      marketDemand: 85,
      gapScore: 68,
      severity: 'high',
      category: 'Data',
    },
    {
      skillId: 'system-design',
      skillName: 'System design & architecture',
      userLevel: 4,
      marketDemand: 90,
      gapScore: 60,
      severity: 'medium',
      category: 'Architecture',
    },
    {
      skillId: 'cloud-aws',
      skillName: 'Cloud (AWS / GCP)',
      userLevel: 5,
      marketDemand: 88,
      gapScore: 53,
      severity: 'medium',
      category: 'Cloud',
    },
    {
      skillId: 'docker-k8s',
      skillName: 'Docker & Kubernetes',
      userLevel: 3,
      marketDemand: 70,
      gapScore: 63,
      severity: 'high',
      category: 'DevOps',
    },
  ],
};

// ── ROADMAP ───────────────────────────────────────────────────────────────────

export const MOCK_ROADMAP: Roadmap = {
  id: 'roadmap-001',
  userId: 'user-001',
  progressPct: 24,
  streakDays: 4,
  lastActiveDate: new Date().toISOString(),
  createdAt: new Date().toISOString(),
  weeks: [
    {
      id: 'week-1',
      weekNumber: 1,
      theme: 'Python fundamentals ✓',
      tasks: [
        {
          id: 't1',
          weekId: 'week-1',
          title: 'Install Python & set up VS Code environment',
          estimatedMins: 30,
          difficulty: 'beginner',
          skillName: 'Python',
          isCompleted: true,
          completedAt: new Date().toISOString(),
        },
        {
          id: 't2',
          weekId: 'week-1',
          title: 'Variables, data types, and basic operations',
          estimatedMins: 60,
          difficulty: 'beginner',
          resourceUrl: 'https://freecodecamp.org',
          skillName: 'Python',
          isCompleted: true,
          completedAt: new Date().toISOString(),
        },
        {
          id: 't3',
          weekId: 'week-1',
          title: 'Functions and loops',
          estimatedMins: 90,
          difficulty: 'beginner',
          resourceUrl: 'https://python.org',
          skillName: 'Python',
          isCompleted: true,
          completedAt: new Date().toISOString(),
        },
      ],
    },
    {
      id: 'week-2',
      weekNumber: 2,
      theme: 'Data structures',
      tasks: [
        {
          id: 't4',
          weekId: 'week-2',
          title: 'Lists, tuples, and dictionaries',
          estimatedMins: 60,
          difficulty: 'beginner',
          resourceUrl: 'https://realpython.com',
          skillName: 'Python',
          isCompleted: true,
          completedAt: new Date().toISOString(),
        },
        {
          id: 't5',
          weekId: 'week-2',
          title: 'File I/O and exception handling',
          estimatedMins: 45,
          difficulty: 'intermediate',
          skillName: 'Python',
          isCompleted: false,
        },
        {
          id: 't6',
          weekId: 'week-2',
          title: 'Practice: solve 5 LeetCode easy problems',
          estimatedMins: 60,
          difficulty: 'intermediate',
          resourceUrl: 'https://leetcode.com',
          skillName: 'Python',
          isCompleted: false,
        },
      ],
    },
    {
      id: 'week-3',
      weekNumber: 3,
      theme: 'NumPy & Pandas (Pro)',
      tasks: [],
    },
  ],
};

// ── MARKET ────────────────────────────────────────────────────────────────────

export const MOCK_MARKET: MarketData = {
  totalOpenings: 2847,
  pythonDemandYoY: 34,
  javaOnlyRoleChange: -12,
  salaryBenchmark: {
    roleLabel: 'Senior SDE',
    medianSalary: 1800000,
    formattedSalary: '₹18L',
    currency: 'INR',
  },
  risingSkills: [
    { skillName: 'Python / ML', demandScore: 92, yoyChange: 34, color: 'var(--purple)' },
    { skillName: 'Cloud (AWS)', demandScore: 88, yoyChange: 21, color: 'var(--teal)' },
    { skillName: 'System design', demandScore: 84, yoyChange: 15, color: 'var(--amber)' },
    { skillName: 'LLM / AI APIs', demandScore: 76, yoyChange: 112, color: 'var(--purple)' },
    { skillName: 'Docker / K8s', demandScore: 70, yoyChange: 28, color: 'var(--teal)' },
  ],
  hiringCompanies: [
    { name: 'Swiggy', openingsCount: 14, roleLabel: 'Senior SDE' },
    { name: 'Zepto', openingsCount: 9, roleLabel: 'Senior SDE' },
    { name: 'Razorpay', openingsCount: 7, roleLabel: 'Senior SDE' },
    { name: 'CRED', openingsCount: 5, roleLabel: 'Senior SDE' },
  ],
};

// ── RESUME ────────────────────────────────────────────────────────────────────

export const MOCK_RESUME: ResumeAnalysis = {
  id: 'resume-001',
  userId: 'user-001',
  matchScore: 42,
  optimizedScore: 87,
  targetRole: 'Senior SDE at Swiggy',
  issues: [
    { severity: 'critical', description: 'No quantified metrics (e.g. "reduced latency by X%")' },
    { severity: 'critical', description: 'Python not mentioned despite being a key requirement' },
    { severity: 'warning', description: 'Summary section is too generic — no differentiation' },
    { severity: 'warning', description: 'Missing keywords: distributed systems, microservices' },
  ],
  rewrittenText: '',
  createdAt: new Date().toISOString(),
};

// ── CHAT ──────────────────────────────────────────────────────────────────────

export const MOCK_INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-001',
    sessionId: 'sess-001',
    role: 'assistant',
    content:
      "Hey Arjun! I've reviewed your career profile. You're a software engineer targeting Senior SDE roles with a focus on data engineering. Your biggest gap right now is Python — you're at about 20% of where the market expects. Ready to build a plan? 💡",
    createdAt: new Date().toISOString(),
  },
];

/** Pre-defined AI responses keyed by user input text */
export const MOCK_AI_REPLIES: Record<string, string> = {
  'What should I learn next?':
    "Based on your profile, the highest-ROI skill to learn next is **Python for data engineering**. It's the #1 gap between your current skill set and Senior SDE roles. I'd estimate 8–10 weeks of focused practice (1 hour/day) to close this gap. Want me to add a Python track to your roadmap?",
  'Am I at risk from AI in my role?':
    "Good question. As a Java developer with 3 years of experience, your automation risk is moderate (around 35% over 5 years). The key insight: engineers who can *work with AI* are in higher demand, not lower. Your immediate action: learn prompt engineering + Python/ML basics. This shifts you from 'replaceable' to 'multiplied by AI.' Want me to create a protection plan?",
  'How do I switch to product management?':
    "Great ambition! Here's the honest picture: you have strong technical depth, which is a huge advantage for technical PM roles. Your gaps are: product sense, user research, and PM frameworks (jobs-to-be-done, OKRs). Timeline estimate: 4–6 months of focused preparation. I'd recommend starting with a PM course (Reforge or Exponent) + building 1 case study. Want a week-by-week PM transition roadmap?",
  'Review my career progress':
    "You've been active for 3 weeks and completed 7 tasks — that's a solid start! Your 4-day streak shows consistency. Career readiness score has moved from 60 → 68. Top win: you started your Python journey. Next milestone: reach 75/100 by closing your SQL gap (estimated 2 weeks). You're in the top 30% of users at your experience level. Keep going! 💪",
  'What skills are most in demand right now?':
    'Based on current job market data (updated this week), the top 5 skills for your target role are: 1) Python + data engineering (92% demand), 2) Cloud (AWS/GCP) at 88%, 3) System design at 84%, 4) LLM / AI API integration at 76%, 5) Kubernetes at 70%. You already have some SQL — that\'s great. The biggest gap is Python. Want me to prioritize these in your roadmap?',
};

export const MOCK_AI_DEFAULT_REPLY =
  "Great question! Based on your profile as a software engineer targeting Senior SDE roles, I'd recommend focusing on Python and system design as your next priorities. These are the skills that will have the highest impact on your career trajectory. Want me to create a specific action plan for you?";

// ── ONBOARDING STEPS ──────────────────────────────────────────────────────────

export const ONBOARDING_STEPS = [
  {
    id: 1,
    q: "What's your current role?",
    hint: 'Pick the one that best describes you.',
    type: 'single' as const,
    field: 'currentRole' as const,
    options: [
      { icon: '💻', label: 'Software engineer / developer' },
      { icon: '📊', label: 'Product manager' },
      { icon: '📉', label: 'Data analyst / scientist' },
      { icon: '🎨', label: 'Designer (UI/UX)' },
      { icon: '🎓', label: 'Student / fresher' },
      { icon: '🔧', label: 'Other role' },
    ],
  },
  {
    id: 2,
    q: "What's your target role?",
    hint: 'Where do you want to be in the next 12–18 months?',
    type: 'single' as const,
    field: 'targetRole' as const,
    options: [
      { icon: '🚀', label: 'Senior Software Engineer' },
      { icon: '📋', label: 'Product Manager' },
      { icon: '🧠', label: 'Data Scientist / ML Engineer' },
      { icon: '☁️', label: 'Cloud / DevOps Engineer' },
      { icon: '🔄', label: 'Career switch (different domain)' },
      { icon: '💼', label: 'Engineering Manager' },
    ],
  },
  {
    id: 3,
    q: 'How many years of experience do you have?',
    hint: 'This helps calibrate your skill gaps accurately.',
    type: 'single' as const,
    field: 'experienceYears' as const,
    options: [
      { icon: '🌱', label: 'Less than 1 year (fresher)' },
      { icon: '📗', label: '1–3 years (junior)' },
      { icon: '📘', label: '3–6 years (mid-level)' },
      { icon: '📙', label: '6–10 years (senior)' },
      { icon: '🏆', label: '10+ years (lead / manager)' },
    ],
  },
  {
    id: 4,
    q: 'What are your biggest fears right now?',
    hint: 'Select all that apply — we\'ll tailor your plan.',
    type: 'multi' as const,
    field: 'fears' as const,
    options: [
      'Fear of AI replacing my job',
      "Don't know what to learn",
      'Stuck in career stagnation',
      "Can't switch to a new role",
      'Resume not getting noticed',
      'No clear plan or direction',
      'Wasting time on wrong skills',
      'Feeling behind my peers',
      'No confidence in decisions',
      'Other',
    ],
  },
  {
    id: 5,
    q: 'Almost done! Tell us your skill stack.',
    hint: 'Select the technologies you currently know.',
    type: 'multi' as const,
    field: 'skills' as const,
    options: [
      'Java',
      'Python',
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'SQL',
      'MongoDB',
      'AWS',
      'Docker',
      'Kubernetes',
      'Machine Learning',
      'Data Analysis',
      'System Design',
      'React Native',
      'Other',
    ],
  },
];
