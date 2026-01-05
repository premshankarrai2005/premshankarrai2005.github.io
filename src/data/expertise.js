import {
  Code2,
  Database,
  Cloud,
  Palette,
  Zap,
  Blocks,
  Terminal,
  Sparkles,
  Shield
} from 'lucide-react';
const expertiseData = [
    {
        year: '2023 (Jan - Jun)',
        title: 'Frontend Foundations',
        description:
            'Started my web development journey by learning core frontend technologies and building responsive, user-friendly interfaces.',
        skills: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
        icon: Code2,
        color: 'from-blue-500 to-cyan-500',
        glowColor: 'shadow-blue-500/50',
    },
    {
        year: '2023 (Jul - Dec)',
        title: 'Modern Frontend Development',
        description:
            'Developed dynamic and component-based web applications using modern JavaScript frameworks with best practices.',
        skills: ['JavaScript', 'React', 'Component Architecture', 'State Management'],
        icon: Palette,
        color: 'from-rose-500 to-pink-500', // changed
        glowColor: 'shadow-rose-500/50',     // changed
    },
    {
        year: '2024 (Jan - Mar)',
        title: 'Advanced Frontend & Performance',
        description:
            'Focused on performance optimization, animations, and building scalable, production-ready frontend applications.',
        skills: ['React Optimization', 'Lazy Loading', 'Web Vitals', 'Framer Motion'],
        icon: Zap,
        color: 'from-yellow-500 to-orange-500',
        glowColor: 'shadow-yellow-500/50',
    },
    {
        year: '2024 (Apr - Jun)',
        title: 'Backend Fundamentals with Node.js',
        description:
            'Learned backend fundamentals including OS basics, terminal usage, Node.js core concepts, and data representation.',
        skills: ['Terminal Basics', 'OS Fundamentals', 'Node.js Basics', 'Data Representation', 'Buffers'],
        icon: Terminal,
        color: 'from-teal-500 to-cyan-500', // changed
        glowColor: 'shadow-teal-500/50',    // changed
    },
    {
        year: '2024 (Jul - Dec)',
        title: 'Backend Architecture & Networking',
        description:
            'Built strong backend architecture with deep understanding of event-driven systems, streams, and networking.',
        skills: ['EventEmitter', 'Streams', 'Computer Networking', 'Core Node.js Modules'],
        icon: Cloud,
        color: 'from-purple-500 to-indigo-500', // changed
        glowColor: 'shadow-purple-500/50',      // changed
    },
    {
        year: '2025 (Jan - Feb)',
        title: 'REST APIs & Database Engineering',
        description:
            'Designed and developed RESTful APIs with proper MVC architecture and database modeling.',
        skills: ['Express.js', 'REST APIs', 'MongoDB', 'Mongoose', 'MVC Architecture'],
        icon: Database,
        color: 'from-cyan-500 to-blue-500',
        glowColor: 'shadow-cyan-500/50',
    },
    {
        year: '2025 (Mar - Apr)',
        title: 'Authentication, Security & Caching',
        description:
            'Implemented secure authentication systems, role-based access control, caching, and session management.',
        skills: ['JWT Authentication', 'RBAC', 'Redis', 'Application Security'],
        icon: Shield,
        color: 'from-green-500 to-lime-500', // changed
        glowColor: 'shadow-green-500/50',    // changed
    },
    {
        year: '2025 (May - Jul)',
        title: 'Cloud, Payments & Deployment',
        description:
            'Integrated cloud services, payment gateways, and deployed applications using modern CI/CD pipelines.',
        skills: ['AWS S3', 'Razorpay', 'Stripe', 'CI/CD', 'Deployment', 'AWS Lambda'],
        icon: Blocks,
        color: 'from-orange-500 to-amber-500',
        glowColor: 'shadow-orange-500/50',
    },
    {
        year: '2025 (Aug - Dec)',
        title: 'AI Integration',
        description:
            'Integrated AI capabilities into web applications to build intelligent, scalable, and modern solutions.',
        skills: ['OpenAI API', 'Prompt Engineering', 'AI-powered Features', 'Automation'],
        icon: Sparkles,
        color: 'from-pink-500 to-purple-500', // changed
        glowColor: 'shadow-pink-500/50',      // changed
    },
];

export default expertiseData;