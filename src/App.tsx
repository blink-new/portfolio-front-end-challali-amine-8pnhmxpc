import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code2, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { MobileNavigation } from "./components/MobileNavigation";
import { TechnologyCarousel } from "./components/TechnologyCarousel";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectModal } from "./components/ProjectModal";
import { academicProjects, personalProjects, Project } from "./data/projects";

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'technologies', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-xl font-bold gradient-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Challali Amine
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Accueil', 'À propos', 'Technologies', 'Projets', 'Contact'].map((item, index) => {
                const sectionId = ['hero', 'about', 'technologies', 'projects', 'contact'][index];
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`text-sm transition-colors ${
                      activeSection === sectionId ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {/* Mobile Navigation */}
            <MobileNavigation
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/5" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Bonjour, je suis{' '}
              <span className="gradient-text">Challali Amine</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Un développeur front-end de 25 ans titulaire d'un BAC+2 en Développement Web côté Front End. 
              Passionné par le développement web, j'aime concevoir des interfaces intuitives, esthétiques et performantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="hover-glow"
                onClick={() => scrollToSection('projects')}
              >
                <Code2 className="mr-2 h-5 w-5" />
                Voir mes projets
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Me contacter
              </Button>
            </div>
          </motion.div>
          
          {/* Animated Arrow */}
          <motion.button
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="max-w-4xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              À propos de <span className="gradient-text">moi</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Passionné par le développement web depuis plusieurs années, je me spécialise dans la création 
                  d'interfaces utilisateur modernes et performantes. Mon parcours m'a permis d'acquérir une 
                  solide expertise en développement front-end.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  J'aime relever des défis techniques et créer des expériences utilisateur exceptionnelles 
                  qui répondent aux besoins réels des utilisateurs.
                </p>
              </motion.div>
              <motion.div 
                className="glass-effect p-6 rounded-lg border border-red-500/20"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">Formation</h3>
                <p className="text-muted-foreground">
                  <strong>BAC+2 en Développement Web côté Front End</strong><br />
                  Spécialisé dans les technologies modernes du web
                </p>
                <motion.div
                  className="mt-4 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 1 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/5" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Technologies <span className="gradient-text">Maîtrisées</span>
            </h2>
            <div className="space-y-8">
              <TechnologyCarousel category="Frontend" />
              <TechnologyCarousel category="Backend" />
              <TechnologyCarousel category="Database" />
              <TechnologyCarousel category="Design" />
              <TechnologyCarousel category="Cloud" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Mes <span className="gradient-text">Projets</span>
            </h2>
            
            {/* Academic Projects */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-8 text-center">Projets Scolaires</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {academicProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={handleViewProject}
                  />
                ))}
              </div>
            </div>

            {/* Personal Projects */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Projets Personnels</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {personalProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={handleViewProject}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Me <span className="gradient-text">Contacter</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Travaillons ensemble</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Vous recherchez un développeur front-end motivé et compétent ? Contactez-moi à{' '}
                  <a href="mailto:aminechallali@hotmail.fr" className="text-primary hover:underline">
                    aminechallali@hotmail.fr
                  </a>
                  . Je serais ravi de discuter de vos projets et de collaborer pour créer quelque chose d'unique !
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle>Envoyez-moi un message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Votre nom" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Votre email" />
                    </div>
                    <div>
                      <Input placeholder="Sujet" />
                    </div>
                    <div>
                      <Textarea placeholder="Votre message" rows={5} />
                    </div>
                    <Button className="w-full hover-glow">
                      <Mail className="mr-2 h-4 w-4" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            &copy; 2024 Challali Amine. Tous droits réservés.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;