import { audiences } from '../data/audiences';
import { useStartBuildingDialog } from '../context/StartBuildingDialogContext';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { usePageTitle } from '../hooks/usePageTitle';

const principles = [
  ['Quality without unnecessary cost', 'SiteLike is being shaped around polished visual direction and clear structure without asking every customer to begin with a large custom project.'],
  ['Simple tools without limited ambition', 'The experience is intended to feel approachable while still supporting thoughtful layouts, content, and brand presentation.'],
  ['Modern design without technical barriers', 'SiteLike focuses on helping people move from description to website direction without needing to start in code.'],
  ['Clear pricing without confusing packages', 'The public plan is intentionally simple so visitors can understand the basic cost before launch details are finalized.'],
];

export function AboutPage() {
  usePageTitle('About SiteLike');
  const { openStartBuildingDialog } = useStartBuildingDialog();

  return (
    <>
      <section className="section-pad bg-white">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-green)]">ABOUT SITELIKE</p>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-tight sm:text-5xl">Making premium websites more accessible.</h1>
            <p className="mt-6 text-lg leading-8 text-[var(--color-body)]">
              SiteLike was created around a straightforward belief: professional website design should be more approachable for people without large budgets, technical teams, or lengthy agency timelines.
            </p>
          </div>
        </Container>
      </section>
      <section className="section-pad bg-[var(--color-warm-white)]">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading align="left" heading="A simpler path from idea to website." />
          <p className="text-lg leading-9 text-[var(--color-body)]">
            SiteLike is being built to help businesses and creators describe what they need, explore a polished website direction, and move forward with greater clarity.
          </p>
        </Container>
      </section>
      <section className="section-pad bg-white">
        <Container>
          <SectionHeading eyebrow="PRINCIPLES" heading="Built around clarity, quality, and access." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {principles.map(([title, body]) => (
              <article key={title} className="rounded-[24px] border border-[var(--color-border)] bg-white p-6 shadow-soft">
                <h2 className="text-xl font-extrabold">{title}</h2>
                <p className="mt-3 leading-7 text-[var(--color-body)]">{body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section-pad bg-[var(--color-warm-white)]">
        <Container>
          <SectionHeading eyebrow="WHO IT IS FOR" heading="Useful for teams and individuals starting with an idea." />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {audiences.map((audience) => (
              <article key={audience.title} className="rounded-[20px] border border-[var(--color-border)] bg-white p-5">
                <h2 className="text-base font-extrabold">{audience.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--color-body)]">{audience.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="section-pad bg-white">
        <Container className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Bring your next idea to life.</h2>
          <Button className="mt-7" onClick={openStartBuildingDialog}>
            Start Building
          </Button>
        </Container>
      </section>
    </>
  );
}
