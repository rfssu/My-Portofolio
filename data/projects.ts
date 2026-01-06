import { Project } from '@/types';

export const projects: Project[] = [
    {
        id: 1,
        title: "Khas Jogja Store",
        description: "A digital marketplace empowering local MSMEs in Yogyakarta to sell authentic souvenirs through a centralized platform.",
        tech: ["Laravel", "TailwindCSS", "DigitalOcean", "AmazonS3"],
        image: "/project1.jpeg",
        features: [
            "S3-Compatible Cloud Storage for secure and high-speed asset delivery.",
            "Real-time Product Search using optimized database indexing.",
            "Scalable PaaS Infrastructure with automated deployment pipelines.",
            "Integrated Checkout System designed for local MSME scalability."
        ],
        links: {
            demo: "https://khas-jogja-store-r5fzs.ondigitalocean.app/",
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
            "Atomic Booking Engine to prevent double-booking across multiple branches.",
            "Hair Artist Academy portal for integrated educational management.",
            "Real-time Artist Scheduling with interactive calendar views.",
            "Automated Customer Notifications for booking confirmation."
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
        image: "/project-3.jpeg",
        features: [
            "Next.js 15 Server-Side Rendering (SSR) for optimal performance.",
            "Lighthouse Score 100/100 through meticulous asset optimization.",
            "A24-inspired Editorial UI with custom spring-based animations.",
            "Dynamic Project Indexing with fluid modal transitions."
        ],
        links: {
            demo: "#",
            repo: "https://github.com/username/portfolio"
        }
    }
];