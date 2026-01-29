import React, { useEffect, useState } from 'react';
import { Code, Palette, Database, Globe, ArrowRight, Download, Sparkles, Zap, Award, Rocket, Star } from 'lucide-react';
import { useTranslation } from '../../utils/translations.js';

const Accueil = ({ darkMode, language }) => {
  const [animated, setAnimated] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Effet d'animation au chargement
  useEffect(() => {
    setAnimated(true);
  }, []);

  // Traductions
  const t = useTranslation(language);
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: t.home.skills.categories.frontend,
      skills: 'React, React Native, Flutter, Vue.js, Angular, Next.js, SCSS, Bootstrap, CSS, Tailwind CSS',
      gradient: 'bg-gradient-to-r from-white to-gray-400'
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: t.home.skills.categories.backend,
      skills: 'Node.js / Express, Django, PHP, .NET, MySQL, PostgreSQL, MongoDB',
      gradient: 'bg-gradient-to-r from-gray-200 to-gray-600'
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: t.home.skills.categories.design,
      skills: 'Figma, Canva, Adobe Photoshop, Adobe Illustrator',
      gradient: 'bg-gradient-to-r from-gray-300 to-gray-700'
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: t.home.skills.categories.devops,
      skills: 'Docker, CI/CD, Git Hub, Linux,',
      gradient: 'bg-gradient-to-r from-gray-400 to-gray-800'
    },
  ];

  // Statistiques animées
  const stats = [
    { value: "10+", label: "Projets", icon: <Rocket /> },
    { value: "3+", label: "Années", icon: <Award /> },
    { value: "100%", label: "Satisfaction", icon: <Star /> },
    { value: "24/7", label: "Support", icon: <Zap /> }
  ];

  return (
    <div className="max-w-7xl mx-auto overflow-hidden">
      {/* Particules de fond */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-white/5 to-gray-400/5 rounded-full blur-3xl animate-pulseGlow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-300/5 to-gray-600/5 rounded-full blur-3xl animate-pulseGlow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Section principale */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between py-16 md:py-24">
        <div className={`md:w-1/2 mb-12 md:mb-0 ${animated ? 'animate-slideInLeft' : 'opacity-0'}`}>
          {/* Badge d'introduction */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${darkMode
            ? 'border-gray-600 bg-gradient-to-r from-white/10 to-gray-400/10'
            : 'border-gray-300 bg-gradient-to-r from-black/5 to-gray-600/5'
            } mb-6 animate-pulse`}>
            <Sparkles size={14} className={darkMode ? 'text-white' : 'text-black'} />
            <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-black'}`}>
              {t.home.hero.badge || "Développeur"}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className={`block ${animated ? 'animate-fadeInUp' : 'opacity-0'} ${darkMode ? 'text-white' : 'text-black'}`}>
              {t.home.hero.title}
            </span>
            <span className={`block ${darkMode ? 'text-gray-300' : 'text-gray-600'} ${animated ? 'animate-fadeInUp' : 'opacity-0'}`}>
              {t.home.hero.subtitle}
            </span>
          </h1>

          <p className={`text-xl mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-600'} ${animated ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {t.home.hero.description}
          </p>

          <div className={`flex flex-wrap gap-4 ${animated ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <button className={`group relative px-8 py-4 rounded-xl font-medium flex items-center gap-3 overflow-hidden transition-all duration-300 hover:scale-105 ${darkMode
              ? 'bg-gradient-to-r from-gray-800 to-gray-900 hover:shadow-2xl hover:shadow-white/10 border border-gray-700'
              : 'bg-gradient-to-r from-black to-gray-800 hover:shadow-2xl hover:shadow-black/10 border border-gray-400'
              } text-white`}>
              <span className="relative z-10">{t.home.hero.projects}</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            <button className={`group relative px-8 py-4 rounded-xl border-2 ${darkMode
              ? 'border-gray-600 hover:border-gray-400 bg-transparent text-gray-300'
              : 'border-gray-400 hover:border-gray-600 bg-transparent text-gray-600'
              } font-medium flex items-center gap-3 overflow-hidden transition-all duration-300 hover:scale-105`}>
              <Download size={20} className="group-hover:animate-bounce" />
              <span>{t.home.hero.cv}</span>
              <div className={`absolute inset-0 ${darkMode ? 'bg-white/5' : 'bg-black/5'
                } -translate-x-full group-hover:translate-x-full transition-transform duration-500`}></div>
            </button>
          </div>

          {/* Statistiques */}
          <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 ${animated ? 'animate-scaleIn' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                  {stat.value}
                </div>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className={darkMode ? 'text-white' : 'text-black'}>{stat.icon}</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo profil animée */}
        <div className={`md:w-2/5 relative ${animated ? 'animate-scaleIn' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <div className="relative group">
            {/* Cercle extérieur animé */}
            <div className={`absolute inset-0 rounded-full ${darkMode
              ? 'bg-gradient-to-r from-white to-gray-400'
              : 'bg-gradient-to-r from-black to-gray-600'
              } animate-spin-slow opacity-20 blur-xl`}></div>

            {/* Cercle moyen */}
            <div className={`absolute inset-4 rounded-full ${darkMode
              ? 'bg-gradient-to-r from-white/30 to-gray-400/30'
              : 'bg-gradient-to-r from-black/30 to-gray-600/30'
              } animate-spin-slow-reverse`}></div>

            {/* Photo profil */}
            <div className={`relative w-72 h-72 md:w-96 md:h-96 rounded-full mx-auto border-4 ${darkMode
              ? 'border-gray-600 bg-gradient-to-br from-gray-900 to-gray-800'
              : 'border-gray-400 bg-gradient-to-br from-white to-gray-100'
              } shadow-2xl flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
              {/* Effet de verre */}
              <div className={`absolute inset-0 ${darkMode
                ? 'bg-gradient-to-br from-transparent via-white/5 to-transparent'
                : 'bg-gradient-to-br from-transparent via-black/5 to-transparent'
                }`}></div>

              <div className=" backgrondimage text-center relative z-10 p-8">
                {/* Image de profil */}              
              </div>

              {/* Particules flottantes */}
              <div className={`absolute top-4 right-4 w-3 h-3 rounded-full animate-ping ${darkMode ? 'bg-white' : 'bg-black'
                }`}></div>
              <div className={`absolute bottom-4 left-4 w-2 h-2 rounded-full animate-ping ${darkMode ? 'bg-gray-400' : 'bg-gray-600'
                }`} style={{ animationDelay: '0.3s' }}></div>
            </div>

            {/* Badges orbitaux */}
            <div className="absolute -top-2 -right-2 animate-orbit">
              <div className={`w-12 h-12 rounded-full ${darkMode
                ? 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700'
                : 'bg-gradient-to-r from-gray-200 to-gray-300 border border-gray-400'
                } flex items-center justify-center shadow-lg`}>
                <Code size={20} className={darkMode ? 'text-white' : 'text-black'} />
              </div>
            </div>
            <div className="absolute -bottom-2 -left-2 animate-orbit-reverse">
              <div className={`w-12 h-12 rounded-full ${darkMode
                ? 'bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700'
                : 'bg-gradient-to-r from-gray-300 to-gray-200 border border-gray-400'
                } flex items-center justify-center shadow-lg`}>
                <Palette size={20} className={darkMode ? 'text-white' : 'text-black'} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section compétences */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className={`w-12 h-1 rounded-full ${darkMode
              ? 'bg-gradient-to-r from-white to-gray-400'
              : 'bg-gradient-to-r from-black to-gray-600'
              }`}></div>
            <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
              {t.home.skills.title}
            </h2>
            <div className={`w-12 h-1 rounded-full ${darkMode
              ? 'bg-gradient-to-r from-gray-400 to-gray-600'
              : 'bg-gradient-to-r from-gray-600 to-gray-800'
              }`}></div>
          </div>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Expertise technique et compétences acquises au fil des projets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transition-all duration-500 ${animated ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Carte de compétence */}
              <div className={`relative p-8 rounded-2xl border-2 ${hoveredSkill === index
                ? darkMode
                  ? 'border-gray-500 bg-gradient-to-br from-gray-800/50 to-gray-900/50'
                  : 'border-gray-400 bg-gradient-to-br from-gray-100/50 to-gray-200/50'
                : darkMode
                  ? 'border-gray-700/50 bg-gray-800/50'
                  : 'border-gray-200/50 bg-white/50'
                } backdrop-blur-sm shadow-2xl transition-all duration-500 group-hover:scale-105`}>

                {/* Effet de lueur au survol */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>

                {/* Icône */}
                <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${hoveredSkill === index
                  ? darkMode
                    ? `bg-gradient-to-r ${skill.gradient} text-white scale-110`
                    : `bg-gradient-to-r ${skill.gradient} text-black scale-110`
                  : darkMode
                    ? 'bg-gray-700 text-gray-300'
                    : 'bg-gray-100 text-gray-600'
                  }`}>
                  <div className="group-hover:animate-pulse">
                    {skill.icon}
                  </div>
                </div>

                {/* Titre */}
                <h3 className={`text-xl font-bold mb-3 ${hoveredSkill === index
                  ? darkMode
                    ? 'text-white'
                    : 'text-black'
                  : darkMode
                    ? 'text-white'
                    : 'text-gray-800'
                  } transition-colors duration-300`}>
                  {skill.title}
                </h3>

                {/* Compétences */}
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {skill.skills}
                </p>

                {/* Barre de progression animée */}
                <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
                  <div
                    className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1000 ${hoveredSkill === index ? 'w-full' : 'w-3/4'
                      }`}
                    style={{
                      animation: hoveredSkill === index ? 'pulseGlow 2s infinite' : 'none'
                    }}
                  ></div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {skill.skills.split(', ').map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${hoveredSkill === index
                        ? darkMode
                          ? `bg-gradient-to-r ${skill.gradient} text-white`
                          : `bg-gradient-to-r ${skill.gradient} text-black`
                        : darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Effet de particules */}
              {hoveredSkill === index && (
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  <div className={`absolute -top-2 -left-2 w-4 h-4 rounded-full animate-ping ${darkMode ? 'bg-white' : 'bg-black'
                    }`}></div>
                  <div className={`absolute -bottom-2 -right-2 w-3 h-3 rounded-full animate-ping ${darkMode ? 'bg-gray-400' : 'bg-gray-600'
                    }`} style={{ animationDelay: '0.2s' }}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Accueil;