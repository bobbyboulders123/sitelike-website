import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { useEffect, useRef, type ReactNode } from 'react';
import { Button } from './Button';
import { useReducedMotionPreference } from '../../hooks/useReducedMotionPreference';

interface ModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  primaryLabel: string;
  onPrimary: () => void;
  onClose: () => void;
  secondary?: ReactNode;
  labelledBy: string;
  describedBy: string;
}

const focusableSelector =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Modal({ isOpen, title, description, primaryLabel, onPrimary, onClose, secondary, labelledBy, describedBy }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotionPreference();

  useEffect(() => {
    if (!isOpen) return;
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.classList.add('modal-open');
    const frame = requestAnimationFrame(() => {
      const first = dialogRef.current?.querySelector<HTMLElement>(focusableSelector);
      first?.focus();
    });
    return () => {
      cancelAnimationFrame(frame);
      document.body.classList.remove('modal-open');
      openerRef.current?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const animation = reducedMotion ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(24,26,28,0.34)] px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.18 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            aria-describedby={describedBy}
            className="relative w-full max-w-lg rounded-[24px] border border-[var(--color-border)] bg-white p-6 shadow-[0_24px_90px_rgba(24,26,28,0.18)] sm:p-8"
            initial={reducedMotion ? animation : { opacity: 0, y: 14, scale: 0.98 }}
            animate={animation}
            exit={reducedMotion ? animation : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: reducedMotion ? 0 : 0.22 }}
          >
            <button
              type="button"
              aria-label="Close dialog"
              onClick={onClose}
              className="focus-ring absolute right-4 top-4 rounded-xl p-2 text-[var(--color-muted)] hover:bg-[var(--color-warm-white)] hover:text-[var(--color-charcoal)]"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
            <div className="mb-5 h-1.5 w-20 rounded-full brand-gradient" aria-hidden="true" />
            <h2 id={labelledBy} className="pr-8 text-2xl font-extrabold text-[var(--color-charcoal)]">
              {title}
            </h2>
            <p id={describedBy} className="mt-3 text-base leading-7 text-[var(--color-body)]">
              {description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button onClick={onPrimary}>{primaryLabel}</Button>
              {secondary}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
