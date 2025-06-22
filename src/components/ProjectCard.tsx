import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import { Project, technologies } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const getTechName = (id: string) => {
    const tech = technologies.find(t => t.id === id);
    return tech ? tech.name : id;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <Card 
        className="hover-glow h-full flex flex-col cursor-pointer"
        onClick={() => onClick(project)}
      >
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <CardHeader className="flex-grow">
          <CardTitle className="text-lg flex items-center justify-between">
            {project.title}
            {project.link && (
              <Button variant="ghost" size="sm" onClick={(e) => {
                e.stopPropagation();
                window.open(project.link, '_blank');
              }}>
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((techId) => (
              <Badge key={techId} variant="outline" className="text-xs">
                {getTechName(techId)}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};