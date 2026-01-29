import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Globe, ChevronDown, Sparkles } from 'lucide-react';
import { useTranslation } from '../../utils/translations.js';
import logoImg from '../../assets/logo.png';

const Header = ({ darkMode, toggleDarkMode, activePage, setActivePage, language, toggleLanguage }) => {
  // États
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [logoHover, setLogoHover] = useState(false);

  // Traductions
  const t = useTranslation(language);

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Change de page avec effet
  const changePage = (pageId) => {
    if (pageId !== activePage) {
      // Animation de clic sur le bouton
      const button = document.querySelector(`[data-page="${pageId}"]`);
      if (button) {
        button.classList.add('animate-pulse-once');
        setTimeout(() => button.classList.remove('animate-pulse-once'), 300);
      }

      // Changer de page après un léger délai
      setTimeout(() => {
        setActivePage(pageId);
        setMobileMenuOpen(false);
      }, 100);
    }
  };

  // Menu de navigation
  const menuItems = [
    { id: 'accueil', label: t.header.nav.accueil },
    { id: 'services', label: t.header.nav.services },
    { id: 'travails', label: t.header.nav.travails },
    { id: 'resume', label: t.header.nav.resume },
    { id: 'contact', label: t.header.nav.contact },
  ];

  return (
    <>
      {/* Espace réservé pour éviter que le contenu ne soit caché sous le header fixe */}
      <div className="h-20"></div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-animations ${darkMode
            ? `bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-lg ${scrolled ? 'shadow-2xl shadow-white/5' : ''}`
            : `bg-gradient-to-br from-white/95 to-gray-100/95 backdrop-blur-lg ${scrolled ? 'shadow-2xl shadow-black/10' : ''}`
          }`}
        style={{
          borderBottom: darkMode
            ? '1px solid rgba(255,255,255,0.1)'
            : '1px solid rgba(0,0,0,0.1)'
        }}
      >
        {/* Effet de particules flottantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-white/5 to-gray-400/5 rounded-full animate-floatParticle1"></div>
          <div className="absolute -top-5 -right-5 w-10 h-10 bg-gradient-to-r from-gray-400/5 to-gray-600/5 rounded-full animate-floatParticle2"></div>
        </div>

        <div className="container mx-auto px-4 py-3 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo avec animation */}
            <div
              className="flex items-center space-x-3 group cursor-pointer logo"
              onMouseEnter={() => setLogoHover(true)}
              onMouseLeave={() => setLogoHover(false)}
              onClick={() => changePage('accueil')}
            >
              <div className="relative">
                {/* Logo principal */}
                <div
                  className={`h-12 w-12 rounded-xl flex items-center justify-center font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:rotate-12 ${darkMode ? 'bg-gradient-to-br from-black to-gray-800' : 'bg-gradient-to-br from-white to-gray-300'
                    } ${logoHover ? 'scale-110 rotate-12' : ''} shadow-lg ${darkMode ? 'border border-gray-700' : 'border border-gray-300'}`}
                >
                  <img
                    src={logoImg}
                    alt="Logo"
                    className={`h-8 w-8 transition-all duration-300 ${logoHover ? 'scale-125' : ''} ${darkMode ? 'invert' : ''}`}
                  />
                </div>

                {/* Effet de lueur */}
                <div
                  className={`absolute inset-0 rounded-xl -z-10 transition-all duration-500 ${logoHover
                      ? darkMode
                        ? 'bg-gradient-to-br from-white/20 to-gray-400/20 blur-xl scale-125'
                        : 'bg-gradient-to-br from-black/10 to-gray-600/10 blur-xl scale-125'
                      : ''
                    }`}
                ></div>

                {/* Particules autour du logo */}
                {logoHover && (
                  <>
                    <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full animate-ping ${darkMode ? 'bg-white' : 'bg-black'}`}></div>
                    <div className={`absolute -bottom-1 -left-1 w-2 h-2 rounded-full animate-ping ${darkMode ? 'bg-gray-400' : 'bg-gray-600'}`} style={{ animationDelay: '0.2s' }}></div>
                  </>
                )}
              </div>

              {/* Texte du logo */}
              <div className="flex flex-col">
                <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                  {t.header.title}
                </h1>
                <div className="flex items-center space-x-2">
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{t.header.subtitle}</p>
                  <Sparkles size={10} className={`${darkMode ? 'text-white' : 'text-black'} animate-pulse`} />
                </div>
              </div>
            </div>

            {/* Navigation Desktop - Utilisation des classes organisées */}
            <nav className="hidden md:flex items-center space-x-1 stagger-delay-100">
              {menuItems.map((item, index) => (
                <div
                  key={item.id}
                  className="relative nav-item"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button
                    data-page={item.id}
                    onClick={() => changePage(item.id)}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group animate-fadeInUp ${activePage === item.id
                        ? darkMode
                          ? 'text-white bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700'
                          : 'text-black bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300'
                        : darkMode
                          ? 'text-gray-300 hover:text-white hover:bg-gray-800/50 hover:border hover:border-gray-700'
                          : 'text-gray-600 hover:text-black hover:bg-gray-100/50 hover:border hover:border-gray-300'
                      }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span>{item.label}</span>
                      {activePage === item.id && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${hoveredItem === item.id ? 'rotate-180' : ''} ${darkMode ? 'text-white' : 'text-black'}`}
                        />
                      )}
                    </div>

                    {/* Indicateur actif */}
                    {activePage === item.id && (
                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full ${darkMode ? 'bg-gradient-to-r from-white to-gray-400' : 'bg-gradient-to-r from-black to-gray-600'
                        } animate-pulseGlow`}></div>
                    )}

                    {/* Effet au survol */}
                    {hoveredItem === item.id && activePage !== item.id && (
                      <div className={`absolute inset-0 rounded-lg ${darkMode ? 'bg-gradient-to-r from-white/10 to-gray-400/10' : 'bg-gradient-to-r from-black/5 to-gray-600/5'
                        } animate-pulse`}></div>
                    )}
                  </button>
                </div>
              ))}
            </nav>

            {/* Boutons de contrôle - Utilisation des classes organisées */}
            <div className="flex items-center space-x-3 stagger-delay-100">
              {/* Bouton Langue avec animation */}
              <div className="relative group animate-fadeInUp" style={{ animationDelay: '400ms' }}>
                <button
                  onClick={toggleLanguage}
                  className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover-lift-effect ${darkMode
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-lg hover:shadow-white/10 border border-gray-700'
                      : 'bg-gradient-to-br from-gray-200 to-gray-300 hover:shadow-lg hover:shadow-black/10 border border-gray-400'
                    } ${darkMode ? 'text-white' : 'text-black'} relative overflow-hidden hover-shine`}
                >
                  <div className="flex items-center space-x-1">
                    <Globe size={18} />
                    <span className="text-sm font-semibold">{language === 'fr' ? 'FR' : 'EN'}</span>
                  </div>

                  {/* Effet de brillance */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-${darkMode ? 'white' : 'black'}/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700`}></div>
                </button>

                {/* Tooltip */}
                <div className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap ${darkMode ? 'bg-gray-900 text-white border border-gray-700' : 'bg-white text-black border border-gray-300'
                  }`}>
                  {language === 'fr' ? 'Switch to English' : 'Passer en Français'}
                </div>
              </div>

              {/* Bouton Mode Sombre avec animation */}
              <div className="relative group animate-fadeInUp" style={{ animationDelay: '500ms' }}>
                <button
                  onClick={toggleDarkMode}
                  className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover-lift-effect ${darkMode
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-lg hover:shadow-white/10 border border-gray-700'
                      : 'bg-gradient-to-br from-gray-200 to-gray-300 hover:shadow-lg hover:shadow-black/10 border border-gray-400'
                    } ${darkMode ? 'text-white' : 'text-black'} relative overflow-hidden hover-shine`}
                >
                  <div className="relative z-10">
                    {darkMode ? (
                      <Sun size={20} className="animate-spinSlow" />
                    ) : (
                      <Moon size={20} className="animate-pulse" />
                    )}
                  </div>

                  {/* Effet de brillance */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-${darkMode ? 'white' : 'black'}/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700`}></div>
                </button>

                {/* Tooltip */}
                <div className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap ${darkMode ? 'bg-gray-900 text-white border border-gray-700' : 'bg-white text-black border border-gray-300'
                  }`}>
                  {darkMode ? 'Mode clair' : 'Mode sombre'}
                </div>
              </div>

              {/* Bouton Menu Mobile */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-3 rounded-xl transition-all duration-300 animate-fadeInUp ${mobileMenuOpen
                    ? darkMode
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                      : 'bg-gradient-to-br from-gray-200 to-gray-300 border border-gray-400'
                    : darkMode
                      ? 'bg-gradient-to-br from-gray-800 to-gray-900 hover:bg-gray-800 border border-gray-700'
                      : 'bg-gradient-to-br from-gray-200 to-gray-300 hover:bg-gray-200 border border-gray-400'
                  } ${darkMode ? 'text-white' : 'text-black'} hover-lift-effect`}
                style={{ animationDelay: '600ms' }}
              >
                {mobileMenuOpen ? (
                  <X size={24} className="animate-rotateIn" />
                ) : (
                  <Menu size={24} className="animate-bounceIn" />
                )}
              </button>
            </div>
          </div>

          {/* Menu Mobile avec animations */}
          {mobileMenuOpen && (
            <div
              className={`mt-4 pb-4 md:hidden animate-slideDown ${darkMode
                  ? 'border-t border-gray-700/50 bg-gradient-to-b from-black/95 to-gray-900/95'
                  : 'border-t border-gray-300/50 bg-gradient-to-b from-white/95 to-gray-100/95'
                } backdrop-blur-lg rounded-xl shadow-2xl ${darkMode ? 'border border-gray-700' : 'border border-gray-300'}`}
            >
              <div className="flex flex-col space-y-2 pt-4 stagger-delay-100">
                {menuItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => changePage(item.id)}
                    className={`group relative py-4 px-6 text-left rounded-lg transition-all duration-300 transform hover:scale-[1.02] animate-fadeInUp ${activePage === item.id
                        ? darkMode
                          ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700'
                          : 'bg-gradient-to-r from-gray-100 to-gray-200 text-black border border-gray-400'
                        : darkMode
                          ? 'hover:bg-gray-800/50 text-gray-300 hover:border hover:border-gray-700'
                          : 'hover:bg-gray-100/50 text-gray-600 hover:border hover:border-gray-300'
                      }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="font-medium">{item.label}</span>
                      {activePage === item.id && (
                        <div className={`ml-auto w-2 h-2 rounded-full ${darkMode ? 'bg-white' : 'bg-black'} animate-pulseGlow`}></div>
                      )}
                    </div>

                    {/* Effet de fond au survol */}
                    <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'bg-gradient-to-r from-white/5 to-gray-400/5' : 'bg-gradient-to-r from-black/5 to-gray-600/5'
                      }`}></div>

                    {/* Animation de bordure */}
                    <div className={`absolute inset-0 rounded-lg border border-transparent group-hover:border ${darkMode
                        ? 'group-hover:border-gray-600'
                        : 'group-hover:border-gray-400'
                      } transition-all duration-300`}></div>
                  </button>
                ))}

                {/* Séparateur */}
                <div className={`h-px my-2 ${darkMode ? 'bg-gradient-to-r from-transparent via-gray-700 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-400 to-transparent'}`}></div>

                {/* Informations supplémentaires */}
                <div className={`px-6 py-3 rounded-lg ${darkMode ? 'bg-gray-900/30 border border-gray-700' : 'bg-gray-100/30 border border-gray-300'} animate-fadeInUp`} style={{ animationDelay: '400ms' }}>
                  <div className="text-xs flex items-center space-x-2">
                    <span>⚫</span>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{t.header.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;