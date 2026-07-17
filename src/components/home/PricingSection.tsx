import { Check } from 'lucide-react';
import { publicPricing } from '../../data/pricing';
import { useStartBuildingDialog } from '../../context/StartBuildingDialogContext';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function PricingSection() {
  const { openStartBuildingDialog } = useStartBuildingDialog();
  return (
    <section id="pricing" className="section-pad scroll-mt-24 bg-[var(--color-warm-white)]">
      <Container>
        <SectionHeading
          eyebrow="SIMPLE PRICING"
          heading="Premium quality. Simple pricing."
          copy="Launch a polished website without a large upfront agency cost or a confusing collection of plans."
        />
        <div className="gradient-border mx-auto mt-10 max-w-xl rounded-[28px]">
          <article className="rounded-[27px] bg-white p-6 shadow-soft sm:p-8">
            <h3 className="text-2xl font-extrabold">{publicPricing.title}</h3>
            <p className="mt-2 text-[var(--color-body)]">{publicPricing.supportingLine}</p>
            <div className="mt-7 flex flex-wrap items-end gap-x-5 gap-y-2">
              <p className="text-4xl font-extrabold">{publicPricing.setupPrice}</p>
              <p className="pb-1 text-xl font-extrabold text-[var(--color-body)]">{publicPricing.monthlyPrice}</p>
            </div>
            <ul className="mt-7 space-y-3">
              {publicPricing.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm font-semibold text-[var(--color-body)]">
                  <Check aria-hidden="true" className="h-5 w-5 shrink-0 text-[var(--color-green)]" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl bg-[var(--color-warm-white)] p-4 text-sm leading-6 text-[var(--color-body)]">{publicPricing.note}</p>
            <Button className="mt-6 w-full" onClick={openStartBuildingDialog}>
              Start Building
            </Button>
          </article>
        </div>
      </Container>
    </section>
  );
}
