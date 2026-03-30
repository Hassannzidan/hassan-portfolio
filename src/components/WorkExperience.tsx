
import { useState } from 'react';
import { ChevronDown, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { workExperiences, workExperienceSection } from '@/data/workExperience';

const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  const toggleMobileExpansion = (index: number) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-12 text-center">
          <span className="text-primary">{workExperienceSection.sectionNumber}</span>{' '}
          {workExperienceSection.title}
        </h2>

        {/* Mobile Layout - Collapsible Cards */}
        <div className="md:hidden space-y-4">
          {workExperiences.map((exp, index) => (
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
            {workExperiences.map((exp, index) => (
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
                    {workExperiences[activeTab].title}{' '}
                    <span className="text-primary">@ {workExperiences[activeTab].company}</span>
                  </h3>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {workExperiences[activeTab].period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {workExperiences[activeTab].location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {workExperiences[activeTab].description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start gap-3">
                      <span className="text-primary mt-1 text-sm">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {workExperiences[activeTab].technologies.map((tech) => (
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
