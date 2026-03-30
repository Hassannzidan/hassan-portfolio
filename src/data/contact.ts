import { Github, Linkedin, Twitter } from "lucide-react";
import type { SocialLink } from "./types";

export const contactSection = {
  sectionNumber: "03.",
  title: "Get In Touch",
  intro:
    "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out if you'd like to work together or have any questions.",
  cardTitle: "Let's talk",
  cardSubtitle: "Drop me a line anytime",
  mailtoHref: "mailto:hassan@example.com",
  ctaLabel: "Say Hello",
} as const;

export const contactSocialLinks: SocialLink[] = [
  {
    icon: Github,
    href: "https://github.com/hassannzidan",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/hassanzidan",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/hassanzidan",
    label: "Twitter",
  },
];
