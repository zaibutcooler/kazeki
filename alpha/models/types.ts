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
  cv: string; //file type
  links: LinkType[]; //
  created: Date;
}

export interface FreelanceOfferType {
  user: string;
  title: string;
  detail: string;
  requirements: string[];
  responsibilities: string[];
  salaryFrom: number; //From 0 $
  salaryTo: number; // To 0 $
  field: string[]; //web /software/ programming/ video-editing/ copy-writing
  timeRange: string; // 1 day/2day /3 days/ 1 week/ 1 month/
  contact: LinkType[];
  formClose: string; // 1 day/2day /3 days/ 1 week/ 1 month/
}

export interface FreelanceApplicationType {
  user: string;
  title: string;
  description: string;
  cv: string; //file type
  negoSalary: number; //
  links: LinkType[]; //
  created: Date;
}
