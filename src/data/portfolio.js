// ─── Personal Info ────────────────────────────────────────
export const personal = {
  name: 'Debjit Paul',
  title: 'Software Engineer',
  taglines: [
    'Full Stack Developer',
    'React Specialist',
    '.NET Engineer',
    'Problem Solver',
  ],
  email: 'paul.debjit.2022@gmail.com',
  phone: '+91 9903659179',
  linkedin: 'https://www.linkedin.com/in/debjitpaul',
  location: 'Jodhpur, India',
  summary:
    'Software Engineer with 1+ year of experience building scalable full-stack applications using React, ASP.NET Core, and MongoDB. Skilled in developing REST APIs, real-time features, and performance-driven solutions. Passionate about solving real-world problems with clean and efficient code.',
}

// ─── Skills ───────────────────────────────────────────────
export const skills = {
  languages: [
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'C# / .NET', level: 88 },
    { name: 'Python', level: 75 },
    { name: 'Java', level: 72 },
    { name: 'C / C++', level: 70 },
    { name: 'SQL', level: 80 },
  ],
  frameworks: [
    { name: 'React.js', level: 92 },
    { name: 'ASP.NET Core', level: 88 },
    { name: 'Node.js / Express', level: 80 },
    { name: 'Fluent UI', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
  ],
  tools: [
    { name: 'MongoDB', level: 85 },
    { name: 'SQL Server', level: 80 },
    { name: 'Azure', level: 72 },
    { name: 'Elasticsearch', level: 68 },
    { name: 'Git / GitHub', level: 90 },
    { name: 'Postman / Swagger', level: 85 },
  ],
}

// ─── Work Experience ──────────────────────────────────────
export const experience = [
  {
    company: 'Capsitech',
    role: 'Software Engineer',
    period: 'June 2025 – Present',
    location: 'Jodhpur, India',
    color: '#00d4ff',
    highlights: [
      'Built an in-house ticket management system for 30+ practice-based clients replacing OS Ticket, scaling to 1M+ end users and reducing external dependency by 70%.',
      'Architected an end-to-end client review & rating system for a fintech CRM (1M+ users), eliminating 60% dependency on Trustpilot via automated email workflows.',
      'Automated company registration via REST APIs integrated with Companies House (UK) & HMRC, improving documentation processing efficiency by 60%.',
      'Designed a real-time "What\'s New" feature using React.js, .NET, and MongoDB, accelerating feature adoption and reducing support queries.',
    ],
    tech: ['React.js', 'ASP.NET Core', 'MongoDB', 'REST APIs', 'Azure'],
  },
]

// ─── Education ────────────────────────────────────────────
export const education = [
  {
    institution: 'Future Institute of Engineering and Management',
    degree: 'B.Tech in Computer Science and Engineering',
    period: 'Sept 2021 – June 2025',
    cgpa: '8.79',
    courses: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Machine Learning',
    ],
  },
]

// ─── Projects ─────────────────────────────────────────────
export const projects = [
  {
    title: 'Hate Speech Detection',
    description:
      'End-to-end Hate Speech Detection system using Python, Machine Learning, and NLP techniques. Trained Logistic Regression and Naive Bayes classifiers achieving 92%+ classification accuracy.',
    tech: ['Python', 'Machine Learning', 'NLP', 'Logistic Regression', 'Naive Bayes'],
    metrics: '92%+ Accuracy',
    color: '#00d4ff',
    icon: '🛡️',
  },
  {
    title: 'Ticket Management System',
    description:
      'In-house ticket management system for 30+ practice-based accounting clients, replacing OS Ticket. Built with real-time features and scalable architecture supporting 1M+ users.',
    tech: ['React.js', 'ASP.NET Core', 'MongoDB', 'SignalR'],
    metrics: '1M+ Users',
    color: '#7c3aed',
    icon: '🎫',
  },
  {
    title: 'Client Review & Rating CRM',
    description:
      'Full review & rating system for a UK fintech CRM. Automated email workflows eliminated 60% dependency on Trustpilot while improving client retention.',
    tech: ['React.js', '.NET', 'MongoDB', 'Email Automation'],
    metrics: '60% Cost Saved',
    color: '#00ff88',
    icon: '⭐',
  },
  {
    title: 'Companies House Integration',
    description:
      'Automated company registration workflows by integrating REST APIs with Companies House (UK) and HMRC, improving processing efficiency by 60%.',
    tech: ['ASP.NET Core', 'REST APIs', 'Companies House API', 'HMRC API'],
    metrics: '60% Faster',
    color: '#ff6b35',
    icon: '🏢',
  },
]

// ─── Stats ────────────────────────────────────────────────
export const stats = [
  { label: 'Years Experience', value: 1, suffix: '+' },
  { label: 'Projects Delivered', value: 10, suffix: '+' },
  { label: 'Users Served', value: 1, suffix: 'M+' },
  { label: 'CGPA', value: 8.79, suffix: '' },
]

// ─── Methodologies ────────────────────────────────────────
export const methodologies = ['Agile', 'Scrum', 'OOP', 'MVC', 'REST APIs', 'CI/CD', 'TDD']
