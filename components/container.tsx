import { cn } from '@/libs/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Background pattern variant
   */
  pattern?: 'dots' | 'grid' | 'lines' | 'none';
  /**
   * Container size variant
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /**
   * Enable glassmorphism effect
   */
  glass?: boolean;
  /**
   * Enable subtle animation
   */
  animated?: boolean;
  /**
   * Custom background color (overrides theme)
   */
  background?: string;
  /**
   * Padding variant
   */
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const patternStyles = {
  dots: 'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#1f1f21_1px,transparent_1px)]',
  grid: 'bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] dark:bg-[linear-gradient(#1f1f21_1px,transparent_1px),linear-gradient(90deg,#1f1f21_1px,transparent_1px)]',
  lines:
    'bg-[repeating-linear-gradient(45deg,#e5e7eb_0px,#e5e7eb_1px,transparent_1px,transparent_10px)] dark:bg-[repeating-linear-gradient(45deg,#1f1f21_0px,#1f1f21_1px,transparent_1px,transparent_10px)]',
  none: '',
};

const sizeStyles = {
  sm: 'max-w-sm',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'w-full',
};

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6 md:p-8',
  lg: 'p-8 md:p-12',
  xl: 'p-12 md:p-16 lg:p-20',
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      className,
      pattern = 'dots',
      size = 'full',
      glass = false,
      animated = false,
      background,
      padding = 'none',
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      // Base styles
      'relative w-full bg-white dark:bg-[#01040f] transition-all duration-300 ease-in-out',

      // Pattern styles
      pattern !== 'none' && patternStyles[pattern],

      // Size styles
      size !== 'full' && sizeStyles[size],

      // Glass effect
      glass &&
        'backdrop-blur-sm bg-white/80 dark:bg-[#01040f]/80 border border-white/20 dark:border-white/10',

      // Animation
      animated &&
        'hover:scale-[1.01] hover:shadow-lg transition-transform duration-300',

      // Padding
      padding !== 'none' && paddingStyles[padding],

      // Custom background
      background && `bg-[${background}]`,

      className
    );

    return (
      <div ref={ref} className={baseStyles} {...props}>
        {/* Subtle gradient overlay for depth */}
        {glass && (
          <div className="rounded-inherit pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5" />
        )}

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

Container.displayName = 'Container';
