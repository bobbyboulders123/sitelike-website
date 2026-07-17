import mark from '../../assets/logos/sitelike-mark.png';

const labels = [
  'AI-Powered Creation',
  'Responsive Design',
  'Premium Layouts',
  'Simple Editing',
  'Affordable Pricing',
  'No Coding Required',
  'Built for Every Business',
  'Prompt-to-Website',
];

export function FeatureMarquee() {
  const row = [...labels, ...labels];
  return (
    <section className="marquee overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-warm-white)] py-4" aria-label="SiteLike features">
      <div className="marquee-track flex w-max items-center gap-5 px-5">
        {row.map((label, index) => (
          <div key={`${label}-${index}`} className="flex items-center gap-5">
            <span className="whitespace-nowrap text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--color-charcoal)]">{label}</span>
            <img src={mark} alt="" className="h-5 w-5 rounded-md object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
