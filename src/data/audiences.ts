import type { LucideIcon } from 'lucide-react';
import { BriefcaseBusiness, Code2, Handshake, Lightbulb, PenTool } from 'lucide-react';

export interface AudienceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const audiences: AudienceItem[] = [
  {
    title: 'Small-business owners',
    description: 'Create a credible online presence without beginning with a traditional agency project.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Freelancers',
    description: 'Develop polished starting points for your own ideas and client work.',
    icon: PenTool,
  },
  {
    title: 'Agencies',
    description: 'Explore strong visual directions and early concepts more efficiently.',
    icon: Handshake,
  },
  {
    title: 'Developers',
    description: 'Create a clear design foundation before moving into custom development.',
    icon: Code2,
  },
  {
    title: 'Side-project creators',
    description: 'Turn an early idea into something tangible, presentable, and ready to share.',
    icon: Lightbulb,
  },
];
