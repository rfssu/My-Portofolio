'use client';

import React from 'react';
import { motion } from 'framer-motion';

// KASTA 1: CORE STACK (Web Development - Fokus Utama)
// Ini skill yang Anda ingin HR highlight untuk pekerjaan
const coreStack = [
    "Laravel 10", "Next.js 15", "React", "TypeScript", "Tailwind CSS",
    "FilamentPHP", "MySQL", "PostgreSQL"
];

// KASTA 2: FOUNDATION & TOOLS (UI/UX, Mobile, Logic)
// Ini menunjukkan Anda versatile (bisa Design, paham konsep OOP Java/C#, lagi belajar Mobile)
const supportStack = [
    "Figma (UI/UX)", "Java Spring Boot", "C# .NET", "Android Native",
    "Flutter", "Git", "Postman", "Linux"
];

const TechStack = () => {
    return (
        <section className="py-12 border-b border-slate-800/50 overflow-hidden bg-[#0B1120]">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-xs md:text-sm text-slate-500 font-bold tracking-[0.2em] uppercase">
                    Tech Stack & Tools
                </p>
            </div>

            <div className="flex flex-col gap-6 relative">
                {/* Gradient Cover (Agar teks pudar di ujung) */}
                <div className="absolute left-0 top-0 bottom-0 w-10 md:w-32 bg-gradient-to-r from-[#0B1120] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-10 md:w-32 bg-gradient-to-l from-[#0B1120] to-transparent z-10 pointer-events-none"></div>

                {/* BARIS 1: CORE WEB (Gerak ke Kiri) */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-8 md:gap-12 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                    >
                        {[...coreStack, ...coreStack].map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className="text-xl md:text-3xl font-bold text-slate-300 hover:text-white transition-colors">
                                    {item}
                                </span>
                                {/* Dot pemisah kecil */}
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-800"></span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* BARIS 2: TOOLS & FOUNDATION (Gerak ke Kanan) */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-6 md:gap-10 whitespace-nowrap"
                        animate={{ x: ["-50%", "0%"] }} // Arah balik
                        transition={{ repeat: Infinity, ease: "linear", duration: 30 }} // Lebih lambat dikit
                    >
                        {[...supportStack, ...supportStack].map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                {/* Style beda dikit: Lebih kecil & warna slate-500 agar tidak rebutan fokus dengan Core Stack */}
                                <span className="text-sm md:text-lg font-medium text-slate-500 hover:text-indigo-400 transition-colors border border-slate-800 px-3 py-1 rounded-full">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;