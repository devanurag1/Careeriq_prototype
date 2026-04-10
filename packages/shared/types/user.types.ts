/** Subscription plan levels */
export type Plan = 'FREE' | 'PRO' | 'PRO_MAX';

/** Minimal user object returned in auth responses */
export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

/** Full user profile stored in DB */
export interface UserProfile {
  id: string;
  userId: string;
  currentRole: string;
  targetRole: string;
  experienceYears: number;
  /** Array of skill names the user already knows */
  skills: string[];
  /** Array of career concerns selected during onboarding */
  fears: string[];
}

/** Auth login/signup result */
export interface AuthResult {
  user: AuthUser;
  token: string;
}

/** Full user data including profile and plan */
export interface FullUser extends AuthUser {
  plan: Plan;
  profile: UserProfile | null;
  createdAt: string;
}
