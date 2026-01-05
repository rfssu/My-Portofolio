'use client';

import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import ProjectCard from '@/components/ProjectCard';
import Experience from '@/components/Experience';
import ThemeToggle from '@/components/ThemeToggle'; // <--- Import Tombol
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Home() {
  return (
    // PERUBAHAN BESAR DISINI: bg-slate-50 (Light) vs dark:bg-[#0B1120] (Dark)
    // Text juga berubah: text-slate-900 (Light) vs dark:text-slate-200 (Dark)
    <main className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-slate-200 transition-colors duration-300 selection:bg-indigo-500/30">

      {/* Masukkan Tombol Toggle disini */}
      <ThemeToggle />

      <div className="container mx-auto px-6 md:px-12">
        <Hero />
      </div>

      <TechStack />

      <div className="container mx-auto px-6 md:px-12 pb-20">

        <section id="projects" className="pt-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              {/* Judul: Hitam di Light, Putih di Dark */}
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Selected Work</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-lg">
                Proyek pilihan dengan interaksi modern.
              </p>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(0,1fr)]"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </motion.div>
        </section>

        <Experience />

        <footer className="py-10 text-center text-slate-500 text-sm mt-10 border-t border-slate-200 dark:border-slate-800/50">
          <p>© {new Date().getFullYear()} Built with Next.js & Tailwind CSS.</p>
        </footer>

      </div>
    </main>
  );
}