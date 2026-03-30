import { Code, Database, Server, Smartphone } from "lucide-react";
import type { LearningGoal } from "./types";

export const aboutSection = {
  title: "About Me",
  sectionNumber: "01.",
  stackHeading: "Current Tech Stack",
  stackComment: "//",
  goalsHeading: "Learning Goals",
  goalsComment: "//",
  codeBlockTitle: "About Hassan Zidan",
} as const;

export const aboutBio = {
  introLines: [
    "I'm a passionate fullstack developer with a strong foundation in the MERN stack.",
    "I enjoy turning complex problems into simple, beautiful solutions that provide",
    "great user experiences.",
  ],
  currentlyLearningLines: [
    "Currently, I'm expanding my skillset by diving deep into Java development,",
    "object-oriented programming principles, and design patterns. I believe in",
    "continuous learning and staying updated with the latest technologies and best practices.",
  ],
  whenNotCodingLines: [
    "When I'm not coding, you'll find me exploring new technologies,",
    "contributing to open-source projects, or sharing my knowledge with",
    "the developer community.",
  ],
  footerComment: "// Always learning, always growing 🚀",
} as const;

export const aboutCurrentStack = [
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "HTML/CSS",
  "Git",
];

export const aboutLearningGoals: LearningGoal[] = [
  {
    icon: Code,
    title: "Java Development",
    description:
      "Mastering Java fundamentals and enterprise patterns",
  },
  {
    icon: Database,
    title: "Design Patterns",
    description:
      "Implementing OOP principles and architectural patterns",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      "Building scalable and maintainable server solutions",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Exploring React Native and mobile-first approaches",
  },
];
