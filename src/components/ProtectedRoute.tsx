'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const storedUser = localStorage.getItem('user');
      if (!storedUser && !user) {
        router.push('/login');
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [user, router]);

  if (isLoading) {
    return <div>Loading...</div>; // Add proper loading spinner here
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
} 