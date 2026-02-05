"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

interface ArtisticGalleryCardProps {
    src: string;
    onClick: () => void;
}

export default function ArtisticGalleryCard({ src, onClick }: ArtisticGalleryCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth physics-based spring animation for 3D tilt
    // Reduced tilt range slightly for grid use (from 15 to 10) to be less chaotic
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
        stiffness: 150,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
        stiffness: 150,
        damping: 20,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate normalized position (-0.5 to 0.5)
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className="relative w-full break-inside-avoid mb-6 perspective-1000 cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                perspective: 1000,
            }}
        >
            <motion.div
                className="w-full relative preserve-3d rounded-xl overflow-hidden border border-white/10 hover:border-gold/50 transition-colors duration-300"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                whileHover={{
                    scale: 1.15,
                    zIndex: 50,
                    boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.25)" // Gold glow shadow
                }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* Lighting Effect / Sheen */}
                <div
                    className="absolute inset-0 z-50 pointer-events-none bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                    style={{
                        mixBlendMode: "overlay",
                        opacity: isHovered ? 1 : 0,
                        transition: "opacity 0.3s ease"
                    }}
                />

                <img
                    src={src}
                    alt="Gallery Moment"
                    loading="lazy"
                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4 z-40 transform translate-z-10">
                    <span
                        className="text-gold text-sm uppercase tracking-widest font-bold"
                        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                    >
                        View Full
                    </span>
                </div>
            </motion.div>
        </motion.div>
    );
}
