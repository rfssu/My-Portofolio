'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; // Import Desain Kartu (No. 2)
import { projects } from '@/data/projects'; // Import Data (No. 1)

const Projects = () => {
    return (
        <section id="projects" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Judul Section (Selected Works) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">Works</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl leading-relaxed">
                        Beberapa proyek pilihan yang menunjukkan solusi nyata dengan kode rapi dan performa tinggi.
                    </p>
                </motion.div>

                {/* Looping Kartu */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;