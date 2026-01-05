'use client';

import React from 'react';

const Hero = () => {
    return (
        <section className="py-16 md:py-32">
            <div className="max-w-4xl">

                {/* Badge Status */}
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 rounded-full border border-emerald-300 dark:border-emerald-500/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-500"></span>
                    </span>
                    Available for Work
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 dark:from-indigo-400 to-cyan-600 dark:to-cyan-400">Scalable</span><br />
                    Digital Solutions.
                </h1>

                {/* Value Proposition */}
                <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-400 leading-relaxed max-w-2xl mb-10">
                    Saya <strong className="text-slate-900 dark:text-white">IT Graduate</strong> yang spesialis mengubah kebutuhan bisnis menjadi aplikasi web modern.
                    Menggabungkan keandalan <span className="text-indigo-700 dark:text-indigo-400">Laravel</span> dengan performa <span className="text-indigo-700 dark:text-indigo-400">Next.js</span>.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="px-6 py-3 sm:px-8 sm:py-4 min-h-11 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-lg text-center"
                    >
                        Lihat Proyek
                    </a>
                    <a
                        href="mailto:emailanda@gmail.com"
                        className="px-8 py-4 border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
                    >
                        Hubungi Saya
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;