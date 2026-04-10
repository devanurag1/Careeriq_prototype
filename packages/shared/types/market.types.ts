/** A rising skill with its market demand score */
export interface SkillTrend {
  skillName: string;
  /** Demand as a percentage of job postings 0–100 */
  demandScore: number;
  /** Year-over-year change in demand as a percentage */
  yoyChange: number;
  color: string;
}

/** A company actively hiring for the user's target role */
export interface HiringCompany {
  name: string;
  openingsCount: number;
  roleLabel: string;
}

/** Salary benchmark for a specific role */
export interface SalaryBenchmark {
  roleLabel: string;
  medianSalary: number;
  /** e.g. "₹18L" */
  formattedSalary: string;
  currency: 'INR' | 'USD';
}

/** All market intelligence data for the user's target role */
export interface MarketData {
  risingSkills: SkillTrend[];
  hiringCompanies: HiringCompany[];
  salaryBenchmark: SalaryBenchmark;
  totalOpenings: number;
  pythonDemandYoY: number;
  javaOnlyRoleChange: number;
}
