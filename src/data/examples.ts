export interface ExampleConcept {
  name: string;
  category: string;
  description: string;
  accent: 'green' | 'orange' | 'yellow' | 'lime';
}

export const examples: ExampleConcept[] = [
  {
    name: 'Northline Home Services',
    category: 'Home Services',
    description: 'Clean, dependable, and designed around simple service requests.',
    accent: 'green',
  },
  {
    name: 'Ember & Grain',
    category: 'Restaurant',
    description: 'Warm, inviting, and structured around the menu and reservation experience.',
    accent: 'orange',
  },
  {
    name: 'ClarityFlow',
    category: 'SaaS',
    description: 'Focused product messaging with a clear path from interest to signup.',
    accent: 'lime',
  },
  {
    name: 'Frame & Field',
    category: 'Creative Portfolio',
    description: 'Editorial presentation with space for work, process, and personality.',
    accent: 'yellow',
  },
];
