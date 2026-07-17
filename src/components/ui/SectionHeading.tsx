interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  copy?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ eyebrow, heading, copy, align = 'center', className = '' }: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow ? <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[var(--color-green)]">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-extrabold leading-tight text-[var(--color-charcoal)] sm:text-4xl lg:text-[2.65rem]">
        {heading}
      </h2>
      {copy ? <p className="mt-4 text-base leading-8 text-[var(--color-body)] sm:text-lg">{copy}</p> : null}
    </div>
  );
}
