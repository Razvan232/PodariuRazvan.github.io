import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionHeading from './section-heading';
import { Code, Cpu, Network, Users, Puzzle, Handshake } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Code className="h-6 w-6 text-primary" />,
    skills: ['Node.js', 'React', 'Java', 'Python', 'SQL', 'HTML5', 'CSS3', 'SASS', 'JavaScript', 'C++', 'C', 'Bash'],
  },
  {
    title: 'Embedded Systems & Electronics',
    icon: <Cpu className="h-6 w-6 text-primary" />,
    skills: ['Microcontroller Programming', 'Circuit Design', 'Hardware Assembly', 'Electronics Fundamentals'],
  },
  {
    title: 'Networking & IT Support',
    icon: <Network className="h-6 w-6 text-primary" />,
    skills: ['Server Management', 'Network Management', 'VoIP', 'IT Support'],
  },
];

const softSkills = [
    { name: 'Problem-solving', icon: Puzzle },
    { name: 'Communication', icon: Users },
    { name: 'Teamwork', icon: Handshake },
    { name: 'Adaptability', icon: Puzzle },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <SectionHeading>Technical Skills</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center space-x-4">
                {category.icon}
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Soft Skills</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {softSkills.map((skill) => (
              <Card key={skill.name} className="flex flex-col items-center justify-center p-6 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                <skill.icon className="h-8 w-8 text-primary" />
                <p className="mt-4 font-semibold text-center">{skill.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;