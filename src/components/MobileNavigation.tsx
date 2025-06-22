import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

interface MobileNavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  activeSection,
  scrollToSection,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavigationClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-card border-l border-border">
          <nav className="flex flex-col gap-4 pt-10">
            {['Accueil', 'À propos', 'Technologies', 'Projets', 'Contact'].map((item, index) => {
              const sectionId = ['hero', 'about', 'technologies', 'projects', 'contact'][index];
              return (
                <motion.button
                  key={item}
                  onClick={() => handleNavigationClick(sectionId)}
                  className={`text-lg font-medium text-left py-2 px-4 rounded-md transition-colors ${
                    activeSection === sectionId
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.button>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};