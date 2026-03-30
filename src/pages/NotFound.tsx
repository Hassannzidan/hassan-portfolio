import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { notFoundCopy } from "@/data/notFound";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background flex items-center justify-center px-6 py-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,hsl(var(--primary)/0.18),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_70%,hsl(var(--primary)/0.09),transparent_45%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:56px_56px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-md text-center animate-fade-in-up">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary mb-6">
          {notFoundCopy.eyebrow}
        </p>
        <h1 className="font-mono text-7xl sm:text-8xl font-bold tracking-tight text-foreground text-shadow-glow leading-none mb-6">
          {notFoundCopy.title}
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          {notFoundCopy.description}
        </p>
        <Button asChild size="lg" className="border-glow shadow-lg shadow-primary/10">
          <Link to="/">{notFoundCopy.homeCta}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
