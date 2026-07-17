import type { PropsWithChildren } from 'react';

export function GradientBadge({ children }: PropsWithChildren) {
  return (
    <span className="gradient-border inline-flex rounded-full">
      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-charcoal)]">
        {children}
      </span>
    </span>
  );
}
