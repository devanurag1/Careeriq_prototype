import { httpClient } from './client';
import { Message, ChatSession } from '@careeriq/shared/types';

export const coachApi = {
  sendMessage: (message: string, sessionId?: string) => 
    httpClient.post<{ reply: string; sessionId: string }>('/coach/chat', { message, sessionId }),
    
  getHistory: (sessionId: string) => 
    httpClient.get<Message[]>(`/coach/history/${sessionId}`),
};
