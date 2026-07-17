import { audiences } from '../../data/audiences';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function AudienceSection() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeading eyebrow="BUILT FOR MORE PEOPLE" heading="Made for anyone with something to build." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <article key={audience.title} className="rounded-[22px] border border-[var(--color-border)] bg-white p-5 shadow-soft">
                <span className="inline-flex rounded-xl brand-gradient p-3 text-[var(--color-charcoal)]">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold">{audience.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-body)]">{audience.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
