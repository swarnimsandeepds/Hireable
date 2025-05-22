
export interface Job {
  id: string;
  title: string;
  company: string;
  companyId: string;
  companyLogo: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  skills: string[];
  postedAt: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  tagline: string;
  description: string;
  location: string;
  size: string;
  industry: string;
  founded: string;
  website: string;
  values: string[];
  benefits: string[];
}
