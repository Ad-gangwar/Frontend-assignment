'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Frontend Assignment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 