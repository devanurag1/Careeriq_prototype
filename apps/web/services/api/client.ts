import axios from 'axios';
import { useAuthStore } from '@/store/auth.store';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor to handle errors globally
httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle 401 Unauthorized
    if (error.response?.status === 401) {
      localStorage.removeItem('auth-token');
      // Redirect to auth or clear store if needed
    }
    
    const apiError = {
      message: error.response?.data?.message || 'An unexpected error occurred',
      status: error.response?.status,
      code: error.response?.data?.code,
    };
    
    return Promise.reject(apiError);
  }
);

export { httpClient };
