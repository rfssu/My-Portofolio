'use client';

import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const PortalButton = () => {
    const router = useRouter();
    const [isPortalActive, setIsPortalActive] = useState(false);

    const handleClick = () => {
        setIsPortalActive(true);

        // Navigate after portal animation
        setTimeout(() => {
            router.push('/game-dev');
        }, 800);
    };

    return (
        <>
            {/* Portal Button */}
            <motion.button
                onClick={handleClick}
                className="group relative flex items-center gap-2 px-4 py-2 opacity-30 hover:opacity-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Gamepad2 className="w-4 h-4 text-indigo-500 group-hover:text-indigo-400 transition-colors" />
                <span className="text-[9px] font-mono text-slate-400 group-hover:text-slate-300 tracking-wider uppercase">
                    Enter Game Mode
                </span>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-indigo-500/10 rounded opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
            </motion.button>

            {/* Portal Overlay Animation */}
            {isPortalActive && (
                <motion.div
                    className="fixed inset-0 z-[9999] pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {/* Portal Circle */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(139,92,246,0.6) 50%, rgba(0,0,0,1) 100%)',
                            boxShadow: '0 0 100px 50px rgba(99,102,241,0.5)',
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 100, opacity: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1], // Custom easing
                        }}
                    />

                    {/* Particle effects */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-indigo-400 rounded-full"
                            style={{
                                left: `${50 + Math.random() * 10 - 5}%`,
                                top: `${50 + Math.random() * 10 - 5}%`,
                            }}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                                x: (Math.random() - 0.5) * 200,
                                y: (Math.random() - 0.5) * 200,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: Math.random() * 0.3,
                            }}
                        />
                    ))}
                </motion.div>
            )}
        </>
    );
};

export default PortalButton;
