import { AnimatePresence, motion } from 'motion/react';
import { useRef, useState, type KeyboardEvent } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

const tabs = ['Prompt', 'Generate', 'Customize', 'Preview'] as const;
type DemoTab = (typeof tabs)[number];

export function ProductDemoSection() {
  const [active, setActive] = useState<DemoTab>('Prompt');
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const nextIndex =
      event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : event.key === 'ArrowRight' ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
    setActive(tabs[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="section-pad bg-[var(--color-warm-white)]">
      <Container>
        <SectionHeading
          eyebrow="THE SITELIKE EXPERIENCE"
          heading="From one idea to a complete website."
          copy="See how a simple description can develop into a polished, responsive website concept."
        />
        <div className="mx-auto mt-10 max-w-5xl rounded-[28px] border border-[var(--color-border)] bg-white p-4 shadow-soft sm:p-6">
          <div role="tablist" aria-label="SiteLike product demonstration" className="flex gap-2 overflow-x-auto rounded-2xl bg-[var(--color-warm-white)] p-2">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                aria-selected={active === tab}
                aria-controls={`demo-panel-${tab}`}
                id={`demo-tab-${tab}`}
                tabIndex={active === tab ? 0 : -1}
                onClick={() => setActive(tab)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={`focus-ring min-h-11 rounded-xl px-5 text-sm font-extrabold transition ${
                  active === tab ? 'brand-gradient text-[var(--color-charcoal)]' : 'text-[var(--color-body)] hover:bg-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-6 min-h-[330px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                role="tabpanel"
                id={`demo-panel-${active}`}
                aria-labelledby={`demo-tab-${active}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
              >
                <DemoPanel active={active} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}

function DemoPanel({ active }: { active: DemoTab }) {
  const copy = {
    Prompt: ['Start with the business, audience, tone, and the outcome you want.', 'Generate Website'],
    Generate: ['SiteLike organizes the concept into sections, copy blocks, and visual hierarchy.', 'Assembling structure'],
    Customize: ['Adjust typography, colors, spacing, section order, and content direction.', 'Editing controls'],
    Preview: ['Review the same concept across desktop and mobile layouts before moving forward.', 'Responsive preview'],
  };
  return (
    <>
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--color-green)]">{active}</p>
        <h3 className="mt-3 text-2xl font-extrabold">{copy[active][1]}</h3>
        <p className="mt-3 text-base leading-8 text-[var(--color-body)]">{copy[active][0]}</p>
        <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-warm-white)] p-4 text-sm leading-7 text-[var(--color-body)]">
          {active === 'Prompt'
            ? 'Create a polished website for a neighborhood landscaping company with services, quote requests, and a natural visual style.'
            : 'This panel is a visual concept for the planned SiteLike builder experience.'}
        </div>
      </div>
      <div className="rounded-2xl border border-[var(--color-border)] bg-white p-4">
        {active === 'Generate' ? (
          <div className="space-y-4">
            {['Hero section', 'Service cards', 'Quote CTA', 'Mobile layout'].map((item, index) => (
              <div key={item}>
                <div className="flex justify-between text-sm font-bold"><span>{item}</span><span>{(index + 1) * 25}%</span></div>
                <div className="mt-2 h-2 rounded-full bg-[var(--color-soft-border)]"><div className="h-2 rounded-full brand-gradient" style={{ width: `${(index + 1) * 25}%` }} /></div>
              </div>
            ))}
          </div>
        ) : active === 'Customize' ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {['Typography', 'Colors', 'Spacing', 'Section order'].map((item) => (
              <div key={item} className="rounded-xl bg-[var(--color-warm-white)] p-4">
                <p className="text-sm font-bold">{item}</p>
                <div className="mt-3 h-2 rounded-full bg-white"><div className="h-2 w-2/3 rounded-full brand-gradient" /></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-[1fr_0.42fr] gap-4">
            <div className="rounded-2xl bg-[var(--color-warm-white)] p-4"><div className="h-28 rounded-xl bg-[#edf6e7]" /><div className="mt-4 grid grid-cols-3 gap-2"><span className="h-16 rounded-lg bg-white" /><span className="h-16 rounded-lg bg-white" /><span className="h-16 rounded-lg bg-white" /></div></div>
            <div className="rounded-[24px] border-4 border-[var(--color-charcoal)] p-2"><div className="h-36 rounded-xl bg-[#edf6e7]" /><div className="mt-2 h-16 rounded-xl bg-[var(--color-warm-white)]" /></div>
          </div>
        )}
      </div>
    </>
  );
}
