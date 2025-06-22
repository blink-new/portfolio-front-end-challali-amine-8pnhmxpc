import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { technologies, Technology } from '../data/projects';

interface FloatingTechnologiesProps {
  category: string;
}

export const FloatingTechnologies = ({ category }: FloatingTechnologiesProps) => {
  const filteredTechnologies = technologies.filter(tech => tech.category === category);

  const floatingAnimation = {
    initial: { opacity: 0, y: 50, scale: 0.8 },
    animate: (index: number) => ({
      opacity: 1,
      y: [0, -20, 0],
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.5,
        }
      }
    }),
    whileHover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="mb-12">
      <motion.h3 
        className="text-xl font-semibold mb-6 text-center gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {category}
      </motion.h3>
      <div className="flex flex-wrap justify-center gap-4">
        {filteredTechnologies.map((tech: Technology, index: number) => (
          <motion.div
            key={tech.name}
            custom={index}
            initial="initial"
            whileInView="animate"
            whileHover="whileHover"
            viewport={{ once: true }}
            variants={floatingAnimation}
            className="relative"
          >
            <Card className="hover-glow transition-all duration-300 glass-effect border-red-500/20 hover:border-red-500/40">
              <CardContent className="p-4 text-center min-w-[120px]">
                <motion.div 
                  className="text-4xl mb-3"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {tech.icon}
                </motion.div>
                <h4 className="font-semibold text-sm mb-2 text-foreground">{tech.name}</h4>
                <Badge variant="secondary" className="text-xs bg-red-500/10 text-red-400 border-red-500/20">
                  {tech.category}
                </Badge>
              </CardContent>
            </Card>
            
            {/* Floating particles */}
            <motion.div
              className="absolute -top-2 -right-2 w-2 h-2 bg-red-500/60 rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.4,
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};