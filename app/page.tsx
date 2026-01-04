import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container-custom">

        {/* ========================================
            HERO SECTION
            ======================================== */}
        <Hero />

        {/* ========================================
            PROJECTS SECTION
            ======================================== */}
        <section id="projects" className="py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Projects
            </h2>
            <p className="text-slate-400">
              Deskripsi section projects Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tech={project.tech}
                link={project.link}
              />
            ))}
          </div>
        </section>

        {/* ========================================
            FOOTER
            ======================================== */}
        <footer className="py-10 text-center border-t border-slate-800 mt-20">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </footer>

      </div>
    </main>
  );
}