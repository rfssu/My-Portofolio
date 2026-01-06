'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1120]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Section Title - Centered */}
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-sm md:text-base tracking-[0.2em] font-bold text-slate-900 dark:text-white uppercase font-mono text-center">
                        Professional Chronology
                    </h2>
                    <div className="h-[2px] w-12 bg-indigo-500 mt-2"></div>
                </div>

                {/* Main Two-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24">

                    {/* LEFT COLUMN: Professional Careers */}
                    <div className="space-y-12">
                        <div className="border-b border-slate-200 dark:border-slate-800 pb-4 mb-12">
                            <h3 className="text-xl font-bold uppercase tracking-tight">Professional Careers</h3>
                        </div>

                        <div className="flex flex-col gap-12">
                            {/* Career 1 */}
                            <div className="group text-left">
                                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">2024 — Present</p>
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-1">Full-Stack Developer</h4>
                                <p className="text-[10px] tracking-[0.2em] font-bold text-indigo-500 uppercase mb-4">Quadrant Co. • Project-based</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    Collaborated within a specialized IT team to architect and deliver high-performance web solutions.
                                </p>
                            </div>

                            {/* Career 2 */}
                            <div className="group text-left">
                                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">2025 — Present</p>
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-1">Game Developer & Designer</h4>
                                <p className="text-[10px] tracking-[0.2em] font-bold text-indigo-500 uppercase mb-4">Ourmind Studio • Personal Project</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    Independent game conceptualization and technical implementation of gameplay mechanics.
                                </p>
                            </div>

                            {/* Career 3 */}
                            <div className="group text-left">
                                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">Oct 2024 — Feb 2025</p>
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-1 text-left">Program Development</h4>
                                <p className="text-[10px] tracking-[0.2em] font-bold text-indigo-500 uppercase mb-4">PT Surya Citra Media • Jakarta</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    Assisted in strategic program planning and creative development for major media content.
                                </p>
                            </div>

                            {/* Career 4 */}
                            <div className="group text-left">
                                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">Feb 2023 — Jun 2023</p>
                                <h4 className="text-xl font-black uppercase tracking-tighter mb-1">Research & Development</h4>
                                <p className="text-[10px] tracking-[0.2em] font-bold text-indigo-500 uppercase mb-4">NET MEDIA TAMA TELEVISI • Jakarta</p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    Conducted comprehensive research on industry trends to identify audience preferences.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Education, Certs, & Honors */}
                    <div className="space-y-24">

                        {/* Education */}
                        <div>
                            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 mb-8">
                                <h3 className="text-xl font-bold uppercase tracking-tight">Education</h3>
                            </div>
                            <div className="pl-6 border-l border-slate-100 dark:border-slate-800">
                                <h4 className="text-lg font-black uppercase tracking-tighter">Bach. of Computer Science</h4>
                                <p className="text-sm text-slate-500 mt-1 font-medium">Universitas Muhammadiyah Yogyakarta</p>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div>
                            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 mb-8">
                                <h3 className="text-xl font-bold uppercase tracking-tight">Certifications</h3>
                            </div>
                            <div className="space-y-8 pl-6 border-l border-slate-100 dark:border-slate-800">
                                <div>
                                    <h4 className="text-base font-black uppercase tracking-tighter">Web Developer (BNSP)</h4>
                                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 mt-1">National Prof. Certification • 2024</p>
                                </div>
                                <div>
                                    <h4 className="text-base font-black uppercase tracking-tighter">IT Specialist - Software Dev</h4>
                                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 mt-1">Certiport • 2024</p>
                                </div>
                            </div>
                        </div>

                        {/* Honors & Awards */}
                        <div>
                            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 mb-8">
                                <h3 className="text-xl font-bold uppercase tracking-tight">Honors & Awards</h3>
                            </div>
                            <div className="space-y-8 pl-6 border-l border-slate-100 dark:border-slate-800">
                                <div>
                                    <h4 className="text-lg font-black uppercase tracking-tighter">Top 3 The Gade Sociopreneurship</h4>
                                    <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">PT. Pegadaian • 2023</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-medium">Developed an innovative business solution with the Inclue Indonesia team.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-black uppercase tracking-tighter">Business Acumen Program</h4>
                                    <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">Tanoto Foundation • 2022</p>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-medium">Selected as a finalist in a prestigious future business leaders program.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;