import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { technologies, Technology } from '../data/projects';

interface TechnologyCarouselProps {
  category: string;
}

export const TechnologyCarousel = ({ category }: TechnologyCarouselProps) => {
  const filteredTechnologies = technologies.filter(tech => tech.category === category);

  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: true,
  }, [Autoplay({ delay: 2000, stopOnInteraction: false })]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex touch-pan-y">
        {filteredTechnologies.map((tech: Technology, index: number) => (
          <motion.div
            key={tech.name}
            className="flex-none min-w-[120px] mx-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="hover-glow transition-all duration-300 hover:scale-105 glass-effect">
              <CardContent className="p-4 text-center">
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h3 className="font-semibold text-sm mb-1">{tech.name}</h3>
                <Badge variant="secondary" className="text-xs">
                  {tech.category}
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};