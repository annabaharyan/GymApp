import type { ReactNode } from 'react';

export interface BenefitType {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
