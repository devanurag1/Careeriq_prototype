import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { resumeApi } from '@/services/api/resume.api';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { ResumeAnalysis } from '@careeriq/shared/types';
import { mockResume } from '@/lib/mockData';

export function useResume() {
  const queryClient = useQueryClient();

  const { data: analysis, isLoading: isFetching } = useQuery<ResumeAnalysis>({
    queryKey: [QUERY_KEYS.RESUME],
    queryFn: async () => {
      try {
        const response = await resumeApi.get();
        // @ts-ignore
        return response.data || response;
      } catch (e) {
        return mockResume;
      }
    },
    enabled: false, // Only fetch or show after upload in this mock-flow
  });

  const upload = useMutation({
    mutationFn: (file: File) => resumeApi.upload(file),
    onSuccess: (data) => {
      // @ts-ignore
      queryClient.setQueryData([QUERY_KEYS.RESUME], data.data || data);
    },
  });

  return {
    analysis: upload.data ? (upload.data as any).data || upload.data : (upload.isSuccess ? analysis : null),
    isUploading: upload.isPending,
    upload: upload.mutate,
    isSuccess: upload.isSuccess,
  };
}
