'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';
import { X, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);

    // Fungsi helper untuk mendapatkan logo monokromatik dari Simple Icons
    const getLogoUrl = (name: string) => {
        const slug = name.toLowerCase().replace(/\s+/g, '').replace(/\.js/g, 'dotjs');
        return `https://cdn.simpleicons.org/${slug}`;
    };

    return (
        <section id="projects" className="py-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120] relative text-left">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Centered Title Section - Consistent with Tech Stack */}
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-sm md:text-base tracking-[0.6em] font-black text-slate-900 dark:text-white uppercase font-mono text-center">
                        My Projects
                    </h2>
                    <div className="h-[2px] w-12 bg-indigo-500 mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onOpen={setSelectedProject}
                        />
                    ))}
                </div>
            </div>

            {/* Centered Modal System */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        {/* Backdrop - High Contrast Dark Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100]"
                        />

                        {/* Centered Modal Content - A24 Editorial Style */}
                        <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="pointer-events-auto w-full max-w-5xl bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl rounded-none"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    {/* Project Image Frame */}
                                    <div className="relative aspect-square md:aspect-auto h-full min-h-[400px] bg-slate-900">
                                        <Image
                                            src={selectedProject.image || '/placeholder.png'}
                                            alt={selectedProject.title}
                                            fill
                                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                        />
                                    </div>

                                    {/* Text Content Grid */}
                                    <div className="p-8 md:p-14 flex flex-col justify-between relative bg-white dark:bg-[#0B1120]">
                                        <button
                                            onClick={() => setSelectedProject(null)}
                                            className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                                        >
                                            <X className="w-6 h-6" />
                                        </button>

                                        <div className="space-y-10 uppercase">
                                            {/* Header Detail */}
                                            <div>
                                                <p className="text-[10px] tracking-[0.4em] text-slate-400 mb-3 font-mono italic underline underline-offset-4">
                                                    ARCHIVE / NO.{String(selectedProject.id).padStart(3, '0')}
                                                </p>
                                                <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-none text-slate-900 dark:text-white">
                                                    {selectedProject.title}
                                                </h3>
                                            </div>

                                            {/* Synopsis Section */}
                                            <div className="space-y-4">
                                                <p className="text-[10px] tracking-[0.3em] text-slate-400 font-mono font-bold">SYNOPSIS</p>
                                                <p className="text-sm normal-case italic leading-relaxed text-slate-600 dark:text-slate-400 font-medium max-w-md">
                                                    {selectedProject.description}
                                                </p>
                                            </div>

                                            {/* Tech Apparatus with Icons */}
                                            <div className="space-y-5">
                                                <p className="text-[10px] tracking-[0.3em] text-slate-400 font-mono font-bold">TECH APPARATUS</p>
                                                <div className="flex flex-wrap gap-x-6 gap-y-4">
                                                    {selectedProject.tech.map((t: string) => (
                                                        <div key={t} className="flex items-center gap-2.5 group/icon">
                                                            <img
                                                                src={getLogoUrl(t)}
                                                                alt={t}
                                                                className="w-4 h-4 grayscale opacity-40 group-hover/icon:opacity-100 group-hover/icon:grayscale-0 transition-all duration-300"
                                                                onError={(e) => (e.currentTarget.style.display = 'none')}
                                                            />
                                                            <span className="text-[11px] font-black tracking-tighter text-slate-800 dark:text-slate-200">
                                                                {t}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Links */}
                                        <div className="pt-10 flex gap-12 border-t border-slate-100 dark:border-slate-800 mt-12">
                                            {selectedProject.links.demo && (
                                                <a href={selectedProject.links.demo} target="_blank" className="flex items-center gap-2 text-[11px] font-black tracking-[0.25em] text-slate-900 dark:text-white hover:text-indigo-500 transition-colors">
                                                    VIEW LIVE ↗
                                                </a>
                                            )}
                                            {selectedProject.links.repo && (
                                                <a href={selectedProject.links.repo} target="_blank" className="flex items-center gap-2 text-[11px] font-black tracking-[0.25em] text-slate-900 dark:text-white hover:text-indigo-500 transition-colors">
                                                    SOURCE CODE ↗
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;