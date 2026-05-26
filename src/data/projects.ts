// Project cover images
import p1 from "@/assets/1.png";
import p2 from "@/assets/2.png";
import p3 from "@/assets/3.png";
import p4 from "@/assets/4.png";
import p5 from "@/assets/5.png";
import p6 from "@/assets/6.png";
import p7 from "@/assets/7.png";
import p8 from "@/assets/8.png";
import p9 from "@/assets/9.png";
import p10 from "@/assets/10.png";

// Project gallery images
import p1_1 from "@/assets/1_1.png";
import p1_2 from "@/assets/1_2.png";


import p2_1 from "@/assets/2_1.png";
import p2_2 from "@/assets/2_2.png";
import p2_3 from "@/assets/2_3.png";
import p2_4 from "@/assets/2_4.png";
import p2_5 from "@/assets/2_5.png";

import p3_1 from "@/assets/3_1.png";

import p4_1 from "@/assets/4_1.png";
import p4_2 from "@/assets/4_2.png";
import p4_3 from "@/assets/4_3.png";
import p4_4 from "@/assets/4_4.png";
import p4_5 from "@/assets/4_5.png";
import p4_6 from "@/assets/4_6.png";


import p5_1 from "@/assets/5_1.png";
import p5_2 from "@/assets/5_2.png";

import p6_1 from "@/assets/6_1.png";
import p6_2 from "@/assets/6_2.png";

import p7_1 from "@/assets/7_1.png";
import p7_2 from "@/assets/7_2.png";
import p7_3 from "@/assets/7_3.png";

import p8_1 from "@/assets/8_1.png";
import p8_2 from "@/assets/8_2.png";
import p8_3 from "@/assets/8_3.png";
import p8_4 from "@/assets/8_4.png";
import p8_5 from "@/assets/8_5.png";
import p8_video from "@/assets/8_video.mp4";

import p9_1 from "@/assets/9_1.png";
import p9_2 from "@/assets/9_2.png";
import p9_3 from "@/assets/9_3.png";
import p9_4 from "@/assets/9_4.png";  
import p9_5 from "@/assets/9_5.png";

import p10_1 from "@/assets/10_1.png";
import p10_2 from "@/assets/10_2.png";

import { type ProjectType } from "@/types";

