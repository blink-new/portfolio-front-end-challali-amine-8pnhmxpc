export const technologies = [
  { name: 'HTML', icon: '🌐', category: 'Frontend' },
  { name: 'CSS', icon: '🎨', category: 'Frontend' },
  { name: 'JavaScript', icon: '📱', category: 'Frontend' },
  { name: 'React.js', icon: '⚛️', category: 'Frontend' },
  { name: 'SASS', icon: '💄', category: 'Frontend' },
  { name: 'Express.js', icon: '🚀', category: 'Backend' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'Figma', icon: '🎯', category: 'Design' },
  { name: 'AWS S3', icon: '☁️', category: 'Cloud' },
  { name: 'CloudFront', icon: '⚡', category: 'Cloud' },
];

export const academicProjects = [
  {
    id: 'booki',
    title: 'Intégration maquette Figma - Booki',
    description: 'Intégration d\'une maquette Figma en page responsive pour un site d\'hébergement.',
    tech: ['HTML', 'CSS'],
    result: 'Interface fidèle à la maquette, adaptée à tous les écrans.',
    images: [
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=Booki+Image+1',
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=Booki+Image+2',
    ],
    link: '#',
  },
  {
    id: 'sass-dynamisation',
    title: 'Dynamisation avec SASS',
    description: 'Dynamisation d\'une page web avec approche mobile-first et animations.',
    tech: ['SASS', 'SCSS'],
    result: 'Page fluide et interactive, optimisée pour les mobiles.',
    images: [
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=SASS+Image+1',
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=SASS+Image+2',
    ],
    link: '#',
  },
  {
    id: 'seo-optimisation',
    title: 'Optimisation SEO',
    description: 'Amélioration du référencement avec remplacement d\'images par HTML et ajustement des couleurs.',
    tech: ['HTML', 'CSS'],
    result: 'Meilleur score SEO et indexation optimisée par Google.',
    images: [
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=SEO+Image+1',
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=SEO+Image+2',
    ],
    link: '#',
  },
  {
    id: 'api-site-vente',
    title: 'Interaction avec une API pour un site de vente',
    description: 'Gestion d\'API pour site de vente de canapés avec panier localStorage.',
    tech: ['JavaScript'],
    result: 'Expérience d\'achat fluide et fonctionnelle.',
    images: [
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=API+Vente+Image+1',
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=API+Vente+Image+2',
    ],
    link: '#',
  },
  {
    id: 'api-site-sauces',
    title: 'Création d\'une API pour un site de sauces',
    description: 'Construction d\'une API sécurisée pour partage de sauces avec likes/dislikes.',
    tech: ['Node.js', 'Express.js', 'MongoDB'],
    result: 'Back-end robuste avec opérations CRUD sécurisées.',
    images: [
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=API+Sauces+Image+1',
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=API+Sauces+Image+2',
    ],
    link: '#',
  },
  {
    id: 'react-location',
    title: 'Front-end React pour un site de location d\'appartements',
    description: 'Développement front-end pour site de location avec carrousel et sections déroulantes.',
    tech: ['React.js'],
    result: 'Interface moderne et réactive pour les utilisateurs.',
    images: [
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=React+Location+Image+1',
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=React+Location+Image+2',
    ],
    link: '#',
  },
];

export const personalProjects = [
  {
    id: 'netflix-clone',
    title: 'Site type Netflix pour organiser des sites web',
    description: 'Site inspiré de Netflix pour classer des sites par catégories avec cartes dynamiques.',
    tech: ['React.js', 'Vite.js', 'TypeScript', 'AWS S3', 'CloudFront'],
    result: 'Site performant hébergé dans le cloud avec gestion efficace des données.',
    images: [
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=Netflix+Image+1',
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=Netflix+Image+2',
    ],
    link: '#',
  },
  {
    id: 'pc-guide',
    title: 'Guide d\'achat de PC',
    description: 'Site proposant des configurations PC pour différents budgets avec benchmarks FPS.',
    tech: ['React', 'Vite', 'TypeScript'],
    result: 'Outil pratique et bien structuré pour les passionnés de hardware.',
    images: [
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=PC+Guide+Image+1',
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=PC+Guide+Image+2',
    ],
    link: '#',
  },
  {
    id: 'depannage-site',
    title: 'Site pour une entreprise de dépannage',
    description: 'Site complet avec pages services, tarifs, contact et mentions légales.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    result: 'Site professionnel clé en main, optimisé et publié.',
    images: [
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=Depannage+Image+1',
      'https://via.placeholder.com/800x600/FF0000/FFFFFF?text=Depannage+Image+2',
    ],
    link: '#',
  },
];

export const allProjects = [...academicProjects, ...personalProjects];

export type Project = typeof allProjects[0];

export type Technology = typeof technologies[0];
