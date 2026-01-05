'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-8 md:px-12">

                {/* Section Header - Minimal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-600 mb-6">
                        Selected Works
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
                        Real-world projects demonstrating clean architecture and production-ready code.
                    </p>
                </motion.div>

                {/* Project Grid - Cinematic */}
                <div className="grid md:grid-cols-2 gap-px bg-slate-200/20 dark:bg-slate-800/20">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;