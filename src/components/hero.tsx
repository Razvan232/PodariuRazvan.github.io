import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e44,transparent)]"></div>
      </div>
      <div className="container mx-auto px-4 z-10 animate-in fade-in-0 slide-in-from-top-12 duration-1000">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block">PODARIU RĂZVAN</span>
          <span className="block text-primary">Software Engineer | AI & Web Development</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-xl text-muted-foreground sm:max-w-xl md:max-w-2xl">
          Crafting beautiful and functional web experiences. Turning complex problems into elegant digital solutions.
        </p>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#projects">
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
