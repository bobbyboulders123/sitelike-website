import { BrowserFrame } from './BrowserFrame';
import type { ExampleConcept } from '../../data/examples';

const accentMap = {
  green: 'bg-[var(--color-green)]',
  orange: 'bg-[var(--color-orange)]',
  yellow: 'bg-[var(--color-yellow)]',
  lime: 'bg-[var(--color-lime)]',
};

export function SitePreviewCard({ concept }: { concept: ExampleConcept }) {
  return (
    <article className="w-[82vw] max-w-[390px] shrink-0 snap-start rounded-[24px] border border-[var(--color-border)] bg-white p-4 shadow-soft sm:w-[390px]">
      <BrowserFrame label={`${concept.name} concept`} className="shadow-none">
        <div className="space-y-4 p-4">
          <div className={`h-24 rounded-2xl ${accentMap[concept.accent]} bg-opacity-20 p-4`}>
            <div className="h-3 w-24 rounded-full bg-white/85" />
            <div className="mt-4 h-4 w-44 rounded-full bg-white/90" />
            <div className="mt-2 h-3 w-32 rounded-full bg-white/80" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((item) => (
              <div key={item} className="rounded-xl border border-[var(--color-soft-border)] p-2">
                <div className={`h-7 rounded-lg ${accentMap[concept.accent]} opacity-25`} />
                <div className="mt-2 h-2 rounded-full bg-[var(--color-soft-border)]" />
              </div>
            ))}
          </div>
          <svg viewBox="0 0 320 76" role="img" aria-label={`${concept.name} fictional page layout`} className="h-auto w-full">
            <rect width="320" height="76" rx="16" fill="#fafaf7" />
            <circle cx="42" cy="38" r="18" fill="#e7e8e3" />
            <rect x="76" y="24" width="150" height="8" rx="4" fill="#d9dbd3" />
            <rect x="76" y="42" width="104" height="8" rx="4" fill="#e7e8e3" />
            <rect x="248" y="25" width="42" height="26" rx="9" fill="#181a1c" />
          </svg>
        </div>
      </BrowserFrame>
      <div className="mt-5 flex items-center justify-between gap-3">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-green)]">{concept.category}</p>
        <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-bold text-[var(--color-muted)]">Concept</span>
      </div>
      <h3 className="mt-3 text-xl font-extrabold text-[var(--color-charcoal)]">{concept.name}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--color-body)]">{concept.description}</p>
    </article>
  );
}
