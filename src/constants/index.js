export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -6.5, 0] : isMobile ? [5, -6, 0] : isTablet ? [6, -6, 0] : [9, -6, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [4.5, 5.5, 0] : isTablet ? [4.5, 5.5, 0] : [8.75, 5.5, 0],
        ringPosition: isSmall ? [-5.5, 8.5, 0] : isMobile ? [-8, 12, 0] : isTablet ? [-10, 12, 0] : [-16, 12, 0],
        targetPosition: isSmall ? [-5, -11.5, -10] : isMobile ? [-8, -11, -10] : isTablet ? [-11, -11, -10] : [-13, -10, -10],
    };
};

export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    }, {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Work',
        href: '#experience',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

export const myProjects = [
    {
        title: "3D T-shirt customizer",
        desc: "A visually captivating web app that allows users to design 3D shirts in real-time. Built with React.js, Three.js, TailwindCSS, and Framer Motion, it provides an interactive platform for customizing t-shirt designs with rotating models and real-time color changes.",
        subdesc:
            "Leveraging Three.js for 3D rendering and Framer Motion for fluid animations, the design tool guarantees an engaging experience while being responsive across various devices.",
        live_href: 'https://3-d-t-shirt-customizer.vercel.app/',
        github_href: 'https://github.com/ArunRawat404/3D-T-Shirt-Customization',
        texture: '/textures/project/3d-tshirt-customizer_demo.mp4',
        logo: '/assets/project-customizer_logo.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'ThreeJS',
                path: '/assets/threejs.png',
            },
            {
                id: 3,
                name: 'Nodejs',
                path: '/assets/node.png',
            }, {
                id: 4,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            }
        ],
    },
    {
        title: "ThreeJS Portfolio Website",
        desc: "A cutting-edge web portfolio showcasing dynamic 3D elements, including an immersive hacker-themed hero section and an interactive 3D globe pinpointing the user’s location. This portfolio features live project demos within a 3D computer model.",
        subdesc:
            "Built using React Three Fiber for efficient 3D rendering and GSAP for smooth animations, the website ensures a seamless, fully responsive browsing experience across all devices.",
        live_href: 'https://portfolio-website-arunrawat.vercel.app/',
        github_href: 'https://github.com/ArunRawat404/Portfolio-Website',
        texture: '/textures/project/portfolio_demo.mp4',
        logo: '/assets/project-portfolio_logo.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'ThreeJS',
                path: '/assets/threejs.png',
            },
            {
                id: 3,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
        ],
    },
    {
        title: "Airline Management System",
        desc: "A microservice-based backend system for flight bookings, built with Node.js, Express, MySQL, and RabbitMQ. This system handles flight bookings through RESTful APIs and incorporates a messaging queue system for efficient communication between microservices.",
        subdesc:
            "Designed with a microservice architecture, it provides CRUD operations, authentication, and cron jobs to manage flight bookings and related services, ensuring scalability and reliability.",
        live_href: 'https://github.com/ArunRawat404/Flight-Booking-Backend',
        github_href: 'https://github.com/ArunRawat404/Flight-Booking-Backend',
        texture: '/textures/project/coming_soon.mp4',
        logo: '/assets/project-ams_logo.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'Node.js',
                path: '/assets/node.png',
            },
            {
                id: 2,
                name: 'Express.js',
                path: 'assets/express.png',
            },
            {
                id: 3,
                name: 'MySQL',
                path: '/assets/mysql.png',
            },
            {
                id: 4,
                name: 'RabbitMQ',
                path: '/assets/rabbitmq.svg',
            },
        ],
    },
    {
        title: "2048 Game - A Python Game",
        desc: "A simple yet addictive version of the popular 2048 game, created using Python’s Tkinter library. The game features a clean and intuitive UI, allowing users to navigate using keyboard keys to combine tiles and achieve the 2048 tile.",
        subdesc:
            "Built with Python Tkinter and the random module, this game delivers smooth gameplay and an interactive experience, deployed on Replit for easy access and play.",
        live_href: 'https://replit.com/@ArunRawat/2048-Game',
        github_href: 'https://github.com/ArunRawat404/2048-Game',
        texture: '/textures/project/2048_demo.mp4',
        logo: '/assets/project-2048_logo.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/assets/python.png',
            },
            {
                id: 2,
                name: 'Tkinter',
                path: 'assets/tkinter.png',
            },
            {
                id: 3,
                name: 'Replit',
                path: '/assets/replit.png',
            },
        ],
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const workExperiences = [
    {
        id: 1,
        name: 'Freelancer',
        pos: 'Junior Software Engineer',
        duration: 'May 2024 - Present',
        icon: '/assets/freelancer.png',
        points: [
            "Configured a RYOD blockchain node and integrated it with the Mining pool and Dockerized the project, enabling one-command node setup and reducing setup time by 90%.",
            "Developed a Python-based automation script using OCR and AutoHotkey for Metin2; enhanced gameplay performance and streamlined repetitive tasks, saving 5 hours of manual effort weekly.",
            "Employed Selenium with Python and proxy settings to automate the redemption process for Microsoft Xbox Game Pass and saved 5 hours of manual work.",
        ],
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Fabstir',
        pos: 'Frontend Developer Intern',
        duration: 'June 2022 - August 2022',
        icon: '/assets/fabstir_logo.png',
        points: [
            "Developed the primary landing page for a blockchain-based startup website using HTML, Tailwind CSS, and JavaScript, aligning with design specifications provided on Figma",
            "Remotely managed Git for streamlined version control, facilitating an organized and collaborative development environment, ensuring the integrity of the project's codebase",
        ],
        animation: 'victory',
    },
];