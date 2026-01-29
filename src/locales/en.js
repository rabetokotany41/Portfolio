// utils/translations.js
export const fr = {
  // Header et Navigation
  header: {
    title: "R.A.E.L Portfolio",
    subtitle: "Développeur Web & Mobile",
    nav: {
      accueil: "Accueil",
      services: "Services",
      travails: "Travaux",
      contact: "Contact",
      resume: "Résumé"
    },
    aria: {
      language: "Passer en anglais",
      darkMode: "Passer en mode clair",
      lightMode: "Passer en mode sombre",
      mobileMenu: "Menu mobile"
    },
    experience: "3+ ans d'expérience"
  },

  // Page Accueil
  home: {
    hero: {
      title: "Bonjour, je suis",
      subtitle: "Développeur Front-End & Back-End",
      description: "Je crée des applications web modernes, minimalistes et performantes avec une approche design épurée. Spécialiste des interfaces monochromes élégantes.",
      projects: "Voir mes projets",
      cv: "Télécharger CV"
    },
    skills: {
      title: "Mes Compétences",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        design: "Design",
        devops: "DevOps"
      }
    }
  },

  // Page Services
  services: {
    title: "Mes Services",
    description: "Je propose des solutions professionnelles en développement web et mobile, adaptées aux besoins des entreprises et des particuliers, pour créer des applications performantes, sécurisées et modernes.",
    list: {
      webDev: {
        title: "Développement Web",
        description: "Création de sites web responsifs, modernes et optimisés pour le SEO.",
        features: ["Design épuré", "Optimisation SEO", "Responsive Design"]
      },
      mobile: {
        title: "Applications Mobiles",
        description: "Développement d'applications iOS et Android avec interfaces intuitives et modernes.",
        features: ["Compatibilité iOS & Android", "UI/UX intuitive", "Design minimaliste"]
      },
      backend: {
        title: "Solutions Backend",
        description: "Développement d'API robustes et architectures serveur scalables, avec documentation claire et maintenance facile.",
        features: ["Node.js / Python / PHP / .NET", "API REST sécurisées", "Architecture scalable"]
      },
      security: {
        title: "Sécurité Web",
        description: "Audits complets, avec une approche transparente et fiable.",
        features: ["Audit sécurité", "Token sécurisé", "Transparence"]
      },
      performance: {
        title: "Optimisation de Performance",
        description: "Amélioration des performances applicatives grâce à un code propre et optimisé.",
        features: ["Code optimisé", "Tests de performance", "Réduction du temps de chargement"]
      },
      consulting: {
        title: "Consulting en Design",
        description: "Conseil en stratégie digitale et design d'interfaces épurées pour maximiser l'expérience utilisateur.",
        features: ["Design minimaliste", "Architecture UI/UX", "Stratégie digitale"]
      }
    },
    cta: {
      title: "Prêt à lancer votre projet ?",
      description: "Contactez-moi pour discuter de vos besoins et créer des solutions digitales efficaces et modernes.",
      button: "Discuter d'un projet"
    }
  },

  // Page Travails
  travails: {
    title: "Mes Travaux",
    description: "Découvrez une sélection de mes projets les plus significatifs, alliant innovation et excellence technique.",
    categories: {
      all: "Tous",
      web: "Web",
      mobile: "Mobile",
      game: "Jeux"
    },
    projectView: "Voir le projet",
    stats: {
      projects: "Projets",
      satisfaction: "Satisfaction client",
      experience: "Années d'expérience",
      clients: "Clients"
    },
    featured: "En vedette"
  },

  // Page Contact
  contact: {
    title: "Contact",
    description: "N'hésitez pas à me contacter pour discuter de votre projet ou pour toute question.",
    info: {
      email: {
        title: "Email",
        value: "rabetokotanyenzo@gmail.com",
        description: "Réponse sous 24h"
      },
      phone: {
        title: "Téléphone",
        value: "+261 38 89 913 56",
        description: "Lun-Ven, 9h-18h"
      },
      location: {
        title: "Localisation",
        value: "Cite Ambodirano, Antananarivo, Madagascar",
        description: "Télétravail disponible"
      }
    },
    form: {
      title: "Envoyez un message",
      fields: {
        name: "Nom complet",
        email: "Email",
        subject: "Sujet",
        message: "Message"
      },
      placeholders: {
        name: "Votre nom complet",
        email: "votre.email@email.com",
        subject: "Sujet du message",
        message: "Votre message ici..."
      },
      button: "Envoyer le message",
      success: "Message envoyé avec succès ! Je vous répondrai bientôt."
    },
    availability: {
      title: "Disponibilités",
      items: [
        { title: "Projets freelance", desc: "Disponible pour nouveaux projets" },
        { title: "Consulting design", desc: "Sessions de 1h à 4h" },
        { title: "Temps de réponse", desc: "Sous 48h pour les nouvelles demandes" }
      ]
    },
    why: {
      title: "Pourquoi me choisir ?",
      items: [
        { title: "Design Minimaliste", desc: "Spécialiste des interfaces noir et blanc épurées" },
        { title: "Livraison précise", desc: "Respect des échéances et qualité du code" }
      ]
    }
  },

  // Page Résumé
  resume: {
    title: "Mon Résumé",
    description: "Étudiant en L3 Génie Logiciel, passionné par le développement web et mobile, et la création d'interfaces modernes et minimalistes. Je réalise des projets académiques et personnels pour acquérir de l'expérience pratique et préparer mon entrée dans le monde professionnel.",
    stats: [
      { value: "2+", label: "Années d'études" },
      { value: "10+", label: "Projets réalisés" },
      { value: "4+", label: "Stages & projets en entreprise" },
      { value: "2+", label: "Applications Web & Mobile" }
    ],
    experience: {
      title: "Expérience & Projets",
      items: [
        {
          title: "Stage Développement Web",
          company: "Région Analamanga",
          period: "2024",
          description: "Développement de fonctionnalités web et gestion réseau dans le cadre d'un stage étudiant.",
          technologies: ["PHP", "MySQL"]
        },
        {
          title: "Projet académique – Application de Gestion de Dons",
          company: "INSI | Antananarivo",
          period: "2023 - 2024",
          description: "Développement d'une application web pour la gestion des dons et des utilisateurs, avec une interface simple, responsive et ergonomique.",
          technologies: ["React", "Tailwind CSS", "Node.js"]
        },
        {
          title: "Mini-projet personnel – Portfolio Interactif",
          company: "Projet Personnel",
          period: "2023 - Présent",
          description: "Création d'un portfolio interactif pour présenter mes projets, compétences et réalisations, avec une interface moderne et responsive.",
          technologies: ["React", "Tailwind CSS", "Vite", "Vue.js", "Angular", "Flutter", "React Native", ".NET", "Python"]
        }
      ]
    },
    education: {
      title: "Éducation",
      items: [
        {
          degree: "Licence 3 Génie Logiciel",
          school: "INSI | Antananarivo",
          period: "2025 - 2026",
          description: "Cours avancés en développement web et mobile, architecture logicielle, bases de données et conception de projets logiciels."
        },
        {
          degree: "Licence 2 Informatique",
          school: "INSI | Antananarivo",
          period: "2024 - 2025",
          description: "Introduction au génie logiciel, programmation orientée objet, algorithmique et structures de données."
        },
        {
          degree: "Licence 1 Informatique",
          school: "INSI | Antananarivo",
          period: "2023 - 2024",
          description: "Fondamentaux en programmation, algorithmique, logique informatique et bases de données."
        }
      ]
    },
    skills: {
      title: "Compétences",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Design & Outils"
      },
      lists: {
        frontend: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "HTML & CSS"],
        backend: ["Node.js", "PHP", "MySQL", "PostgreSQL", "API Design"],
        tools: ["Figma", "Git", "Docker", "VS Code", "Testing"]
      }
    }
  },

  // Footer
  footer: {
    copyright: "© {year} Portfolio Noir & Blanc. Tous droits réservés.",
    developedWith: "Développé avec React & Tailwind CSS",
    design: "Thème Noir & Blanc"
  }
};

