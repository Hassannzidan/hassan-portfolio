
import { footerCopy } from '@/data/footer';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground text-sm font-mono">
          {footerCopy.line1}
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          {footerCopy.line2}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
