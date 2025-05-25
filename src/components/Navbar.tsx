'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Pizza Order System</Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 