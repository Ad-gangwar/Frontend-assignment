import { ReactNode } from 'react';
import { ClipLoader } from 'react-spinners';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  loading = false,
  disabled = false,
  onClick,
  fullWidth = false,
  className = '',
}: ButtonProps) => {
  const baseStyles = 'relative px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 focus:ring-indigo-500',
    secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500',
    danger: 'bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700 focus:ring-red-500'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <ClipLoader size={20} color={variant === 'secondary' ? '#4F46E5' : '#ffffff'} />
        </div>
      ) : null}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
    </button>
  );
};

export default Button; 