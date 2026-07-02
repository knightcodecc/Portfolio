import { SkillCategory, FeaturedProject, ExperienceItem, CertificationItem } from "./types";

export const PERSONAL_INFO = {
  name: "Pratham Mahendra Bhat",
  title: "AI Engineer | Machine Learning & Applied AI",
  email: "bhatpratham54@gmail.com",
  github: "knightcodecc",
  githubUrl: "https://github.com/knightcodecc",
  linkedinUrl: "https://linkedin.com/in/pratham-mahendra-bhat-141137240",
  resumeUrl: "#", // Direct download triggers action / local simulated pdf/text resume
  taglines: ["AI/ML Engineer", "Data Scientist", "SDE Intern", "Applied AI Specialist"],
  college: "Cambridge Institute of Technology, Bengaluru",
  classOf: "Class of 2027",
  cgpa: "8.18/10",
  summary: "Final-year Computer Science undergraduate (CGPA 8.18/10) specializing in Machine Learning and Data Science, with hands-on experience building NLP, computer vision, and recommendation systems in Python. Completed professional cohorts in Coding & Programming and IoT through Samsung Innovation Campus."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Machine Learning & AI",
    iconName: "BrainCircuit",
    skills: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Scikit-learn" },
      { name: "Supervised & Unsupervised Learning" },
      { name: "Model Optimization" },
      { name: "Natural Language Processing (NLP)" },
      { name: "Computer Vision" },
      { name: "LLMs & BERT" }
    ]
  },
  {
    title: "Data Science & Analytics",
    iconName: "BarChart3",
    skills: [
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
      { name: "Seaborn" },
      { name: "Exploratory Data Analysis (EDA)" },
      { name: "Feature Engineering" },
      { name: "Statistical Analysis" },
      { name: "Data Visualization" }
    ]
  },
  {
    title: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "SQL" },
      { name: "JavaScript" },
      { name: "HTML & CSS" },
      { name: "Object-Oriented Programming (OOP)" },
      { name: "Data Structures & Algorithms (DSA)" }
    ]
  },
  {
    title: "Tools & Platforms",
    iconName: "Cpu",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "PostgreSQL" },
      { name: "Elasticsearch" },
      { name: "Redis" },
      { name: "Jupyter Notebook" },
      { name: "Linux" },
      { name: "VS Code" }
    ]
  }
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "cyberchat-ai",
    title: "CyberChat AI",
    subtitle: "Conversational SIEM Assistant",
    description: "NLP middleware and contextual investigation chatbot engineered for Security Information and Event Management (SIEM) to streamline cybersecurity analysis.",
    highlights: [
      "Designed NLP middleware utilizing a fine-tuned BERT model to translate plain natural language queries directly into KQL (Kusto Query Language).",
      "Created an advanced contextual investigation system backed by PostgreSQL and Redis caching, cutting average incident analysis times by 60–70%."
    ],
    tags: ["Python", "NLP", "BERT", "FastAPI", "React", "PostgreSQL", "Redis", "SIEM"],
    githubUrl: "https://github.com/knightcodecc",
    iconName: "ShieldAlert"
  },
  {
    id: "securewipe-pro",
    title: "SecureWipe Pro",
    subtitle: "Multi-Platform Data Sanitization",
    description: "Enterprise-grade cross-platform secure deletion and hardware recycling tool compliant with global sanitization standards.",
    highlights: [
      "Built multi-platform data sanitization core (Windows, Linux, Android) adhering strictly to NIST SP 800-88 standards.",
      "Implemented blockchain-powered audit trails issuing immutable, cryptographically verifiable wipe certificates via Ethereum smart contracts.",
      "Integrated machine-learning-based device recognition algorithms to dynamically identify hardware controllers and recommend optimal deletion passes."
    ],
    tags: ["Python", "Blockchain", "Machine Learning", "Cryptography", "NIST SP 800-88", "Ethereum"],
    githubUrl: "https://github.com/knightcodecc",
    iconName: "DatabaseBackup"
  },
  {
    id: "resume-shortlist",
    title: "AI Resume Shortlisting System",
    subtitle: "End-to-End Automated Recruitment",
    description: "Full-stack HR recruitment and talent assessment platform that automates large-scale application analysis and candidate profile matching.",
    highlights: [
      "Engineered automated resume parsing pipelines scanning, extracting, and scoring candidate attributes across 10+ professional domains.",
      "Created candidate ranking engines that reduced recruiter manual screening effort by 70% using semantic matching.",
      "Built interactive dashboard interfaces to visualize candidate compatibility metrics and skill coverage."
    ],
    tags: ["Python", "NLP", "TypeScript", "React", "Scikit-learn", "FastAPI"],
    githubUrl: "https://github.com/knightcodecc",
    iconName: "FileCheck"
  },
  {
    id: "netflix-analysis",
    title: "Netflix Analysis & Recommendation",
    subtitle: "Samsung Innovation Campus",
    description: "Data intelligence project performing deep Exploratory Data Analysis (EDA) and dynamic recommendations on massive streaming datasets.",
    highlights: [
      "Performed deep exploratory data analysis on over 8,000+ Netflix movies and TV shows distributed across 190+ countries.",
      "Engineered a content-based recommendation engine powered by Term Frequency-Inverse Document Frequency (TF-IDF) and Cosine Similarity metrics.",
      "Applied Unsupervised K-Means clustering algorithms to categorize titles into discrete thematic clusters."
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "TF-IDF", "K-Means", "Seaborn", "Matplotlib"],
    githubUrl: "https://github.com/knightcodecc",
    iconName: "Film"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Trainee (AI/ML & AI/IoT Tracks)",
    company: "Samsung Innovation Campus",
    location: "Bengaluru (On-site)",
    period: "Sep 2024 – Mar 2026",
    description: [
      "Successfully completed two core technical apprenticeship cohorts: Coding & Programming, and IoT (Internet of Things).",
      "Gained comprehensive expertise in Python core, Object-Oriented Programming (OOP), Data Structures & Algorithms, and Pandas-based data science workflows.",
      "Developed extensive hands-on experience in IoT architecture, embedded systems integration, hardware protocols, and microcontrollers (Arduino/Raspberry Pi).",
      "Applied academic ML algorithms to build the featured Netflix Content Analysis & Recommendation Engine."
    ],
    tags: ["Python", "OOP", "DSA", "Pandas", "IoT Architecture", "Embedded Systems", "Arduino", "Raspberry Pi", "ML"]
  }
];

export const EDUCATION = {
  degree: "Bachelor of Engineering (B.E.), Computer Science",
  institution: "Cambridge Institute of Technology, Bengaluru",
  period: "2023 – 2027 (Final Year)",
  cgpa: "8.18 / 10",
  specialization: "Machine Learning and Data Science",
  highlights: [
    "Core curriculum includes Analysis and Design of Algorithms, Artificial Intelligence, Machine Learning, Database Management Systems, and Object Oriented Programming.",
    "Successfully completed specialized Coding & Programming and Internet of Things (IoT) courses through Samsung Innovation Campus."
  ]
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Coding and Programming Certificate",
    issuer: "Samsung Innovation Campus",
    year: "2024",
    isHighlight: true
  },
  {
    title: "Internet of Things (IoT) Certificate",
    issuer: "Samsung Innovation Campus",
    year: "2025–2026",
    isHighlight: true
  },
  {
    title: "The Complete Python Bootcamp",
    issuer: "Udemy",
    year: "2023"
  },
  {
    title: "Data Structures & Algorithms with Java",
    issuer: "Apna College",
    year: "2024"
  },
  {
    title: "Full Stack Web Development Program",
    issuer: "Apna College",
    year: "2024"
  }
];
