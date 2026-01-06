'use client';

import { useEffect, useState } from 'react';
// Hapus import motion jika tidak dipakai animasi berat disini, 
// atau biarkan div biasa biar ringan.

const Greeting: React.FC = () => {
    const [text, setText] = useState('Hello');
    const [icon, setIcon] = useState('👋');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) {
            setText('Good Morning'); setIcon('🌅');
        } else if (hour >= 12 && hour < 18) {
            setText('Good Afternoon'); setIcon('☀️');
        } else {
            setText('Good Evening'); setIcon('🌙');
        }
    }, []);

    if (!mounted) return <span className="opacity-0">Hello</span>;

    // --- PERBAIKAN DISINI ---
    // Kita HAPUS semua class 'border', 'bg-', 'shadow', 'rounded'.
    // Kita sisakan hanya layouting (flex) dan gap saja.
    return (
        <div className="flex items-center gap-2">
            <span className="text-xl">{icon}</span>
            <span className="font-medium">{text}</span>
            {/* Hapus "I'm [Nama]" dari sini karena sudah ada di Hero.tsx */}
        </div>
    );
};

export default Greeting;