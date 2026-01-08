'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Gamepad2, Trophy, Zap, Users, Star, Youtube, Twitch } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function GameDevPage() {
    const router = useRouter();
    const [isReturning, setIsReturning] = useState(false);

    const handleReturn = () => {
        setIsReturning(true);
        setTimeout(() => {
            router.push('/');
        }, 800);
    };

    const gameStats = [
        { label: 'Projects Completed', value: '5+', icon: Trophy, color: 'text-yellow-400' },
        { label: 'Hours in Unity', value: '500+', icon: Zap, color: 'text-purple-400' },
        { label: 'Game Jams', value: '3', icon: Users, color: 'text-green-400' },
        { label: 'Assets Created', value: '50+', icon: Star, color: 'text-cyan-400' },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
            {/* Return Portal Animation */}
            {isReturning && (
                <motion.div
                    className="fixed inset-0 z-[9999] pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(99,102,241,0.8) 0%, rgba(139,92,246,0.6) 50%, rgba(0,0,0,1) 100%)',
                        }}
                        initial={{ scale: 100, opacity: 1 }}
                        animate={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                </motion.div>
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
                        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Game Dev Universe
                            </span>
                        </h1>
                    </motion.div>
                    <motion.p
                        className="text-lg md:text-xl text-slate-400 font-mono"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        [ MONARCH // XTRADA404 ]
                    </motion.p>
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

                {/* Featured Project */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Gamepad2 className="w-6 h-6 text-indigo-400" />
                        <h2 className="text-2xl md:text-3xl font-black uppercase">Featured Project</h2>
                    </div>

                    <div className="group relative p-8 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 hover:border-indigo-500 transition-all duration-300 overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 text-xs font-mono uppercase tracking-wider">
                                    In Development
                                </span>
                            </div>
                            <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">Project Alpha</h3>
                            <p className="text-slate-300 leading-relaxed mb-6">
                                An ambitious game project currently in active development. Combining innovative gameplay mechanics with stunning visuals to create an unforgettable gaming experience.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono">Unity</span>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono">C#</span>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono">3D</span>
                                <span className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-mono">Multiplayer</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Streaming/Content Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                >
                    <h2 className="text-2xl font-black uppercase mb-6">Connect & Watch</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                            href="#"
                            className="group flex items-center gap-4 p-6 bg-red-500/10 border border-red-500/30 hover:border-red-500 transition-all duration-300"
                        >
                            <Youtube className="w-8 h-8 text-red-400" />
                            <div>
                                <p className="font-bold text-lg">YouTube</p>
                                <p className="text-sm text-slate-400">Game Dev Tutorials & Devlogs</p>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="group flex items-center gap-4 p-6 bg-purple-500/10 border border-purple-500/30 hover:border-purple-500 transition-all duration-300"
                        >
                            <Twitch className="w-8 h-8 text-purple-400" />
                            <div>
                                <p className="font-bold text-lg">Twitch</p>
                                <p className="text-sm text-slate-400">Live Game Development</p>
                            </div>
                        </a>
                    </div>
                </motion.div>

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
