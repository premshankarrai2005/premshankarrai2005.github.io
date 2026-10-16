import { CountryAppImg, DailyTaskImg, DigitalLibraryImg, FileAppImg } from '../assets/images';


const projects = [
    {
        id: 1,
        title: 'Daily Task Checker',
        description:
            'A productivity app to manage and track daily tasks with a clean, responsive interface.',
        longDescription:
            'Daily Task Checker is a focused productivity web app built entirely with React and Tailwind CSS. It lets you add, edit, complete, and delete tasks with instant visual feedback. The app uses React state management to persist tasks during the session and provides a clean, distraction-free interface designed for daily planning.',
        image: DailyTaskImg,
        tags: ['React', 'Tailwind CSS', 'JavaScript'],
        category: ['React', 'JavaScript'],
        features: [
            'Add, edit, and delete tasks with instant UI updates',
            'Mark tasks complete with visual strike-through and count tracking',
            'Responsive layout — works seamlessly on mobile & desktop',
            'Clean minimalist design with smooth state transitions',
        ],
        liveUrl: 'https://premshankarrai2005.github.io/FOCUS-ON-TODAY/',
        githubUrl: 'https://github.com/premshankarrai2005/FOCUS-ON-TODAY',
        isLive: true,
    },
    {
        id: 2,
        title: 'Country Details Application',
        description:
            'Fetches and displays country data using APIs with search, filter, and responsive UI.',
        longDescription:
            'Country Details Application is a data-driven React app that connects to the REST Countries API to display detailed information about every country in the world. Users can search by name, filter by region, and click into individual country pages to see flags, capitals, populations, currencies, and neighboring countries.',
        image: CountryAppImg,
        tags: ['React', 'Tailwind CSS', 'REST APIs', 'JavaScript'],
        category: ['React', 'JavaScript'],
        features: [
            'Live search across 200+ countries by name',
            'Filter countries by region (Africa, Europe, Asia, Americas, Oceania)',
            'Detailed country page — flag, capital, population, currency, borders',
            'Fully responsive grid layout with smooth transitions',
        ],
        liveUrl: 'https://premshankarrai2005.github.io/Country-API/',
        githubUrl: 'https://github.com/premshankarrai2005/Country-API',
        isLive: true,
    },
    {
        id: 3,
        title: 'Digital Library Management System',
        description:
            'Managed books, categories, and summaries in a modern UI with filtering and department-wise sorting.',
        longDescription:
            'A full-stack MERN application designed for managing a digital library. Admins can add and manage books, categories, and summaries. Students and staff can search, filter by department, and read summaries. The system is backed by a Node.js + Express REST API and a MongoDB database, with a polished Framer Motion-powered frontend.',
        image: DigitalLibraryImg,
        tags: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'Framer Motion'],
        category: ['React', 'Full Stack', 'JavaScript'],
        features: [
            'Full-stack MERN architecture with RESTful API',
            'Add, edit, and categorize books with department-wise filtering',
            'Searchable book catalog with summary previews',
            'Framer Motion animations throughout the UI',
        ],
        liveUrl: '',
        githubUrl: 'https://github.com/premshankarrai2005',
        isLive: false,
        statusText: 'Demo In Progress',
    },
    {
        id: 4,
        title: 'File Managing Application',
        description:
            'Secure file management system with role-based access, encrypted storage, and smooth animations.',
        longDescription:
            'A secure full-stack file management system with JWT-based authentication and role-based access control. Users can upload, download, and organize files, while admins manage user permissions. Files are stored securely with encryption, and the entire experience is wrapped in a smooth Framer Motion-animated React frontend backed by Node.js, Express, and MongoDB.',
        image: FileAppImg,
        tags: ['React', 'Tailwind CSS', 'JavaScript', 'Node.js', 'JWT', 'Express', 'MongoDB', 'Framer Motion'],
        category: ['React', 'Full Stack', 'JavaScript'],
        features: [
            'JWT authentication with Admin and User role-based access',
            'Secure file upload, download, and delete with encrypted storage',
            'File organization with folder structure and metadata',
            'Smooth Framer Motion UI with protected routes',
        ],
        liveUrl: '',
        githubUrl: 'https://github.com/premshankarrai2005',
        isLive: false,
        statusText: 'Demo In Progress',
    },
];

export default projects;
