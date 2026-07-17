import { Link } from 'react-router-dom';
import mark from '../../assets/logos/sitelike-mark.png';
import { footerCompanyLinks, footerProductLinks } from '../../data/navigation';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img src={mark} alt="" className="h-12 w-12 rounded-xl object-cover" />
            <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--color-body)]">
              Describe your idea. SiteLike builds the website.
            </p>
            <p className="mt-4 text-xs font-semibold text-[var(--color-muted)]">Privacy and terms coming soon.</p>
          </div>
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--color-charcoal)]">Product</h2>
            <div className="mt-4 flex flex-col gap-3">
              {footerProductLinks.map((link) => (
                <Link key={link.href} to={link.href} className="focus-ring rounded-lg text-sm font-semibold text-[var(--color-body)] hover:text-[var(--color-charcoal)]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--color-charcoal)]">Company</h2>
            <div className="mt-4 flex flex-col gap-3">
              {footerCompanyLinks.map((link) => (
                <Link key={link.href} to={link.href} className="focus-ring rounded-lg text-sm font-semibold text-[var(--color-body)] hover:text-[var(--color-charcoal)]">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-[var(--color-soft-border)] pt-6 text-sm text-[var(--color-muted)]">
          (c) 2026 SiteLike. Public preview website.
        </div>
      </Container>
    </footer>
  );
}
