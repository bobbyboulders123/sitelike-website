import { ArrowRight, FileText, Sparkles, SlidersHorizontal } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Describe',
    body: 'Tell SiteLike what you are building, who it is for, and how you want it to feel.',
    icon: FileText,
  },
  {
    number: '02',
    title: 'Generate',
    body: 'SiteLike turns your description into a structured website concept with thoughtful content and visual hierarchy.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Refine',
    body: 'Review the result and personalize the content, colors, sections, and layout.',
    icon: SlidersHorizontal,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-pad scroll-mt-24 bg-white">
      <Container>
        <SectionHeading
          eyebrow="HOW IT WORKS"
          heading="From a description to a polished website."
          copy="SiteLike is designed to make creating a professional website feel clear, guided, and approachable."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="relative rounded-[24px] border border-[var(--color-border)] bg-white p-6 shadow-soft">
                {index < steps.length - 1 ? <ArrowRight aria-hidden="true" className="absolute right-[-1.15rem] top-1/2 z-10 hidden h-6 w-6 text-[var(--color-lime)] lg:block" /> : null}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[var(--color-muted)]">Step {step.number}</span>
                  <span className="rounded-xl brand-gradient p-3 text-[var(--color-charcoal)]">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-extrabold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-body)]">{step.body}</p>
                <div className="mt-6 rounded-2xl bg-[var(--color-warm-white)] p-4">
                  <div className="h-3 w-3/4 rounded-full bg-[var(--color-border)]" />
                  <div className="mt-3 h-3 w-1/2 rounded-full bg-[var(--color-soft-border)]" />
                  <div className="mt-4 h-16 rounded-xl border border-[var(--color-border)] bg-white" />
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
