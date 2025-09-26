export type ExperienceType = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  companyUrl?: string;
  current?: boolean;
  type:
    | 'client'
    | 'personal'
    | 'freelance'
    | 'internship'
    | 'contract'
    | 'volunteer'
    | 'other';
};

export type EducationType = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
  institutionUrl?: string;
};

export type ProjectsType = {
  title: string;
  description: string;
  skills: string[];
  companyUrl?: string;
  previewUrl?: string;
  githubUrl?: string;
  lovedByDeveloper?: boolean;
};
