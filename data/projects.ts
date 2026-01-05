export const projects = [
    {
        id: 1,
        title: "Khas Jogja Store",
        description: "A digital marketplace empowering local MSMEs (UMKM) in Yogyakarta to sell authentic souvenirs. Features include S3-compatible cloud storage for assets, real-time product search, and a seamless checkout experience hosted on a scalable PaaS infrastructure.",
        tech: ["Laravel", "Tailwind CSS", "DigitalOcean App Platform", "S3 Storage"],
        image: "/project1.jpeg",
        links: {
            demo: "https://khas-jogja-store-r5fzs.ondigitalocean.app/",
            repo: null // Repo private/client
        }
    },
    {
        id: 2,
        title: "Simply Haircut Platform",
        description: "An integrated booking and academy platform for a premium barbershop. The system allows customers to book specific hair artists and services, while also serving as an educational hub for the Simply Haircut Academy.",
        tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
        image: "/project2.jpeg",
        links: {
            demo: "https://simplyhaircut.id/",
            repo: null // Repo private/client
        }
    },
    {
        id: 3,
        title: "Modern Personal Portfolio",
        description: "My personal professional showcase built with performance and interactivity in mind. Utilizing a Bento-grid layout to organize content effectively, featuring smooth page transitions and a highly responsive design for all devices.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        image: "/project-3.jpeg",
        links: {
            demo: "#", // Link ke diri sendiri (atau kosongkan jika belum deploy)
            repo: "https://github.com/username/portfolio" // Boleh diisi jika mau open source
        }
    }
];