import React, { useState } from 'react';
import { Layout, Smartphone, Cpu, Shield, Zap, BarChart, Cloud, ArrowRight, CheckCircle, Users, Clock, Award, Star } from 'lucide-react';
import { useTranslation } from '../../utils/translations.js';

const Services = ({ darkMode, language }) => {
  const [hoveredService, setHoveredService] = useState(null);
  const [animated, setAnimated] = useState(false);

  // Effet d'animation
  React.useEffect(() => {
    setAnimated(true);
  }, []);

  // Traductions
  const t = useTranslation(language);

  // Liste des services proposés avec animations
  const services = [
    {
      icon: <Layout />,
      title: t.services.list.webDev.title,
      description: t.services.list.webDev.description,
      features: t.services.list.webDev.features,
      iconBg: darkMode ? 'bg-gradient-to-br from-white/10 to-gray-400/10' : 'bg-gradient-to-br from-black/5 to-gray-600/5'
    },
    {
      icon: <Smartphone />,
      title: t.services.list.mobile.title,
      description: t.services.list.mobile.description,
      features: t.services.list.mobile.features,
      iconBg: darkMode ? 'bg-gradient-to-br from-gray-200/10 to-gray-600/10' : 'bg-gradient-to-br from-gray-400/5 to-gray-800/5'
    },
    {
      icon: <Cpu />,
      title: t.services.list.backend.title,
      description: t.services.list.backend.description,
      features: t.services.list.backend.features,
      iconBg: darkMode ? 'bg-gradient-to-br from-gray-300/10 to-gray-700/10' : 'bg-gradient-to-br from-gray-600/5 to-black/5'
    },
    {
      icon: <Shield />,
      title: t.services.list.security.title,
      description: t.services.list.security.description,
      features: t.services.list.security.features,
      iconBg: darkMode ? 'bg-gradient-to-br from-white/15 to-gray-400/15' : 'bg-gradient-to-br from-black/10 to-gray-600/10'
    },
    {
      icon: <Zap />,
      title: t.services.list.performance.title,
      description: t.services.list.performance.description,
      features: t.services.list.performance.features,
      iconBg: darkMode ? 'bg-gradient-to-br from-gray-200/15 to-gray-600/15' : 'bg-gradient-to-br from-gray-400/10 to-gray-800/10'
    },
    {
      icon: <BarChart />,
      title: t.services.list.consulting.title,
      description: t.services.list.consulting.description,
      features: t.services.list.consulting.features,
      iconBg: darkMode ? 'bg-gradient-to-br from-gray-300/15 to-gray-700/15' : 'bg-gradient-to-br from-gray-600/10 to-black/10'
    }
  ];

  // Avantages
  const advantages = [
    { icon: <Clock />, title: "Livraison rapide", desc: "Délais optimisés" },
    { icon: <Award />, title: "Qualité premium", desc: "Code de qualité" },
    { icon: <Users />, title: "Support expert", desc: "Disponible 24/7" },
    { icon: <Star />, title: "Garantie", desc: "Satisfait ou remboursé" }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Effets de fond */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl ${
          darkMode ? 'bg-gradient-to-r from-white/5 to-gray-400/5' : 'bg-gradient-to-r from-black/5 to-gray-600/5'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-64 h-64 rounded-full blur-3xl ${
          darkMode ? 'bg-gradient-to-r from-gray-300/5 to-gray-600/5' : 'bg-gradient-to-r from-gray-400/5 to-gray-800/5'
        }`}></div>
      </div>

      {/* Titre avec animation */}
      <div className={`text-center mb-16 relative z-10 ${animated ? 'animate-fadeInUp' : 'opacity-0'}`}>
        <div className="inline-flex items-center gap-3 mb-4">
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
            {t.services.title}
          </h1>
        </div>
        <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'} ${animated ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {t.services.description}
        </p>
      </div>

      {/* Section avantages */}
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 ${animated ? 'animate-scaleIn' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
        {advantages.map((advantage, idx) => (
          <div key={idx} className="text-center group">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } shadow-lg`}>
              <div className={darkMode ? 'text-white' : 'text-black'}>{advantage.icon}</div>
            </div>
            <h3 className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{advantage.title}</h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{advantage.desc}</p>
          </div>
        ))}
      </div>

      {/* Cartes de services animées */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`relative group transition-all duration-500 ${animated ? 'animate-fadeInUp' : 'opacity-0'}`}
            style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
          >
            {/* Carte de service */}
            <div className={`relative rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-105 ${
              hoveredService === index
                ? darkMode 
                  ? 'shadow-2xl shadow-white/10' 
                  : 'shadow-2xl shadow-black/10'
                : 'shadow-lg'
            }`}>
              {/* Header avec gradient */}
              <div className={`relative h-48 ${service.iconBg} flex items-center justify-center`}>
                <div className={`absolute inset-0 ${
                  darkMode ? 'bg-gradient-to-br from-black/5 to-transparent' : 'bg-gradient-to-br from-white/5 to-transparent'
                }`}></div>
                <div className={`relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-125 ${
                  darkMode ? 'bg-black/30' : 'bg-white/30'
                } backdrop-blur-sm`}>
                  <div className={`text-3xl ${hoveredService === index ? 'animate-pulse' : ''} ${
                    darkMode ? 'text-white' : 'text-black'
                  }`}>
                    {service.icon}
                  </div>
                </div>
                
                {/* Effet de particules */}
                {hoveredService === index && (
                  <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute top-4 left-4 w-2 h-2 rounded-full animate-ping ${
                      darkMode ? 'bg-white' : 'bg-black'
                    }`}></div>
                    <div className={`absolute bottom-4 right-4 w-3 h-3 rounded-full animate-ping ${
                      darkMode ? 'bg-white' : 'bg-black'
                    }`} style={{ animationDelay: '0.3s' }}></div>
                  </div>
                )}
              </div>
              
              {/* Contenu */}
              <div className={`p-8 ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm`}>
                <h3 className={`text-xl font-bold mb-4 flex items-center gap-3 ${
                  darkMode ? 'text-white' : 'text-black'
                }`}>
                  <span>{service.title}</span>
                  {hoveredService === index && (
                    <div className={`w-2 h-2 rounded-full animate-pulseGlow ${
                      darkMode ? 'bg-white' : 'bg-black'
                    }`}></div>
                  )}
                </h3>
                
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                
                {/* Caractéristiques avec animation */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center transition-all duration-300 group-hover:translate-x-2"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <CheckCircle className={`w-5 h-5 mr-3 ${
                        hoveredService === index
                          ? darkMode ? 'text-white animate-bounce' : 'text-black animate-bounce'
                          : darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`} />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Footer avec bouton animé */}
              <div className={`px-8 py-6 border-t ${
                darkMode ? 'border-gray-700 bg-gray-900/50' : 'border-gray-200 bg-gray-50/50'
              }`}>
                <button className={`group relative w-full py-3 rounded-xl font-medium flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 ${
                  hoveredService === index
                    ? darkMode 
                      ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700' 
                      : 'bg-gradient-to-r from-black to-gray-800 text-white border border-gray-400'
                    : darkMode 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  <span>En savoir plus</span>
                  <ArrowRight className={`transition-all duration-300 ${
                    hoveredService === index ? 'translate-x-2' : ''
                  }`} />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              </div>
              
              {/* Effet de bordure animée */}
              <div className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                darkMode ? 'border-gray-500' : 'border-gray-400'
              }`} style={{
                background: `linear-gradient(45deg, transparent, transparent), linear-gradient(45deg, var(--tw-gradient-stops))`,
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
                padding: '2px'
              }}></div>
            </div>
            
            {/* Badge flottant */}
            <div className={`absolute -top-3 -right-3 px-4 py-2 rounded-full text-xs font-bold ${
              darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
            } shadow-lg transition-all duration-300 ${hoveredService === index ? 'scale-110' : ''}`}>
              POPULAIRE
            </div>
          </div>
        ))}
      </div>

      {/* CTA avec animation */}
      <div className={`relative mt-20 p-12 rounded-3xl overflow-hidden text-center ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-white to-gray-100'
      } ${animated ? 'animate-scaleIn' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
        {/* Effets de fond */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-0 w-64 h-64 rounded-full blur-3xl ${
            darkMode ? 'bg-gradient-to-r from-white/10 to-gray-400/10' : 'bg-gradient-to-r from-black/10 to-gray-600/10'
          }`}></div>
          <div className={`absolute bottom-0 right-0 w-64 h-64 rounded-full blur-3xl ${
            darkMode ? 'bg-gradient-to-r from-gray-300/10 to-gray-600/10' : 'bg-gradient-to-r from-gray-400/10 to-gray-800/10'
          }`}></div>
        </div>
        
        <div className="relative z-10">
          <Cloud className={`w-20 h-20 mx-auto mb-8 animate-float ${
            darkMode ? 'text-white' : 'text-black'
          }`} />
          
          <h3 className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-black'}`}>
            {t.services.cta.title}
          </h3>
          
          <p className={`text-xl mb-10 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {t.services.cta.description}
          </p>
          
          <button className={`group relative px-10 py-4 rounded-xl font-bold text-lg flex items-center gap-3 mx-auto transition-all duration-300 hover:scale-105 ${
            darkMode 
              ? 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white border border-gray-700' 
              : 'bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-gray-800 text-white border border-gray-400'
          } shadow-2xl hover:shadow-white/10`}>
            <span className="relative z-10">{t.services.cta.button}</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-500/20">
            <div>
              <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>99%</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Satisfaction</div>
            </div>
            <div>
              <div className={`text-3xl font-bold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>24h</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Réponse moyenne</div>
            </div>
            <div>
              <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>1+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projets livrés</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;