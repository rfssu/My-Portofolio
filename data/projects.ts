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
    }
];