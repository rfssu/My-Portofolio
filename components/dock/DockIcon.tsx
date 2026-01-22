'use client';

import React, { useRef } from 'react';
import { motion, useTransform, useSpring, MotionValue } from 'framer-motion';

interface DockIconProps {
    mouseX: MotionValue<number>;
    children: React.ReactNode;
    label: string;
    onClick: () => void;
}

/**
 * Individual dock icon with magnetic hover effect
 * Follows SRP: Only handles single dock icon behavior
 */
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

export default DockIcon;
