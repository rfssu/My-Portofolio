'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TechStackItem } from '@/types';

const coreStack: TechStackItem[] = [
    { name: "LARAVEL", slug: "laravel" },
    { name: "NEXT.JS", slug: "nextdotjs" },
    { name: "REACT", slug: "react" },
    { name: "TYPESCRIPT", slug: "typescript" },
    { name: "TAILWIND CSS", slug: "tailwindcss" },
    { name: "MYSQL", slug: "mysql" },
    { name: "POSTGRESQL", slug: "postgresql" }
];

const supportStack: TechStackItem[] = [
    { name: "FIGMA", slug: "figma" },
    { name: "SPRING BOOT", slug: "springboot" },
    { name: ".NET", slug: "dotnet" },
    { name: "ANDROID", slug: "android" },
    { name: "FLUTTER", slug: "flutter" },
    { name: "GIT", slug: "git" },
    { name: "POSTMAN", slug: "postman" },
    { name: "LINUX", slug: "linux" }
];

const TechStack: React.FC = () => {
    const getLogoUrl = (slug: string): string => `https://cdn.simpleicons.org/${slug}`;

    return (
        <section className="py-12 border-y border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-[#0B1120]">

            {/* Section Title - Centered */}
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-sm md:text-base tracking-[0.2em] font-bold text-slate-900 dark:text-white uppercase font-mono">
                    Technical Tools
                </h2>
                <div className="h-[2px] w-12 bg-indigo-500 mt-2"></div>
            </div>

            <div className="flex flex-col gap-6 relative"> {/* Gap antar baris ticker dirapatkan dari 10 ke 6 */}

                {/* BARIS 1: CORE STACK */}
                <div className="flex overflow-hidden">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                        className="flex gap-16 whitespace-nowrap font-mono text-sm md:text-lg uppercase tracking-[0.3em] text-slate-400 dark:text-slate-600"
                    >
                        {[...coreStack, ...coreStack].map((tech, index) => (
                            <div key={index} className="flex items-center gap-16 group">
                                <div className="flex items-center gap-4">
                                    <img
                                        src={getLogoUrl(tech.slug)}
                                        alt={tech.name}
                                        className="w-5 h-5 grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <span className="font-black italic hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">
                                        {tech.name}
                                    </span>
                                </div>
                                <span className="opacity-20 font-normal not-italic">•</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* BARIS 2: SUPPORT STACK */}
                <div className="flex overflow-hidden">
                    <motion.div
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                        className="flex gap-16 whitespace-nowrap font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-slate-400/60 dark:text-slate-700"
                    >
                        {[...supportStack, ...supportStack].map((tech, index) => (
                            <div key={index} className="flex items-center gap-16 group">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={getLogoUrl(tech.slug)}
                                        alt={tech.name}
                                        className="w-3 h-3 grayscale opacity-20 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <span className="font-medium hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">
                                        {tech.name}
                                    </span>
                                </div>
                                <span className="opacity-20">•</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default TechStack;