import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Technical Member",
        company_name: "Zigbee Club",
        icon: starbucks, // Placeholder, can be updated if needed
        iconBg: "#accbe1",
        date: "September 2025 - Present",
        points: [
            "Engaged in technical activities and projects within the club.",
            "Collaborated with peers on innovative solutions.",
            "Participated in workshops and skill-building sessions.",
        ],
    },
    {
        title: "Event Manager",
        company_name: "Enigma Club",
        icon: tesla, // Placeholder
        iconBg: "#fbc3bc",
        date: "May 2024 - Present",
        points: [
            "Organized and managed various events for the club.",
            "Coordinated with teams to ensure successful event execution.",
            "Handled logistics and promoted events effectively.",
        ],
    },
    {
        title: "Internshala Student Partner",
        company_name: "Internshala",
        icon: shopify, // Placeholder
        iconBg: "#b7e4c7",
        date: "February 2024 - June 2024",
        points: [
            "Promoted Internshala's internship programs among students.",
            "Assisted in connecting students with internship opportunities.",
            "Provided guidance on career development and skill enhancement.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/kylashreddy/',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/busireddy-kylash-reddy-185709291',
    }
];

export const projects = [
    {
        iconUrl: pricewise, // Placeholder
        theme: 'btn-back-red',
        name: 'Optimized Electricity Restoration System',
        description: 'Developed a system to optimize electricity restoration using Python, Dijkstra algorithm, and NetworkX for efficient power grid recovery.',
        link: 'https://github.com/kylashreddy/', // Placeholder link
    },
    {
        iconUrl: threads, // Placeholder
        theme: 'btn-back-green',
        name: 'Student Library Informative Website',
        description: 'Created an informative website for the student library under Prof. Swomya, using ReactJS, PHP, and MySQL to manage library resources.',
        link: 'https://github.com/kylashreddy/Student-Library-system', // Placeholder link
    },
    {
        iconUrl: car, // Placeholder
        theme: 'btn-back-blue',
        name: 'College Bus Pass Management System',
        description: 'Built a management system for college bus passes using ReactJS, NodeJS, MongoDB, and Express to streamline pass issuance and tracking.',
        link: 'https://buss-passfinal-chi.vercel.app/', // Placeholder link
    },
];
