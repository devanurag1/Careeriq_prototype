import { useQuery } from '@tanstack/react-query';
import { marketApi } from '@/services/api/market.api';
import { QUERY_KEYS } from '@/constants/queryKeys';
import { MarketData } from '@careeriq/shared/types';
import { mockMarket } from '@/lib/mockData';

export function useMarket() {
  const { data: market, isLoading } = useQuery<MarketData>({
    queryKey: [QUERY_KEYS.MARKET],
    queryFn: async () => {
      try {
        const response = await marketApi.get();
        // @ts-ignore
        return response.data || response;
      } catch (e) {
        return mockMarket;
      }
    },
  });

  return {
    market,
    isLoading,
  };
}
