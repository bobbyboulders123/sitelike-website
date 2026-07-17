import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { usePageTitle } from '../hooks/usePageTitle';

export function NotFoundPage() {
  usePageTitle('Page Not Found | SiteLike');
  return (
    <section className="section-pad bg-white">
      <Container className="max-w-3xl text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[var(--color-green)]">404</p>
        <h1 className="mt-4 text-4xl font-extrabold">This page does not exist.</h1>
        <p className="mt-4 text-lg text-[var(--color-body)]">The page may have moved, or the address may be incorrect.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/">Return Home</Button>
          <Button to="/contact" variant="secondary">Contact SiteLike</Button>
        </div>
      </Container>
    </section>
  );
}