export const PROJECTS: ProjectType[] = [
  {
    id: 1,
    title: 'SUKJAI',
    coverImage: p1,
    images: [
      { src: p1, alt: 'OverAll' },
      { src: p1_1, alt: 'Page1' },
      { src: p1_2, alt: 'Page2' },
    ],
    desc: 'All-in-one mental health app: Includes counseling services, AI-based mental health assessments, relaxation activities, and mental health information.',
    role: 'Role : UX/UI Designer',
    tools: ['Figma'],
    category: 'Design',
    process: [
      {
        title: 'Planning & Architecture',
        description: 'Analyzed HR requirements for employee lifecycle management. Designed Blazor-based architecture with PostgreSQL backend. Planned data model for personnel records, attendance, and reporting.'
      },
      {
        title: 'Frontend Development',
        description: 'Built interactive Blazor components using Fluent UI design system. Implemented employee dashboard, attendance tracking interface, and reporting views with real-time updates.'
      },
      {
        title: 'Backend Development',
        description: 'Developed .NET Core APIs with Entity Framework Core. Implemented business logic for employee management, attendance calculations, and report generation.'
      },
      {
        title: 'Integration & Testing',
        description: 'Integrated frontend with backend services. Performed user acceptance testing with HR staff. Deployed to production with data migration support.'
      }
    ],
  },
  {
    id: 2,
    title: 'Carbon Footprint Tracker',
    coverImage: p2,
    images: [
      { src: p2, alt: 'OverAll' },
      { src: p2_1, alt: 'Page1' },
      { src: p2_2, alt: 'Page2' },
      { src: p2_3, alt: 'Page3' },
      { src: p2_4, alt: 'Page4' },
      { src: p2_5, alt: 'Page5' },
    ],
    desc: 'Carbon Footprint Tracker is a mobile application designed to help users monitor and minimize their environmental impact. By seamlessly logging daily activities, users can calculate their precise carbon emissions, receive personalized sustainability tips, and track their reduction progress over time.',
    role: 'Role : UX/UI Designer',
    tools: ['Figma','React','Node.js','MySQL','GitHub','JavaScript','Expo','Amazon AWS','Render'],
    category: 'Design',
    process: [
      {
        title: 'Problem & Research',
        description: 'Identified the need for an engaging career showcase for game companies. Researched modern game industry UI/UX trends, competitor portals, and user expectations for career platforms.'
      },
      {
        title: 'Define',
        description: 'Defined project scope: create an attractive, interactive career page that reflects gaming aesthetics. Set goals for user engagement, portfolio display, and application process clarity.'
      },
      {
        title: 'Ideate',
        description: 'Brainstormed vibrant design concepts with gaming elements. Sketched layout ideas combining playful interactions, hero sections, and career opportunity displays.'
      },
      {
        title: 'Design',
        description: 'Created high-fidelity mockups in Figma with dynamic animations and responsive layouts. Developed component library and implemented frontend with HTML/CSS/JavaScript.'
      }
    ],
  },
  {
    id: 3,
    title: 'Off-Doyle',
    coverImage: p3,
    images: [
      { src: p3, alt: 'OverAll' },
      { src: p3_1, alt: 'Page1'},
    ],
    desc: 'Designed a mobile e-commerce application prototype using Miro, focusing on user-centered design principles and seamless shopping experiences. The project involved creating detailed user flows, wireframes, interface layouts, and interactive design concepts to enhance usability, accessibility, and overall customer engagement. Special attention was given to intuitive navigation, modern visual aesthetics, and improving the online purchasing journey for mobile users. ',
    role: 'Role : UX/UI Designer',
    tools: ['Miro'],
    github: 'https://github.com/Beconet/CUPCRAFT_PROJECT',
    category: 'Design',
    process: [
      {
        title: 'Problem & Research',
        description: 'Identified need for cafe management interface. Researched cafe workflows, POS systems, and inventory management practices. Analyzed user pain points in order processing and analytics.'
      },
      {
        title: 'Define',
        description: 'Defined system requirements: admin login, order management, inventory tracking, and sales analytics. Set goals for user efficiency and data visualization clarity.'
      },
      {
        title: 'Ideate',
        description: 'Sketched dashboard layouts combining order entry, inventory display, and analytics. Designed admin authentication flow and menu management interfaces.'
      },
      {
        title: 'Design',
        description: 'Created high-fidelity Figma mockups with cafe branding. Implemented responsive Bootstrap layout with intuitive navigation and data visualization components.'
      }
    ],
  },
  {
    id: 4,
    title: 'Hotel 101',
    coverImage: p4,
    images: [
      { src: p4, alt: 'OverAll' },
      { src: p4_1, alt: 'Page1' },
      { src: p4_2, alt: 'Page2' },
      { src: p4_3, alt: 'Page3' },
      { src: p4_4, alt: 'Page4' },
      { src: p4_5, alt: 'Page5' },
      { src: p4_6, alt: 'Page6' },
    ],
    desc: 'Developed a hotel reservation management application using NetBeans, focusing on practical booking functionalities and efficient data management. The application includes features such as room availability checking, reservation processing, customer information management, and booking record organization. The project strengthened both backend development and database integration skills while delivering a functional and reliable reservation system.',
    role: 'Role : Developer',
    tools: ['Apache Netbeans', 'Java', 'JustInMind'],
    category: 'Development',
    process: [
      {
        title: 'Planning & Setup',
        description: 'Designed note-taking app concept with local storage approach. Planned feature set: create, read, update, delete notes. Set up ASP.NET project with HTML/CSS/JavaScript stack.'
      },
      {
        title: 'Core Development',
        description: 'Implemented core CRUD operations for notes using browser localStorage API. Created responsive UI with game-inspired design aesthetics. Built note organization and search functionality.'
      },
      {
        title: 'Testing & Refinement',
        description: 'Tested cross-browser compatibility and localStorage persistence. Refined UI/UX based on testing feedback. Optimized performance and fixed edge cases.'
      },
      {
        title: 'Deployment',
        description: 'Deployed to GitHub Pages for public access. Documented usage and features. Prepared for potential enhancements and user feedback.'
      }
    ],
  },
  {
    id: 5,
    title: 'Bookshelf',
    coverImage: p5,
    images: [
      { src: p5, alt: 'OverAll' },
      { src: p5_1, alt: 'Page1' },
      { src: p5_2, alt: 'Page2' },
    ],
    desc: 'Designed a social platform for book enthusiasts inspired by IMDb, designed specifically for readers and literature lovers. The application enables users to track their reading progress, rate and review books, organize personalized reading lists, and share opinions with friends and the reading community. The platform was designed to encourage meaningful discussions, book discovery, and social interaction among users with shared literary interests.',
    role: 'Role : UX/UI Designer',
    tools: ['Figma'],
    category: 'Design',
    process: [
      {
        title: 'Planning & Setup',
        description: 'Conceptualized food suggestion system for indecisive users. Designed kiosk interface in Figma. Set up Apache NetBeans project to learn object-oriented programming principles.'
      },
      {
        title: 'Core Development',
        description: 'Implemented random food suggestion algorithm in Java. Built GUI with user-friendly interface for kiosk display. Created classes for food data and suggestion logic.'
      },
      {
        title: 'Testing & Refinement',
        description: 'Tested suggestion randomization and UI responsiveness. Debugged object-oriented code and optimized performance. Refined interface based on testing feedback.'
      },
      {
        title: 'Deployment',
        description: 'Integrated system on kiosk hardware. Tested full workflow from startup to food suggestion display. Documented code and prepared user instructions.'
      }
    ],
  },
  {
    id: 6,
    title: 'PawPal AI',
    coverImage: p6,
    images: [
      { src: p6, alt: 'OverAll' },
      { src: p6_1, alt: 'Page1' },
      { src: p6_2, alt: 'Page2' },
    ],
    desc: 'Designed and developed an AI-powered chatbot for pet owners, aimed at providing preliminary symptom assessments and basic care guidance before consulting a veterinarian. The chatbot helps users better understand potential health concerns affecting their pets by offering accessible information, symptom-based suggestions, and supportive recommendations. The project focused on creating a compassionate and user-friendly experience for pet owners seeking immediate assistance and reassurance.',
    role: 'Role : UX/UI Designer',
    tools: ['Figma'],
    category: 'Design',
    process: [
      {
        title: 'Sprint 1: Project Setup & Core Features',
        description: 'Initialized React + Vite project structure with TypeScript and Redux Toolkit. Set up API integration with game database. Implemented game grid display component and basic search functionality with real-time filtering.'
      },
      {
        title: 'Sprint 2: Advanced Filtering & UI Polish',
        description: 'Developed sidebar filter system for game categories, ratings, and genres. Enhanced UI/UX with Tailwind CSS styling. Implemented game detail modal and category browsing navigation.'
      },
      {
        title: 'Sprint 3: Favorites System & Optimization',
        description: 'Added persistent favorites system using Redux state management. Optimized API calls and component rendering. Implemented responsive design for mobile devices and final bug fixes.'
      }
    ],
  },
  {
    id: 7,
    title: 'The Types',
    coverImage: p7,
    images: [
      { src: p7, alt: 'OverAll' },
      { src: p7_1, alt: 'Page1' },
      { src: p7_2, alt: 'Page2' },
      { src: p7_3, alt: 'Page3' },
    ],
    desc: "Designed and developed a personality analysis application inspired by MBTI and Enneagram concepts, created to help users gain a deeper understanding of themselves and others. The application focuses on improving interpersonal relationships, workplace communication, social interactions, and personal connections by providing personality insights, behavioral interpretations, and self-discovery tools. The project emphasized emotional intelligence, user engagement, and meaningful psychological exploration.",
    role: 'Role : UX/UI Designer & Developer',
    tools: ['python','Miro'],
    category: 'Fullstack',
    process: [
      {
        title: 'Concept & Design',
        description: 'Conceived farm simulation game with pixel art aesthetic. Designed game mechanics: planting, harvesting, NPC interaction. Created sprite sheets and tile-based world layout.'
      },
      {
        title: 'Development',
        description: 'Set up Phaser.js engine with TypeScript and Vite. Implemented player movement, sprite animations, and collision detection. Built world state management and NPC systems.'
      },
      {
        title: 'Polish & Optimization',
        description: 'Added inventory HUD with visual feedback. Implemented economy system for seed purchasing. Optimized rendering performance and asset loading.'
      },
      {
        title: 'Launch',
        description: 'Tested gameplay mechanics and progression. Deployed to GitHub Pages. Added user documentation and controls guide.'
      }
    ],
  },
  {
    id: 8,
    title: 'Pet AlertTH ',
    coverImage: p8,
    images: [
      { src: p8, alt: 'OverAll' },
      { type: 'video', src: p8_video, alt: 'Video' },
      { src: p8_1, alt: 'Page1' },
      { src: p8_2, alt: 'Page2' },
      { src: p8_3, alt: 'Page3' },
      { src: p8_4, alt: 'Page4' },
      { src: p8_5, alt: 'Page5' },
    ],
    desc: "Developed a website that helps pet owners locate lost pets more efficiently while enabling local communities to report sightings, stray animals, or found pets quickly and conveniently. The platform was created to improve communication between pet owners and the public, increasing the chances of safely reuniting lost animals with their families through real-time information sharing and community participation.",
    role: 'Role : Frontend Developer',
    tools: ['Typescript','React','Mysql','Redux Toolkit','Tailwind CSS','Vite','Cloudflare R2','Leaflet'],
    category: 'Development',
    process: [
      {
        title: 'Planning & Architecture',
        description: 'Analyzed legacy system and EGAT requirements for transformer management. Designed Next.js architecture connecting to 100+ MongoDB collections. Planned data visualization strategy for transformer records.'
      },
      {
        title: 'Frontend Development',
        description: 'Built modern React components with Next.js framework. Implemented responsive dashboard with transformer data visualization. Created search and filter interfaces for thousands of records.'
      },
      {
        title: 'Backend Development',
        description: 'Optimized MongoDB queries for performance with large datasets. Developed Node.js APIs for data retrieval and management. Implemented caching strategies for faster access.'
      },
      {
        title: 'Integration & Testing',
        description: 'Integrated frontend with optimized backend services. Performed load testing for 1000+ concurrent records. Deployed with data migration from legacy system.'
      }
    ],
  },
  {
    id: 9,
    title: 'QuadTech Career',
    coverImage: p9,
    images: [
      { src: p9, alt: 'OverAll' },
      { src: p9_1, alt: 'Page1' },
      { src: p9_2, alt: 'Page2' },
      { src: p9_3, alt: 'Page3' },
      { src: p9_4, alt: 'Page4' },
      { src: p9_5, alt: 'Page5' },
    ],
    desc: 'Developed “QuadTech Career,” a classroom mini-project focused on building a recruitment and job application website using HTML5, CSS3, and JavaScript. The platform was designed to simulate a modern career portal where users can submit applications, and explore career-related information through a clean and responsive web interface. The project strengthened front-end development skills and practical experience in responsive web design.',
    role: 'Role : Frontend Developer',
    tools: [
      'HTML5',
      'CSS3',
      'JavaScript',
    ],
    category: 'Development',
    process: [
      {
        title: 'Planning & Architecture',
        description: 'Designed pet adoption platform architecture with React frontend and Express backend. Planned MongoDB schema for pet records and user profiles. Outlined Socket.IO integration for real-time notifications.'
      },
      {
        title: 'Frontend Development',
        description: 'Built React UI with Vite for pet browsing and posting. Implemented favorites system with Redux Toolkit. Created pet detail pages with image galleries.'
      },
      {
        title: 'Backend Development',
        description: 'Developed Express APIs for pet CRUD operations. Implemented file upload with Multer for pet images. Built Socket.IO real-time chat system for pet inquiries.'
      },
      {
        title: 'Integration & Testing',
        description: 'Integrated frontend with backend services and Socket.IO. Tested image upload and real-time notifications. Created setup scripts for quick local deployment.'
      }
    ],
  },
  {
    id: 10,
    title: 'LongTry?',
    coverImage: p10,
    images: [
      { src: p10, alt: 'OverAll' },
      { src: p10_1, alt: 'Page1' },
      { src: p10_2, alt: 'Page2' },
    ],
    desc: 'Created an AI-assisted flashcard application that allows users to generate personalized vocabulary and study sets through AI-powered prompts. Users can simply describe the topic or subject they want to study, and the system automatically creates tailored flashcards to support learning and memorization. The application was designed to make studying more interactive, efficient, and accessible for learners with different educational goals and interests.',
    role: 'Role : Ux/Ui Designer',
    tools: ['Figma'],
    category: 'Design',
    process: [
      {
        title: 'Planning & Setup',
        description: 'Designed ticket management system for local use. Planned GUI layout with customtkinter for modern appearance. Set up Python project structure with basic architecture.'
      },
      {
        title: 'Core Development',
        description: 'Built GUI components using customtkinter library. Implemented ticket creation, editing, and deletion functionality. Added local data persistence with file storage.'
      },
      {
        title: 'Testing & Refinement',
        description: 'Tested ticket operations and data integrity. Refined UI based on usability testing. Fixed edge cases in data handling.'
      },
      {
        title: 'Deployment',
        description: 'Packaged Python application for distribution. Created user documentation. Prepared repository for sharing and feedback.'
      }
    ],
  },
];
