import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const id = hash.slice(1);
    let attempts = 0;
    const scrollToHash = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
        return;
      }
      attempts += 1;
      if (attempts < 8) window.setTimeout(scrollToHash, 60);
    };
    scrollToHash();
  }, [pathname, hash]);

  return null;
}
