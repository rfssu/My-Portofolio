'use client';

import React from 'react';

const Experience = () => {
    return (
        <section className="py-20 border-t border-slate-200 dark:border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* KOLOM KIRI: EXPERIENCE */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
                        <span className="text-indigo-600 dark:text-indigo-400">#</span> Experience
                    </h3>

                    <div className="relative pl-8 border-l border-slate-200 dark:border-slate-800 space-y-12">

                        {/* ITEM 1: MAGANG DATA ANALYST */}
                        <div className="relative">
                            {/* Dot Biru */}
                            <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-50 dark:border-[#0B1120]"></div>

                            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-200">Data Analyst Intern</h4>
                            <p className="text-indigo-600 dark:text-indigo-400 text-sm mb-2">Nama Perusahaan • 2025</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                Bertanggung jawab mengolah dataset besar menggunakan Python & Pandas.
                                Membuat dashboard visualisasi data untuk membantu keputusan manajemen.
                            </p>
                        </div>

                    </div>
                </div>

                {/* KOLOM KANAN: EDUCATION & CERTIFICATES */}
                <div className="space-y-12">

                    {/* BAGIAN 1: EDUCATION */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
                            <span className="text-emerald-600 dark:text-emerald-400">#</span> Education
                        </h3>

                        <div className="relative pl-8 border-l border-slate-200 dark:border-slate-800">
                            <div className="relative">
                                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-50 dark:border-[#0B1120]"></div>

                                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-200">Bachelor of Information Technology</h4>
                                <p className="text-emerald-600 dark:text-emerald-400 text-sm mb-2">Universitas Anda • 2022 - 2026</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    Fokus pada Software Engineering.<br />
                                    <span className="opacity-70 italic">GPA: 3.xx / 4.00</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BAGIAN 2: CERTIFICATES */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
                            <span className="text-amber-600 dark:text-amber-400">#</span> Certifications
                        </h3>

                        <div className="relative pl-8 border-l border-slate-200 dark:border-slate-800 space-y-8">

                            {/* CERTIFICATE 1 */}
                            <div className="relative">
                                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 border-slate-50 dark:border-[#0B1120]"></div>

                                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-200">Junior Web Developer</h4>
                                <p className="text-amber-600 dark:text-amber-400 text-sm">BNSP / Lembaga Sertifikasi • 2024</p>
                            </div>

                            {/* CERTIFICATE 2 */}
                            <div className="relative">
                                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 border-slate-50 dark:border-[#0B1120]"></div>

                                <h4 className="text-lg font-bold text-slate-900 dark:text-slate-200">Fullstack Laravel Bootcamp</h4>
                                <p className="text-amber-600 dark:text-amber-400 text-sm">BuildWithAngga / Udemy • 2025</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Experience;