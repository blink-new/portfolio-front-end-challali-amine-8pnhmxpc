import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'center',
  }, [Autoplay({ delay: 3000 })]);

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
        <div className="relative w-full h-64 md:h-96 overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="flex-none w-full h-full object-cover"
              />
            ))}
          </div>
        </div>
        <div className="p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl font-bold gradient-text">{project.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {project.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Résultat:</h4>
            <p className="text-muted-foreground">{project.result}</p>
          </div>
          {project.link && (
            <div className="mt-6">
              <Button asChild className="w-full hover-glow">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Voir le projet en ligne
                </a>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
