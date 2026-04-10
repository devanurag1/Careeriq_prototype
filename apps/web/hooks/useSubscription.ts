import { useAuthStore } from '@/store/auth.store';
import { PLANS } from '@/constants/plans';

export function useSubscription() {
  const { user } = useAuthStore();
  
  const planLevel = user?.plan || 'FREE';
  const isPro = planLevel === 'PRO' || planLevel === 'PRO_MAX';
  
  const hasFeature = (feature: keyof typeof PLANS['PRO']['features']) => {
    // Basic logic for feature flags based on plan
    if (isPro) return true;
    return false; // FREE has limited features
  };

  return {
    planLevel,
    isPro,
    hasFeature,
  };
}
