import { useStartBuildingDialog } from '../../context/StartBuildingDialogContext';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { HeroBuilderMockup } from './HeroBuilderMockup';

export function HeroSection() {
  const { openStartBuildingDialog } = useStartBuildingDialog();

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="absolute left-[-8rem] top-[-8rem] h-80 w-80 rounded-full bg-[rgba(137,192,41,0.13)] blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-[rgba(253,143,15,0.12)] blur-3xl" aria-hidden="true" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[var(--color-green)]">AI-POWERED WEBSITE CREATION</p>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] text-[var(--color-charcoal)] sm:text-5xl lg:text-[4rem]">
            Describe your idea.
            <br />
            SiteLike builds the website.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-body)]">
            Turn a simple prompt into a polished, responsive website designed for your business, brand, or next big idea.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={openStartBuildingDialog} withArrow>
              Start Building
            </Button>
            <Button to="/#how-it-works" variant="secondary">
              See How It Works
            </Button>
          </div>
          <p className="mt-6 text-sm font-bold text-[var(--color-muted)]">Simple process • Premium design • Affordable monthly pricing</p>
        </div>
        <HeroBuilderMockup />
      </Container>
    </section>
  );
}
