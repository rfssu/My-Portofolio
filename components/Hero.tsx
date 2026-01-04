'use client';

import React from 'react';

const Hero = () => {
    return (
        <section className="py-20 md:py-32">
            <div className="text-center max-w-4xl mx-auto">
                {/* Badge/Label */}
                <div className="inline-block mb-6">
                    <span className="px-4 py-2 bg-blue-600/10 text-blue-400 rounded-full text-sm font-semibold border border-blue-600/20">
                        🚀 Portfolio 2026
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Judul Utama Anda{' '}
                    <span className="text-gradient">Di Sini</span>
                </h1>

                {/* Subtitle/Description */}
                <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                    Deskripsi singkat tentang Anda atau portfolio Anda.
                    Jelaskan keahlian dan value proposition Anda di sini.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#projects" className="btn-primary">
                        Lihat Proyek
                    </a>
                    <a href="#contact" className="btn-secondary">
                        Hubungi Saya
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
