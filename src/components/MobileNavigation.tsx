import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

interface MobileNavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export const MobileNavigation = ({ scrollToSection }: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigationClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-card border-l border-border">
        <motion.nav
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col p-4 space-y-4"
        >
          <div className="flex justify-end">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>
          {['Accueil', 'À propos', 'Technologies', 'Projets', 'Contact'].map((item, index) => {
            const sectionId = ['hero', 'about', 'technologies', 'projects', 'contact'][index];
            return (
              <Button
                key={item}
                variant="ghost"
                className="w-full justify-start text-lg"
                onClick={() => handleNavigationClick(sectionId)}
              >
                {item}
              </Button>
            );
          })}
        </motion.nav>
      </SheetContent>
    </Sheet>
  );
};
