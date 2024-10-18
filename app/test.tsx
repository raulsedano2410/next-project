// components/Button.tsx
import clsx from 'clsx';

interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ primary, disabled, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'px-4 py-2 rounded-md transition-colors duration-300',
        primary ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-black',
        disabled && 'opacity-50 cursor-not-allowed'
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
