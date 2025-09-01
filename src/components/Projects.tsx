import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
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

  return (
    <section id="projects" className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-16 text-center">
          <span className="text-primary">02.</span> Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group bg-card/50 border-border hover:border-primary/20 transition-all duration-300 overflow-hidden hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-muted/20 to-muted/40 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-mono text-2xl font-bold">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                  </div> */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 font-mono">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
