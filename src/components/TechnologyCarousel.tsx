import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { technologies, Technology } from '../data/projects';

interface TechnologyCarouselProps {
  category: Technology['category'];
}

export const TechnologyCarousel: React.FC<TechnologyCarouselProps> = ({ category }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  const filteredTechnologies = technologies.filter(tech => tech.category === category);

  if (filteredTechnologies.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-4 text-center gradient-text">{category}</h3>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {filteredTechnologies.map((tech, index) => (
            <div className="embla__slide flex-[0_0_33%] min-w-0 px-2" key={tech.id}>
              <motion.div
                className="h-full"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <Card className="hover-glow h-full flex flex-col justify-between">
                  <CardContent className="p-6 text-center flex-grow flex flex-col items-center justify-center">
                    <div className="text-4xl mb-3">{tech.icon}</div>
                    <h4 className="font-semibold text-lg mb-2">{tech.name}</h4>
                    <Badge variant="secondary" className="text-xs">
                      {tech.category}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};