import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Shield, Zap, MessageSquare, Loader } from 'lucide-react';
import { useTranslation } from '../../utils/translations.js';

const Contact = ({ darkMode, language }) => {
  const [animated, setAnimated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showMessage, setShowMessage] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [shakeField, setShakeField] = useState(null);

  useEffect(() => {
    setAnimated(true);
  }, []);

  // Traductions
  const t = useTranslation(language);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (shakeField === name) {
      setShakeField(null);
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setShakeField('name');
      return false;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setShakeField('email');
      return false;
    }
    if (!formData.subject.trim()) {
      setShakeField('subject');
      return false;
    }
    if (!formData.message.trim()) {
      setShakeField('message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSending(true);

    // Simulation d'envoi avec animation
    setTimeout(() => {
      console.log('Données envoyées:', formData);
      setIsSending(false);
      setShowMessage(true);

      // Animation de succès
      setTimeout(() => setShowMessage(false), 5000);

      // Reset du formulaire
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  // Informations de contact avec animations
  const contactInfo = [
    {
      icon: <Mail />,
      title: t.contact.info.email.title,
      value: t.contact.info.email.value,
      desc: t.contact.info.email.description,
      animationDelay: '0.2s'
    },
    {
      icon: <Phone />,
      title: t.contact.info.phone.title,
      value: t.contact.info.phone.value,
      desc: t.contact.info.phone.description,
      animationDelay: '0.4s'
    },
    {
      icon: <MapPin />,
      title: t.contact.info.location.title,
      value: t.contact.info.location.value,
      desc: t.contact.info.location.description,
      animationDelay: '0.6s'
    }
  ];

  // Pourquoi moi avec animations
  const whyMe = t.contact.why.items.map((item, idx) => ({
    ...item,
    icon: idx === 0 ? <Zap /> : idx === 1 ? <Shield /> : idx === 2 ? <Users /> : <MessageSquare />,
    animationDelay: `${0.8 + idx * 0.1}s`
  }));

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      {/* Effets de fond */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl animate-pulse ${darkMode ? 'bg-gradient-to-r from-white/5 to-gray-400/5' : 'bg-gradient-to-r from-black/5 to-gray-600/5'
          }`}></div>
        <div className={`absolute bottom-20 right-20 w-64 h-64 rounded-full blur-3xl animate-pulse ${darkMode ? 'bg-gradient-to-r from-gray-300/5 to-gray-600/5' : 'bg-gradient-to-r from-gray-400/5 to-gray-800/5'
          }`} style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Titre avec animation */}
      <div className={`text-center mb-16 relative z-10 ${animated ? 'animate-fadeInUp' : 'opacity-0'}`}>
        <div className="inline-flex items-center gap-3 mb-4">
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
            {t.contact.title}
          </h1>
        </div>
        <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'} ${animated ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {t.contact.description}
        </p>
      </div>

      {/* Cartes de contact animées */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 relative z-10">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className={`group relative p-8 rounded-2xl backdrop-blur-sm border-2 transition-all duration-500 hover:scale-105 cursor-pointer ${darkMode
                ? 'border-gray-700/50 bg-gray-800/50 hover:border-gray-500/50'
                : 'border-gray-200/50 bg-white/50 hover:border-gray-400/50'
              } ${animated ? 'animate-fadeInUp' : 'opacity-0'}`}
            style={{ animationDelay: info.animationDelay }}
          >
            {/* Effet de gradient */}
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 ${darkMode ? 'bg-gradient-to-r from-white/20 to-gray-400/20' : 'bg-gradient-to-r from-black/10 to-gray-600/10'
              }`}></div>

            <div className="relative z-10">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                <div className={darkMode ? 'text-white' : 'text-black'}>
                  {info.icon}
                </div>
              </div>

              <h3 className={`text-xl font-bold mb-3 group-hover:text-gray-400 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-black'
                }`}>
                {info.title}
              </h3>

              <p className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
                {info.value}
              </p>

              <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                {info.desc}
              </p>

              {/* Indicateur de disponibilité */}
              <div className="mt-4 flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full animate-pulse ${darkMode ? 'bg-white' : 'bg-black'
                  }`}></div>
                <span className={`text-sm ${darkMode ? 'text-white' : 'text-black'}`}>Disponible</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        {/* Formulaire avec animations */}
        <div
          className={`group relative p-8 rounded-2xl backdrop-blur-sm border-2 ${darkMode
              ? 'border-gray-700/50 bg-gray-800/50'
              : 'border-gray-200/50 bg-white/50'
            } ${animated ? 'animate-slideInLeft' : 'opacity-0'}`}
          style={{ animationDelay: '0.8s' }}
        >
          {/* Effet de lueur au survol */}
          <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 ${darkMode ? 'bg-gradient-to-r from-white/5 to-gray-400/5' : 'bg-gradient-to-r from-black/5 to-gray-600/5'
            }`}></div>

          <div className="relative z-10">
            <h2 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-black'
              }`}>
              <MessageSquare className={darkMode ? 'text-white' : 'text-black'} />
              {t.contact.form.title}
            </h2>

            {/* Message de succès animé */}
            {showMessage && (
              <div className={`mb-8 p-6 rounded-xl flex items-center gap-4 animate-bounceIn ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>
                <CheckCircle className="flex-shrink-0 animate-pulse" />
                <div>
                  <p className="font-bold">{t.contact.form.success}</p>
                  <p className="text-sm opacity-80">Je vous répondrai dans les plus brefs délais</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block mb-3 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.contact.form.fields.name} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 ${shakeField === 'name' ? 'animate-shake border-red-500' :
                        darkMode
                          ? 'bg-gray-700/50 border-gray-600 text-white focus:border-gray-500'
                          : 'bg-white border-gray-300 focus:border-gray-400'
                      }`}
                    placeholder="Votre nom complet"
                  />
                </div>
                <div>
                  <label className={`block mb-3 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.contact.form.fields.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 ${shakeField === 'email' ? 'animate-shake border-red-500' :
                        darkMode
                          ? 'bg-gray-700/50 border-gray-600 text-white focus:border-gray-500'
                          : 'bg-white border-gray-300 focus:border-gray-400'
                      }`}
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className={`block mb-3 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.contact.form.fields.subject} *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 ${shakeField === 'subject' ? 'animate-shake border-red-500' :
                      darkMode
                        ? 'bg-gray-700/50 border-gray-600 text-white focus:border-gray-500'
                        : 'bg-white border-gray-300 focus:border-gray-400'
                    }`}
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label className={`block mb-3 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.contact.form.fields.message} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 ${shakeField === 'message' ? 'animate-shake border-red-500' :
                      darkMode
                        ? 'bg-gray-700/50 border-gray-600 text-white focus:border-gray-500'
                        : 'bg-white border-gray-300 focus:border-gray-400'
                    }`}
                  placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`group relative w-full py-5 px-8 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${darkMode
                    ? 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white border border-gray-700'
                    : 'bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-gray-800 text-white border border-gray-400'
                  } shadow-2xl hover:shadow-white/10`}
              >
                {isSending ? (
                  <>
                    <Loader className="animate-spin" />
                    <span>Envoi en cours...</span>
                  </>
                ) : (
                  <>
                    <Send className="group-hover:animate-pulse" />
                    <span>{t.contact.form.button}</span>
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </form>
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="space-y-8">
          {/* Disponibilités */}
          <div
            className={`group relative p-8 rounded-2xl backdrop-blur-sm border-2 ${darkMode
                ? 'border-gray-700/50 bg-gray-800/50'
                : 'border-gray-200/50 bg-white/50'
              } ${animated ? 'animate-slideInRight' : 'opacity-0'}`}
            style={{ animationDelay: '0.8s' }}
          >
            <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-black'
              }`}>
              <Clock className={darkMode ? 'text-white' : 'text-black'} />
              {t.contact.availability.title}
            </h3>

            <ul className="space-y-6">
              {t.contact.availability.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center group/item transition-all duration-300 hover:translate-x-2"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="relative mr-4">
                    <div className={`w-8 h-8 rounded-full ${darkMode
                        ? 'bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700'
                        : 'bg-gradient-to-r from-gray-200 to-gray-300 border border-gray-400'
                      } flex items-center justify-center text-white`}>
                      {idx + 1}
                    </div>
                    <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${darkMode ? 'bg-white' : 'bg-black'
                      }`}></div>
                  </div>
                  <div>
                    <p className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>{item.title}</p>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Pourquoi moi */}
          <div
            className={`group relative p-8 rounded-2xl backdrop-blur-sm border-2 ${darkMode
                ? 'border-gray-700/50 bg-gray-800/50'
                : 'border-gray-200/50 bg-white/50'
              } ${animated ? 'animate-slideInRight' : 'opacity-0'}`}
            style={{ animationDelay: '1s' }}
          >
            <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${darkMode ? 'text-white' : 'text-black'
              }`}>
              <Shield className={darkMode ? 'text-white' : 'text-black'} />
              {t.contact.why.title}
            </h3>

            <ul className="space-y-6">
              {whyMe.map((item, idx) => (
                <li
                  key={idx}
                  className={`group/item transition-all duration-500 hover:scale-105 ${animated ? 'animate-fadeInUp' : 'opacity-0'
                    }`}
                  style={{ animationDelay: item.animationDelay }}
                >
                  <div className={`p-6 rounded-xl border-2 transition-all duration-500 ${darkMode
                      ? 'border-gray-700/50 bg-gray-800/50 group-hover/item:border-gray-500/50'
                      : 'border-gray-200/50 bg-white/50 group-hover/item:border-gray-400/50'
                    }`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover/item:scale-110 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'
                        }`}>
                        <div className={darkMode ? 'text-white' : 'text-black'}>{item.icon}</div>
                      </div>
                      <div>
                        <p className={`font-bold text-lg mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{item.title}</p>
                        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;