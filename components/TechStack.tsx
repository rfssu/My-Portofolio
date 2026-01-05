'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const coreStack = [
    { name: "Laravel", slug: "laravel" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "React", slug: "react" },
    { name: "TypeScript", slug: "typescript" },
    { name: "Tailwind CSS", slug: "tailwindcss" },
    { name: "FilamentPHP", slug: "filament" },
    { name: "MySQL", slug: "mysql" },
    { name: "PostgreSQL", slug: "postgresql" }
];

const supportStack = [
    { name: "Figma", slug: "figma" },
    { name: "Spring Boot", slug: "springboot" },
    { name: "C# .NET", slug: "dotnet" },
    { name: "Android", slug: "android" },
    { name: "Flutter", slug: "flutter" },
    { name: "Git", slug: "git" },
    { name: "Postman", slug: "postman" },
    { name: "Linux", slug: "linux" }
];

const TechStack = () => {
    // Fungsi untuk mendapatkan URL logo dari Simple Icons
    const getLogoUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

    return (
        <section className="py-12 border-b border-slate-200 dark:border-slate-800/50 overflow-hidden bg-slate-50 dark:bg-[#0B1120]">
            <div className="container mx-auto px-6 mb-8 text-center">
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-500 font-bold tracking-[0.2em] uppercase">
                    Tech Stack & Tools
                </p>
            </div>

            <div className="flex flex-col gap-8 relative">
                {/* Gradient Cover (Left & Right) */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-slate-50 dark:from-[#0B1120] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-slate-50 dark:from-[#0B1120] to-transparent z-10 pointer-events-none"></div>

                {/* BARIS 1: CORE WEB (Gerak ke Kiri) */}
                <div className="flex overflow-hidden group">
                    <motion.div
                        className="flex gap-12 md:gap-16 whitespace-nowrap items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    >
                        {[...coreStack, ...coreStack].map((item, index) => (
                            <div key={index} className="flex items-center gap-4 group/item">
                                <div className="relative w-8 h-8 md:w-10 md:h-10 transition-all duration-300 grayscale group-hover/item:grayscale-0 scale-95 group-hover/item:scale-110">
                                    <img
                                        src={getLogoUrl(item.slug)}
                                        alt={item.name}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-xl md:text-3xl font-bold text-slate-400 dark:text-slate-600 group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* BARIS 2: TOOLS & FOUNDATION (Gerak ke Kanan) */}
                <div className="flex overflow-hidden group">
                    <motion.div
                        className="flex gap-8 md:gap-12 whitespace-nowrap items-center"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                    >
                        {[...supportStack, ...supportStack].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 px-4 py-2 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl group/item hover:border-indigo-500/50 transition-all">
                                <div className="w-5 h-5 md:w-6 md:h-6 grayscale group-hover/item:grayscale-0 transition-all">
                                    <img
                                        src={getLogoUrl(item.slug)}
                                        alt={item.name}
                                    />
                                </div>
                                <span className="text-sm md:text-base font-medium text-slate-500 dark:text-slate-400 group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors">
                                    {item.name}
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