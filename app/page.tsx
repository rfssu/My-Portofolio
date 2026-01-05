'use client'; // Wajib client karena ada animasi

import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion'; // Import motion

// 1. Definisikan Varian Animasi Stagger
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Jeda 0.2 detik antar kartu
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-slate-200 selection:bg-indigo-500/30">
      <div className="container mx-auto px-6 md:px-12 pb-20">

        <Hero />

        <section id="projects" className="pt-10 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Selected Work</h2>
              <p className="text-slate-400 max-w-lg">
                Proyek pilihan dengan interaksi 3D & Stagger Animation.
              </p>
            </div>
          </div>

          {/* 2. Terapkan Varian ke Container Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(0,1fr)]"
            variants={containerVariants} // Hubungkan varian
            initial="hidden"             // Status awal
            whileInView="show"           // Status saat terlihat
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
              // Tidak perlu kirim index manual lagi, Stagger otomatis urus
              />
            ))}
          </motion.div>

        </section>

        <footer className="py-10 text-center text-slate-600 text-sm mt-20 border-t border-slate-800/50">
          <p>© {new Date().getFullYear()} Built with Next.js & Tailwind CSS.</p>
        </footer>

      </div>
    </main>
  );
}