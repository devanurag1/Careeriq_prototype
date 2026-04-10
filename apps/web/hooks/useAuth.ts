import { useMutation } from '@tanstack/react-query';
import { authApi } from '@/services/api/auth.api';
import { useAuthStore } from '@/store/auth.store';
import { SignupInput, LoginInput } from '@careeriq/shared/schemas';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

export function useAuth() {
  const { setAuth, logout: clearStore } = useAuthStore();
  const router = useRouter();

  const signup = useMutation({
    mutationFn: (data: SignupInput) => authApi.signup(data),
    onSuccess: (response) => {
      // @ts-ignore
      const { user, token } = response.data || response;
      setAuth(user, token);
      localStorage.setItem('auth-token', token);
      router.push(ROUTES.ONBOARDING);
    },
  });

  const login = useMutation({
    mutationFn: (data: LoginInput) => authApi.login(data),
    onSuccess: (response) => {
      // @ts-ignore
      const { user, token } = response.data || response;
      setAuth(user, token);
      localStorage.setItem('auth-token', token);
      router.push(ROUTES.DASHBOARD);
    },
  });

  const logout = () => {
    clearStore();
    localStorage.removeItem('auth-token');
    router.push(ROUTES.AUTH);
  };

  return {
    signup: signup.mutate,
    isSigningUp: signup.isPending,
    login: login.mutate,
    isLoggingIn: login.isPending,
    logout,
  };
}
