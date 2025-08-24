'use client';

import { useState } from 'react';
import type { MouseEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SectionHeading from './section-heading';
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const projectsData = [
  {
    title: '3D Liver Segmentation on MRI (Bachelor Thesis)',
    description: 'Compared five 3D CNN architectures for liver segmentation. Included a preprocessing pipeline and data augmentation. Evaluated architecture-preprocessing combinations.',
    tags: ['Python', 'PyTorch', 'NumPy', 'Nibabel'],
    category: 'AI',
    images: ['/liver-segmentation-1.png', '/liver-segmentation-2.png', '/liver-segmentation-3.png'],
    github: 'https://github.com/Razvan232/ProiecteCV.git',
    live: '#',
    aiHint: 'medical imaging ai'
  },
  {
    title: 'Cabin Presentation Website',
    description: 'Multi-page website with galleries, a PHP-based contact form, and Google Maps API integration.',
    tags: ['JavaScript', 'PHP', 'CSS'],
    category: 'Web',
    images: ['/cabin-website-1.png', '/cabin-website-2.png'],
    github: 'https://github.com/Razvan232/ProiecteCV.git',
    live: 'http://cabanaroua.com',
    aiHint: 'cabin nature'
  },
  {
    title: 'Movie Review Website',
    description: 'Features user profiles, ratings, comments, genre filtering, and a search bar. Integrated with a SQL database and Axios for API calls.',
    tags: ['React', 'SQL', 'Axios', 'CSS', 'Movie API'],
    category: 'Web',
    images: ['/movie-review-1.png'],
    github: 'https://github.com/Razvan232/ProiecteCV.git',
    live: '#',
    aiHint: 'movie reviews'
  },
  {
    title: 'ClujHackathon 2024 (AI for Elders)',
    description: 'YOLOv8 fall detection with a real-time alert system.',
    tags: ['Python', 'React'],
    category: 'AI',
    images: ['/hackathon-ai-1.png'],
    github: 'https://github.com/Razvan232/ProiecteCV.git',
    live: '#',
    aiHint: 'hackathon ai'
  },
  {
    title: 'PoliHack 2024 (EdTech App)',
    description: 'AI onboarding app using the ChatGPT API.',
    tags: ['Node.js', 'React', 'Python', 'HTML/CSS'],
    category: 'AI',
    images: ['/edtech-app-1.png'],
    github: 'https://github.com/Razvan232/ProiecteCV.git',
    live: '#',
    aiHint: 'education technology'
  },
];

const filters = ['All', 'AI', 'Web'];

interface GalleryProps {
  images: string[];
  onClose: () => void;
  onPrev: (e: MouseEvent) => void;
  onNext: (e: MouseEvent) => void;
  currentIndex: number;
}

const Gallery = ({ images, onClose, onPrev, onNext, currentIndex }: GalleryProps) => (
  <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center animate-in fade-in-0" onClick={onClose}>
    <div className="relative bg-background p-4 rounded-lg max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
      <Button variant="ghost" size="icon" className="absolute -top-12 right-0 text-white" onClick={onClose} aria-label="Close gallery">
        <X />
      </Button>
      <div className="relative w-full h-full">
         <Image
            src={images[currentIndex]}
            alt={`Project image ${currentIndex + 1}`}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[80vh] object-contain rounded-md"
        />
      </div>
      {images.length > 1 && (
        <>
            <Button variant="outline" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2" onClick={onPrev} aria-label="Previous image">
                <ChevronLeft />
            </Button>
            <Button variant="outline" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2" onClick={onNext} aria-label="Next image">
                <ChevronRight />
            </Button>
        </>
      )}
    </div>
  </div>
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (images: string[], index: number) => {
    setGalleryImages(images);
    setCurrentImageIndex(index);
  };

  const closeGallery = () => {
    setGalleryImages([]);
  };

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading>Projects</SectionHeading>
        <div className="flex justify-center space-x-2 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 animate-in fade-in-0 zoom-in-95" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="cursor-pointer" onClick={() => openGallery(project.images, 0)}>
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={project.aiHint}
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2">
                <Button asChild variant="outline" size="sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                {project.live !== '#' && <Button asChild size="sm">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      {galleryImages.length > 0 && (
        <Gallery images={galleryImages} currentIndex={currentImageIndex} onClose={closeGallery} onPrev={prevImage} onNext={nextImage} />
      )}
    </section>
  );
};

export default Projects;
