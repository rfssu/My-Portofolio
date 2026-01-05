'use client';

import React from 'react';
import { Briefcase, GraduationCap, Award, MapPin, Calendar, Code2, Gamepad2 } from 'lucide-react';

const Experience = () => {
    return (
        <section className="py-24 md:py-32 border-t border-slate-200/20 dark:border-slate-800/20">
            <div className="max-w-6xl mx-auto px-8 md:px-12">

                {/* Section Header - Minimal */}
                <h2 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-600 mb-16">
                    Experience & Background
                </h2>

                {/* Professional Careers - Flat List */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold mb-12 tracking-tight">Professional Careers</h3>

                    <div className="space-y-12">
                        {/* Career 1 */}
                        <div className="grid md:grid-cols-[200px_1fr] gap-8 pb-12 border-b border-slate-200/20 dark:border-slate-800/20">
                            <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-600">
                                2024 - Present
                            </div>
                            <div>
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">Full-Stack Developer</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Quadrant Co. • Project-based</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">
                                    Collaborated within a specialized IT team to architect and deliver high-performance web solutions.
                                    Focused on end-to-end development using modern stacks to meet complex client requirements.
                                </p>
                            </div>
                        </div>

                        {/* Career 2 */}
                        <div className="grid md:grid-cols-[200px_1fr] gap-8 pb-12 border-b border-slate-200/20 dark:border-slate-800/20">
                            <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-600">
                                2025 - Present
                            </div>
                            <div>
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">Game Developer & Designer</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Ourmind Studio • Personal Project</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">
                                    Independent game conceptualization and technical implementation of gameplay mechanics.
                                    Focused on interactive storytelling and user experience design for digital entertainment.
                                </p>
                            </div>
                        </div>

                        {/* Career 3 */}
                        <div className="grid md:grid-cols-[200px_1fr] gap-8 pb-12 border-b border-slate-200/20 dark:border-slate-800/20">
                            <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-600">
                                Oct 2024 - Feb 2025
                            </div>
                            <div>
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">Program Development</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">PT Surya Citra Media • Jakarta</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">
                                    Assisted in strategic program planning and creative development for major media content.
                                    Analyzed television trends and viewer data to provide actionable content insights.
                                </p>
                            </div>
                        </div>

                        {/* Career 4 */}
                        <div className="grid md:grid-cols-[200px_1fr] gap-8 pb-12 border-b border-slate-200/20 dark:border-slate-800/20">
                            <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-600">
                                Feb 2023 - Jun 2023
                            </div>
                            <div>
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">Research & Development</h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">NET MEDIA TAMA TELEVISI • Jakarta</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-500 leading-relaxed">
                                    Conducted comprehensive research on industry trends to identify audience preferences.
                                    Presented technical findings and strategic recommendations to senior management teams.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education & Certifications - Side by Side */}
                <div className="grid md:grid-cols-2 gap-16">

                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 tracking-tight">Education</h3>
                        <div className="space-y-2">
                            <h4 className="text-base font-bold">Bach. of Computer Science</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">Universitas Muhammadiyah Yogyakarta</p>
                            <p className="text-xs uppercase tracking-widest text-slate-500 dark:border-slate-600 mt-2">2022 - Present</p>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 tracking-tight">Certifications</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-base font-bold">Web Developer (BNSP)</h4>
                                <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-600 mt-1">National Professional Certification • 2024</p>
                            </div>
                            <div>
                                <h4 className="text-base font-bold">IT Specialist - Software Dev</h4>
                                <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-600 mt-1">Certiport • 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div className="mt-16 pt-16 border-t border-slate-200/20 dark:border-slate-800/20">
                    <h3 className="text-2xl font-bold mb-8 tracking-tight">Honors & Awards</h3>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-base font-bold">Top 3 The Gade Sociopreneurship</h4>
                            <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-600 mt-1">PT. Pegadaian • 2023</p>
                            <p className="text-sm text-slate-600 dark:text-slate-500 mt-3 leading-relaxed">
                                Developed an innovative business solution with the Inclue Indonesia team.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-base font-bold">Business Acumen Program</h4>
                            <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-600 mt-1">Tanoto Foundation • 2022</p>
                            <p className="text-sm text-slate-600 dark:text-slate-500 mt-3 leading-relaxed">
                                Selected as a finalist in a prestigious future business leaders strategy program.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;