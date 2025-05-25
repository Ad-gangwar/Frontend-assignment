'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={user ? '/dashboard' : '/'} className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">🍕 Pizza Hub</span>
            </Link>
          </div>

          {user && (
            <div className="hidden sm:flex sm:items-center sm:ml-6 space-x-8">
              <Link
                href="/dashboard"
                className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  pathname === '/dashboard'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/pizza-orders"
                className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  pathname === '/pizza-orders'
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Orders
              </Link>
            </div>
          )}

          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  Welcome, <span className="font-semibold">{user.name}</span>
                </span>
                <button
                  onClick={logout}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className={`text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium ${
                    pathname === '/login' ? 'text-indigo-600' : ''
                  }`}
                >
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className={`inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md ${
                    pathname === '/signup'
                      ? 'text-indigo-600 bg-indigo-50 border-indigo-100'
                      : 'text-white bg-indigo-600 hover:bg-indigo-700'
                  }`}
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 