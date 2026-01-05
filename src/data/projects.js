import { CountryAppImg, DailyTaskImg, DigitalLibraryImg, FileAppImg } from '../assets/images';


const projects = [
    {
        id: 1,
        title: 'Daily Task Checker',
        description:
            'A productivity app to manage and track daily tasks with a clean, responsive interface.',
        image: DailyTaskImg,
        tags: ["React", "Tailwind CSS", "JavaScript"],
        liveUrl: 'https://premshankarrai2005.github.io/FOCUS-ON-TODAY/',
        githubUrl: 'https://github.com/premshankarrai2005/FOCUS-ON-TODAY',
    },
    {
        id: 2,
        title: 'Country Details Applicationr',
        description:
            'Fetches and displays country data using APIs with search, filter, and responsive UI.',
        image: CountryAppImg,
        tags: ["React", "Tailwind CSS", "REST APIs", "JavaScript"],
        liveUrl: 'https://premshankarrai2005.github.io/Country-API/',
        githubUrl: 'https://github.com/premshankarrai2005/Country-API',
    },
    {
        id: 3,
        title: 'Digital Library Management System',
        description:
            "Managed books, categories, and summaries in a modern UI with filtering and department-wise sorting.",
        image: DigitalLibraryImg,
        tags: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Express", "MongoDB", "Framer Motion"],
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        id: 4,
        title: 'File Managing Application',
        description:
            "Secure file management system with role-based access, encrypted storage, and smooth animations.",
        image: FileAppImg,
        tags: ["React", "Tailwind CSS", "JavaScript", "Node.js", "JWT", "Express", "MongoDB", "Framer Motion"],
        liveUrl: '#',
        githubUrl: '#',
    },
];
export default projects;
 

