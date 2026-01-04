'use client';

import React from 'react';

// 1. Interface disesuaikan dengan projects.ts yang baru
interface ProjectProps {
    title: string;
    category: string;
    image: string;
    description: string;
    tech: string[];
    demoLink: string;
    repoLink: string;
    size?: string; // Property optional untuk mengatur ukuran kartu
}

const ProjectCard = ({ title, category, image, description, tech, demoLink, repoLink, size }: ProjectProps) => {

    // 2. Logika Penentu Ukuran (Bento Logic)
    // Jika size = 'large', kartu ini dianggap spesial
    const isLarge = size === 'large';

    return (
        <div
            className={`
        group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 
        hover:border-slate-600 transition-all duration-300 flex flex-col 
        ${isLarge ? 'md:col-span-2 md:flex-row' : 'col-span-1'} 
      `}
        >

            {/* BAGIAN A: GAMBAR PROYEK */}
            {/* Jika Large, gambar mengambil 50% lebar. Jika Small, gambar full width di atas. */}
            <div className={`relative overflow-hidden bg-slate-800 ${isLarge ? 'w-full md:w-1/2 min-h-[250px]' : 'w-full h-56'}`}>

                {/* Placeholder text jika gambar belum dimuat */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <span className="text-slate-600 font-mono text-xs tracking-widest">
                        IMAGE PREVIEW
                    </span>
                </div>

                {/* Gambar Asli */}
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => e.currentTarget.style.display = 'none'} // Sembunyikan img jika error/404
                />

                {/* Overlay Gelap saat Hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300" />
            </div>

            {/* BAGIAN B: KONTEN TEKS */}
            <div className={`p-6 flex flex-col justify-between ${isLarge ? 'w-full md:w-1/2' : 'w-full'}`}>
                <div>
                    {/* Kategori Badge */}
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-2 py-1 rounded-md border border-indigo-500/20">
                            {category}
                        </span>
                    </div>

                    {/* Judul */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                        {title}
                    </h3>

                    {/* Deskripsi */}
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6">
                        {description}
                    </p>

                    {/* Tech Stack (Maksimal 4 items agar rapi) */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tech.slice(0, 4).map((t, i) => (
                            <span key={i} className="text-[10px] text-slate-300 bg-slate-800 border border-slate-700 px-2 py-1 rounded-full">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Tombol Aksi */}
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
        </div>
    );
};

export default ProjectCard;