export const en = {
  // Header and Navigation
  header: {
    title: "R.A.E.L Portfolio",
    subtitle: "Web & Mobile Developer",
    nav: {
      accueil: "Home",
      services: "Services",
      travails: "Works",
      contact: "Contact",
      resume: "Resume"
    },
    aria: {
      language: "Switch to French",
      darkMode: "Switch to light mode",
      lightMode: "Switch to dark mode",
      mobileMenu: "Mobile menu"
    },
    experience: "3+ years experience"
  },

  // Home Page
  home: {
    hero: {
      title: "Hello, I'm",
      subtitle: "Front-End & Back-End Developer",
      description: "I create modern, minimalist, and high-performance web applications with a clean design approach. Specialist in elegant monochrome interfaces.",
      projects: "View my projects",
      cv: "Download CV"
    },
    skills: {
      title: "My Skills",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        design: "Design",
        devops: "DevOps"
      }
    }
  },

  // Services Page
  services: {
    title: "My Services",
    description: "I provide professional web and mobile development solutions, tailored to the needs of businesses and individuals, to create high-performance, secure, and modern applications.",
    list: {
      webDev: {
        title: "Web Development",
        description: "Creation of responsive, modern, and SEO-optimized websites.",
        features: ["Clean Design", "SEO Optimization", "Responsive Design"]
      },
      mobile: {
        title: "Mobile Applications",
        description: "Development of Android applications with intuitive and modern interfaces.",
        features: ["iOS & Android Compatibility", "Intuitive UI/UX", "Minimalist Design"]
      },
      backend: {
        title: "Backend Solutions",
        description: "Development of robust APIs and scalable server architectures, with clear documentation and easy maintenance.",
        features: ["Node.js / Python / PHP / .NET", "Secure REST APIs", "Scalable Architecture"]
      },
      security: {
        title: "Web Security",
        description: "Comprehensive audits with a transparent and reliable approach.",
        features: ["Security Audit", "Secure Tokens", "Transparency"]
      },
      performance: {
        title: "Performance Optimization",
        description: "Improvement of application performance through clean and optimized code.",
        features: ["Optimized Code", "Performance Testing", "Reduced Loading Time"]
      },
      consulting: {
        title: "Design Consulting",
        description: "Digital strategy consulting and clean interface design to maximize user experience.",
        features: ["Minimalist Design", "UI/UX Architecture", "Digital Strategy"]
      }
    },
    cta: {
      title: "Ready to launch your project?",
      description: "Contact me to discuss your needs and create effective and modern digital solutions.",
      button: "Discuss a project"
    }
  },

  // Works Page
  travails: {
    title: "My Works",
    description: "Discover a selection of my most significant projects, combining innovation and technical excellence.",
    categories: {
      all: "All",
      web: "Web",
      mobile: "Mobile",
      game: "Games"
    },
    projectView: "View Project",
    stats: {
      projects: "Projects",
      satisfaction: "Client Satisfaction",
      experience: "Years Experience",
      clients: "Clients"
    },
    featured: "Featured"
  },

  // Contact Page
  contact: {
    title: "Contact",
    description: "Feel free to contact me to discuss your project or for any questions.",
    info: {
      email: {
        title: "Email",
        value: "rabetokotanyenzo@gmail.com",
        description: "Response within 24h"
      },
      phone: {
        title: "Phone",
        value: "+261 38 89 913 56",
        description: "Mon-Fri, 9am-6pm"
      },
      location: {
        title: "Location",
        value: "Cite Ambodirano, Antananarivo, Madagascar",
        description: "Remote work available"
      }
    },
    form: {
      title: "Send a message",
      fields: {
        name: "Full name",
        email: "Email",
        subject: "Subject",
        message: "Message"
      },
      placeholders: {
        name: "Your full name",
        email: "your.email@email.com",
        subject: "Message subject",
        message: "Your message here..."
      },
      button: "Send message",
      success: "Message sent successfully! I will respond to you soon."
    },
    availability: {
      title: "Availability",
      items: [
        { title: "Freelance projects", desc: "Available for new projects" },
        { title: "Design consulting", desc: "1h to 4h sessions" },
        { title: "Response time", desc: "Within 48h for new requests" }
      ]
    },
    why: {
      title: "Why choose me?",
      items: [
        { title: "Minimalist Design", desc: "Specialist in clean black and white interfaces" },
        { title: "Precise Delivery", desc: "Respect of deadlines and code quality" }
      ]
    }
  },

  // Resume Page
  resume: {
    title: "My Resume",
    description: "L3 Software Engineering student, passionate about web and mobile development, and creating modern, minimalist interfaces. I work on academic and personal projects to gain practical experience and prepare for my entry into the professional world.",
    stats: [
      { value: "2+", label: "Years of study" },
      { value: "10+", label: "Projects completed" },
      { value: "4+", label: "Internships & company projects" },
      { value: "3+", label: "Web & Mobile Applications" }
    ],
    experience: {
      title: "Experience & Projects",
      items: [
        {
          title: "Web Development Internship",
          company: "Analamanga Region",
          period: "2024",
          description: "Development of web features and network management as part of a student internship.",
          technologies: ["PHP", "MySQL"]
        },
        {
          title: "Academic Project – Donation Management Application",
          company: "INSI | Antananarivo",
          period: "2023 - 2024",
          description: "Development of a web application for managing donations and users, with a simple, responsive, and ergonomic interface.",
          technologies: ["React", "Tailwind CSS", "Node.js"]
        },
        {
          title: "Personal Mini-project – Interactive Portfolio",
          company: "Personal Project",
          period: "2023 - Present",
          description: "Creation of an interactive portfolio to present my projects, skills, and achievements, with a modern and responsive interface.",
          technologies: ["React", "Tailwind CSS", "Vite", "Vue.js", "Angular", "Flutter", "React Native", ".NET", "Python"]
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          degree: "Bachelor's Year 3 Software Engineering",
          school: "INSI | Antananarivo",
          period: "2025 - 2026",
          description: "Advanced courses in web and mobile development, software architecture, databases, and software project design."
        },
        {
          degree: "Bachelor's Year 2 Computer Science",
          school: "INSI | Antananarivo",
          period: "2024 - 2025",
          description: "Introduction to software engineering, object-oriented programming, algorithms, and data structures."
        },
        {
          degree: "Bachelor's Year 1 Computer Science",
          school: "INSI | Antananarivo",
          period: "2023 - 2024",
          description: "Fundamentals of programming, algorithms, computer logic, and databases."
        }
      ]
    },
    skills: {
      title: "Skills",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Design & Tools"
      },
      lists: {
        frontend: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "HTML & CSS"],
        backend: ["Node.js", "PHP", "MySQL", "PostgreSQL", "API Design"],
        tools: ["Figma", "Git", "Docker", "VS Code", "Testing"]
      }
    }
  },

  // Footer
  footer: {
    copyright: "© {year} Black & White Portfolio. All rights reserved.",
    developedWith: "Developed with React & Tailwind CSS",
    design: "Black & White Theme"
  }
};
