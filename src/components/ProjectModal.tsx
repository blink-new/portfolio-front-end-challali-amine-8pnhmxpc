import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import { Project, technologies } from '../data/projects';
import useEmblaCarousel from 'embla-carousel-react';
import { Badge } from './ui/badge';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  if (!project) return null;

  const getTechName = (id: string) => {
    const tech = technologies.find(t => t.id === id);
    return tech ? tech.name : id;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-card text-foreground border-border">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-primary">{project.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="relative w-full h-64 md:h-96 overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {project.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0 flex-grow-0"
              />
            ))}
          </div>
          {/* Add navigation arrows if desired */}
        </div>

        <div className="p-6 pt-4">
          <p className="text-muted-foreground mb-4 leading-relaxed">{project.longDescription}</p>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Technologies utilisées:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((techId) => (
                <Badge key={techId} variant="outline">
                  {getTechName(techId)}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Résultat:</h4>
            <p className="text-muted-foreground">{project.result}</p>
          </div>

          {project.link && (
            <Button asChild className="w-full hover-glow">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Voir le projet en ligne
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};