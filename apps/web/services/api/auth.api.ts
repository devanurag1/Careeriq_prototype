import { httpClient } from './client';
import { SignupInput, LoginInput } from '@careeriq/shared/schemas';
import { User } from '@careeriq/shared/types';

export const authApi = {
  signup: (data: SignupInput) => 
    httpClient.post<{ user: User; token: string }>('/auth/signup', data),
    
  login: (data: LoginInput) => 
    httpClient.post<{ user: User; token: string }>('/auth/login', data),
    
  logout: () => 
    httpClient.post('/auth/logout'),
};
