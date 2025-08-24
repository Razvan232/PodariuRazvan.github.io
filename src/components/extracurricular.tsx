import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import SectionHeading from './section-heading';
import { Badge } from './ui/badge';
import { Award, Code, Users, Handshake } from 'lucide-react';

const extracurricularData = [
  {
    title: 'ClujHackathon 2024 (AI for Elders)',
    description: 'Developed a YOLOv8 fall detection system with a real-time alert mechanism.',
    tech: ['Python', 'React'],
    icon: <Code className="h-6 w-6 text-primary" />,
  },
  {
    title: 'PoliHack 2024 (EdTech App)',
    description: 'Built an AI onboarding app using the ChatGPT API.',
    tech: ['Node.js', 'React', 'Python', 'HTML/CSS'],
    icon: <Code className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Cloudflight Coding Contest (2023–2024)',
    description: 'Participated in algorithmic challenges, primarily using JavaScript.',
    tech: ['JavaScript'],
    icon: <Award className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Volunteer, OSUT (2021–2024)',
    description: 'Organized events, provided student support, and engaged in outreach activities.',
    tech: [],
    icon: <Users className="h-6 w-6 text-primary" />,
  },
  {
    title: 'Tutor',
    description: 'Provided personalized tutoring sessions to students.',
    tech: [],
    icon: <Handshake className="h-6 w-6 text-primary" />,
  },
];

const Extracurricular = () => {
  return (
    <section id="extracurricular" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading>Extracurricular & Competitions</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extracurricularData.map((item, index) => (
            <Card key={index} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 animate-in fade-in-0 zoom-in-95" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}>
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                {item.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
