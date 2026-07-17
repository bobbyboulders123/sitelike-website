import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navigationItems } from '../../data/navigation';
import { Button } from '../ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onStartBuilding: () => void;
}

export function MobileMenu({ isOpen, onClose, onStartBuilding }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.classList.add('menu-open');
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="border-t border-[var(--color-soft-border)] bg-white px-5 py-4 shadow-[0_18px_35px_rgba(24,26,28,0.08)] lg:hidden">
      <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
        {navigationItems.map((item) => (
          <Link key={item.href} to={item.href} onClick={onClose} className="focus-ring rounded-xl px-3 py-3 text-sm font-bold text-[var(--color-charcoal)]">
            {item.label}
          </Link>
        ))}
      </nav>
      <Button
        className="mt-3 w-full"
        onClick={() => {
          onClose();
          onStartBuilding();
        }}
      >
        Start Building
      </Button>
    </div>
  );
}
