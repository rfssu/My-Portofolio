// src/data/projects.ts

export const projects = [
    {
        id: 1,
        title: "E-Commerce Bakpia Jogja",
        category: "Fullstack Laravel", // Kategori untuk HR
        image: "/project-1.jpg",      // Nanti kita siapkan gambarnya
        tech: ["Laravel 10", "MySQL", "Midtrans", "FilamentPHP", "Tailwind"],
        description: "Sistem e-commerce end-to-end untuk UMKM lokal. Mengelola stok real-time, pembayaran otomatis via Midtrans, dan dashboard admin analitik.",
        demoLink: "#",                // Link demo (jika ada)
        repoLink: "#",                // Link GitHub
        size: "large",                // <--- PENTING: Ini yang membuat kotak ini menjadi BESAR (2 kolom)
    },
    {
        id: 2,
        title: "Corporate Data Dashboard",
        category: "Data Analytics",
        image: "/project-2.jpg",
        tech: ["Python", "Pandas", "React.js", "Recharts"],
        description: "Dashboard visualisasi data interaktif untuk memantau KPI penjualan dan tren musiman perusahaan secara real-time.",
        demoLink: "#",
        repoLink: "#",
        size: "small",                // Kotak ukuran standar
    },
    {
        id: 3,
        title: "Inventory Management SaaS",
        category: "Web Application",
        image: "/project-3.jpg",
        tech: ["Next.js 14", "TypeScript", "Prisma ORM", "Supabase"],
        description: "Aplikasi pencatatan barang masuk/keluar dengan fitur scan barcode dan export laporan PDF otomatis.",
        demoLink: "#",
        repoLink: "#",
        size: "small",                // Kotak ukuran standar
    },
];