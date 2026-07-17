export interface PublicPricingData {
  title: string;
  supportingLine: string;
  setupPrice: string;
  monthlyPrice: string;
  features: string[];
  note: string;
}

export const publicPricing: PublicPricingData = {
  title: 'SiteLike Website Plan',
  supportingLine: 'One clear plan for bringing your website idea to life.',
  setupPrice: '$99 down',
  monthlyPrice: '$79 per month',
  features: [
    'AI prompt-based website creation',
    'Responsive desktop and mobile design',
    'Premium visual direction',
    'Guided customization',
    'Straightforward monthly pricing',
  ],
  note: 'Final service details will be confirmed before billing begins.',
};
