'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface ProjectProps {
    title: string;
    category: string;
    image: string;
    description: string;
    tech: string[];
    demoLink: string;
    repoLink: string;
    size?: string;
}

// 1. Varian untuk animasi masuk (Child dari Stagger)
const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const ProjectCard = ({ title, category, image, description, tech, demoLink, repoLink, size }: ProjectProps) => {
    const isLarge = size === 'large';

    // === LOGIKA 3D TILT ===
    const ref = useRef<HTMLDivElement>(null);

    // Nilai posisi mouse (x, y) relative ke tengah kartu
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        // WRAPPER LUAR: Mengurus animasi Stagger (Muncul)
        <motion.div
            variants={itemVariants}
            className={`${isLarge ? 'md:col-span-2' : 'col-span-1'} h-full`}
            style={{ perspective: 1000 }}
        >

            {/* WRAPPER DALAM: Mengurus animasi Tilt 3D */}
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                // === UPDATE CSS DISINI (SUPPORT DARK & LIGHT) ===
                className={`
          group relative h-full overflow-hidden rounded-3xl 
          
          /* MODE LIGHT (Default) */
          bg-white border border-slate-200 shadow-sm
          
          /* MODE DARK */
          dark:bg-slate-900 dark:border-slate-800 dark:shadow-none

          /* HOVER EFFECTS */
          hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 
          transition-all duration-300 flex flex-col 
          ${isLarge ? 'md:flex-row' : ''} 
        `}
            >

                {/* BAGIAN GAMBAR */}
                <div
                    className={`relative overflow-hidden bg-slate-200 dark:bg-slate-800 ${isLarge ? 'w-full md:w-1/2 min-h-[280px]' : 'w-full h-64'}`}
                    style={{ transform: "translateZ(50px)" }}
                >
                    {/* Placeholder Background: Terang di Light, Gelap di Dark */}
                    <div className="absolute inset-0 bg-slate-200 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                        <span className="text-slate-400 dark:text-slate-600 font-mono text-xs tracking-widest">PREVIEW</span>
                    </div>

                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => e.currentTarget.style.display = 'none'}
                    />
                    {/* Overlay Gelap hanya muncul saat Hover di Light Mode, atau selalu ada di Dark Mode */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 dark:bg-black/10 dark:group-hover:bg-transparent transition-all duration-300" />
                </div>

                {/* BAGIAN KONTEN */}
                <div
                    className={`p-6 flex flex-col justify-between ${isLarge ? 'w-full md:w-1/2' : 'w-full'}`}
                    style={{ transform: "translateZ(20px)" }}
                >
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-[10px] font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase bg-indigo-50 dark:bg-indigo-500/10 px-2 py-1 rounded-md border border-indigo-200 dark:border-indigo-500/20">
                                {category}
                            </span>
                        </div>

                        {/* JUDUL: Hitam di Light, Putih di Dark */}
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                            {title}
                        </h3>

                        {/* DESKRIPSI: Abu gelap di Light, Abu terang di Dark */}
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6">
                            {description}
                        </p>

                        {/* TECH BADGES */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {tech.slice(0, 4).map((t, i) => (
                                <span key={i} className="text-[10px] text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded-full">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-5 pt-4 border-t border-slate-200 dark:border-slate-800 mt-auto">
                        <a href={demoLink} className="text-sm font-semibold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-2 transition-colors">
                            Live Demo
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </a>
                        <a href={repoLink} className="text-sm font-semibold text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                            Source Code
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;