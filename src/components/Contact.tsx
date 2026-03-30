
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { contactSection, contactSocialLinks } from '@/data/contact';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-mono mb-8">
          <span className="text-primary">{contactSection.sectionNumber}</span> {contactSection.title}
        </h2>
        
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          {contactSection.intro}
        </p>
        
        <Card className="bg-card/50 border-border mb-12 hover:border-primary/20 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{contactSection.cardTitle}</h3>
                <p className="text-muted-foreground text-sm">{contactSection.cardSubtitle}</p>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono px-8 py-3 border-glow transition-all duration-300 hover:scale-105"
              onClick={() => window.open(contactSection.mailtoHref, '_blank')}
            >
              {contactSection.ctaLabel}
            </Button>
          </CardContent>
        </Card>
        
        <div className="flex justify-center gap-6">
          {contactSocialLinks.map((link) => (
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
