'use client';

import React from 'react';
import { Briefcase, GraduationCap, Award, MapPin, Calendar, Trophy, Code2, Gamepad2 } from 'lucide-react';

const Experience = () => {
    return (
        <section className="py-20 border-t border-slate-200 dark:border-slate-800">
            {/* MAIN GRID: 2-Column layout for a clean, compact, and professional look */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                {/* =========================================
                    LEFT COLUMN
                    Content: Professional Careers & Education
                   ========================================= */}
                <div className="space-y-12">

                    {/* --- 1. CAREERS SECTION --- */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-indigo-100 dark:bg-indigo-500/20 rounded-lg">
                                <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Professional Careers</h3>
                        </div>

                        <div className="flex flex-col gap-4">
                            {/* Career 1: Quadran Co. */}
                            <div className="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-md transition-all group">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                                        Full-Stack Developer
                                    </h4>
                                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 uppercase">
                                        Team Project
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-2 flex items-center gap-1.5">
                                    <Code2 className="w-3.5 h-3.5" /> Quadrant Co.
                                </p>
                                <ul className="text-[11px] text-slate-600 dark:text-slate-400 list-disc list-inside space-y-1 mb-3 leading-relaxed">
                                    <li>Collaborated within a specialized IT team to architect and deliver high-performance web solutions.</li>
                                    <li>Focused on end-to-end development using modern stacks to meet complex client requirements.</li>
                                </ul>
                                <div className="flex items-center gap-3 text-[10px] font-medium text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 2024 - Present</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Project-based</span>
                                </div>
                            </div>

                            {/* Career 3: Ourmind Studio */}
                            <div className="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-md transition-all group">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                                        Game Developer & Designer
                                    </h4>
                                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 uppercase">
                                        Personal Project
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-2 flex items-center gap-1.5">
                                    <Gamepad2 className="w-3.5 h-3.5" /> Ourmind Studio
                                </p>
                                <ul className="text-[11px] text-slate-600 dark:text-slate-400 list-disc list-inside space-y-1 mb-3 leading-relaxed">
                                    <li>Independent game conceptualization and technical implementation of gameplay mechanics.</li>
                                    <li>Focused on interactive storytelling and user experience design for digital entertainment.</li>
                                </ul>
                                <div className="flex items-center gap-3 text-[10px] font-medium text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> 2025 - Present</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Indie Dev</span>
                                </div>
                            </div>

                            {/* Career 2: SCM */}
                            <div className="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-md transition-all group">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                                        Program Development
                                    </h4>
                                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 uppercase">
                                        Internship
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-2">PT Surya Citra Media, Tbk (SCM)</p>
                                <ul className="text-[11px] text-slate-600 dark:text-slate-400 list-disc list-inside space-y-1 mb-3 leading-relaxed">
                                    <li>Assisted in strategic program planning and creative development for major media content.</li>
                                    <li>Analyzed television trends and viewer data to provide actionable content insights.</li>
                                </ul>
                                <div className="flex items-center gap-3 text-[10px] font-medium text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Oct 2024 - Feb 2025</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Jakarta</span>
                                </div>
                            </div>


                            {/* Career 4: NET TV */}
                            <div className="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-md transition-all group">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                                        Research & Development
                                    </h4>
                                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20 uppercase">
                                        Internship
                                    </span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-2">NET MEDIA TAMA TELEVISI</p>
                                <ul className="text-[11px] text-slate-600 dark:text-slate-400 list-disc list-inside space-y-1 mb-3 leading-relaxed">
                                    <li>Conducted comprehensive research on industry trends to identify audience preferences.</li>
                                    <li>Presented technical findings and strategic recommendations to senior management teams.</li>
                                </ul>
                                <div className="flex items-center gap-3 text-[10px] font-medium text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Feb 2023 - Jun 2023</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Jakarta</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- 2. EDUCATION SECTION --- */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-emerald-100 dark:bg-emerald-500/20 rounded-lg">
                                <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
                        </div>

                        <div className="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all group">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                                    Bach. of Information Technology
                                </h4>
                                <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20">
                                    GPA: 3.XX
                                </span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-2">Universitas Muhammadiyah Yogyakarta</p>
                            <div className="flex items-center gap-2 text-[10px] font-medium text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                            </div>
                        </div>
                    </section>
                </div>


                {/* =========================================
                    RIGHT COLUMN
                    Content: Certifications & Honors
                   ========================================= */}
                <div className="space-y-12">

                    {/* --- 3. CERTIFICATIONS SECTION --- */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-amber-100 dark:bg-amber-500/20 rounded-lg">
                                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Certifications</h3>
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 transition-all group flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-amber-50 dark:bg-amber-900/30 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0">
                                        <Award className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                                            Web Developer (BNSP)
                                        </h4>
                                        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">National Professional Certification Agency</p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 px-2 py-1 rounded border border-slate-100 dark:border-slate-700">
                                    2024
                                </span>
                            </div>

                            <div className="bg-white dark:bg-slate-900/50 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 transition-all group flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-amber-50 dark:bg-amber-900/30 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 flex-shrink-0">
                                        <Award className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                                            IT Specialist - Software Dev
                                        </h4>
                                        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Certiport</p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 px-2 py-1 rounded border border-slate-100 dark:border-slate-700">
                                    2024
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* --- 4. ACHIEVEMENTS SECTION --- */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-sky-100 dark:bg-sky-500/20 rounded-lg">
                                <Trophy className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Honors & Awards</h3>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 transition-all group">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                                        Top 3 The Gade Sociopreneurship
                                    </h4>
                                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-500/20 uppercase">
                                        National
                                    </span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-2">PT. Pegadaian • 2023</p>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Developed an innovative business solution with the Inclue Indonesia team.
                                </p>
                            </div>

                            <div className="bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-500/50 transition-all group">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                                        Business Acumen Program
                                    </h4>
                                    <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-500/20 uppercase">
                                        Finalist
                                    </span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-2">Tanoto Foundation • 2022</p>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Selected as a finalist in a prestigious future business leaders strategy program.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Experience;