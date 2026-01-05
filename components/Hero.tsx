'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Greeting from './Greeting';

const Hero = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="max-w-4xl">

                {/* === 1. SMART GREETING (Tetap di Paling Atas) === */}
                {/* Fokus utama saat pertama kali masuk */}
                <Greeting />

                {/* Wrapper Stagger Effect */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                >

                    {/* === 2. MAIN HEADLINE (Langsung Judul Besar) === */}
                    {/* Badge dipindah ke bawah agar judul langsung terlihat bersih */}
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6"
                    >
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 dark:from-indigo-400 to-cyan-600 dark:to-cyan-400">Scalable</span><br />
                        Digital Solutions.
                    </motion.h1>

                    {/* === 3. VALUE PROPOSITION === */}
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-400 leading-relaxed max-w-2xl mb-8"
                    >
                        Seorang <strong className="text-slate-900 dark:text-white">IT Graduate</strong> yang spesialis mengubah kebutuhan bisnis menjadi aplikasi web modern.
                        Menggabungkan keandalan <span className="text-indigo-700 dark:text-indigo-400 font-medium">Laravel</span> dengan performa <span className="text-indigo-700 dark:text-indigo-400 font-medium">Next.js</span>.
                    </motion.p>

                    {/* === 4. BADGE STATUS (DIPINDAHKAN KE SINI) === */}
                    {/* Posisi strategis: Sebelum user klik tombol, mereka lihat Anda 'Available' */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        className="flex items-center gap-2 mb-8"
                    >
                        {/* Indikator Ping (Sinyal Hidup) */}
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                        </span>
                        {/* Teks Status */}
                        <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400 tracking-wide">
                            Available for Freelance & Full-time
                        </span>
                    </motion.div>

                    {/* === 5. CTA BUTTONS === */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        className="flex flex-col sm:flex-row flex-wrap gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full hover:scale-105 transition-transform shadow-lg text-center"
                        >
                            Lihat Proyek
                        </a>
                        <a
                            href="mailto:emailanda@gmail.com"
                            className="px-8 py-4 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-center"
                        >
                            Hubungi Saya
                        </a>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
};

export default Hero;