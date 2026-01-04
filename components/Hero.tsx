'use client';

import React from 'react';

const Hero = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="max-w-4xl">

                {/* 1. Badge Status (Pulse Effect) - Sinyal Psikologis untuk HR */}
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Available for Work
                </div>

                {/* 2. Main Headline (Bold & Clean) */}
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Scalable</span><br />
                    Digital Solutions.
                </h1>

                {/* 3. Value Proposition (Kenapa Anda?) */}
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
                    Saya <strong className="text-white">IT Graduate</strong> yang spesialis mengubah kebutuhan bisnis menjadi aplikasi web modern.
                    Menggabungkan keandalan <span className="text-indigo-400">Laravel</span> dengan performa <span className="text-indigo-400">Next.js</span>.
                </p>

                {/* 4. CTA Buttons (Rounded Pill Shape) */}
                <div className="flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                    >
                        Lihat Proyek
                    </a>
                    <a
                        href="mailto:emailanda@gmail.com"
                        className="px-8 py-4 border border-slate-700 text-white font-medium rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95"
                    >
                        Hubungi Saya
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;