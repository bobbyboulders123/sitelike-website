import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import type { FAQItem } from '../../data/faq';

interface AccordionProps {
  items: FAQItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-10 max-w-3xl divide-y divide-[var(--color-soft-border)] rounded-[24px] border border-[var(--color-border)] bg-white">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="focus-ring flex w-full items-center justify-between gap-4 rounded-[20px] px-5 py-5 text-left font-bold text-[var(--color-charcoal)]"
              >
                <span>{item.question}</span>
                <ChevronDown aria-hidden="true" className={`h-5 w-5 shrink-0 transition ${isOpen ? 'rotate-180' : ''}`} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 text-sm leading-7 text-[var(--color-body)] sm:text-base"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
