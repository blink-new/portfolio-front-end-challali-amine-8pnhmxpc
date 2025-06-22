export const technologies = [
  { id: 'html', name: 'HTML', icon: '🌐', category: 'Frontend' },
  { id: 'css', name: 'CSS', icon: '🎨', category: 'Frontend' },
  { id: 'javascript', name: 'JavaScript', icon: '📱', category: 'Frontend' },
  { id: 'react', name: 'React.js', icon: '⚛️', category: 'Frontend' },
  { id: 'sass', name: 'SASS', icon: '💄', category: 'Frontend' },
  { id: 'express', name: 'Express.js', icon: '🚀', category: 'Backend' },
  { id: 'node', name: 'Node.js', icon: '🟢', category: 'Backend' },
  { id: 'mongodb', name: 'MongoDB', icon: '🍃', category: 'Database' },
  { id: 'figma', name: 'Figma', icon: '🎯', category: 'Design' },
  { id: 'aws-s3', name: 'AWS S3', icon: '☁️', category: 'Cloud' },
  { id: 'cloudfront', name: 'CloudFront', icon: '⚡', category: 'Cloud' },
];

export const academicProjects = [
  {
    id: 'booki',
    title: 'Intégration maquette Figma - Booki',
    description: 'Intégration d\'une maquette Figma en page responsive pour un site d\'hébergement.',
    longDescription: 'Ce projet consistait à transformer une maquette Figma en une page web entièrement responsive pour un site d\'hébergement. L\'objectif était de reproduire fidèlement le design tout en assurant une compatibilité parfaite avec différentes tailles d\'écran, du mobile au desktop.',
    tech: ['html', 'css'],
    result: 'Interface fidèle à la maquette, adaptée à tous les écrans.',
    image: 'https://via.placeholder.com/400x250/FF0000/FFFFFF?text=Booki',
    images: [
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=Booki+1',
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=Booki+2',
    ],
    link: '#',
  },
  {
    id: 'sass-dynamic',
    title: 'Dynamisation avec SASS',
    description: 'Dynamisation d\'une page web avec approche mobile-first et animations.',
    longDescription: 'J\'ai dynamisé une page web en utilisant SASS (SCSS) avec une approche mobile-first. Le projet a mis l\'accent sur l\'intégration d\'animations fluides pour améliorer l\'expérience utilisateur et rendre la page plus interactive et agréable à naviguer.',
    tech: ['sass', 'css'],
    result: 'Page fluide et interactive, optimisée pour les mobiles.',
    image: 'https://via.placeholder.com/400x250/FF0000/FFFFFF?text=SASS',
    images: [
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=SASS+1',
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=SASS+2',
    ],
    link: '#',
  },
  {
    id: 'seo-optimization',
    title: 'Optimisation SEO',
    description: 'Amélioration du référencement avec remplacement d\'images par HTML et ajustement des couleurs.',
    longDescription: 'Ce projet visait à améliorer le référencement naturel (SEO) d\'un site web existant. J\'ai remplacé les textes intégrés dans des images par des balises HTML sémantiques et ajusté les contrastes de couleurs pour une meilleure lisibilité et accessibilité, ce qui a conduit à un meilleur score SEO et une meilleure indexation par Google.',
    tech: ['html', 'css'],
    result: 'Meilleur score SEO et indexation optimisée par Google.',
    image: 'https://via.placeholder.com/400x250/FF0000/FFFFFF?text=SEO',
    images: [
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=SEO+1',
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=SEO+2',
    ],
    link: '#',
  },
  {
    id: 'api-ecommerce',
    title: 'Interaction API - Site de vente',
    description: 'Gestion d\'API pour site de vente de canapés avec panier localStorage.',
    longDescription: 'J\'ai développé les fonctionnalités d\'interaction avec une API pour un site de vente de canapés. Cela incluait la gestion des requêtes GET pour afficher les produits, des requêtes POST pour les commandes, la gestion d\'un panier persistant via localStorage, et l\'utilisation d\'URLSearchParams pour analyser les URLs et récupérer les informations de commande.',
    tech: ['javascript'],
    result: 'Expérience d\'achat fluide et fonctionnelle.',
    image: 'https://via.placeholder.com/400x250/FF0000/FFFFFF?text=API+Ecommerce',
    images: [
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=API+Ecommerce+1',
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=API+Ecommerce+2',
    ],
    link: '#',
  },
  {
    id: 'api-sauces',
    title: 'Création API - Site de sauces',
    description: 'Construction d\'une API sécurisée pour partage de sauces avec likes/dislikes.',
    longDescription: 'J\'ai conçu et implémenté une API RESTful sécurisée en utilisant Node.js, Express.js et MongoDB pour un site de partage de sauces. Les utilisateurs pouvaient créer, lire, mettre à jour et supprimer leurs propres sauces, ainsi qu\'interagir avec les sauces des autres via un système de likes et dislikes. La sécurité des données et des opérations était une priorité.',
    tech: ['node', 'express', 'mongodb'],
    result: 'Back-end robuste avec opérations CRUD sécurisées.',
    image: 'https://via.placeholder.com/400x250/FF0000/FFFFFF?text=API+Sauces',
    images: [
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=API+Sauces+1',
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=API+Sauces+2',
    ],
    link: '#',
  },
  {
    id: 'react-rental',
    title: 'Front-end React - Site de location',
    description: 'Développement front-end pour site de location avec carrousel et sections déroulantes.',
    longDescription: 'J\'ai développé l\'intégralité du front-end d\'un site de location d\'appartements en utilisant React.js. Le projet comprenait l\'affichage dynamique de cartes d\'appartements liées à une API, des pages détaillées pour chaque bien avec un carrousel de photos, des tags, des informations de localisation, et des sections déroulantes pour les descriptions et équipements.',
    tech: ['react'],
    result: 'Interface moderne et réactive pour les utilisateurs.',
    image: 'https://via.placeholder.com/400x250/FF0000/FFFFFF?text=React+Rental',
    images: [
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=React+Rental+1',
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=React+Rental+2',
    ],
    link: '#',
  },
];

