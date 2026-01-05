'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Mail } from 'lucide-react';

const ContactCTA = () => {
    const [copied, setCopied] = useState(false);
    const email = "emailanda@gmail.com"; // Ganti dengan email asli Anda

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset icon setelah 2 detik
    };

    return (
        <section className="py-20 relative overflow-hidden">

            {/* Background Decoration (Glow samar) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                        Ready to start a project?
                    </h2>
                    <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
                        Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif,
                        atau peluang menjadi bagian dari visi Anda.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">

                        {/* 1. TOMBOL EMAIL UTAMA (Membuka Aplikasi Mail) */}
                        <a
                            href={`mailto:${email}`}
                            className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center gap-3 group"
                        >
                            <Mail className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                            Say Hello
                        </a>

                        {/* 2. TOMBOL COPY EMAIL (Fitur UX untuk yang malas buka app mail) */}
                        <button
                            onClick={handleCopy}
                            className="px-8 py-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-lg hover:border-indigo-500 dark:hover:border-indigo-400 transition-colors flex items-center gap-3 group"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-5 h-5 text-emerald-500" />
                                    <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                                    <span>Copy Email</span>
                                </>
                            )}
                        </button>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ContactCTA;