import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900">Welcome to the Pizza Order System</h1>
      <p className="mt-2 text-center text-sm text-gray-600">
        Manage your pizza orders with ease.
      </p>
      <Link href="/dashboard" className="mt-4 text-indigo-600 hover:text-indigo-500">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Home;
