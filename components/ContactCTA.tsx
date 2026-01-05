'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Github, Linkedin, Instagram, Sparkles } from 'lucide-react';

const ContactCTA = () => {
    return (
        <section id="contact" className="py-20 md:py-24">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative overflow-hidden bg-indigo-600 dark:bg-indigo-500 rounded-xl p-8 md:p-16 text-center shadow-2xl shadow-indigo-500/20"
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-100 text-xs font-bold uppercase tracking-widest mb-6">
                        <Sparkles className="w-3 h-3" />
                        Let's Work Together
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                        Bridging the gap between <span className="text-indigo-200">Data Insights</span> and <span className="text-indigo-200">Scalable Tech</span>.
                    </h2>

                    <p className="text-indigo-50 text-base md:text-lg mb-10 leading-relaxed opacity-90">
                        Whether you need a robust <strong>Full-Stack</strong> application built with Next.js or <strong>Data-Driven</strong> software solutions,
                        I'm ready to help you build impactful digital products.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="mailto:rafi.ss.utama@gmail.com"
                            className="flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
                        >
                            <Mail className="w-5 h-5" />
                            Start a Conversation
                            <ArrowRight className="w-4 h-4 ml-1" />
                        </a>

                        <a
                            href="https://linkedin.com/in/username"
                            target="_blank"
                            className="flex items-center justify-center gap-2 bg-indigo-700/30 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-indigo-700/50 transition-all duration-300"
                        >
                            <Linkedin className="w-5 h-5" />
                            LinkedIn
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className="flex justify-center gap-8 mt-16 text-white/60">
                        <a href="https://github.com/rfssu" target="_blank" className="hover:text-white transition-colors duration-300 flex flex-col items-center gap-2">
                            <Github className="w-6 h-6" />
                            <span className="text-[10px] uppercase font-bold tracking-tighter">Github</span>
                        </a>
                        <a href="https://instagram.com/username" target="_blank" className="hover:text-white transition-colors flex flex-col items-center gap-2">
                            <Instagram className="w-6 h-6" />
                            <span className="text-[10px] uppercase font-bold tracking-tighter">Instagram</span>
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* Premium Footer */}
            <footer className="mt-20 py-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="space-y-1 text-center md:text-left">
                    <p className="text-slate-900 dark:text-white font-bold text-sm">Rafi Saifullah Satria Utama</p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs tracking-tight">
                        © {new Date().getFullYear()} — Made with Next.js 15 & Framer Motion
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Available for new projects
                        </span>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default ContactCTA;