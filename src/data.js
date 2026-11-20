// All portfolio content lives here — edit this file to update the site.
import photo from './assets/profile.jpg';
import resumePdf from './assets/nikesh resume web dev.pdf';

export const profile = {
  name: 'Nikesh Patel',
  role: 'Web Developer',
  tagline: 'HTML5 · CSS3 · JavaScript · Flutter · Content Management',
  summary:
    'Software Developer with around 2 years of experience in application development, responsive UI design, and dynamic content integration. Skilled in HTML5, CSS3, JavaScript, Flutter, REST API integration, and UI development. Strong understanding of web technologies, structured data presentation, problem-solving, and cross-functional collaboration — with an ability to quickly adapt to new tools and technologies.',
  email: 'nikesh060601patel@gmail.com',
  phone: '+91-8349965799',
  location: 'Lasudiya Parmar, Indore, MP',
  linkedin: 'https://linkedin.com/in/nikesh-patel200',
  linkedinLabel: 'linkedin.com/in/nikesh-patel200',
  photo,
  resume: resumePdf,
  resumeFileName: 'Nikesh-Patel-Resume.pdf',
};

export const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '4+', label: 'Major Projects' },
  { value: '~20%', label: 'Rendering Perf. Gain' },
];

export const experience = [
  {
    role: 'Flutter Developer',
    company: 'Techinfini Solution',
    period: '12/2024 – Present',
    location: 'Indore, India',
    points: [
      'Developed and maintained responsive application interfaces focusing on usability, performance, and structured content presentation.',
      'Integrated REST APIs to fetch, process, and display dynamic content smoothly across key application modules.',
      'Implemented reusable UI components and optimized application rendering performance, improving efficiency by ~20%.',
      'Collaborated closely with UI/UX designers and backend developers to ship robust, functional, user-friendly features.',
      'Worked on multi-role enterprise systems involving admin dashboards, user workflows, and dynamic data management.',
      'Participated in proactive debugging, testing, and system maintenance to ensure consistent user experience and uptime.',
    ],
  },
];

export const projects = [
  {
    name: 'BrandSmart Tech',
    type: 'Replacement Parts Management Application',
    description:
      'A multi-role application for technicians and administrators to manage genuine replacement parts. Implemented deep linking enabling technicians to seamlessly access model-specific parts and place component orders.',
    tags: ['Flutter', 'Deep Linking', 'REST APIs', 'Multi-role'],
    icon: '🔧',
  },
  {
    name: 'Storivita',
    type: 'E-Commerce Application',
    description:
      'An e-commerce platform with product management, dynamic content, and secure payment workflows. Integrated Razorpay payment gateway and Firebase push notifications for real-time customer updates.',
    tags: ['Flutter', 'Razorpay', 'Firebase', 'E-Commerce'],
    icon: '🛒',
  },
  {
    name: 'Solarja',
    type: 'Service Management Application',
    description:
      'A multi-role app tailored for customers, vendors, and field agents. Implemented secure role authentication, end-to-end service request management, and automated workflow tracking.',
    tags: ['Flutter', 'Role Auth', 'Workflows', 'REST APIs'],
    icon: '☀️',
  },
  {
    name: 'TIS Intranet',
    type: 'Employee Management Application',
    description:
      'Enterprise modules for attendance tracking, leave management, detailed employee profiles, and internal support ticketing.',
    tags: ['Flutter', 'Enterprise', 'Dashboards', 'HR'],
    icon: '🏢',
  },
];

export const skills = [
  { category: 'Web Technologies', items: ['HTML5', 'CSS3', 'JavaScript', 'jQuery (Basic)'] },
  { category: 'Frameworks & Tech', items: ['Flutter', 'Dart', 'Django', 'REST APIs', 'Firebase'] },
  { category: 'Languages & Databases', items: ['Python', 'Java', 'SQL', 'MySQL', 'Firebase Firestore'] },
  {
    category: 'Tools & Competencies',
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Responsive UI', 'Dynamic Content Mgmt', 'Agile'],
  },
];

export const education = [
  {
    degree: 'B.Tech in Computer Science',
    school: 'Malwa Institute of Technology (RGPV)',
    period: '2020 – 2024',
  },
];
