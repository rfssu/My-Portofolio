'use client';

import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects'; // <--- Panggil Wrapper yang baru dibuat (No. 3)
import Experience from '@/components/Experience';
import FloatingDock from '@/components/FloatingDock';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0B1120] text-slate-900 dark:text-slate-200 transition-colors duration-300 selection:bg-indigo-500/30">

      {/* Navigation Dock */}
      <FloatingDock />

      {/* Hero Section */}
      <div id="hero" className="container mx-auto px-4 sm:px-6 md:px-12">
        <Hero />
      </div>

      {/* Tech Stack */}
      <TechStack />

      {/* Projects Section (Otomatis memanggil data & desain) */}
      <Projects />

      {/* Container untuk sisa konten */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 pb-24 sm:pb-28 md:pb-32">

        {/* Experience Section */}
        <section id="experience">
          <Experience />
        </section>

        {/* CTA Section */}
        <ContactCTA />

        {/* Footer */}
        <footer className="py-10 text-center text-slate-500 text-sm mt-10 border-t border-slate-200 dark:border-slate-800/50">
          <p>© {new Date().getFullYear()} Built with Next.js & Tailwind CSS.</p>
        </footer>

      </div>
    </main>
  );
}