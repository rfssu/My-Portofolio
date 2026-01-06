'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-end pt-32 pb-16 bg-white dark:bg-[#0B1120]">
            <div className="max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col">

                {/* Cinematic Header Image - A24 Visual Style */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden mb-12"
                >

                    <Image
                        src="/picture-cinematic.png"
                        alt="Cinematic Portfolio Header"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                        priority
                    />
                    {/* Subtle Fade Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0B1120] to-transparent opacity-30"></div>
                </motion.div>

                {/* Metadata Grid - A24 Table Style */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm uppercase"
                >
                    {/* Column 1: Identity */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-[10px] tracking-[0.2em] text-slate-400 mb-1">DEVELOPER</p>
                            <h2 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                                RAFI SAIFULLAH <br /> SATRIA UTAMA
                            </h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[10px] tracking-widest font-bold">AVAILABLE FOR WORK</span>
                        </div>
                    </div>

                    {/* Column 2: Focus & Tech */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-[10px] tracking-[0.2em] text-slate-400 mb-1">TECH STACK</p>
                            <p className="text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                                LARAVEL • NEXT.JS <br /> REACT • TYPESCRIPT
                            </p>
                        </div>
                        <div>
                            <p className="text-[10px] tracking-[0.2em] text-slate-400 mb-1">LOCATION</p>
                            <p className="text-base font-bold text-slate-900 dark:text-white">
                                YOGYAKARTA, ID
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Narrative & CTA */}
                    <div className="flex flex-col justify-between h-full space-y-8">
                        <p className="text-sm italic text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                            Focused on building high-performance digital products that solve real-world problems through clean code and intuitive experiences.
                        </p>
                        <div className="flex gap-8 border-t border-slate-100 dark:border-slate-800 pt-6">
                            <a href="#projects" className="group flex items-center gap-2 hover:text-indigo-500 transition-colors">
                                <span className="font-black text-xs">VIEW PROJECTS</span>
                                <span className="text-xs group-hover:translate-x-1 transition-transform">↗</span>
                            </a>
                            <a href="mailto:rafi.ss.utama@gmail.com" className="group flex items-center gap-2 hover:text-indigo-500 transition-colors">
                                <span className="font-black text-xs">GET IN TOUCH</span>
                                <span className="text-xs group-hover:translate-x-1 transition-transform">↗</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;