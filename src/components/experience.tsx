import { Briefcase, GraduationCap, Building, Microscope } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import SectionHeading from './section-heading';

const experienceData = [
  {
    type: 'education',
    title: 'Bachelor’s Degree in Systems Engineering',
    company: 'UTCN',
    date: '2021 - 2025',
    description: 'Focused on systems engineering principles and applications.',
    icon: <GraduationCap className="h-5 w-5 text-primary" />,
  },
  {
    type: 'job',
    title: 'IT Technician',
    company: 'Netrom Holding',
    date: '2023 - 2024',
    description: 'Managed servers, networks, VoIP services, and client support. Administered Linux systems (config, software deployment, security updates). Assembled/maintained servers and PCs. Configured VPNs, supported Office Suite.',
    icon: <Briefcase className="h-5 w-5 text-primary" />,
  },
  {
    type: 'research',
    title: 'Research Internship',
    company: 'Technical University of Cluj-Napoca',
    date: '2024',
    description: 'Developed deep learning pipeline for hepatic cancer classification using ResNet50. Preprocessed large datasets, applied data augmentation. Implemented multi-class classification with Roboflow. Collaborated with supervisors to optimize performance under constraints.',
    icon: <Microscope className="h-5 w-5 text-primary" />,
  },
  {
    type: 'education',
    title: 'Master\'s Degree in Cyber Physical Systems',
    company: 'UTCN',
    date: '2025 - 2027',
    description: 'Pursuing advanced studies in Cyber Physical Systems.',
    icon: <GraduationCap className="h-5 w-5 text-primary" />,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading>My Journey</SectionHeading>
        <div className="relative">
          <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div key={index} className="relative group">
                <div className="md:flex items-center">
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-2'}`}>
                    <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 animate-in fade-in-0 zoom-in-95" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}>
                      <CardHeader className="flex flex-row items-center space-x-4">
                        <div className="flex-shrink-0">{item.icon}</div>
                        <div>
                          <CardTitle>{item.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <Building className="h-4 w-4" />
                            <span>{item.company} &bull; {item.date}</span>
                          </CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? '' : 'md:order-1'}`}></div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="h-4 w-4 rounded-full bg-secondary border-2 border-primary group-hover:scale-125 transition-transform duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
