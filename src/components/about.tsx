'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeading from './section-heading';
import { cn } from '@/lib/utils';

const About = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAvatarClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading>About Me</SectionHeading>
        <Card className="overflow-hidden shadow-lg border-2 border-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1 cursor-pointer" onClick={handleAvatarClick}>
              <Image
                src="https://placehold.co/600x600.png"
                alt="PODARIU RĂZVAN"
                width={600}
                height={600}
                className={cn(
                  'h-full w-full object-cover transition-transform duration-700 ease-in-out',
                  isAnimating ? 'animate-wobble' : ''
                )}
                data-ai-hint="portrait avatar"
              />
            </div>
            <div className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">A Passionate Developer on a Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg text-foreground/80">
                <p>
                  I enjoy finding ways to make things work efficiently and always look for improvements. My journey into code began with a fascination for building things that live on the internet, and it has since evolved into a full-fledged passion for creating elegant, efficient, and user-friendly digital experiences.
                </p>
                 <p>
                  I thrive on challenges and am constantly exploring new technologies to stay at the forefront of the industry. My focus is on full-stack development, with a particular love for React and its ecosystem. I believe in writing clean, maintainable code and collaborating closely with teams to turn ideas into reality.
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
