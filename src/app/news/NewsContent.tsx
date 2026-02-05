"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import NewsIntro from "@/components/NewsIntro";
import Footer from "@/components/Footer";
import { ExternalLink, Calendar, Newspaper } from "lucide-react";

const NEWS_ITEMS = [
    { id: 1, src: "/assets/News/article_interview.jpg", title: "As an Artiste, I Keep Learning", source: "Times of India", date: "Interview", span: "col-span-1 md:col-span-2" },
    { id: 2, src: "/assets/News/media_collage_1.jpg", title: "Work Profile & Achievements", source: "Sandesh", date: "Feature", span: "col-span-1" },
    { id: 3, src: "/assets/News/media_collage_2.jpg", title: "Live Concert Highlights", source: "Spark Today", date: "Coverage", span: "col-span-1" },
    { id: 4, src: "/assets/News/IMG_7110.JPG", title: "Navratri Special Feature", source: "Gujarat Samachar", date: "2024", span: "row-span-2" },
    { id: 5, src: "/assets/News/IMG_7112.JPG", title: "Cultural Excellence Award", source: "Divya Bhaskar", date: "2024", span: "col-span-1" },
    { id: 6, src: "/assets/News/IMG_7109.JPG", title: "Voice of Gujarat", source: "City News", date: "Exclusive", span: "col-span-1" },
    { id: 7, src: "/assets/News/IMG_7113.JPG", title: "Musical Journey", source: "Lifestyle Magazine", date: "Profile", span: "col-span-1 md:col-span-2" },
    { id: 8, src: "/assets/News/IMG_7111.JPG", title: "Live Performance", source: "Event Coverage", date: "2023", span: "col-span-1" },
    { id: 9, src: "/assets/News/IMG_7116.jpg", title: "Studio Sessions", source: "Behind The Scenes", date: "2024", span: "col-span-1" },
    { id: 10, src: "/assets/News/f86147fd-8ba6-4252-bad6-b677022ab066.JPG", title: "Community Recognition", source: "Local Press", date: "Award", span: "col-span-1" },
    { id: 11, src: "/assets/News/cc5b3716-4fef-4d05-94c5-11ac1a560463.JPG", title: "The Art of Garba", source: "Culture Beat", date: "Review", span: "col-span-1" },
];

export default function NewsContent() {
    const [showIntro, setShowIntro] = useState(true);
    const [selectedArticle, setSelectedArticle] = useState<typeof NEWS_ITEMS[0] | null>(null);

    return (
        <main className="min-h-screen bg-black text-white selection:bg-gold selection:text-black">
            {showIntro && (
                <NewsIntro onComplete={() => setShowIntro(false)} />
            )}

            {!showIntro && (
                <div className="pt-24 animate-in fade-in duration-1000">

                    {/* Header */}
                    <section className="container mx-auto px-6 py-16 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-block p-1 px-4 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-serif tracking-[0.3em] uppercase mb-6 backdrop-blur-md">
                                Editorial & Press Coverage
                            </div>
                            <h1 className="font-serif text-6xl md:text-8xl mb-8 text-white leading-tight">
                                The <span className="text-gold italic">Headlines</span>
                            </h1>
                            <p className="text-gray-400 max-w-2xl mx-auto mb-8 font-light italic">
                                Read about the latest achievements and media features of the <strong>best singer in India and Gujarat</strong>.
                            </p>
                            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto opacity-50" />
                        </motion.div>
                    </section>

                    {/* Masonry-style Grid */}
                    <section className="container mx-auto px-6 pb-32 max-w-7xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
                            {NEWS_ITEMS.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.8 }}
                                    className={`group relative overflow-hidden rounded-md border border-white/10 bg-[#0a0a0a] ${item.span || ""}`}
                                    onClick={() => setSelectedArticle(item)}
                                >
                                    {/* Image with Contain to avoid cropping */}
                                    <div className="absolute inset-0 p-3 md:p-4 flex items-center justify-center bg-[#111] cursor-zoom-in">
                                        <div className="relative w-full h-full">
                                            <img
                                                src={item.src}
                                                alt={item.title}
                                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02] filter contrast-[1.05]"
                                            />
                                        </div>
                                    </div>

                                    {/* Hover Overlay - Touching interaction for mobile */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 md:group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] z-10 flex flex-col justify-end p-6 md:p-8 cursor-pointer">
                                        <div className="transform translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex items-center gap-3 text-gold/80 text-[10px] md:text-xs tracking-widest uppercase font-medium mb-2 md:mb-3">
                                                <span className="flex items-center gap-1"><Newspaper size={12} /> {item.source}</span>
                                                <span className="w-1 h-1 rounded-full bg-gold/50" />
                                                <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-serif text-white mb-3 md:mb-4 leading-tight">
                                                {item.title}
                                            </h3>
                                            <button className="text-sm text-white border-b border-gold pb-1 hover:text-gold transition-colors">
                                                Read Full Article
                                            </button>
                                        </div>
                                    </div>

                                    {/* Subtle Corner Accent - Visible on mobile for tap intent */}
                                    <div className="absolute top-4 right-4 z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center border border-gold/40 backdrop-blur-md">
                                            <ExternalLink className="text-gold w-3 h-3" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    <Footer />

                    {/* Article Reading Modal */}
                    {selectedArticle && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedArticle(null)}
                                className="absolute inset-0 bg-black/95 backdrop-blur-xl cursor-pointer"
                            />
                            <motion.div
                                layoutId={`article-${selectedArticle.id}`}
                                className="relative w-full max-w-5xl max-h-full bg-black border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedArticle(null)}
                                    className="absolute top-4 right-4 z-[110] w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors border border-white/10"
                                >
                                    ✕
                                </button>

                                {/* Article Image Container */}
                                <div className="flex-1 bg-[#050505] relative overflow-auto p-4 md:p-8 flex items-center justify-center">
                                    <img
                                        src={selectedArticle.src}
                                        alt={selectedArticle.title}
                                        className="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain shadow-2xl"
                                    />
                                </div>

                                {/* Article Info Overlay (Bottom on Mobile) */}
                                <div className="bg-black/80 backdrop-blur-md p-6 border-t border-white/10 md:hidden">
                                    <h3 className="text-xl font-serif text-gold mb-2">{selectedArticle.title}</h3>
                                    <p className="text-gray-400 text-sm">{selectedArticle.source} • {selectedArticle.date}</p>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </div>
            )}
        </main>
    );
}