export const personalProjects = [
  {
    id: 'netflix-clone',
    title: 'Site type Netflix',
    description: 'Site inspiré de Netflix pour classer des sites par catégories avec cartes dynamiques.',
    longDescription: 'J\'ai créé un site web inspiré de l\'interface de Netflix pour organiser et classer différents sites web par catégories (streaming, anime, sport, IA, etc.). Le site utilise des cartes dynamiques et responsives pour afficher les contenus, et est hébergé sur AWS S3 et CloudFront pour des performances optimales.',
    tech: ['react', 'vite', 'typescript', 'aws-s3', 'cloudfront'],
    result: 'Site performant hébergé dans le cloud avec gestion efficace des données.',
    image: 'https://via.placeholder.com/400x250/FF0000/FFFFFF?text=Netflix+Clone',
    images: [
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=Netflix+Clone+1',
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=Netflix+Clone+2',
    ],
    link: '#',
  },
  {
    id: 'pc-guide',
    title: 'Guide d\'achat PC',
    description: 'Site proposant des configurations PC pour différents budgets avec benchmarks FPS.',
    longDescription: 'J\'ai développé un site web complet proposant des configurations de PC pour différents budgets, allant de 800€ à 5000€. Chaque configuration est détaillée avec la liste des composants, des benchmarks de FPS pour différents jeux et résolutions cibles. Le site est conçu pour être un outil pratique et bien structuré pour les passionnés de hardware.',
    tech: ['react', 'vite', 'typescript'],
    result: 'Outil pratique et bien structuré pour les passionnés de hardware.',
    image: 'https://via.placeholder.com/400x250/FF0000/FFFFFF?text=PC+Guide',
    images: [
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=PC+Guide+1',
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=PC+Guide+2',
    ],
    link: '#',
  },
  {
    id: 'repair-company',
    title: 'Site entreprise dépannage',
    description: 'Site complet avec pages services, tarifs, contact et mentions légales.',
    longDescription: 'J\'ai conçu et développé un site web professionnel clé en main pour une entreprise de dépannage. Le site comprend des pages dédiées aux services, aux tarifs, un formulaire de contact et les mentions légales. J\'ai également géré l\'optimisation SEO, l\'intégration d\'une maquette Figma, l\'hébergement sur GitHub Pages et la configuration du nom de domaine pour une présence en ligne complète.',
    tech: ['html', 'css', 'javascript', 'figma'],
    result: 'Site professionnel clé en main, optimisé et publié.',
    image: 'https://via.placeholder.com/400x250/FF0000/FFFFFF?text=Repair+Company',
    images: [
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=Repair+Company+1',
      'https://via.placeholder.com/800x500/FF0000/FFFFFF?text=Repair+Company+2',
    ],
    link: '#',
  },
];

export const allProjects = [...academicProjects, ...personalProjects];

export type Technology = {
  id: string;
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Design' | 'Cloud';
};

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  result: string;
  image: string;
  images: string[];
  link: string;
};