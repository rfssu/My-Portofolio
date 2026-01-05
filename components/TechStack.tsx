'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "Laravel", "Next.js", "React", "TypeScript", "Tailwind CSS",
    "MySQL", "PostgreSQL", "FilamentPHP", "Git", "Figma", "Python"
];

const TechStack = () => {
    return (
        <section className="py-10 border-b border-slate-800/50 overflow-hidden">
            <div className="container mx-auto px-6 mb-6 text-center">
                <p className="text-sm text-slate-500 font-medium tracking-widest uppercase">
                    Technologies I Work With
                </p>
            </div>

            <div className="relative flex overflow-hidden group">
                {/* Gradient Cover (Kiri & Kanan) agar teks terlihat pudar saat keluar layar */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B1120] to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B1120] to-transparent z-10"></div>

                {/* CONTAINER ANIMASI (Diduplikasi agar loop mulus) */}
                <motion.div
                    className="flex gap-8 md:gap-16 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }} // Bergerak dari 0 ke -50% (karena kita duplikasi listnya)
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20 // Kecepatan (makin besar makin lambat)
                    }}
                >
                    {/* Render List Skill 2 kali untuk efek infinite loop */}
                    {[...skills, ...skills].map((item, index) => (
                        <span
                            key={index}
                            className="text-2xl md:text-4xl font-bold text-slate-700 hover:text-indigo-400 transition-colors cursor-default"
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;