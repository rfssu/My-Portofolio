'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Greeting() {
    const [greeting, setGreeting] = useState({ text: 'Hello', icon: '👋' });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const hour = new Date().getHours();

        // Logic penentuan waktu
        if (hour >= 5 && hour < 12) {
            setGreeting({ text: 'Good Morning', icon: '🌅' });
        } else if (hour >= 12 && hour < 18) {
            setGreeting({ text: 'Good Afternoon', icon: '☀️' });
        } else if (hour >= 18 || hour < 5) {
            setGreeting({ text: 'Good Evening', icon: '🌙' });
        }
    }, []);

    // Mencegah Hydration Mismatch (Tampilkan placeholder transparan saat loading)
    if (!mounted) return <span className="opacity-0">Hello</span>;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-4"
        >
            <span className="text-indigo-600 dark:text-indigo-400 font-mono text-sm tracking-wider uppercase bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/20 shadow-sm">
                {greeting.icon} {greeting.text}
            </span>
        </motion.div>
    );
}