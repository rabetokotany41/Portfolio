import React, { useState, useRef, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Header from './components/Header/Header';
import Accueil from './components/pages/Accueil';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Travails from './components/pages/Travails';
import { useTranslation } from './utils/translations.js';

function App() {
  // États de l'application
  const [darkMode, setDarkMode] = useState(true);
  const [activePage, setActivePage] = useState('accueil');
  const [language, setLanguage] = useState('fr');
  const [isChanging, setIsChanging] = useState(false);
  const [prevPage, setPrevPage] = useState(null);
  const [animationDirection, setAnimationDirection] = useState('forward');

  const contentRef = useRef(null);
  const loaderRef = useRef(null);

  // Traductions
  const t = useTranslation(language);

  // Change la langue
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  // Change le mode sombre/clair
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Change de page avec animation
  const changePage = (pageId) => {
    if (pageId !== activePage && !isChanging) {
      setPrevPage(activePage);
      setIsChanging(true);

      // Déterminer la direction de l'animation
      const pageOrder = ['accueil', 'services', 'travails', 'resume', 'contact'];
      const currentIndex = pageOrder.indexOf(activePage);
      const nextIndex = pageOrder.indexOf(pageId);
      
      // Gérer le cas où la page n'est pas dans l'ordre (par sécurité)
      if (currentIndex === -1 || nextIndex === -1) {
        setAnimationDirection('forward');
      } else {
        const direction = nextIndex > currentIndex ? 'forward' : 'backward';
        setAnimationDirection(direction);
      }

      // Délai pour l'animation de sortie
      setTimeout(() => {
        setActivePage(pageId);
      }, 600);

      // Terminer la transition
      setTimeout(() => {
        setIsChanging(false);
      }, 1200);
    }
  };

  // Affiche la page correspondante
  const renderPage = () => {
    switch (activePage) {
      case 'accueil':
        return <Accueil darkMode={darkMode} language={language} />;
      case 'services':
        return <Services darkMode={darkMode} language={language} />;
      case 'contact':
        return <Contact darkMode={darkMode} language={language} />;
      case 'resume':
        return <Resume darkMode={darkMode} language={language} />;
      case 'travails':
        return <Travails darkMode={darkMode} language={language} />;
      default:
        return <Accueil darkMode={darkMode} language={language} />;
    }
  };

  // Fonction pour rendre la page précédente
  const renderPreviousPage = (page) => {
    switch (page) {
      case 'accueil':
        return <Accueil darkMode={darkMode} language={language} />;
      case 'services':
        return <Services darkMode={darkMode} language={language} />;
      case 'contact':
        return <Contact darkMode={darkMode} language={language} />;
      case 'resume':
        return <Resume darkMode={darkMode} language={language} />;
      case 'travails':
        return <Travails darkMode={darkMode} language={language} />;
      default:
        return <Accueil darkMode={darkMode} language={language} />;
    }
  };

  // Effet pour reset l'animation
  useEffect(() => {
    if (!isChanging && loaderRef.current) {
      loaderRef.current.style.transform = 'scale(0)';
    }
  }, [isChanging]);

  // Rendu des pages avec gestion d'erreur
  const renderPageContent = () => {
    try {
      return renderPage();
    } catch (error) {
      console.error('Erreur lors du rendu de la page:', error);
      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h2 className="text-2xl font-bold mb-4">Oops !</h2>
          <p className="text-lg mb-4">
            {language === 'fr' 
              ? "Une erreur s'est produite lors du chargement de la page." 
              : "An error occurred while loading the page."}
          </p>
          <button
            onClick={() => changePage('accueil')}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {language === 'fr' ? "Retour à l'accueil" : "Back to home"}
          </button>
        </div>
      );
    }
  };

  // Fonction pour ouvrir les liens sociaux
  const openSocialLink = (platform) => {
    const urls = {
      linkedin: 'https://www.linkedin.com/in/rabetokotanyenzo',
      github: 'https://github.com/rabetokotany41',
      twitter: 'https://twitter.com',
      instagram: 'https://www.instagram.com/enzoloic21/'
    };
    
    const url = urls[platform.toLowerCase()];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'} overflow-x-hidden`}>
      {/* Header */}
      <Header
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        activePage={activePage}
        setActivePage={changePage}
        language={language}
        toggleLanguage={toggleLanguage}
      />

      {/* Overlay d'animation */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        {isChanging && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradientFlow"></div>
        )}
      </div>

      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-8 relative min-h-[70vh]">
        {/* Loader moderne */}
        {isChanging && (
          <div
            ref={loaderRef}
            className="fixed inset-0 z-40 flex items-center justify-center bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/95"
            style={{ 
              animation: 'pageCurtain 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
              transform: 'scale(1)'
            }}
          >
            <div className="relative">
              {/* Loader principal */}
              <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full animate-orbitalRing border-2 border-transparent border-t-blue-500 border-r-purple-500"></div>
                <div className="absolute inset-3 rounded-full animate-orbitalRingReverse border-2 border-transparent border-b-green-500 border-l-pink-500"></div>
                <div className="absolute inset-6 rounded-full animate-pulseGlow bg-gradient-to-r from-blue-500 to-purple-500"></div>

                {/* Points orbitaux */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 animate-orbitalPoint"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-purple-500 animate-orbitalPointReverse"></div>
              </div>

              {/* Texte de chargement */}
              <div className="mt-8 text-center">
                <div className="text-lg font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradientText">
                  {language === 'fr' ? 'Chargement...' : 'Loading...'}
                </div>
                <div className="mt-2 text-sm opacity-70 text-white">
                  {language === 'fr' ? 'Préparation de votre expérience' : 'Preparing your experience'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Conteneur pour les pages */}
        <div className="relative z-20 min-h-full">
          {/* Ancienne page */}
          {isChanging && prevPage && (
            <div
              className={`absolute inset-0 ${animationDirection === 'forward' ? 'animate-pageExitForward' : 'animate-pageExitBackward'}`}
              style={{ animationDuration: '0.6s' }}
            >
              <div className={`relative ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                {renderPreviousPage(prevPage)}
              </div>
            </div>
          )}

          {/* Nouvelle page */}
          <div
            ref={contentRef}
            className={`relative ${isChanging ? 'opacity-0' : animationDirection === 'forward' ? 'animate-pageEnterForward' : 'animate-pageEnterBackward'}`}
            style={{ 
              animationDuration: '0.6s',
              animationFillMode: 'both'
            }}
          >
            {renderPageContent()}
          </div>
        </div>
      </main>

      {/* Pied de page complet */}
      <footer className={`py-8 mt-12 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-black border-gray-800' : 'bg-gradient-to-b from-gray-50 to-white border-gray-200'} border-t`}>
        <div className="container mx-auto px-4">
          {/* Section principale */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Colonne 1: Logo et description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <span className="font-bold text-xl">LP</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">{t?.header?.title || 'Portfolio'}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t?.header?.subtitle || 'Développeur Full Stack'}
                  </p>
                </div>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {language === 'fr'
                  ? 'Créateur d\'expériences digitales mémorables. Innovation, qualité et passion au service de vos projets.'
                  : 'Creator of memorable digital experiences. Innovation, quality and passion at the service of your projects.'}
              </p>
            </div>

            {/* Colonne 2: Liens rapides */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{language === 'fr' ? 'Navigation' : 'Navigation'}</h4>
              <ul className="space-y-2">
                {['accueil', 'services', 'travails', 'resume', 'contact'].map((page) => (
                  <li key={page}>
                    <button
                      onClick={() => changePage(page)}
                      className={`text-sm transition-colors duration-300 ${darkMode
                          ? 'text-gray-400 hover:text-white'
                          : 'text-gray-600 hover:text-black'
                        }`}
                    >
                      {t?.header?.nav?.[page] || page.charAt(0).toUpperCase() + page.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 3: Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{language === 'fr' ? 'Services' : 'Services'}</h4>
              <ul className="space-y-2">
                {[
                  language === 'fr' ? 'Développement Web' : 'Web Development',
                  language === 'fr' ? 'Applications Mobile' : 'Mobile Applications',
                  language === 'fr' ? 'UI/UX Design' : 'UI/UX Design',
                  language === 'fr' ? 'Consultation' : 'Consulting',
                  language === 'fr' ? 'Maintenance' : 'Maintenance'
                ].map((service, index) => (
                  <li key={index}>
                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 4: Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{language === 'fr' ? 'Contactez-moi' : 'Contact Me'}</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:rabetokotanyenzo@gmail.com"
                    className={`text-sm flex items-center space-x-2 transition-colors duration-300 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                      }`}
                  >
                    <span>📧</span>
                    <span>rabetokotanyenzo@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+261388991356"
                    className={`text-sm flex items-center space-x-2 transition-colors duration-300 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                      }`}
                  >
                    <span>📱</span>
                    <span>+261 38 89 913 56</span>
                  </a>
                </li>
                <li className="flex space-x-3 pt-2">
                  <button
                    onClick={() => openSocialLink('linkedin')}
                    className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${darkMode
                        ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                        : 'bg-gray-100 text-gray-600 hover:text-black hover:bg-gray-200'
                      }`}
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </button>
                  <button
                    onClick={() => openSocialLink('github')}
                    className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${darkMode
                        ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                        : 'bg-gray-100 text-gray-600 hover:text-black hover:bg-gray-200'
                      }`}
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </button>
                  <button
                    onClick={() => openSocialLink('twitter')}
                    className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${darkMode
                        ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                        : 'bg-gray-100 text-gray-600 hover:text-black hover:bg-gray-200'
                      }`}
                    aria-label="Twitter"
                  >
                    <FaTwitter />
                  </button>
                  <button
                    onClick={() => openSocialLink('instagram')}
                    className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${darkMode
                        ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                        : 'bg-gray-100 text-gray-600 hover:text-black hover:bg-gray-200'
                      }`}
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Séparateur */}
          <div className={`h-px my-6 ${darkMode ? 'bg-gradient-to-r from-transparent via-gray-700 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'}`}></div>

          {/* Section bas de page */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {t?.footer?.copyright?.replace('{year}', new Date().getFullYear()) || `© ${new Date().getFullYear()} Portfolio. Tous droits réservés.`}
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-xs opacity-70">
                <span className={`hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                  {t?.footer?.developedWith || 'Développé avec'} ❤️
                </span>
                <span className={darkMode ? 'text-gray-700' : 'text-gray-400'}>|</span>
                <span className={`hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                  {t?.footer?.design || 'Design'} 🎨
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {language === 'fr' ? 'English' : 'Français'}
              </button>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${darkMode
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                aria-label={darkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;