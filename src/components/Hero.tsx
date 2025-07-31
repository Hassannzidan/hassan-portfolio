
import { Terminal, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const commands = [
    'npm install dreams --save',
    'git commit -m "First job soon"',
    'java -jar my-journey.jar',
    'mongo.connect("career")',
    'System.out.println("Keep shipping.")',
    'const me = new Developer("Hassan")',
    'cd /experience/frontend/react',
    'code .',
    'echo "I turn ideas into UI"',
    'export PATH="$SELF_LEARNING/bin:$PATH"'
  ];

  useEffect(() => {
    const currentCommand = commands[currentCommandIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < currentCommand.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentCommand.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2500);
      }
    } else {
      timeoutId = setTimeout(() => {
        setDisplayedText('');
        setCurrentCommandIndex((prev) => (prev + 1) % commands.length);
        setIsTyping(true);
      }, 500);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentCommandIndex, commands]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-start gap-2 px-6 py-4 mb-8 bg-card/50 border border-border rounded-lg backdrop-blur-sm font-mono text-sm min-h-[3rem] w-full max-w-md">
          <Terminal className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <div className="text-left flex-1">
            <div className="text-muted-foreground mb-1">
              <span className="text-primary">hassan@portfolio</span>:~$
            </div>
            <div className="text-foreground min-h-[1.25rem]">
              {displayedText}
              <span className="animate-pulse text-primary">|</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-primary font-mono text-shadow-glow">Hassan</span>
        </h1>
        
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4">
            I build fullstack web apps.
          </p>
        </div>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          I'm a fullstack developer specializing in the MEARN stack, currently expanding my expertise into Java, OOP, and design patterns. I love creating efficient, scalable solutions that solve real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={scrollToAbout}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono px-8 py-3 border-glow transition-all duration-300 hover:scale-105"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 hover:border-primary/40 hover:bg-primary/10 font-mono px-8 py-3 transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Say Hello
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
