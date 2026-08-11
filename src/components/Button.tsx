import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  type?: 'button' | 'submit';
  showArrow?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  showArrow = true,
}: ButtonProps) {
  const reducedMotion = useReducedMotion();

  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background';

  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent-light shadow-glow hover:shadow-[0_0_50px_rgba(99,102,241,0.25)]',
    secondary:
      'bg-card text-text-primary border border-white/10 hover:border-accent/40 hover:bg-background-secondary',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-white/5',
  };

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const motionProps = reducedMotion
    ? {}
    : {
        whileHover: { y: -2 },
        whileTap: { scale: 0.98 },
      };

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={`group ${baseStyles} ${variants[variant]} ${className}`}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`group ${baseStyles} ${variants[variant]} ${className}`}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
