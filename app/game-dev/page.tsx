'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Zap, Users, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import ProjectFun1 from './components/ProjectFun1';
import SkillTree from './components/SkillTree';
import StreamWidget from './components/StreamWidget';

export default function GameDevPage() {
    const router = useRouter();
    const [isReturning, setIsReturning] = useState(false);

    // Typing animation states
    const [greeting, setGreeting] = useState('Hello');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    // Get time-based greeting
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) {
            setGreeting('Good Morning');
        } else if (hour >= 12 && hour < 18) {
            setGreeting('Good Afternoon');
        } else {
            setGreeting('Good Evening');
        }
    }, []);

    // Texts for typing animation
    const texts = [
        greeting,
        "WELCOME TO MY GAME UNIVERSE",
        "I'M MONARCH // XTRADA404"
    ];

    useEffect(() => {
        const currentFullText = texts[currentTextIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                if (displayedText.length < currentFullText.length) {
                    setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
                    setTypingSpeed(100);
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
                    setTypingSpeed(50);
                } else {
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentTextIndex, typingSpeed, greeting]);


    // Optimized grid - same as enter animation for consistency
    const gridSize = typeof window !== 'undefined'
        ? { cols: Math.ceil(window.innerWidth / 120), rows: Math.ceil(window.innerHeight / 120) }
        : { cols: 12, rows: 8 };

    const totalBlocks = gridSize.cols * gridSize.rows;

    const handleReturn = () => {
        setIsReturning(true);
        setTimeout(() => {
            router.push('/');
        }, 1000);
    };

    // Diagonal wave pattern for smooth exit
    const getWaveDelay = (index: number) => {
        const row = Math.floor(index / gridSize.cols);
        const col = index % gridSize.cols;
        const diagonalDistance = row + col;
        return diagonalDistance * 0.03;
    };

    const gameStats = [
        { label: 'Learning Journey', value: 'Started', icon: Trophy, color: 'text-yellow-400' },
        { label: 'Hours in Godot', value: '20+', icon: Zap, color: 'text-purple-400' },
        { label: 'Projects in Progress', value: '1', icon: Users, color: 'text-green-400' },
        { label: 'Tutorials Completed', value: '10+', icon: Star, color: 'text-cyan-400' },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
            {/* Return Block Reveal Animation */}
            {isReturning && (
                <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden bg-black">
                    <div
                        className="grid w-full h-full"
                        style={{
                            gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
                            gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
                        }}
                    >
                        {[...Array(totalBlocks)].map((_, index) => {
                            const row = Math.floor(index / gridSize.cols);
                            const col = index % gridSize.cols;
                            const diagonal = (row + col) / (gridSize.rows + gridSize.cols);

                            const getColor = () => {
                                if (diagonal < 0.3) return 'bg-indigo-600';
                                if (diagonal < 0.5) return 'bg-purple-600';
                                if (diagonal < 0.7) return 'bg-violet-600';
                                return 'bg-fuchsia-600';
                            };

                            return (
                                <motion.div
                                    key={index}
                                    className={`${getColor()}`}
                                    style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)' }}
                                    initial={{ scale: 1, opacity: 1 }}
                                    animate={{ scale: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: getWaveDelay(index),
                                        ease: [0.34, 1.56, 0.64, 1],
                                    }}
                                />
                            );
                        })}
                    </div>

                    {/* Gradient overlay for smooth fade */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tl from-indigo-500/20 via-transparent to-purple-500/20 pointer-events-none"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    />
                </div>
            )}

            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 md:px-12 py-16">
                {/* Return Button */}
                <motion.button
                    onClick={handleReturn}
                    className="group fixed top-8 left-8 z-50 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <ArrowLeft className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-mono uppercase tracking-wider">Exit Game Mode</span>
                </motion.button>

                {/* Hero Section */}
                <motion.div
                    className="text-center mb-20 mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Typing Animation Title */}
                    <motion.div
                        className="inline-block mb-6"
                        animate={{
                            textShadow: [
                                '0 0 20px rgba(99,102,241,0.5)',
                                '0 0 40px rgba(139,92,246,0.8)',
                                '0 0 20px rgba(99,102,241,0.5)',
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter min-h-[5rem] md:min-h-[7rem]">
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                {displayedText}
                                <span className="animate-pulse ml-2">|</span>
                            </span>
                        </h1>
                    </motion.div>
                </motion.div>

                {/* Game Stats Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    {gameStats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            className="group p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + idx * 0.1 }}
                        >
                            <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
                            <p className="text-3xl font-black mb-2">{stat.value}</p>
                            <p className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Playable Game Demo - Project Fun1 */}
                <ProjectFun1 />

                {/* Interactive Skill Tree */}
                <SkillTree />

                {/* Live Stream Widget */}
                <StreamWidget status="coming-soon" />

                {/* Footer */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                        Powered by Coffee & Game Engines • Est. 2024
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
