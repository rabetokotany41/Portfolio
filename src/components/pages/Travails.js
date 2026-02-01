import React, { useState } from 'react';
import { Briefcase, Code, Palette, Rocket, ArrowRight } from 'lucide-react';
import portfolioImg from '../../assets/images/porfolio.png';
import marckenlingeImg from '../../assets/images/marckenlinge.png';
import fakeNewsImg from '../../assets/images/fakenewsMalagasy.png';
import AudioVisualiseurImg from '../../assets/images/audio.png';
import marckenlingeImg1 from '../../assets/images/mercketLinge.png';

const Travails = ({ darkMode, language }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Données des projets
  const projets = [
    {
      id: 1,
      title: language === 'fr' ? 'Portfolio Minimaliste' : 'Minimalist Portfolio',
      description: language === 'fr'
        ? 'Portfolio épuré avec design noir et blanc et animations subtiles'
        : 'Clean portfolio with black and white design and subtle animations',
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'Design Monochrome'],
      image: portfolioImg,
      link: '#',
      featured: true
    },
    {
      id: 2,
      title: language === 'fr' ? 'Plateforme E-commerce' : 'E-commerce Platform',
      description: language === 'fr'
        ? 'Plateforme de vente avec interface épurée et intuitive'
        : 'Sales platform with clean and intuitive interface',
      category: 'mobile',
      technologies: ['React', 'CSS', 'PostagreSQL', '.NET'],
      image: marckenlingeImg,
      link: '#',
      featured: true
    },
    {
      id: 3,
      title: language === 'fr' ? 'Détection de fausses informations' : 'Fake News Detection',
      description: language === 'fr'
        ? 'Tableau de bord monochrome avec visualisations claires'
        : 'Monochrome dashboard with clear visualizations',
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'Node.js Express', 'PostgreSQL'],
      image: fakeNewsImg,
      link: '#'
    },
    {
      id: 4,
      title: language === 'fr' ? 'Visualiseur Audio' : 'Audio Visualizer App',
      description: language === 'fr'
        ? 'Application de visualisation et d’analyse audio avec une interface minimaliste'
        : 'Audio visualization and analysis app with a minimalist interface',
      category: 'mobile',
      technologies: ['Flutter', 'Clean UI', 'API Integration'],
      image: AudioVisualiseurImg,
      link: '#'
    },
    {
      id: 5,
      title: language === 'fr' ? 'Marketing' : 'Marketing Website',
      description: language === 'fr'
        ? 'Site vitrine moderne et minimaliste pour une entreprise'
        : 'Modern and minimalist corporate showcase website',
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
      image: marckenlingeImg1,
      link: '#'
    },
    {
      id: 6,
      title: language === 'fr'
        ? 'Site Web et Application du Ministère'
        : 'Ministry Website and Application',
      description: language === 'fr'
        ? 'Site web et application institutionnels modernes pour un ministère'
        : 'Modern institutional website and application for a ministry',
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'Django', 'PostgreSQL'],
      image: '',
      link: '#'
    }
  ];


  // Catégories
  const categories = [
    { id: 'all', label: language === 'fr' ? 'Tous' : 'All', icon: <Briefcase /> },
    { id: 'web', label: language === 'fr' ? 'Web' : 'Web', icon: <Code /> },
    { id: 'mobile', label: language === 'fr' ? 'Mobile' : 'Mobile', icon: <Rocket /> },
    { id: 'game', label: language === 'fr' ? 'Jeux' : 'Games', icon: <Palette /> }
  ];

  // Filtrer les projets
  const filteredProjects = selectedCategory === 'all'
    ? projets
    : projets.filter(projet => projet.category === selectedCategory);

  return (
    <div className={`min-h-screen py-12 transition-all duration-300 ${darkMode ? 'text-gray-100 bg-gray-900' : 'text-gray-900 bg-white'}`}>
      <div className="container mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
            {language === 'fr' ? 'Mes Travaux' : 'My Works'}
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {language === 'fr'
              ? 'Découvrez une sélection de mes projets minimalistes, alliant design épuré et excellence technique.'
              : 'Discover a selection of my minimalist projects, combining clean design and technical excellence.'}
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${selectedCategory === category.id
                ? darkMode
                  ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700 shadow-lg'
                  : 'bg-gradient-to-r from-black to-gray-800 text-white border border-gray-400 shadow-lg'
                : darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((projet) => (
            <div
              key={projet.id}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-[1.02] ${darkMode
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
                } shadow-xl hover:shadow-2xl`}
            >
              {/* Image du projet */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={projet.image}
                  alt={projet.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-black/60' : 'from-black/40'} to-transparent`}></div>

                {/* Badge catégorie */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${darkMode ? 'bg-gray-900/90 text-white border border-gray-700' : 'bg-white/90 text-gray-900 border border-gray-300'
                    }`}>
                    {projet.category}
                  </span>
                </div>

                {/* Badge featured */}
                {projet.featured && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${darkMode
                    ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700'
                    : 'bg-gradient-to-r from-black to-gray-800 text-white border border-gray-400'
                    }`}>
                    {language === 'fr' ? 'En vedette' : 'Featured'}
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {projet.title}
                </h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {projet.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projet.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode
                        ? 'bg-gray-800 text-gray-300 border border-gray-700'
                        : 'bg-gray-100 text-gray-700 border border-gray-300'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bouton voir le projet */}
                <button
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${darkMode
                    ? 'bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-600 hover:to-gray-700 border border-gray-600'
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300 border border-gray-300'
                    }`}
                >
                  <span>{language === 'fr' ? 'Voir le projet' : 'View Project'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Effet de survol */}
              <div className={`absolute inset-0 ${darkMode
                ? 'bg-gradient-to-r from-white/0 via-gray-400/0 to-gray-600/0 group-hover:from-white/10 group-hover:via-gray-400/10 group-hover:to-gray-600/10'
                : 'bg-gradient-to-r from-black/0 via-gray-600/0 to-gray-800/0 group-hover:from-black/10 group-hover:via-gray-600/10 group-hover:to-gray-800/10'
                } transition-all duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Section statistiques */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-300'
          }`}>
          <div className="text-center">
            <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
              10+
            </div>
            <div className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {language === 'fr' ? 'Projets' : 'Projects'}
            </div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
              90%
            </div>
            <div className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {language === 'fr' ? 'Satisfaction client' : 'Client Satisfaction'}
            </div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
              2+
            </div>
            <div className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {language === 'fr' ? "Années d'expérience" : 'Years Experience'}
            </div>
          </div>
          <div className="text-center">
            <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
              3+
            </div>
            <div className={`text-sm mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {language === 'fr' ? 'Designs Minimalistes' : 'Minimalist Designs'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travails;