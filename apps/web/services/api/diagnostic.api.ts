import { httpClient } from './client';
import { DiagnosticResult } from '@careeriq/shared/types';
import { OnboardingInput } from '@careeriq/shared/schemas';

export const diagnosticApi = {
  get: () => 
    httpClient.get<DiagnosticResult>('/diagnostic'),
    
  run: (data: OnboardingInput) => 
    httpClient.post<DiagnosticResult>('/diagnostic/run', data),
};
