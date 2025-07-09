
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'TaskFlow Pro',
      description: 'A comprehensive project management application built with the MERN stack. Features real-time collaboration, task tracking, and team management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      image: '/placeholder.svg',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with user authentication, payment integration, and admin dashboard. Built with modern React patterns.',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '/placeholder.svg',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 3,
      title: 'Weather Analytics',
      description: 'Real-time weather dashboard with data visualization and location-based forecasts. Integrates multiple weather APIs.',
      tech: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      image: '/placeholder.svg',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'RESTful API for social media platform with user authentication, posts, comments, and real-time notifications.',
      tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'WebSocket'],
      image: '/placeholder.svg',
      github: 'https://github.com',
      demo: 'https://docs.com'
    }
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-primary font-mono text-2xl font-bold">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 font-mono">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  
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
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                      onClick={() => window.open(project.demo, '_blank')}
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
