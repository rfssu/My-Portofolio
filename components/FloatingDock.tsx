'use client';

import { motion, useMotionValue } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import {
    Home,
    Layers,
    Sun,
    Moon,
    Github,
    BarChart3,
    MessageCircle,
} from 'lucide-react';
import { NavigationLink, SocialLink } from '@/types';
import DockIcon from './dock/DockIcon';

/** Scroll offset for section navigation */
const SCROLL_OFFSET = 100;

/**
 * Floating navigation dock with magnetic hover effect
 * Follows SRP: DockIcon extracted to separate file
 */
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
        { id: 'metrics', icon: <BarChart3 className="w-full h-full" />, label: "Metrics" },
    ];

    const socialLinks: SocialLink[] = [
        { url: "https://github.com/rfssu", icon: <Github className="w-full h-full" />, label: "GitHub" },
        { url: "https://wa.me/6282134807621", icon: <MessageCircle className="w-full h-full" />, label: "WhatsApp" },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
            window.scrollTo({ top: y, behavior: 'smooth' });
        } else if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <motion.div
                onMouseMove={(e) => {
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