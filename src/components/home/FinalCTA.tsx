import { useStartBuildingDialog } from '../../context/StartBuildingDialogContext';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function FinalCTA() {
  const { openStartBuildingDialog } = useStartBuildingDialog();
  return (
    <section className="section-pad bg-white">
      <Container>
        <div className="gradient-border rounded-[28px]">
          <div className="relative overflow-hidden rounded-[27px] bg-[var(--color-warm-white)] px-6 py-14 text-center sm:px-10">
            <div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-[rgba(253,143,15,0.14)] blur-3xl" aria-hidden="true" />
            <h2 className="relative text-balance text-3xl font-extrabold sm:text-4xl">Your next website begins with a description.</h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--color-body)]">
              Tell SiteLike what you are imagining and turn your idea into a polished online experience.
            </p>
            <Button className="relative mt-7" onClick={openStartBuildingDialog} withArrow>
              Start Building
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
