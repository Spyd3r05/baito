//define shared types
export interface Opportunity {
  id: number;
  title: string;
  company: string;
  domain: string;
  location: string;
  time?: string;
  tags: string[];
  isNew: boolean;
  link: string;
}

export interface MyComponentProps {
  initialOpportunities: Opportunity[];
}
