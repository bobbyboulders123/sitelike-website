import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import fullLogo from '../../assets/logos/sitelike-full-logo.png';
import { navigationItems } from '../../data/navigation';
import { useStartBuildingDialog } from '../../context/StartBuildingDialogContext';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openStartBuildingDialog } = useStartBuildingDialog();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 bg-white/92 backdrop-blur transition ${scrolled ? 'border-b border-[var(--color-border)]' : 'border-b border-transparent'}`}>
      <div className="mx-auto flex h-20 max-w-[1240px] items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link to="/" className="focus-ring rounded-xl" aria-label="SiteLike home">
          <img src={fullLogo} alt="SiteLike logo" className="h-10 w-auto object-contain" width="130" height="40" />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                `focus-ring rounded-xl px-4 py-2 text-sm font-bold transition hover:bg-[var(--color-warm-white)] ${
                  isActive && item.type === 'route' ? 'text-[var(--color-green)]' : 'text-[var(--color-body)]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button onClick={openStartBuildingDialog}>Start Building</Button>
        </div>
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="focus-ring rounded-xl border border-[var(--color-border)] p-3 text-[var(--color-charcoal)] lg:hidden"
        >
          {menuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} onStartBuilding={openStartBuildingDialog} />
    </header>
  );
}
