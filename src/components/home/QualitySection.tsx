import { CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

const principles = ['Clear visual hierarchy', 'Consistent spacing and styling', 'Responsive layouts', 'Conversion-focused structure'];

export function QualitySection() {
  return (
    <section className="section-pad bg-white">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="PREMIUM BY DESIGN"
            heading="Premium design should not require a premium budget."
            copy="SiteLike combines AI-powered speed with thoughtful design, giving businesses a polished online presence at a more approachable price."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle} className="flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-4">
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-[var(--color-green)]" />
                <span className="text-sm font-bold">{principle}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[24px] border border-[var(--color-border)] bg-[var(--color-warm-white)] p-5">
            <p className="text-sm font-extrabold text-[var(--color-muted)]">Basic starting point</p>
            <div className="mt-5 space-y-3">
              <div className="h-24 rounded-2xl bg-white" />
              <div className="h-4 w-4/5 rounded-full bg-[var(--color-border)]" />
              <div className="h-4 w-3/5 rounded-full bg-[var(--color-border)]" />
              <div className="grid grid-cols-2 gap-2"><span className="h-20 rounded-xl bg-white" /><span className="h-20 rounded-xl bg-white" /></div>
            </div>
          </div>
          <div className="gradient-border rounded-[24px]">
            <div className="h-full rounded-[23px] bg-white p-5 shadow-soft">
              <p className="text-sm font-extrabold text-[var(--color-green)]">The SiteLike standard</p>
              <div className="mt-5 rounded-2xl bg-[#edf6e7] p-4">
                <div className="h-3 w-24 rounded-full bg-white/80" />
                <div className="mt-4 h-5 w-4/5 rounded-full bg-white" />
                <div className="mt-3 h-9 w-28 rounded-xl bg-[var(--color-charcoal)]" />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2"><span className="h-20 rounded-xl border border-[var(--color-soft-border)] bg-[var(--color-warm-white)]" /><span className="h-20 rounded-xl border border-[var(--color-soft-border)] bg-[var(--color-warm-white)]" /></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
