'use client'; // Wajib untuk animasi

import React from 'react';
import { motion } from 'framer-motion'; // Import library animasi

interface ProjectProps {
    title: string;
    category: string;
    image: string;
    description: string;
    tech: string[];
    demoLink: string;
    repoLink: string;
    size?: string;
    index?: number; // Tambahan untuk urutan animasi
}

const ProjectCard = ({ title, category, image, description, tech, demoLink, repoLink, size, index = 0 }: ProjectProps) => {

    const isLarge = size === 'large';

    return (
        <motion.div
            // === SETTING ANIMASI ===
            initial={{ opacity: 0, y: 50 }}       // Awal: Transparan & Turun 50px
            whileInView={{ opacity: 1, y: 0 }}    // Saat terlihat: Muncul & Naik ke posisi 0
            transition={{
                duration: 0.5,
                delay: index * 0.2,                 // Delay: Kartu 1 muncul 0.2s, Kartu 2 0.4s, dst.
                ease: "easeOut"
            }}
            viewport={{ once: true, margin: "-50px" }} // Animasi jalan sekali saja biar ga pusing
            // ======================

            className={`
        group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 
        hover:border-slate-600 transition-all duration-300 flex flex-col 
        ${isLarge ? 'md:col-span-2 md:flex-row' : 'col-span-1'} 
      `}
        >

            {/* BAGIAN GAMBAR */}
            <div className={`relative overflow-hidden bg-slate-800 ${isLarge ? 'w-full md:w-1/2 min-h-[250px]' : 'w-full h-56'}`}>
                {/* Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <span className="text-slate-600 font-mono text-xs tracking-widest">IMAGE PREVIEW</span>
                </div>

                {/* Gambar */}
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => e.currentTarget.style.display = 'none'}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300" />
            </div>

            {/* BAGIAN KONTEN */}
            <div className={`p-6 flex flex-col justify-between ${isLarge ? 'w-full md:w-1/2' : 'w-full'}`}>
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-2 py-1 rounded-md border border-indigo-500/20">
                            {category}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                        {title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {tech.slice(0, 4).map((t, i) => (
                            <span key={i} className="text-[10px] text-slate-300 bg-slate-800 border border-slate-700 px-2 py-1 rounded-full">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-5 pt-4 border-t border-slate-800 mt-auto">
                    <a href={demoLink} className="text-sm font-semibold text-white hover:text-indigo-400 flex items-center gap-2 transition-colors">
                        Live Demo
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>
                    <a href={repoLink} className="text-sm font-semibold text-slate-500 hover:text-white transition-colors">
                        Source Code
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;