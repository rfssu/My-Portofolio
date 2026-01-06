'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ContactCTA: React.FC = () => {
    return (
        <section id="contact" className="py-24 md:py-32 bg-white dark:bg-[#0B1120] border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Large Display Email - No Section Title */}
                <div className="mb-16 md:mb-24">
                    <p className="text-[10px] tracking-[0.2em] text-slate-400 uppercase font-mono mb-3 md:mb-4">Drop a message</p>
                    <a
                        href="mailto:rafi.ss.utama@gmail.com"
                        className="block text-3xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none hover:text-indigo-500 transition-all duration-300 break-all md:break-words"
                    >
                        rafi.ss.utama<br />@gmail.com
                    </a>
                </div>

                {/* Social Links & Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t border-slate-200 dark:border-slate-800">
                    {/* Links Column */}
                    <div className="md:col-span-8 flex flex-wrap gap-x-12 gap-y-4">
                        <a href="https://github.com/rfssu" target="_blank" className="group flex flex-col">
                            <span className="text-[9px] text-slate-400 font-mono tracking-widest mb-1">01 / GITHUB</span>
                            <span className="text-xs font-bold uppercase tracking-widest group-hover:text-indigo-500 transition-colors">Follow ↗</span>
                        </a>
                        <a href="https://linkedin.com/in/username" target="_blank" className="group flex flex-col">
                            <span className="text-[9px] text-slate-400 font-mono tracking-widest mb-1">02 / LINKEDIN</span>
                            <span className="text-xs font-bold uppercase tracking-widest group-hover:text-indigo-500 transition-colors">Connect ↗</span>
                        </a>
                        <a href="https://instagram.com/username" target="_blank" className="group flex flex-col">
                            <span className="text-[9px] text-slate-400 font-mono tracking-widest mb-1">03 / INSTAGRAM</span>
                            <span className="text-xs font-bold uppercase tracking-widest group-hover:text-indigo-500 transition-colors">Photos ↗</span>
                        </a>
                    </div>

                    {/* Production Credits Column */}
                    <div className="md:col-span-4 md:text-right space-y-2">
                        <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-900 dark:text-white">
                            © {new Date().getFullYear()} RF-PORTO PRODUCTION
                        </p>
                        <p className="text-[9px] font-mono tracking-widest text-slate-500 leading-relaxed uppercase">
                            Designed for performance / <br />
                            Built with Next.js 15 & Framer
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;