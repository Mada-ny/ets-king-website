import { 
    Monitor, Wrench, Network, Hammer, Camera, AirVent, Award, Key,
    Zap, Handshake, BookOpen, ShieldCheck,
} from "lucide-react";

// Informations de l'entreprise
export const COMPANY_INFO = {
    name: "Établissement KING",
    legalName: "ETABLISSEMENT KING",
    slogan: "Votre partenaire IT de confiance à Abidjan",
    description: "Vente, dépannage, maintenance et installation d'infrastructure informatique pour PME, PMI, TPE et professionnels en Côte d'Ivoire",
    
    // Coordonnées
    phones: ["05 05 87 51 21", "01 03 19 95 75", "07 08 16 85 87"],
    phoneFormatted: ["+225 05 05 87 51 21", "+225 01 03 19 95 75", "+225 07 08 16 85 87"],
    emails: ["youdebest@yahoo.fr", "etsking.info@gmail.com", "youdeking@gmail.com"],
    
    // Adresse
    address: "Yopougon Maroc",
    city: "Abidjan",
    country: "Côte d'Ivoire",
    postalBox: "01 BP 11052 Abidjan 01",
    
    // Informations légales
    registre: "CI-YOP-2010-A 173",
    accountNumber: "0216719N",
    bankAccount: "SGBCI N° 011241475996",
    taxCenter: "Centre des Impôts de Yopougon",
    
    // Coordonnées GPS (Yopougon Maroc)
    coordinates: {
        lat: 5.3364,
        lng: -4.0897,
    },
    
    // Heures d'ouverture
    openingHours: {
        weekdays: "08:00 - 18:00",
        saturday: "08:00 - 14:00",
        sunday: "Fermé",
    },
};

// Services principaux
export const SERVICES = [
    {
        id: "fourniture-installation",
        title: "Fourniture & Installation de Matériels",
        shortDescription: "Solutions informatiques complètes adaptées à vos besoins",
        description: "Nous analysons vos besoins, vous conseillons les meilleures solutions du marché, et gérons l'approvisionnement et l'installation de votre infrastructure IT.",
        icon: Monitor,
        features: [
        "Audit et analyse de vos besoins",
        "Recommandation de solutions adaptées",
        "Sourcing auprès de nos partenaires",
        "Installation et configuration complète",
        "Tests et validation",
        "Formation de vos équipes",
        ],
        benefits: [
        "Gain de temps : nous gérons tout",
        "Expertise professionnelle garantie",
        "Matériel de qualité professionnelle",
        "Un seul interlocuteur pour votre projet",
        ],
    },
    {
        id: "depannage",
        title: "Dépannage Informatique",
        shortDescription: "Intervention rapide pour tous vos problèmes informatiques",
        description: "Service de dépannage complet pour résoudre tous vos problèmes informatiques rapidement et efficacement.",
        icon: Wrench,
        features: [
        "Dépannage Windows (toutes versions)",
        "Résolution problèmes matériels",
        "Récupération de fichiers (jusqu'à 100Go)",
        "Réinstallation système",
        "Nettoyage virus et malwares",
        "Dépannage connexion Internet",
        ],
        process: [
        "Analyse du problème par téléphone",
        "Détermination du degré d'urgence",
        "Délégation d'un technicien sur site",
        "Validation du bon fonctionnement",
        "Accompagnement de l'utilisateur",
        ],
    },
    {
        id: "installation-reseaux",
        title: "Installation Réseaux",
        shortDescription: "Conception et réalisation de réseaux informatiques performants",
        description: "Nous concevons et réalisons l'intégralité de votre réseau d'entreprise avec des solutions performantes et économiques.",
        icon: Network,
        features: [
        "Câblage structuré (Cat 5, 5e, 6, 7)",
        "Installation prises RJ45",
        "Configuration switches et routeurs",
        "Baies de brassage (6U à 42U)",
        "Upgrade architecture réseau",
        "Formation des utilisateurs",
        ],
        technologies: [
        "Câbles cuivre: UTP, FTP, STP, SFTP",
        "Standards de l'industrie",
        "Architecture commutée administrable",
        ],
    },
    {
        id: "maintenance",
        title: "Contrats de Maintenance",
        shortDescription: "Maintenance préventive et curative pour votre parc informatique",
        description: "Un contrat de maintenance sur-mesure pour garantir le bon fonctionnement permanent de votre infrastructure IT.",
        icon: Hammer,
        features: [
        "Audit complet du parc informatique",
        "Assistance illimitée par téléphone",
        "Interventions sur site (< 48h)",
        "Prise de contrôle à distance",
        "Suivi et conseil personnalisés",
        "Installation nouveaux matériels",
        ],
        advantages: [
        "Budget maîtrisé à l'avance",
        "Économie par rapport à un salarié",
        "Disponibilité permanente",
        "Expertise multi-domaines",
        ],
    },
    {
        id: "securite-electronique",
        title: "Sécurité Électronique",
        shortDescription: "Systèmes de vidéosurveillance et sécurité pour entreprises",
        description: "Installation et maintenance de systèmes de vidéosurveillance professionnels pour sécuriser vos locaux.",
        icon: Camera,
        features: [
        "Caméras de surveillance IP",
        "Enregistreurs numériques (DVR/NVR)",
        "Systèmes d'alarme",
        "Contrôle d'accès",
        "Maintenance et support",
        "Accès à distance via smartphone",
        ],
    },
    {
        id: "climatisation-electricite",
        title: "Climatisation & Électricité",
        shortDescription: "Installation et entretien de systèmes de climatisation",
        description: "Service complet d'installation, maintenance et dépannage de climatiseurs et systèmes électriques.",
        icon: AirVent,
        features: [
        "Installation climatiseurs",
        "Entretien et maintenance",
        "Dépannage rapide",
        "Installation électrique",
        "Mise aux normes",
        ],
    },
];



