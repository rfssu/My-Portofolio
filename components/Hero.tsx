'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Greeting from './Greeting'; // Kita pakai logic jam-nya saja, tapi UI kita override disini

const Hero = () => {
    return (
        <section className="py-20 md:py-28"> {/* Padding dikurangi sedikit biar content naik */}
            <div className="max-w-4xl">

                {/* WRAPPER STAGGER ANIMATION */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                >

                    {/* === 1. GREETING & NAME (IDENTITY FIRST) === */}
                    {/* PERBAIKAN: Menggabungkan Greeting dengan NAMA agar HR langsung tahu ini siapa */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                        }}
                        className="flex flex-col md:flex-row md:items-center gap-3 mb-6"
                    >
                        {/* Kita panggil Greeting component tapi kita styling ulang pembungkusnya agar menyatu */}
                        <div className="text-indigo-600 dark:text-indigo-400 font-medium tracking-wide uppercase text-sm bg-indigo-50 dark:bg-indigo-900/20 px-4 py-1.5 rounded-full w-fit border border-indigo-100 dark:border-indigo-500/20">
                            {/* Tips: Anda bisa edit Greeting.tsx agar hanya return text/icon, 
                   tapi untuk sekarang biarkan Greeting merender sapaan (Good Morning) */}
                            <Greeting />
                        </div>

                        <span className="hidden md:block text-slate-300">•</span>

                        {/* NAMA ANDA DISINI - WAJIB ADA */}
                        <h2 className="text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-200">
                            I'm <span className="text-slate-900 dark:text-white">Rafi Saifullah Satria Utama</span>
                        </h2>
                    </motion.div>

                    {/* === 2. HEADLINE (UKURAN DIOPTIMALKAN) === */}
                    {/* PERBAIKAN: Turun dari 7xl ke 6xl agar lebih compact & elegan */}
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6"
                    >
                        Building Scalable <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 dark:from-indigo-400 to-cyan-600 dark:to-cyan-400">
                            Web Applications.
                        </span>
                    </motion.h1>

                    {/* === 3. VALUE PROPOSITION === */}
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-400 leading-relaxed max-w-2xl mb-8"
                    >
                        I'm a <strong className="text-slate-900 dark:text-white">Full-Stack Developer</strong> focused on performance.
                        Currently, I specialize in the <span className="text-indigo-700 dark:text-indigo-400 font-medium">Laravel</span> and <span className="text-indigo-700 dark:text-indigo-400 font-medium">Next.js</span> ecosystems.
                        <br className="hidden md:block" />
                        <span className="mt-2 block text-slate-600 dark:text-slate-500 text-base">
                            I prioritize effective technical solutions, always ready to adapt and learn new tools quickly.
                        </span>
                    </motion.p>

                    {/* === 4. BADGE STATUS === */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        className="flex items-center gap-3 mb-8 bg-emerald-50/50 dark:bg-emerald-900/10 w-fit px-4 py-2 rounded-lg border border-emerald-100 dark:border-emerald-500/10"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400 tracking-wide">
                            Available for Freelance & Full-time
                        </span>
                    </motion.div>

                    {/* === 5. CTA BUTTONS (English) === */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full hover:translate-y-[-2px] transition-transform shadow-lg shadow-indigo-500/20 text-center"
                        >
                            View Projects
                        </a>
                        <a
                            href="mailto:emailanda@gmail.com"
                            className="px-8 py-3.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-center"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
};

export default Hero;