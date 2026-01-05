'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react'; // <--- 1. Tambah useState & useEffect
import { useTheme } from 'next-themes';
import {
    Home,
    Layers,
    Briefcase,
    Mail,
    Sun,
    Moon,
    Github,
} from 'lucide-react';

export default function FloatingDock() {
    const { theme, setTheme } = useTheme();

    // 2. State untuk memastikan komponen sudah 'mounted' di browser
    const [mounted, setMounted] = useState(false);

    // 3. Efek ini hanya jalan di client, memberitahu bahwa hydration selesai
    useEffect(() => {
        setMounted(true);
    }, []);

    const mouseX = useMotionValue(Infinity);

    const links = [
        { id: 'hero', icon: <Home className="w-full h-full" />, label: "Home" },
        { id: 'projects', icon: <Layers className="w-full h-full" />, label: "Projects" },
        { id: 'experience', icon: <Briefcase className="w-full h-full" />, label: "Experience" },
    ];

    const socialLinks = [
        { url: "https://github.com/rfssu", icon: <Github className="w-full h-full" />, label: "GitHub" },
        { url: "mailto:rafi.ss.utama@gmail.com", icon: <Mail className="w-full h-full" />, label: "Contact" },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
        } else if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="flex h-16 items-end gap-3 rounded-2xl bg-white/10 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 px-4 pb-3 shadow-2xl backdrop-blur-xl"
            >
                {/* Navigation Links */}
                {links.map((link) => (
                    <DockIcon key={link.id} mouseX={mouseX} label={link.label} onClick={() => scrollToSection(link.id)}>
                        {link.icon}
                    </DockIcon>
                ))}

                <div className="h-8 w-[1px] bg-slate-300 dark:bg-slate-700 mx-1 self-center opacity-50"></div>

                {/* Social Links */}
                {socialLinks.map((link) => (
                    <DockIcon key={link.label} mouseX={mouseX} label={link.label} onClick={() => window.open(link.url, '_blank')}>
                        {link.icon}
                    </DockIcon>
                ))}

                <div className="h-8 w-[1px] bg-slate-300 dark:bg-slate-700 mx-1 self-center opacity-50"></div>

                {/* Theme Toggle FIX */}
                <DockIcon
                    mouseX={mouseX}
                    label="Toggle Theme"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                    {/* 4. LOGIC PENENTU: Jika belum mounted, jangan render icon apapun (cegah error) */}
                    {!mounted ? (
                        // Placeholder kosong atau icon default statis (opsional)
                        <div className="w-full h-full bg-transparent" />
                    ) : (
                        // Jika sudah mounted, baru cek tema
                        theme === 'dark' ? <Sun className="w-full h-full" /> : <Moon className="w-full h-full text-indigo-500" />
                    )}
                </DockIcon>

            </motion.div>
        </div>
    );
}

function DockIcon({ mouseX, children, label, onClick }: any) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width, height: width }}
            onClick={onClick}
            className="group relative flex aspect-square cursor-pointer items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 text-slate-600 dark:text-slate-300 transition-colors"
        >
            <motion.div className="p-2 w-full h-full flex items-center justify-center">
                {children}
            </motion.div>
            <span className="pointer-events-none absolute -top-10 hidden rounded-md bg-slate-900 dark:bg-slate-100 px-2 py-1 text-xs text-slate-100 dark:text-slate-900 opacity-0 transition-opacity group-hover:block group-hover:opacity-100 whitespace-nowrap">
                {label}
            </span>
        </motion.div>
    );
}