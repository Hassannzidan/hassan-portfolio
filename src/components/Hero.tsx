import { Terminal, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { heroCommands, heroCopy } from "@/data/hero";

const Hero = () => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentCommand = heroCommands[currentCommandIndex];
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
        setDisplayedText("");
        setCurrentCommandIndex((prev) => (prev + 1) % heroCommands.length);
        setIsTyping(true);
      }, 500);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentCommandIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-start gap-2 px-6 py-4 mb-8 bg-card/50 border border-border rounded-lg backdrop-blur-sm font-mono text-sm min-h-[3rem] w-full max-w-md">
          <Terminal className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
          <div className="text-left flex-1">
            <div className="text-muted-foreground mb-1">
              <span className="text-primary">{heroCopy.promptLabel}</span>:~$
            </div>
            <div className="text-foreground min-h-[1.25rem]">
              {displayedText}
              <span className="animate-pulse text-primary">|</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="text-foreground">{heroCopy.headlineLead}</span>
          <span className="text-primary font-mono text-shadow-glow">
            {heroCopy.headlineName}
          </span>
        </h1>

        <div
          className="mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4">
            {heroCopy.tagline}
          </p>
        </div>

        <p
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {heroCopy.bio}
          <br/>
          <br/>
          {heroCopy.bioClosing}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono px-8 py-3 border-glow transition-all duration-300 hover:scale-105"
          >
            {heroCopy.ctaPrimary}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/20 hover:border-primary/40 hover:bg-primary/10 font-mono px-8 py-3 transition-all duration-300"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {heroCopy.ctaSecondary}
          </Button>
        </div>

        <div className="absolute -bottom-2 md:bottom-1 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