// Raisons de nous choisir
export const WHY_CHOOSE_US = [
    {
        id: 1,
        title: "Expertise Locale",
        description: "Plus de 15 ans d'expérience au service des entreprises ivoiriennes",
        icon: Award,
    },
    {
        id: 2,
        title: "Solution Clé en Main",
        description: "Du conseil à l'installation, nous gérons votre projet de bout en bout",
        icon: Key,
    },
    {
        id: 3,
        title: "Disponibilité",
        description: "Service client réactif et interventions rapides (< 48h)",
        icon: Zap,
    },
    {
        id: 4,
        title: "Partenaires de Confiance",
        description: "Nous travaillons avec les meilleures marques du marché",
        icon: Handshake,
    },
    {
        id: 5,
        title: "Accompagnement",
        description: "Formation et support pour vos équipes inclus dans nos prestations",
        icon: BookOpen,
    },
    {
        id: 6,
        title: "Garantie Qualité",
        description: "Matériels professionnels avec garantie et service après-vente",
        icon: ShieldCheck,
    },
];

// Navigation
export const NAV_LINKS = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/a-propos", label: "À Propos" },
    { href: "/contact", label: "Contact" },
];

// Témoignages (à personnaliser plus tard)
export const TESTIMONIALS = [
    {
        id: 1,
        name: "Directeur PME Abobo",
        company: "Entreprise de Commerce",
        text: "Service rapide et professionnel. Nos problèmes informatiques sont toujours résolus rapidement.",
        rating: 5,
    },
    {
        id: 2,
        name: "Responsable IT",
        company: "Cabinet d'Avocats",
        text: "Le contrat de maintenance nous a fait économiser beaucoup. Je recommande vivement ETS KING.",
        rating: 5,
    },
    {
        id: 3,
        name: "Chef d'Entreprise",
        company: "Restaurant",
        text: "Installation de notre système de vidéosurveillance impeccable. Très satisfait du résultat.",
        rating: 5,
    },
];

// FAQ
export const FAQ = [
    {
        question: "Intervenez-vous uniquement à Yopougon ?",
        answer: "Non, nous intervenons sur toute la région d'Abidjan et ses environs.",
    },
    {
        question: "Quels sont vos délais d'intervention ?",
        answer: "Pour nos clients sous contrat de maintenance, nous intervenons sous 48h maximum. Pour les autres, nous nous adaptons selon l'urgence.",
    },
    {
        question: "Proposez-vous des devis gratuits ?",
        answer: "Oui, tous nos devis sont gratuits et sans engagement.",
    },
    {
        question: "Quelles marques de matériel proposez-vous ?",
        answer: "Nous travaillons avec les grandes marques professionnelles (HP, Dell, Lenovo, Cisco, etc.) pour garantir qualité et fiabilité.",
    },
    {
        question: "Comment fonctionne le contrat de maintenance ?",
        answer: "Le contrat inclut un audit initial, une assistance illimitée par téléphone, des interventions sur site illimitées, et un suivi régulier de votre parc informatique.",
    },
];

// Métadonnées SEO
export const SEO_KEYWORDS = [
    "informatique Abidjan",
    "maintenance informatique Côte d'Ivoire",
    "dépannage ordinateur Yopougon",
    "matériel informatique Abidjan",
    "installation réseau entreprise",
    "vidéosurveillance Abidjan",
    "contrat maintenance IT",
    "fournitures bureau Abidjan",
    "technicien informatique Côte d'Ivoire",
    "serveur entreprise Abidjan",
];