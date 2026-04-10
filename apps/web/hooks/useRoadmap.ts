import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { roadmapApi } from '@/services/api/roadmap.api';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { Roadmap } from '@careeriq/shared/types';
import { mockRoadmap } from '@/lib/mockData';

export function useRoadmap() {
  const queryClient = useQueryClient();

  // For now, we use mock data if API fails or for initial dev
  const { data: roadmap, isLoading } = useQuery<Roadmap>({
    queryKey: [QUERY_KEYS.ROADMAP],
    queryFn: async () => {
      try {
        const response = await roadmapApi.get();
        // @ts-ignore - handling axios return structure if wrapped
        return response.data || response;
      } catch (e) {
        return mockRoadmap; // Fallback to mock
      }
    },
  });

  const completeTask = useMutation({
    mutationFn: (taskId: string) => roadmapApi.completeTask(taskId),
    onSuccess: (response) => {
      // @ts-ignore
      const newData = response.data?.roadmap || response.roadmap || response;
      queryClient.setQueryData([QUERY_KEYS.ROADMAP], newData);
    },
  });

  return {
    roadmap,
    isLoading,
    completeTask: completeTask.mutate,
    isCompleting: completeTask.isPending,
  };
}
