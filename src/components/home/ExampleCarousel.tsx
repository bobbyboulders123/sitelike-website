import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { examples } from '../../data/examples';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { SitePreviewCard } from '../ui/SitePreviewCard';

export function ExampleCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const scrollTo = (index: number) => {
    const next = Math.max(0, Math.min(examples.length - 1, index));
    const card = scrollerRef.current?.children.item(next) as HTMLElement | null;
    card?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    setCurrent(next);
  };

  return (
    <section id="examples" className="section-pad scroll-mt-24 bg-[var(--color-warm-white)]">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="EXAMPLE CONCEPTS"
            heading="Built for ideas of every size."
            copy="Explore a few of the website directions SiteLike is designed to create."
          />
          <div className="flex gap-2">
            <button type="button" aria-label="Previous concept" onClick={() => scrollTo(current - 1)} className="focus-ring rounded-xl border border-[var(--color-border)] bg-white p-3">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" aria-label="Next concept" onClick={() => scrollTo(current + 1)} className="focus-ring rounded-xl border border-[var(--color-border)] bg-white p-3">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div
          ref={scrollerRef}
          className="mt-10 flex snap-x gap-5 overflow-x-auto scroll-smooth pb-4"
          onScroll={() => {
            const node = scrollerRef.current;
            if (!node) return;
            const width = (node.children.item(0) as HTMLElement | null)?.offsetWidth ?? 1;
            setCurrent(Math.round(node.scrollLeft / (width + 20)));
          }}
        >
          {examples.map((concept) => (
            <SitePreviewCard key={concept.name} concept={concept} />
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-2" aria-label="Current concept">
          {examples.map((example, index) => (
            <button
              key={example.name}
              type="button"
              aria-label={`Show ${example.name}`}
              onClick={() => scrollTo(index)}
              className={`focus-ring h-2.5 rounded-full transition ${current === index ? 'w-8 brand-gradient' : 'w-2.5 bg-[var(--color-border)]'}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
