'use client';

import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack'; // <--- Import Baru
import ProjectCard from '@/components/ProjectCard';
import Experience from '@/components/Experience'; // <--- Import Baru
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

// Varian Stagger untuk Project
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-slate-200 selection:bg-indigo-500/30">

      {/* 1. HERO SECTION */}
      <div className="container mx-auto px-6 md:px-12">
        <Hero />
      </div>

      {/* 2. TECH STACK MARQUEE (Full Width) */}
      <TechStack />

      <div className="container mx-auto px-6 md:px-12 pb-20">

        {/* 3. PROJECTS SECTION */}
        <section id="projects" className="pt-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Selected Work</h2>
              <p className="text-slate-400 max-w-lg">
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

        {/* 4. EXPERIENCE & EDUCATION */}
        <Experience />

        {/* 5. FOOTER */}
        <footer className="py-10 text-center text-slate-600 text-sm mt-10 border-t border-slate-800/50">
          <p>© {new Date().getFullYear()} Built with Next.js & Tailwind CSS.</p>
        </footer>

      </div>
    </main>
  );
}