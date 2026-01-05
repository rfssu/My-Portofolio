import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1120] text-slate-200 selection:bg-indigo-500/30">
      <div className="container mx-auto px-6 md:px-12 pb-20">

        {/* 1. Hero Section (Yang baru saja kita update) */}
        <Hero />

        {/* 2. Projects Section (Bento Grid Layout) */}
        <section id="projects" className="pt-10 border-t border-slate-800">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Selected Work</h2>
              <p className="text-slate-400 max-w-lg">
                Proyek pilihan yang menunjukkan kemampuan saya dalam Fullstack Development dan Analisis Data.
              </p>
            </div>

            {/* Link ke GitHub Profil */}
            <a href="https://github.com/username" target="_blank" className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
              Lihat GitHub Saya <span className="text-lg">→</span>
            </a>
          </div>

          {/* THE GRID SYSTEM */}
          {/* Grid ini akan menyesuaikan dengan logika 'col-span-2' yang ada di ProjectCard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(0,1fr)]">
            {projects.map((project, index) => ( // <--- Tambah parameter 'index'
              <ProjectCard
                key={project.id}
                index={index} // <--- Kirim 'index' ke komponen
                {...project}
              />
            ))}
          </div>

        </section>

        {/* 3. Footer Minimalis */}
        <footer className="py-10 text-center text-slate-600 text-sm mt-20 border-t border-slate-800/50">
          <p>© {new Date().getFullYear()} Built with Next.js & Tailwind CSS.</p>
        </footer>

      </div>
    </main>
  );
}