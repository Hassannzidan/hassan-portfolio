
import { useState } from 'react';
import { ChevronDown, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'TechCorp Solutions',
      period: 'Jan 2023 - Present',
      location: 'Remote',
      description: [
        'Developed responsive web applications using React and TypeScript',
        'Collaborated with design teams to implement pixel-perfect UI components',
        'Optimized application performance resulting in 40% faster load times',
        'Mentored junior developers and conducted code reviews'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js']
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: 'Jun 2022 - Dec 2022',
      location: 'Cairo, Egypt',
      description: [
        'Built and maintained MERN stack applications from scratch',
        'Implemented RESTful APIs and database design with MongoDB',
        'Worked closely with product team to define feature requirements',
        'Deployed applications using Docker and AWS services'
      ],
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'AWS']
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Agency Co',
      period: 'Jan 2022 - May 2022',
      location: 'Cairo, Egypt',
      description: [
        'Developed client websites using modern web technologies',
        'Collaborated with designers to create responsive layouts',
        'Maintained and updated existing web applications',
        'Learned agile development methodologies and version control'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'WordPress', 'Git']
    }
  ];

  const toggleMobileExpansion = (index: number) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12 text-center">
          <span className="text-primary">02.</span> Work Experience
        </h2>

        {/* Mobile Layout - Collapsible Cards */}
        <div className="md:hidden space-y-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card/50 border-border hover:border-primary/20 transition-all duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleMobileExpansion(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-card/70 transition-colors duration-200"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{exp.title}</h3>
                    <p className="text-primary font-mono text-sm">{exp.company}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  {expandedMobile === index ? 
                    <ChevronDown className="w-5 h-5 text-primary" /> : 
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  }
                </button>
                
                {expandedMobile === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5 text-xs">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop Layout - Tab System */}
        <div className="hidden md:flex gap-8">
          {/* Tab Navigation */}
          <div className="flex flex-col">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left p-4 border-l-2 transition-all duration-300 hover:bg-card/30 ${
                  activeTab === index
                    ? 'border-primary bg-card/50 text-primary'
                    : 'border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="font-mono text-sm">{exp.company}</div>
                <div className="text-xs opacity-70">{exp.period}</div>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1">
            <Card className="bg-card/30 border-border min-h-[400px]">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {experiences[activeTab].title}{' '}
                    <span className="text-primary">@ {experiences[activeTab].company}</span>
                  </h3>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {experiences[activeTab].period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {experiences[activeTab].location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {experiences[activeTab].description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-3">
                      <span className="text-primary mt-1 text-sm">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {experiences[activeTab].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-primary/10 text-primary text-sm rounded-lg font-mono hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
