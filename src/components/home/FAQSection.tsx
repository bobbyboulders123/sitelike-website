import { faqItems } from '../../data/faq';
import { Accordion } from '../ui/Accordion';
import { Container } from '../ui/Container';

export function FAQSection() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Questions, answered.</h2>
        </div>
        <Accordion items={faqItems} />
      </Container>
    </section>
  );
}
