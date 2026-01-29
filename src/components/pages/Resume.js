import React, { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, Award, Code, Users, Star, Clock, CheckCircle } from 'lucide-react';
import { useTranslation } from '../../utils/translations.js';

const Resume = ({ darkMode, language }) => {
  const [animated, setAnimated] = useState(false);
  const [progressAnimation, setProgressAnimation] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    setAnimated(true);
    setTimeout(() => setProgressAnimation(true), 500);
  }, []);

  const t = useTranslation(language);

  const experiences = t.resume.experience.items;

  const education = t.resume.education.items;

  const skills = [
    {
      category: t.resume.skills.categories.frontend,
      items: t.resume.skills.lists.frontend,
      levels: [70, 60, 65, 75, 80],
      gradient: 'from-white to-gray-400'
    },
    {
      category: t.resume.skills.categories.backend,
      items: t.resume.skills.lists.backend,
      levels: [70, 60, 75, 70, 60],
      gradient: 'from-gray-200 to-gray-600'
    },
    {
      category: t.resume.skills.categories.tools,
      items: t.resume.skills.lists.tools,
      levels: [50, 55, 55, 80, 50],
      gradient: 'from-gray-300 to-gray-700'
    }
  ];

  // Stats animées
  const stats = [
    {
      value: t.resume.stats[0].value,
      label: t.resume.stats[0].label,
      icon: <Briefcase />
    },
    {
      value: t.resume.stats[1].value,
      label: t.resume.stats[1].label,
      icon: <Code />
    },
    {
      value: t.resume.stats[2].value,
      label: t.resume.stats[2].label,
      icon: <Users />
    },
    {
      value: t.resume.stats[3].value,
      label: t.resume.stats[3].label,
      icon: <Award />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Effets de fond */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-10 w-64 h-64 rounded-full blur-3xl ${darkMode ? 'bg-gradient-to-r from-white/5 to-gray-400/5' : 'bg-gradient-to-r from-black/5 to-gray-600/5'
          }`}></div>
        <div className={`absolute bottom-1/4 right-10 w-64 h-64 rounded-full blur-3xl ${darkMode ? 'bg-gradient-to-r from-gray-300/5 to-gray-600/5' : 'bg-gradient-to-r from-gray-400/5 to-gray-800/5'
          }`}></div>
      </div>

      {/* Titre avec animation */}
      <div className={`text-center mb-16 relative z-10 ${animated ? 'animate-fadeInUp' : 'opacity-0'}`}>
        <div className="inline-flex items-center gap-3 mb-4">
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
            {t.resume.title}
          </h1>
        </div>
        <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'} ${animated ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {t.resume.description}
        </p>
      </div>

      {/* Statistiques animées */}
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 relative z-10 ${animated ? 'animate-scaleIn' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`group relative p-6 rounded-2xl backdrop-blur-sm border-2 transition-all duration-500 hover:scale-105 cursor-pointer ${darkMode
              ? 'border-gray-700/50 bg-gray-800/50 hover:border-gray-500/50'
              : 'border-gray-200/50 bg-white/50 hover:border-gray-400/50'
              }`}
          >
            {/* Effet de lueur au survol */}
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${darkMode ? 'bg-gradient-to-r from-white/10 to-gray-400/10' : 'bg-gradient-to-r from-black/5 to-gray-600/5'
              } blur-xl`}></div>

            <div className="relative z-10">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-500 group-hover:scale-110 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                <div className={darkMode ? 'text-white' : 'text-black'}>
                  {stat.icon}
                </div>
              </div>
              <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
                {stat.value}
              </div>
              <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        {/* Expérience professionnelle */}
        <div className="lg:col-span-2">
          <div className={`flex items-center mb-6 ${animated ? 'animate-slideInLeft' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-500 hover:scale-110 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}>
              <Briefcase className={darkMode ? 'text-white' : 'text-black'} />
              <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full animate-ping ${darkMode ? 'bg-white' : 'bg-black'
                }`}></div>
            </div>
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{t.resume.experience.title}</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative group ${animated ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                {/* Timeline */}
                <div className="flex">
                  {/* Point de timeline */}
                  <div className="relative mr-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${darkMode ? 'bg-gray-800 border-2 border-gray-700' : 'bg-white border-2 border-gray-200'
                      }`}>
                      <div className={`w-4 h-4 rounded-full transition-all duration-500 ${darkMode ? 'bg-white' : 'bg-black'
                        } group-hover:scale-125 group-hover:animate-pulseGlow`}></div>
                    </div>

                    {/* Ligne verticale */}
                    {index < experiences.length - 1 && (
                      <div className={`absolute left-1/2 top-12 w-0.5 h-full -translate-x-1/2 ${darkMode ? 'bg-gradient-to-b from-gray-700 via-white to-gray-700' : 'bg-gradient-to-b from-gray-300 via-black to-gray-300'
                        }`}></div>
                    )}
                  </div>

                  {/* Contenu */}
                  <div className={`flex-1 pb-8 transition-all duration-500 group-hover:translate-x-2 ${index < experiences.length - 1 ? 'border-b' : ''
                    } ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    <div className={`p-6 rounded-xl backdrop-blur-sm border-2 transition-all duration-500 group-hover:scale-105 ${darkMode
                      ? 'border-gray-700/50 bg-gray-800/50 group-hover:border-gray-500/50'
                      : 'border-gray-200/50 bg-white/50 group-hover:border-gray-400/50'
                      }`}>
                      <h3 className={`text-xl font-bold mb-1 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-black'
                        }`}>
                        {exp.title}
                        {index === 0 && (
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${darkMode
                            ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700'
                            : 'bg-gradient-to-r from-black to-gray-800 text-white border border-gray-400'
                            } animate-pulse`}>
                            Actuel
                          </span>
                        )}
                      </h3>

                      <div className="flex flex-wrap items-center mb-3">
                        <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {exp.company}
                        </span>
                        <span className={`mx-3 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>•</span>
                        <span className={`flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          <Clock size={14} />
                          {exp.period}
                        </span>
                      </div>

                      <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-2 rounded-lg text-sm transition-all duration-300 hover:scale-110 ${darkMode
                              ? 'bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600 hover:text-white'
                              : 'bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200 hover:text-black'
                              }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Éducation et Compétences */}
        <div className="space-y-8">
          {/* Éducation */}
          <div className={`${animated ? 'animate-slideInRight' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center mb-6">
              <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-500 hover:scale-110 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                <GraduationCap className={darkMode ? 'text-white' : 'text-black'} />
                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full animate-ping ${darkMode ? 'bg-white' : 'bg-black'
                  }`}></div>
              </div>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{t.resume.education.title}</h2>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`group relative p-6 rounded-xl backdrop-blur-sm border-2 transition-all duration-500 hover:scale-105 cursor-pointer ${darkMode
                    ? 'border-gray-700/50 bg-gray-800/50 hover:border-gray-500/50'
                    : 'border-gray-200/50 bg-white/50 hover:border-gray-400/50'
                    } ${animated ? 'animate-fadeInUp' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {/* Effet de lueur */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${darkMode ? 'bg-gradient-to-r from-white/5 to-gray-400/5' : 'bg-gradient-to-r from-black/5 to-gray-600/5'
                    } blur-xl`}></div>

                  <div className="relative z-10">
                    <h3 className={`font-bold text-lg mb-1 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-black'
                      }`}>
                      {edu.degree}
                      <CheckCircle size={16} className={darkMode ? 'text-white' : 'text-black'} />
                    </h3>
                    <p className={`font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {edu.school}
                    </p>
                    <p className={`mb-3 flex items-center gap-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <Clock size={14} />
                      {edu.period}
                    </p>
                    <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compétences avec barres de progression */}
          <div className={`${animated ? 'animate-slideInRight' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <div className="flex items-center mb-6">
              <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all duration-500 hover:scale-110 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                <Award className={darkMode ? 'text-white' : 'text-black'} />
                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full animate-ping ${darkMode ? 'bg-white' : 'bg-black'
                  }`}></div>
              </div>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{t.resume.skills.title}</h2>
            </div>

            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className={`group ${animated ? 'animate-fadeInUp' : 'opacity-0'}`}
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <h3 className={`font-bold mb-4 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-black'
                    }`}>
                    <span>{skillGroup.category}</span>
                    {hoveredSkill === index && (
                      <Star size={14} className={darkMode ? 'text-white' : 'text-black'} />
                    )}
                  </h3>

                  <div className="space-y-4">
                    {skillGroup.items.map((skill, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between">
                          <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {skill}
                          </span>
                          <span className={`font-bold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {progressAnimation ? `${skillGroup.levels[idx]}%` : '0%'}
                          </span>
                        </div>
                        <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${hoveredSkill === index ? 'animate-pulseGlow' : ''
                              }`}
                            style={{
                              width: progressAnimation ? `${skillGroup.levels[idx]}%` : '0%',
                              background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                              backgroundImage: `linear-gradient(to right, ${darkMode
                                ? skillGroup.gradient === 'from-white to-gray-400' ? '#ffffff, #9ca3af' :
                                  skillGroup.gradient === 'from-gray-200 to-gray-600' ? '#e5e7eb, #4b5563' :
                                    '#d1d5db, #374151'
                                : skillGroup.gradient === 'from-white to-gray-400' ? '#000000, #6b7280' :
                                  skillGroup.gradient === 'from-gray-200 to-gray-600' ? '#111827, #9ca3af' :
                                    '#1f2937, #d1d5db'
                                })`,
                              transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;