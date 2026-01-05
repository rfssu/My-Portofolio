'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface ProjectProps {
    project: {
        id: number;
        title: string;
        description: string;
        tech: string[];
        image: string | null;
        links: {
            demo?: string | null;
            repo?: string | null;
        };
    };
    index: number
}

const ProjectCard: React.FC<ProjectProps> = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative flex flex-col h-full bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300"
        >
            {/* Gambar Project */}
            <div className="relative w-full h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                    {/* Placeholder Gambar */}
                    <Image
                        src={project.image || '/placeholder.png'} // <--- GANTI JADI INI
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Konten Text */}
            <div className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-500 transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-6 flex-grow">
                    {project.description}
                </p>

                {/* Pills Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 rounded-full border border-slate-200 dark:border-slate-700">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Tombol Link */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                    {project.links.repo && (
                        <a href={project.links.repo} target="_blank" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                            <Github className="w-4 h-4" /> Code
                        </a>
                    )}
                    {project.links.demo && (
                        <a href={project.links.demo} target="_blank" className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                            <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;