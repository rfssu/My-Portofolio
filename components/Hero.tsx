'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
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
                        className="object-cover transition-all duration-1000 ease-in-out"
                        priority
                    />
                    {/* Subtle Fade Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0B1120] to-transparent opacity-30"></div>
                </motion.div>

                {/* Two-Column Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-20 items-start"
                >
                    {/* Left Column: Identity & Skills */}
                    <div className="space-y-4 md:space-y-6">
                        {/* Name */}
                        <div>
                            <h1 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight tracking-tight uppercase">
                                RAFI SAIFULLAH SATRIA UTAMA
                            </h1>
                        </div>

                        {/* Status & Location */}
                        <div className="flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-2 md:gap-y-3">
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] tracking-[0.2em] font-bold text-slate-900 dark:text-white uppercase">Available for Work</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-[10px] tracking-[0.2em] text-slate-400 uppercase">Location:</span>
                                <span className="text-xs md:text-sm font-medium text-slate-900 dark:text-white">Indonesia</span>
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <p className="text-[10px] tracking-[0.2em] text-slate-400 uppercase mb-2 md:mb-3">Specialization</p>
                            <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                                <span className="text-[10px] md:text-xs font-medium px-2 md:px-3 py-1 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
                                    UI/UX Design
                                </span>
                                <span className="text-[10px] md:text-xs font-medium px-2 md:px-3 py-1 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
                                    Mobile Dev
                                </span>
                                <span className="text-[10px] md:text-xs font-medium px-2 md:px-3 py-1 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
                                    Frontend
                                </span>
                                <span className="text-[10px] md:text-xs font-medium px-2 md:px-3 py-1 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
                                    Backend
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Current Focus */}
                    <div className="md:pt-2 md:min-w-[280px]">
                        <div>
                            <p className="text-[10px] tracking-[0.2em] text-slate-400 uppercase mb-2 md:mb-3">
                                Currently Building
                            </p>
                            <p className="text-xs md:text-sm italic text-slate-600 dark:text-slate-400 leading-relaxed">
                                Architecting unified cross-platform ecosystems for seamless mobile and web experiences.
                            </p>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;