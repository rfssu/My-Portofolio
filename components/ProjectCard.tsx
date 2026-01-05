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
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative aspect-[16/9] overflow-hidden bg-black"
        >
            {/* Project Image - Full Bleed */}
            <div className="relative w-full h-full">
                <Image
                    src={project.image || '/placeholder.png'}
                    alt={project.title}
                    fill
                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                />
            </div>

            {/* Text Overlay - Bottom */}
            <div className="absolute inset-0 flex items-end p-8">
                <div className="w-full">
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white mb-3">
                        {project.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed mb-4 max-w-lg">
                        {project.description}
                    </p>

                    {/* Tech Stack - Minimal */}
                    <div className="flex flex-wrap gap-3 text-xs uppercase tracking-widest text-slate-400 mb-4">
                        {project.tech.slice(0, 3).map((tech) => (
                            <span key={tech}>{tech}</span>
                        ))}
                    </div>

                    {/* Links - Text Only */}
                    <div className="flex gap-6 text-xs uppercase tracking-widest">
                        {project.links.repo && (
                            <a
                                href={project.links.repo}
                                target="_blank"
                                className="text-white hover:text-slate-400 transition-colors duration-300 pb-1 border-b border-transparent hover:border-current"
                            >
                                Code →
                            </a>
                        )}
                        {project.links.demo && (
                            <a
                                href={project.links.demo}
                                target="_blank"
                                className="text-white hover:text-slate-400 transition-colors duration-300 pb-1 border-b border-transparent hover:border-current"
                            >
                                Live →
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 pointer-events-none"></div>
        </motion.div>
    );
};

export default ProjectCard;