'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.name}! 👋
            </h1>
            <p className="text-gray-600">
              Manage your pizza orders and track deliveries from your dashboard.
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/pizza-orders"
              className="block w-full bg-white p-6 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">View Orders</h2>
                  <p className="text-gray-600 mt-1">Check and manage your pizza orders</p>
                </div>
                <svg
                  className="h-6 w-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 