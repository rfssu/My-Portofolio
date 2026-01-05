'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Instagram } from 'lucide-react';

const ContactCTA = () => {
    return (
        <section id="contact" className="py-24 md:py-32">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto px-8 md:px-12"
            >
                {/* Heading */}
                <h2 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-600 mb-8">
                    Let's Work Together
                </h2>

                {/* Email - Large Display */}
                <a
                    href="mailto:rafi.ss.utama@gmail.com"
                    className="block text-4xl md:text-6xl font-bold tracking-tighter mb-12 hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300"
                >
                    rafi.ss.utama@gmail.com
                </a>

                {/* Social Links - Minimal */}
                <div className="flex gap-8 text-xs uppercase tracking-widest border-t border-slate-200/20 dark:border-slate-800/20 pt-8">
                    <a
                        href="https://github.com/rfssu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300 pb-1 border-b border-transparent hover:border-current"
                    >
                        GitHub →
                    </a>
                    <a
                        href="https://linkedin.com/in/username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300 pb-1 border-b border-transparent hover:border-current"
                    >
                        LinkedIn →
                    </a>
                    <a
                        href="https://instagram.com/username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-300 pb-1 border-b border-transparent hover:border-current"
                    >
                        Instagram →
                    </a>
                </div>
            </motion.div>

            {/* Footer - Minimal */}
            <footer className="mt-24 pt-12 border-t border-slate-200/20 dark:border-slate-800/20 text-center">
                <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-600">
                    © {new Date().getFullYear()} Rafi Saifullah Satria Utama
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-700 mt-2">
                    Built with Next.js 15 & Framer Motion
                </p>
            </footer>
        </section>
    );
};

export default ContactCTA;