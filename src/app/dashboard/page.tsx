'use client';

import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900">Hello, {user?.displayName || 'User'}!</h1>
      <p className="mt-2 text-center text-sm text-gray-600">
        Welcome to your dashboard.
      </p>
      <Link href="/pizza-orders" className="mt-4 text-indigo-600 hover:text-indigo-500">
        View Pizza Orders
      </Link>
    </div>
  );
};

export default Dashboard; 