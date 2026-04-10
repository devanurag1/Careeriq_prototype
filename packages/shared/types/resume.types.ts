/** Severity of a resume issue found by AI */
export type IssueSeverity = 'critical' | 'warning';

/** A single issue detected in the user's resume */
export interface ResumeIssue {
  severity: IssueSeverity;
  description: string;
}

/** Full resume analysis result */
export interface ResumeAnalysis {
  id: string;
  userId: string;
  /** Current match score as percentage 0–100 */
  matchScore: number;
  /** Projected score after AI optimization */
  optimizedScore: number;
  targetRole: string;
  issues: ResumeIssue[];
  /** AI-rewritten resume text (HTML safe) */
  rewrittenText: string;
  createdAt: string;
}
