import { httpClient } from './client';
import { Roadmap } from '@careeriq/shared/types';

export const roadmapApi = {
  get: () => 
    httpClient.get<Roadmap>('/roadmap'),
    
  completeTask: (taskId: string) => 
    httpClient.post<{ roadmap: Roadmap }>(`/roadmap/tasks/${taskId}/complete`),
    
  refresh: () => 
    httpClient.post<Roadmap>('/roadmap/refresh'),
};
