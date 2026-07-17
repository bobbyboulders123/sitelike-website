import type { PropsWithChildren } from 'react';

interface BrowserFrameProps extends PropsWithChildren {
  label?: string;
  className?: string;
}

export function BrowserFrame({ children, label = 'Website preview', className = '' }: BrowserFrameProps) {
  return (
    <div className={`overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-white shadow-soft ${className}`}>
      <div className="flex items-center gap-2 border-b border-[var(--color-soft-border)] bg-[var(--color-warm-white)] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff8a12]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#f4cb08]" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-[#76c52b]" aria-hidden="true" />
        <span className="ml-2 truncate text-xs font-semibold text-[var(--color-muted)]">{label}</span>
      </div>
      {children}
    </div>
  );
}
