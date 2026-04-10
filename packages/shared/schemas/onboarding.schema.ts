import { z } from 'zod';

export const onboardingSchema = z.object({
  currentRole: z.string().min(1, 'Please select your current role'),
  targetRole: z.string().min(1, 'Please select your target role'),
  experience: z.string().min(1, 'Please select your experience level'),
  skills: z.array(z.string()).min(1, 'Please select at least one skill'),
  goals: z.array(z.string()).min(1, 'Please select at least one career goal'),
});

export type OnboardingInput = z.infer<typeof onboardingSchema>;
