"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ThreeDContactCardProps {
    title: string;
    info: string;
    subInfo?: string;
    icon: React.ReactNode;
}

export default function ThreeDContactCard({ title, info, subInfo, icon }: ThreeDContactCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });

    const shineX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
    const shineY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
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
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full h-[250px] rounded-3xl bg-black cursor-pointer group perspective-1000"
        >
            {/* Background Layer */}
            <div className="absolute inset-0 rounded-3xl bg-[#0f0f0f] border border-white/10 group-hover:border-gold/30 transition-colors duration-500 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Shine Effect */}
            <motion.div
                style={{
                    background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(212,175,55,0.15), transparent 60%)`,
                    transform: "translateZ(1px)",
                }}
                className="absolute inset-0 rounded-3xl pointer-events-none z-10"
            />

            {/* Content Layer (Floating) */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20"
                style={{ transform: "translateZ(30px)" }}
            >
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">
                    {icon}
                </div>

                <h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold transition-colors">{title}</h3>
                <p className="text-white/80 font-medium">{info}</p>
                {subInfo && <p className="text-gray-500 text-sm mt-1">{subInfo}</p>}
            </div>
        </motion.div>
    );
}
