// Fallback content used when the Python API is not running.
// The live content comes from the Django database (see backend/).

const profile = {
  name: 'Sujith Kumar Chepuri',
  role: 'Full Stack Developer',
  location: 'Hyderabad, India',
  email: 'ch.sujithkumar2001@gmail.com',
  phone: '+91-9398804166',
  linkedin: 'https://www.linkedin.com/in/chepuri-sujithkumar',
  github: 'https://github.com/SujithKumar-04',
  summary:
    'Full Stack Developer with professional experience at Wipro, building and maintaining scalable web applications using Python, Django, JavaScript, HTML5, CSS3 and SQL. Skilled in RESTful API design and integration, relational database management and responsive front-end development.',
  about:
    'I deliver software through Agile/Scrum and SDLC practices, with growing expertise in cloud-native development and system design.',
};

const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'HTML5', 'CSS3'] },
  { group: 'Frameworks & Libraries', items: ['Django', 'Django REST Framework', 'Bootstrap 5'] },
  { group: 'Databases', items: ['MySQL', 'PostgreSQL', 'SQLite', 'SQL Query Optimization', 'Django ORM'] },
  { group: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Linux'] },
  { group: 'Concepts', items: ['SDLC', 'Data Structures & Algorithms', 'OOP', 'RESTful API Design', 'Responsive Design'] },
];

const experience = [
  {
    role: 'Associate',
    company: 'Wipro Limited',
    project: 'Internal Interface Maintenance – Python Full Stack Project',
    tech: ['Python', 'Django', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap 5', 'MySQL'],
    points: [
      'Maintained and enhanced an internal web interface used by cross-functional teams to manage operational data and workflows, ensuring high availability and performance.',
      'Developed and optimized Django views, URL routing and templates to improve page load times and UI responsiveness.',
      'Implemented new feature modules and resolved front-end defects (HTML5, CSS3, Bootstrap 5, JavaScript) as business requirements evolved.',
      'Integrated backend REST APIs using Django REST Framework for seamless data exchange between the interface and underlying services.',
      'Wrote and optimized SQL queries and Django ORM operations for efficient retrieval and reporting from MySQL.',
      'Collaborated in Agile sprints: daily stand-ups, sprint planning and retrospectives to meet delivery milestones.',
    ],
  },
];

const projects = [
  {
    title: 'Spirit Adventures',
    subtitle: 'Full stack travel booking platform',
    tech: ['Python', 'Django', 'MySQL', 'JavaScript', 'Bootstrap 5'],
    points: [
      'Built with the Django MVT framework on a normalized MySQL schema.',
      'RESTful backend APIs for authentication (login, signup, sessions), booking creation and real-time availability.',
      'Responsive, mobile-first UI with Bootstrap 5, HTML5 and vanilla JavaScript.',
      'Secure form validation, CSRF protection and efficient ORM-based CRUD operations.',
      'End-to-end integration with real-time booking confirmation and data persistence.',
    ],
  },
  {
    title: 'Sustainability Performance Framework for Universities',
    subtitle: 'Data tracking and reporting',
    tech: ['Python', 'SQL', 'MySQL', 'Data Analysis'],
    points: [
      'Designed a MySQL schema to track energy usage, carbon emissions and resource consumption.',
      'Python scripts for data ingestion, processing and reports aligned with environmental KPIs.',
      'Data analysis that surfaces insights for university stakeholders.',
      'Extensible multi-metric model, ready for future dashboards.',
    ],
  },
];

const education = {
  degree: { title: 'B.Tech, Minor in Data Science', place: 'Malla Reddy University, Hyderabad', year: '2024' },
  certs: [
    { title: 'Python Full Stack Development', place: 'JSpiders', text: 'Python, Django, Flask, HTML, CSS, JavaScript and database management with hands-on projects.' },
    { title: 'Build Your Own Static Website', place: 'NEXT Wave' },
    { title: 'Build Your Own Responsive Website', place: 'NEXT Wave' },
  ],
  languages: [
    ['English', 'Professional proficiency'],
    ['Telugu', 'Native'],
    ['Hindi', 'Conversational'],
  ],
};

export default { profile, skills, experience, projects, education };
