'use client';

import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
    "LARAVEL", "NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND CSS",
    "FILAMENTPHP", "MYSQL", "POSTGRESQL", "FIGMA", "SPRING BOOT",
    "C# .NET", "ANDROID", "FLUTTER", "GIT", "POSTMAN", "LINUX"
];

const TechStack = () => {
    return (
        <section className="py-12 border-y border-slate-200/20 dark:border-slate-800/20 overflow-hidden">
            <div className="relative">
                {/* Monospace Ticker */}
                <motion.div
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    className="flex gap-12 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-slate-600"
                >
                    {[...techStack, ...techStack].map((tech, index) => (
                        <span key={index} className="inline-block">
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;