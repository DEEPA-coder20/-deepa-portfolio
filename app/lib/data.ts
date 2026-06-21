export const PROJECTS = [
  {
    id: 1,
    title: "Telecom Customer Churn Prediction",
    description:
      "Built a machine learning model on 7,000+ telecom customer records achieving 85% accuracy. Performed EDA, feature engineering, and implemented Logistic Regression & Random Forest algorithms to identify key churn drivers and support retention strategies.",
    tags: ["Python", "Scikit-learn", "Random Forest", "EDA", "Pandas"],
    emoji: "📡",
    accent: "#7c3aed",
    github: "https://github.com/deepatigalannavar",
    demo: null,
    metrics: ["85% Accuracy", "7K+ Records", "2 ML Models"],
  },
  {
    id: 2,
    title: "INX Employee Performance Analysis",
    description:
      "Analyzed employee performance datasets to uncover factors affecting productivity. Built interactive Power BI dashboards covering salary distribution, departmental KPIs, and workforce efficiency to enable data-driven HR decisions.",
    tags: ["Python", "Power BI", "SQL", "Machine Learning", "Pandas"],
    emoji: "📊",
    accent: "#06b6d4",
    github: "https://github.com/deepatigalannavar",
    demo: null,
    metrics: ["Interactive Dashboards", "HR Insights", "ML-Powered"],
  },
  {
    id: 3,
    title: "Speech Emotion Prediction — CNN-LSTM",
    description:
      "Developed a CNN-LSTM hybrid deep learning model for speech emotion recognition using audio datasets, achieving 98% accuracy. Applied Mel Spectrogram feature extraction and benchmarked against GAN and CGAN architectures.",
    tags: ["TensorFlow", "Deep Learning", "CNN", "LSTM", "Python"],
    emoji: "🎙️",
    accent: "#ec4899",
    github: "https://github.com/deepatigalannavar",
    demo: null,
    metrics: ["98% Accuracy", "CNN-LSTM Hybrid", "Mel Spectrograms"],
  },
];

export const SKILLS = {
  "Programming": [
    { name: "Python", level: 90 },
    { name: "SQL", level: 82 },
    { name: "JavaScript", level: 60 },
    { name: "Java", level: 55 },
  ],
  "Machine Learning & AI": [
    { name: "Scikit-learn", level: 88 },
    { name: "TensorFlow / PyTorch", level: 78 },
    { name: "Deep Learning (CNN, LSTM)", level: 80 },
    { name: "NLP & Generative AI", level: 72 },
    { name: "LangChain / LLMs", level: 65 },
  ],
  "Data & Analytics": [
    { name: "Pandas & NumPy", level: 90 },
    { name: "Power BI", level: 82 },
    { name: "EDA & Feature Engineering", level: 88 },
    { name: "Matplotlib / Seaborn", level: 80 },
    { name: "Excel", level: 78 },
  ],
  "Backend & Databases": [
    { name: "MySQL / MongoDB", level: 78 },
    { name: "FastAPI / Flask", level: 65 },
    { name: "REST APIs", level: 68 },
    { name: "Git & GitHub", level: 82 },
  ],
};

export const EXPERIENCE = [
  {
    role: "Data Science Consultant Intern",
    company: "Rubixe Technologies",
    location: "Bengaluru, India",
    period: "2025 – 2026",
    type: "Internship",
    bullets: [
      "Developed Python-based ML pipelines for structured business datasets containing 10K+ records.",
      "Performed data preprocessing, validation, transformation, and feature engineering using Pandas and NumPy.",
      "Assisted in model development, testing, evaluation, and deployment activities.",
      "Worked with SQL databases, REST APIs, and JSON data for integration and analytics.",
      "Used Git and GitHub for version control and collaborative development.",
      "Researched emerging trends in Generative AI, LLMs, and automation technologies.",
    ],
    tags: ["Python", "ML", "SQL", "Pandas", "Git", "REST APIs"],
  },
];

export const CERTIFICATIONS = [
  {
    name: "Certified Data Scientist",
    issuer: "IABAC",
    icon: "🏆",
    color: "#7c3aed",
  },
  {
    name: "Certified Data Scientist",
    issuer: "Datamites",
    icon: "📜",
    color: "#06b6d4",
  },
  {
    name: "AI – Machine Learning Engineer",
    issuer: "Rooman Technologies",
    icon: "🤖",
    color: "#ec4899",
  },
  {
    name: "Advanced EDA for Genomic Data Analysis",
    issuer: "IBM CEP",
    icon: "🔬",
    color: "#f59e0b",
  },
  {
    name: "Life Skills (Jeevan Kaushal) 2.0",
    issuer: "Wadhwani Foundation",
    icon: "🌱",
    color: "#10b981",
  },
];

export const ACHIEVEMENTS = [
  { icon: "🎯", value: "98%", label: "Model Accuracy", sub: "CNN-LSTM Speech Emotion" },
  { icon: "📈", value: "85%", label: "Churn Prediction", sub: "Telecom ML Model" },
  { icon: "💼", value: "10K+", label: "Records Processed", sub: "Real-World Pipelines" },
  { icon: "🏅", value: "5", label: "Certifications", sub: "Industry Recognised" },
  { icon: "🚀", value: "3+", label: "Projects", sub: "End-to-End ML Solutions" },
  { icon: "⭐", value: "8.0", label: "CGPA", sub: "B.E. Computer Science" },
];

export const TESTIMONIALS = [
  {
    name: "Mentor — Rubixe Technologies",
    role: "Data Science Lead",
    text: "Deepa demonstrated exceptional analytical thinking during her internship. Her ability to turn raw datasets into meaningful business insights was impressive for someone at the start of their career.",
    avatar: "R",
    color: "#7c3aed",
  },
  {
    name: "Project Collaborator",
    role: "Peer Researcher",
    text: "Working alongside Deepa on deep learning experiments was a great experience. She approached every architecture benchmark with methodical precision and genuine intellectual curiosity.",
    avatar: "P",
    color: "#06b6d4",
  },
  {
    name: "Academic Advisor",
    role: "CSE Department, BLDEA College",
    text: "Deepa consistently stood out for her initiative in applying classroom concepts to real-world problems. Her CNN-LSTM project is one of the strongest undergraduate research efforts I've supervised.",
    avatar: "A",
    color: "#ec4899",
  },
];
