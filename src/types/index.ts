export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
};

export type SkillGroup = {
  category: string;
  items: string[];
};
