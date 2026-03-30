import type { LucideIcon } from "lucide-react";

export type LearningGoal = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ProjectItem = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
};

export type WorkExperienceItem = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
};

export type SocialLink = {
  icon: LucideIcon;
  href: string;
  label: string;
};
