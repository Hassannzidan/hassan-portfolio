import type { ProjectItem } from "./types";

export const projectsSection = {
  sectionNumber: "02.",
  title: "Featured Projects",
} as const;

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Temsah Caravan",
    description:
      "A comprehensive project management application built with the MERN stack. Features real-time collaboration, task tracking, and team management.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    image: "/assets/images/caravan.png",
    github: "https://github.com/Hassannzidan/eltemsah-caravan",
    demo: "https://eltemsah-caravan.vercel.app/",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with user authentication, payment integration, and admin dashboard. Built with modern React patterns.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    image: "/assets/images/evenza.png",
    github: "https://github.com",
    demo: "https://evenza-app.netlify.app/",
  },
  {
    id: 3,
    title: "Fawry E-Commerce (Java Swing)",
    description:
      "A simple Java-based e-commerce system developed as part of the Fawry Rise Journey Challenge.",
    tech: ["Java", "NetBeans IDE", "Java Swing (UI)"],
    image: "/assets/images/Fawry-Logo.png",
    github: "https://github.com/Hassannzidan/fawry-ecommerce-java",
    demo: "NO DEMO FOR THIS REPO",
  },
  {
    id: 4,
    title: "E-commerce Landing Page (Shopify)",
    description:
      "A fully custom E-commerce Shopify landing page designed with complete flexibility for store owners ",
    tech: ["Liquid", "Java script", "HTML5", "CSS"],
    image: "/assets/images/shopify.png",
    github: "https://github.com/Hassannzidan/Hassan-Mohamed",
    demo: "NO DEMO FOR THIS RE",
  },
  {
    id: 5,
    title: "Task Manager Mobile App",
    description:
      "A modern, feature-rich task management application built with React Native and Expo.",
    tech: ["Node.js", "Expo CLI", "React Native", "CSS"],
    image: "/assets/images/application-preview.png",
    github: "https://github.com/Hassannzidan/Task-Manager",
    demo: "https://www.figma.com/proto/MrOoIbkPFLE5lnRZwSGmlp/Task-Manager-Mobile-Application?node-id=1-3&t=EsQTE8HMng0S2jAR-1&utm_source=chatgpt.com",
  },
];
