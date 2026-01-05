'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; // Import Desain Kartu (No. 2)
import { projects } from '@/data/projects'; // Import Data (No. 1)

const Projects = () => {
    return (
        <section id="projects" className="py-20 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 dark:from-indigo-400 to-cyan-600 dark:to-cyan-400">Works</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
                        Real-world projects demonstrating clean architecture, scalable solutions, and production-ready code.
                    </p>
                </motion.div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;