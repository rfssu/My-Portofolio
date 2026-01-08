'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code2, Zap, Cpu, Gamepad2, Paintbrush, Music } from 'lucide-react';

interface SkillNode {
    name: string;
    level: 'mastered' | 'learning' | 'locked';
    icon: any;
    description: string;
    projects?: string[];
}

const SkillTree = () => {
    const [selectedNode, setSelectedNode] = useState<string | null>(null);

    const skills: Record<string, SkillNode> = {
        'Godot': {
            name: 'Godot Engine',
            level: 'learning',
            icon: Zap,
            description: 'Currently learning open-source game engine & GDScript',
            projects: ['Project Alpha (In Progress)']
        },
        'Unity': {
            name: 'Unity',
            level: 'locked',
            icon: Gamepad2,
            description: '3D/2D game engine - Planning to learn after Godot',
            projects: []
        },
        'C#': {
            name: 'C# Scripting',
            level: 'locked',
            icon: Code2,
            description: 'Object-oriented programming - Future learning goal',
            projects: []
        },
        'Game Design': {
            name: 'Game Design',
            level: 'locked',
            icon: Cpu,
            description: 'Level design, mechanics, player experience - Exploring fundamentals',
            projects: []
        },
        '2D Art': {
            name: '2D Art',
            level: 'locked',
            icon: Paintbrush,
            description: 'Sprite creation, pixel art - Future skill development',
            projects: []
        },
        'Audio': {
            name: 'Audio Design',
            level: 'locked',
            icon: Music,
            description: 'Sound effects, music integration - Future learning',
            projects: []
        },
    };

    const getNodeColor = (level: string) => {
        switch (level) {
            case 'mastered': return 'border-green-500/50 bg-green-500/10 hover:border-green-500';
            case 'learning': return 'border-yellow-500/50 bg-yellow-500/10 hover:border-yellow-500';
            case 'locked': return 'border-slate-700/50 bg-slate-800/10 opacity-40';
            default: return 'border-slate-700/50';
        }
    };

    const getGlowEffect = (level: string) => {
        switch (level) {
            case 'mastered': return 'shadow-[0_0_20px_rgba(34,197,94,0.3)]';
            case 'learning': return 'shadow-[0_0_20px_rgba(234,179,8,0.2)] animate-pulse';
            default: return '';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mb-16"
        >
            <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-indigo-400" />
                Skill Tree
            </h2>

            {/* Legend */}
            <div className="flex items-center gap-4 mb-8 flex-wrap">
                <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-slate-400">Mastered</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
                    <span className="text-slate-400">Learning</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <span className="text-slate-400">Locked</span>
                </div>
            </div>

            {/* Skill Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(skills).map(([key, skill], idx) => (
                    <motion.div
                        key={key}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4 + idx * 0.1 }}
                        className="relative"
                    >
                        <motion.button
                            onClick={() => setSelectedNode(selectedNode === key ? null : key)}
                            whileHover={{ scale: skill.level !== 'locked' ? 1.05 : 1 }}
                            whileTap={{ scale: skill.level !== 'locked' ? 0.95 : 1 }}
                            className={`
                                w-full p-6 border-2 transition-all duration-300 relative group
                                ${getNodeColor(skill.level)}
                                ${skill.level !== 'locked' ? 'cursor-pointer' : 'cursor-not-allowed'}
                            `}
                        >
                            {/* Glow effect for mastered/learning */}
                            {skill.level !== 'locked' && (
                                <div className={`absolute inset-0 ${getGlowEffect(skill.level)} pointer-events-none`}></div>
                            )}

                            <div className="relative z-10">
                                <skill.icon className={`
                                    w-8 h-8 mb-3 mx-auto
                                    ${skill.level === 'mastered' ? 'text-green-400' : ''}
                                    ${skill.level === 'learning' ? 'text-yellow-400' : ''}
                                    ${skill.level === 'locked' ? 'text-slate-600' : ''}
                                `} />
                                <p className="font-bold text-sm mb-1">{skill.name}</p>

                                {/* XP Bar */}
                                {skill.level !== 'locked' && (
                                    <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            className={`h-full ${skill.level === 'mastered' ? 'bg-green-500' : 'bg-yellow-500'}`}
                                            initial={{ width: 0 }}
                                            animate={{ width: skill.level === 'mastered' ? '100%' : '60%' }}
                                            transition={{ delay: 1.6 + idx * 0.1, duration: 0.8 }}
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.button>

                        {/* Expanded Details */}
                        {selectedNode === key && skill.level !== 'locked' && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute z-50 left-0 right-0 top-full mt-2 p-4 bg-slate-900 border border-indigo-500/50 rounded shadow-xl"
                            >
                                <p className="text-xs text-slate-300 mb-2">{skill.description}</p>
                                {skill.projects && skill.projects.length > 0 && (
                                    <div className="text-xs text-slate-400">
                                        <span className="font-bold">Projects:</span> {skill.projects.join(', ')}
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillTree;
