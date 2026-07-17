export interface NavigationItem {
  label: string;
  href: string;
  type: 'hash' | 'route';
}

export const navigationItems: NavigationItem[] = [
  { label: 'How It Works', href: '/#how-it-works', type: 'hash' },
  { label: 'Examples', href: '/#examples', type: 'hash' },
  { label: 'Pricing', href: '/#pricing', type: 'hash' },
  { label: 'About', href: '/about', type: 'route' },
  { label: 'Contact', href: '/contact', type: 'route' },
];

export const footerProductLinks = navigationItems.slice(0, 3);
export const footerCompanyLinks = navigationItems.slice(3);
