export interface LinkType {
  link: string;
  name: string;
}

export interface JobOfferType {
  user: string;
  title: string;
  description: string;
  requirements: string[];
  requireCount: number;
  onSite: boolean;
  location: string | null;
  salary: number;
  allowance: string[];
  deadline: Date;
  contact: LinkType[];
  created: Date;
}

export interface JobApplicationType {
  user: string;
  title: string;
  description: string;
  cv: string;
  links: LinkType[];
}
