'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
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
import { DockIconProps, NavigationLink, SocialLink } from '@/types';

const FloatingDock: React.FC = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const mouseX = useMotionValue(Infinity);

    const links: NavigationLink[] = [
        { id: 'hero', icon: <Home className="w-full h-full" />, label: "Home" },
        { id: 'projects', icon: <Layers className="w-full h-full" />, label: "Projects" },
        { id: 'experience', icon: <Briefcase className="w-full h-full" />, label: "Experience" },
    ];

    const socialLinks: SocialLink[] = [
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
                onMouseMove={(e) => {
                    // Throttle to 60fps max for better performance
                    requestAnimationFrame(() => mouseX.set(e.pageX));
                }}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="flex items-center gap-px bg-black dark:bg-white border border-white/10 dark:border-black/10 p-px will-change-transform">
                {/* Navigation Links */}
                {links.map((link) => (
                    <DockIcon key={link.id} mouseX={mouseX} label={link.label} onClick={() => scrollToSection(link.id)}>
                        {link.icon}
                    </DockIcon>
                ))}

                <div className="h-10 w-px bg-white/10 dark:bg-black/10"></div>

                {/* Social Links */}
                {socialLinks.map((link) => (
                    <DockIcon key={link.label} mouseX={mouseX} label={link.label} onClick={() => window.open(link.url, '_blank')}>
                        {link.icon}
                    </DockIcon>
                ))}

                <div className="h-10 w-px bg-white/10 dark:bg-black/10"></div>

                {/* Theme Toggle */}
                <DockIcon
                    mouseX={mouseX}
                    label="Theme"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                    {!mounted ? (
                        <div className="w-full h-full bg-transparent" />
                    ) : (
                        theme === 'dark' ? <Sun className="w-full h-full" /> : <Moon className="w-full h-full" />
                    )}
                </DockIcon>

            </motion.div>
        </div>
    );
};

export default FloatingDock;

const DockIcon: React.FC<DockIconProps> = ({ mouseX, children, label, onClick }) => {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 56, 40]);
    const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width, height: width, minWidth: 44, minHeight: 44 }}
            onClick={onClick}
            className="group relative flex items-center justify-center cursor-pointer bg-white/5 dark:bg-black/5 hover:bg-white/10 dark:hover:bg-black/10 text-white dark:text-black transition-colors duration-300 will-change-transform"
        >
            <div className="p-2 w-full h-full flex items-center justify-center">
                {children}
            </div>
            <span className="pointer-events-none absolute -top-10 hidden bg-black dark:bg-white px-2 py-1 text-xs text-white dark:text-black opacity-0 transition-opacity duration-300 group-hover:block group-hover:opacity-100 whitespace-nowrap font-mono uppercase tracking-wider">
                {label}
            </span>
        </motion.div>
    );
};