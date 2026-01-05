'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center py-20">
            <div className="max-w-7xl mx-auto px-8 md:px-12">

                {/* Identity - Minimal */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-600 mb-2">
                        Rafi Saifullah Satria Utama
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                        </span>
                        <span className="text-xs text-slate-600 dark:text-slate-500">
                            Available for work
                        </span>
                    </div>
                </motion.div>

                {/* Massive Headline - A24 Style */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-12 uppercase"
                >
                    I BUILD<br />
                    WEB APPS<br />
                    <span className="text-slate-600 dark:text-slate-400">THAT WORK</span>
                </motion.h1>

                {/* Description - Minimal */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-loose mb-12"
                >
                    Full-stack developer specializing in Laravel and Next.js.
                    I write clean code, care about performance, and ship products that solve real problems.
                    <br />
                    <span className="text-sm text-slate-500 dark:text-slate-600 mt-4 block">
                        Based in Yogyakarta, working remotely with teams and clients.
                    </span>
                </motion.p>

                {/* Text Links - No Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex gap-8 text-xs uppercase tracking-widest"
                >
                    <a
                        href="#projects"
                        className="text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300 pb-1 border-b border-transparent hover:border-current"
                    >
                        View Projects →
                    </a>
                    <a
                        href="mailto:rafi.ss.utama@gmail.com"
                        className="text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300 pb-1 border-b border-transparent hover:border-current"
                    >
                        Contact →
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;