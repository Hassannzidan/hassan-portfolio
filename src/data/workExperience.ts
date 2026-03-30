import type { WorkExperienceItem } from "./types";

export const workExperienceSection = {
  sectionNumber: "02.",
  title: "Work Experience",
} as const;

export const workExperiences: WorkExperienceItem[] = [
  {
    title: "Programming Instructor",
    company: "iSchool",
    period: "Jan 2023 - Present",
    location: "Hybrid",
    description: [
      "Developed responsive web applications using React and TypeScript",
      "Collaborated with design teams to implement pixel-perfect UI components",
      "Optimized application performance resulting in 40% faster load times",
      "Mentored junior developers and conducted code reviews",
    ],
    technologies: ["Ai", "Python", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Full Stack Developer",
    company: "Information Technology Institute",
    period: "Jun 2022 - Dec 2022",
    location: "Cairo, Egypt",
    description: [
      "Built and maintained MERN stack applications from scratch",
      "Implemented RESTful APIs and database design with MongoDB",
      "Worked closely with product team to define feature requirements",
      "Deployed applications using Docker and AWS services",
    ],
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "AWS"],
  },
  {
    title: "Junior Web Developer",
    company: "Digital Agency Co",
    period: "Jan 2022 - May 2022",
    location: "Cairo, Egypt",
    description: [
      "Developed client websites using modern web technologies",
      "Collaborated with designers to create responsive layouts",
      "Maintained and updated existing web applications",
      "Learned agile development methodologies and version control",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Git"],
  },
];
