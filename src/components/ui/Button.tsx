import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  withArrow?: boolean;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { to?: never };
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

const variants: Record<Variant, string> = {
  primary:
    'brand-gradient text-[var(--color-charcoal)] shadow-[0_10px_25px_rgba(137,192,41,0.22)] hover:brightness-[1.03] active:brightness-95',
  secondary:
    'border border-[var(--color-border)] bg-white text-[var(--color-charcoal)] hover:border-[var(--color-green)] hover:bg-[var(--color-warm-white)]',
  ghost: 'text-[var(--color-charcoal)] hover:bg-[var(--color-warm-white)]',
};

const base =
  'focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-[14px] px-5 py-3 text-sm font-bold transition duration-200 disabled:pointer-events-none disabled:opacity-50';

export function Button(props: ButtonProps | LinkProps) {
  const { variant = 'primary', children, className = '', withArrow = false } = props;
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {withArrow ? <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /> : null}
    </>
  );

  if ('to' in props && props.to) {
    const linkInput = props as LinkProps;
    const { to, variant: _variant, children: _children, className: _className, withArrow: _withArrow, ...linkProps } = linkInput;
    return (
      <Link to={to} className={`group ${classes}`} {...linkProps}>
        {content}
      </Link>
    );
  }

  const buttonInput = props as ButtonProps;
  const { type = 'button', variant: _variant, children: _children, className: _className, withArrow: _withArrow, ...buttonProps } = buttonInput;
  return (
    <button type={type} className={`group ${classes}`} {...buttonProps}>
      {content}
    </button>
  );
}
