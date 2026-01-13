import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: 1,
        title: "Khas Jogja Store",
        description: "A digital marketplace empowering local MSMEs in Yogyakarta to sell authentic souvenirs through a centralized platform.",
        tech: ["Laravel", "TailwindCSS", "daisyUI", "MySQL", "DigitalOcean", "Midtrans"],
        image: "/project1.jpeg",
        features: [
            "Integrated Midtrans Payment Gateway with automated payment status handling via secure Webhooks.",
            "Architected Cloud-Native Asset Management using DigitalOcean Spaces (S3-Compatible) for decoupled storage.",
            "Implemented Real-time Product Search with optimized database query indexing for sub-second performance.",
            "Managed End-to-End Deployment on DigitalOcean, ensuring seamless CI/CD and production-ready environment."
        ],
        links: {
            demo: null,
            repo: null
        }
    },
    {
        id: 2,
        title: "Simply Haircut Platform",
        description: "Integrated booking and education ecosystem for premium barbershops, featuring real-time artist scheduling.",
        tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
        image: "/project2.jpeg",
        features: [
            "Dynamic Academy Portal designed for structured educational content management and stylist training.",
            "Seamless WhatsApp Integration for a direct-to-barber booking flow, optimizing customer conversion rates.",
            "Integrated Artist Scheduling system to showcase real-time availability and premium haircut services.",
            "Interactive Business Profile with a mobile-first approach to ensure a premium user experience across all devices."
        ],
        links: {
            demo: "https://simplyhaircut.id/",
            repo: null
        }
    },
    {
        id: 3,
        title: "Modern Personal Portfolio",
        description: "A high-performance cinematic portfolio built with Next.js 15, focusing on editorial design and smooth interaction.",
        tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer"],
        image: "/project3.png",
        features: [
            "Next.js 15 Server-Side Rendering (SSR) for optimal performance.",
            "Lighthouse Score 100/100 through meticulous asset optimization.",
            "A24-inspired Editorial UI with custom spring-based animations.",
            "Dynamic Project Indexing with fluid modal transitions."
        ],
        links: {
            demo: "#",
            repo: "https://github.com/rfssu/My-Portofolio"
        }
    },

    {
        id: 4,
        title: "Ourfield: Mobile App for Sports Field",
        description: "A comprehensive mobile solution designed to streamline the process of discovering and booking local sports facilities through an intuitive user interface.",
        tech: ["Figma"],
        image: "/project4.png",
        features: [
            "End-to-end User Journey design for field discovery, real-time availability checking, and seamless booking.",
            "Location-based Search Interface optimized for high-speed facility filtering and discovery.",
            "Developed a scalable Design System in Figma with reusable components to ensure visual consistency across the platform.",
            "Interactive High-Fidelity Prototyping to simulate the complete user booking experience and field management flow."
        ],
        links: {
            demo: null,
            repo: null
        }
    },
    {
        id: 5,
        title: "PANTAUPOHON: Enterprise Agri-Tech Intelligence",
        description: "A high-performance digital logbook for biological assets built on the 'Tani-Stack'—integrating binary-paged storage with custom semantic query logic.",
        tech: ["Go", "PostgreSQL", "Redis", "TailwindCSS", "JokoUI", "SawitDB"],
        image: "/project5.png",
        features: [
            "Architected on Prabogo Go Framework using internal scaffolding for enterprise-grade scalability.",
            "Implemented AQL (Agricultural Query Language) to bridge the semantic gap between field operations and binary storage.",
            "Dual-layer acceleration using Gib.Run (Redis) to ensure near-instant data downstreaming for real-time monitoring.",
            "Engineered with SawitDB's WowoEngine, utilizing 4KB fixed-size binary pages for optimized memory footprint.",
            "Modern 'Sat-set' UI development using Tailwind CSS v4 and the JokoUI component library.",
        ],
        links: {
            demo: null,
            repo: "https://github.com/rfssu/Tree-Logbook.git"
        }
    }


];