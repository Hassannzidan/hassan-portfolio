
import { Card, CardContent } from '@/components/ui/card';
import {
  aboutSection,
  aboutBio,
  aboutCurrentStack,
  aboutLearningGoals,
} from '@/data/about';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-8 text-center">
            <span className="text-primary">{aboutSection.sectionNumber}</span> {aboutSection.title}
          </h2>
          
          {/* Code-styled Bio */}
          <div className="bg-card/30 border border-border rounded-lg p-6 mb-8 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4 text-muted-foreground">
              <span className="text-primary">/*</span>
              <span>{aboutSection.codeBlockTitle}</span>
              <span className="text-primary">*/</span>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div className="flex gap-2">
                <span className="text-red-400">const</span>
                <span className="text-blue-400">intro</span>
                <span className="text-white">=</span>
                <span className="text-green-400">`</span>
              </div>
              <div className="pl-4 text-green-400">
                {aboutBio.introLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < aboutBio.introLines.length - 1 && <br />}
                  </span>
                ))}
              </div>
              <div className="text-green-400">`;</div>
              
              <div className="pt-2 flex gap-2">
                <span className="text-red-400">const</span>
                <span className="text-blue-400">currentlyLearning</span>
                <span className="text-white">=</span>
                <span className="text-green-400">`</span>
              </div>
              <div className="pl-4 text-green-400">
                {aboutBio.currentlyLearningLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < aboutBio.currentlyLearningLines.length - 1 && <br />}
                  </span>
                ))}
              </div>
              <div className="text-green-400">`;</div>
              
              <div className="pt-2 flex gap-2">
                <span className="text-red-400">const</span>
                <span className="text-blue-400">whenNotCoding</span>
                <span className="text-white">=</span>
                <span className="text-green-400">`</span>
              </div>
              <div className="pl-4 text-green-400">
                {aboutBio.whenNotCodingLines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < aboutBio.whenNotCodingLines.length - 1 && <br />}
                  </span>
                ))}
              </div>
              <div className="text-green-400">`;</div>
              
              <div className="pt-4 text-purple-400">
                {aboutBio.footerComment}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold font-mono mb-8 text-center">
            <span className="text-primary">{aboutSection.stackComment}</span> {aboutSection.stackHeading}
          </h3>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {aboutCurrentStack.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card border border-border rounded-lg font-mono text-sm hover:border-primary/40 transition-all duration-300 hover:bg-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold font-mono mb-8 text-center">
            <span className="text-primary">{aboutSection.goalsComment}</span> {aboutSection.goalsHeading}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutLearningGoals.map((goal) => (
              <Card key={goal.title} className="bg-card/50 border-border hover:border-primary/20 transition-all duration-300 hover:bg-card/70">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <goal.icon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{goal.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
