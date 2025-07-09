
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/hassanzidan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/hassanzidan', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/hassanzidan', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-8">
          <span className="text-primary">03.</span> Get In Touch
        </h2>
        
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
          Feel free to reach out if you'd like to work together or have any questions.
        </p>
        
        <Card className="bg-card/50 border-border mb-12 hover:border-primary/20 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Let's talk</h3>
                <p className="text-muted-foreground text-sm">Drop me a line anytime</p>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono px-8 py-3 border-glow transition-all duration-300 hover:scale-105"
              onClick={() => window.open('mailto:hassan@example.com', '_blank')}
            >
              Say Hello
            </Button>
          </CardContent>
        </Card>
        
        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              size="icon"
              className="w-12 h-12 border-border hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              onClick={() => window.open(link.href, '_blank')}
            >
              <link.icon className="w-5 h-5" />
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
