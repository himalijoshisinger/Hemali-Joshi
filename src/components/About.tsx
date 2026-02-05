"use client";
import { motion } from "framer-motion";
import DynamicPortrait from "./DynamicPortrait";

export default function About() {
    const keywords = ["Indian Playback Singer", "Live Performer", "Folk Fusion", "Sufi & Classical"];

    return (
        <section id="about" className="relative w-full py-20 px-6 md:py-32 bg-black text-white overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-maroon/20 via-black to-black -z-20" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            {/* Pattern Overlay (Simulated with CSS) */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="w-full max-w-[280px] sm:max-w-md mx-auto">
                        <DynamicPortrait />
                    </div>

                    {/* Decorative Frame/Border */}
                    <div className="absolute -inset-2 md:-inset-4 border border-gold/30 -z-10 rounded-2xl md:translate-x-4 md:translate-y-4" />
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-maroon/40 blur-3xl rounded-full opacity-50" />
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center lg:text-left order-1 lg:order-2"
                >
                    <h2 className="font-serif text-[clamp(2rem,6vw,4rem)] text-white mb-6 leading-tight">About <span className="text-gold">Himali Joshi</span></h2>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Himali Joshi is a versatile Indian singer known for her soulful voice and captivating performances. With a deep-rooted passion for music, she specializes in blending traditional Indian melodies with contemporary sounds.
                    </p>

                    <div className="space-y-6 text-gray-300 font-light leading-relaxed mt-8">
                        <p>
                            Born into a family where music was less of a hobby and more of a language,
                            <strong> Himali Joshi</strong> found her voice echoing the rich cultural heritage of India.
                            As a versatile <span className="text-white font-normal">Indian singer</span> and performer,
                            she bridges the gap between classical traditions and modern soundscapes.
                        </p>
                        <p>
                            From soulful Sufi renditions to high-energy <span className="text-white font-normal">live concerts</span>,
                            her performances are an emotional journey. She is a celebrated
                            <span className="text-white font-normal"> folk fusion artist</span> who believes that every note must tell a story.
                        </p>
                    </div>

                    {/* Keywords / Tags */}
                    <div className="flex flex-wrap gap-3 mt-10">
                        {keywords.map((tag, idx) => (
                            <span key={idx} className="px-4 py-2 border border-white/10 rounded-full text-xs uppercase tracking-wider text-gold hover:bg-gold hover:text-black transition-colors cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
