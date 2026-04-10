import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { diagnosticApi } from '@/services/api/diagnostic.api';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { DiagnosticResult } from '@careeriq/shared/types';
import { mockDiagnostic } from '@/lib/mockData';
import { OnboardingInput } from '@careeriq/shared/schemas';

export function useDiagnostic() {
  const queryClient = useQueryClient();

  const { data: diagnostic, isLoading } = useQuery<DiagnosticResult>({
    queryKey: [QUERY_KEYS.DIAGNOSTIC],
    queryFn: async () => {
      try {
        const response = await diagnosticApi.get();
        // @ts-ignore
        return response.data || response;
      } catch (e) {
        return mockDiagnostic;
      }
    },
  });

  const runDiagnostic = useMutation({
    mutationFn: (data: OnboardingInput) => diagnosticApi.run(data),
    onSuccess: (data) => {
      // @ts-ignore
      queryClient.setQueryData([QUERY_KEYS.DIAGNOSTIC], data.data || data);
    },
  });

  return {
    diagnostic,
    isLoading,
    runDiagnostic: runDiagnostic.mutate,
    isDiagnosing: runDiagnostic.isPending,
  };
}
