'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectProps {
    project: any;
    index: number;
    onOpen: (project: any) => void;
}

const ProjectCard: React.FC<ProjectProps> = ({ project, index, onOpen }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => onOpen(project)}
            className="group cursor-pointer flex flex-col"
        >
            <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-slate-100 dark:bg-slate-900">
                <Image
                    src={project.image || '/placeholder.png'}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.2s] ease-in-out"
                />
            </div>
            <div className="space-y-1">
                <p className="text-[10px] italic font-medium tracking-tight text-slate-400">
                    2025 • {project.tech[0]}
                </p>
                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white uppercase leading-none">
                    {project.title}
                </h3>
            </div>
        </motion.div>
    );
};

export default ProjectCard;