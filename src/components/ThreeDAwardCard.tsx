"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ThreeDAwardCardProps {
    title: string;
    year: string;
    org: string;
    desc: string;
    image: string;
    icon: React.ReactNode;
    isFeatured?: boolean;
}

export default function ThreeDAwardCard({ title, year, org, desc, image, icon, isFeatured = false }: ThreeDAwardCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position state
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth physics for the rotation
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

    // Shine effect position
    const shineX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
    const shineY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Calculate mouse position relative to center of card (-0.5 to 0.5)
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative w-full h-[500px] rounded-3xl bg-black cursor-pointer group perspective-1000 ${isFeatured ? 'ring-2 ring-gold shadow-[0_0_50px_rgba(212,175,55,0.2)]' : ''}`}
        >
            {/* Featured Badge */}
            {isFeatured && (
                <div
                    className="absolute -top-6 left-1/2 -translate-x-1/2 z-50 bg-gradient-to-r from-gold to-amber-500 text-black font-bold uppercase tracking-widest text-xs py-2 px-6 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.5)] transform translate-z-50"
                    style={{ transform: "translateZ(60px) translateX(-50%)" }}
                >
                    Latest Win
                </div>
            )}

            {/* 1. Background Image Layer (Deepest) */}
            <div
                className="absolute inset-0 rounded-3xl overflow-hidden"
                style={{ transform: "translateZ(0px)" }}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
            </div>

            {/* 2. Shine/Glare Effect */}
            <motion.div
                style={{
                    background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.1), transparent 60%)`,
                    transform: "translateZ(1px)",
                }}
                className="absolute inset-0 rounded-3xl pointer-events-none z-10"
            />

            {/* 3. Border Glow */}
            <div
                className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-gold/50 transition-colors duration-500 z-20"
                style={{ transform: "translateZ(20px)" }}
            />

            {/* 4. Content Layer (Floating) */}
            <div
                className="absolute inset-0 p-8 flex flex-col justify-end z-30"
                style={{ transform: "translateZ(50px)" }}
            >
                {/* Floating Icon Badge */}
                <div
                    className="absolute top-8 right-8 w-16 h-16 bg-gold/20 backdrop-blur-md rounded-full flex items-center justify-center border border-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    style={{ transform: "translateZ(30px)" }}
                >
                    {icon}
                </div>

                <div className="transform transition-all duration-500 group-hover:translate-z-10">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 text-xs font-bold bg-gold text-black rounded-full uppercase tracking-wider">
                            {year}
                        </span>
                        <span className="text-gray-300 text-sm font-medium uppercase tracking-widest">{org}</span>
                    </div>

                    <h3 className="text-3xl font-serif text-white mb-4 leading-tight group-hover:text-gold transition-colors">
                        {title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                        {desc}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
