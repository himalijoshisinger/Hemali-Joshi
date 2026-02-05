"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { X } from "lucide-react";
import ArtisticGalleryCard from "./ArtisticGalleryCard";
import ArtisticVideoCard from "./ArtisticVideoCard";

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Parallax Effect Values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Background moves slightly opposite to cursor for depth
    const moveX = useTransform(mouseX, [-0.5, 0.5], ["5%", "-5%"]);
    const moveY = useTransform(mouseY, [-0.5, 0.5], ["5%", "-5%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        mouseX.set((x / width) - 0.5);
        mouseY.set((y / height) - 0.5);
    };

    const images = [
        { id: 1, src: "/assets/Gal/IMG_7069.JPG" },
        { id: 2, src: "/assets/Gal/IMG_7070.JPG" },
        { id: 3, src: "/assets/Gal/IMG_7071.JPG" },
        { id: 4, src: "/assets/Gal/IMG_7072.JPG" },
        { id: 5, src: "/assets/Gal/IMG_7074.JPG" },
        { id: 6, src: "/assets/Gal/IMG_7077.JPG" },
        { id: 7, src: "/assets/Gal/IMG_7078.JPG" },
        { id: 8, src: "/assets/Gal/IMG_7081.JPG" },
        { id: 9, src: "/assets/Gal/IMG_7082.JPG" },
        { id: 10, src: "/assets/Gal/IMG_7083.JPG" },
        { id: 11, src: "/assets/Gal/IMG_7084.JPG" },
        { id: 12, src: "/assets/Gal/IMG_7085.JPG" },
        { id: 13, src: "/assets/Gal/IMG_7086.JPG" },
        { id: 14, src: "/assets/Gal/IMG_7087.JPG" },
        { id: 15, src: "/assets/Gal/IMG_7088.JPG" },
        { id: 16, src: "/assets/Gal/IMG_7089.JPG" },
        { id: 17, src: "/assets/Gal/IMG_7091.JPG" },
        { id: 18, src: "/assets/Gal/IMG_7092.JPG" },
        { id: 19, src: "/assets/Gal/IMG_7093.JPG" },
        { id: 20, src: "/assets/Gal/IMG_7094.JPG" },
        { id: 21, src: "/assets/Gal/IMG_7095.JPG" },
        { id: 22, src: "/assets/Gal/IMG_7096.JPG" },
        { id: 23, src: "/assets/Gal/IMG_7097.JPG" },
        { id: 24, src: "/assets/Gal/IMG_7098.JPG" },
        { id: 25, src: "/assets/Gal/IMG_7069%202.JPG" },
        { id: 26, src: "/assets/Gal/IMG_7077%202.JPG" },
        { id: 27, src: "/assets/Gal/IMG_7078%202.JPG" },
    ];

    const videos = [
        { id: 1, src: "/assets/Gal/videos/319267f0-a223-4356-b981-c6d6cd42cedf.MP4", title: "Live Concert Highlight" },
        { id: 2, src: "/assets/Gal/videos/cbbb1f8b-f7fa-4624-9382-f8d163932229.MP4", title: "Unplugged Session" },
        { id: 3, src: "/assets/Gal/videos/VID_20250106_221156_831.MP4", title: "Backstage Moments" },
        { id: 4, src: "/assets/Gal/videos/WEDDING REEL (19-12-2024)-1.MP4", title: "Wedding Performance" },
        { id: 5, src: "/assets/Gal/videos/Himali Joshi-1.MP4", title: "Classical Fusion" },
        { id: 6, src: "/assets/Gal/videos/3ea16fb3-b9e3-4bf2-a14c-55e5eb3dcc3b.MP4", title: "Soulful Rendition" },
        { id: 7, src: "/assets/Gal/videos/DRFT 4 .MP4", title: "Cinematic Journey" },
    ];

    return (
        <section id="gallery" className="w-full py-20 px-6 bg-transparent text-white">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="font-serif text-5xl md:text-6xl mb-6">Visual <span className="text-gold">Stories</span></h2>
                    <p className="text-gray-400 max-w-2xl text-lg opacity-80">
                        Moments frozen in time—where every frame sings a melody of its own.
                        Hover to interact with the memories.
                    </p>
                    <div className="mt-8 h-1 w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                </div>

                {/* Desktop "H & J" Monogram Layout */}
                <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    className="hidden lg:grid relative grid-cols-12 gap-6 mb-24 p-12 rounded-3xl overflow-hidden border border-white/10 group"
                >
                    {/* Background Image - Parallax Motion */}
                    <motion.div
                        className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
                        style={{
                            backgroundImage: "url('/assets/gallery-bg.jpg')",
                            x: moveX,
                            y: moveY,
                            scale: 1.1 // Checked to ensure no white edges when moving
                        }}
                    />
                    <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />

                    {/* The "H" - Spans columns 1-5 */}
                    <div className="col-span-6 grid grid-cols-3 gap-6 relative z-10">
                        {/* Left Pillar */}
                        <div className="flex flex-col gap-6">
                            {images.slice(0, 2).map((img) => (
                                <ArtisticGalleryCard key={img.id} src={img.src} onClick={() => setSelectedImage(img.src)} />
                            ))}
                        </div>
                        {/* Center Bridge - Centered vertically */}
                        <div className="flex flex-col justify-center">
                            <ArtisticGalleryCard src={images[2].src} onClick={() => setSelectedImage(images[2].src)} />
                        </div>
                        {/* Right Pillar */}
                        <div className="flex flex-col gap-6">
                            {images.slice(3, 5).map((img) => (
                                <ArtisticGalleryCard key={img.id} src={img.src} onClick={() => setSelectedImage(img.src)} />
                            ))}
                        </div>
                    </div>

                    {/* Spacer / Divider */}
                    <div className="col-span-1 relative z-10" />

                    {/* The "J" - Spans columns 7-11 */}
                    <div className="col-span-5 grid grid-cols-3 gap-6 relative z-10">
                        {/* Left helper (Empty except for hook bottom?) */}
                        <div className="flex flex-col justify-end">
                            <ArtisticGalleryCard src={images[5].src} onClick={() => setSelectedImage(images[5].src)} />
                        </div>
                        {/* Center Stem (The main J body) */}
                        <div className="col-span-1 flex flex-col gap-6">
                            {images.slice(6, 9).map((img) => (
                                <ArtisticGalleryCard key={img.id} src={img.src} onClick={() => setSelectedImage(img.src)} />
                            ))}
                        </div>
                        {/* Col 3 is empty */}
                    </div>
                </div>

                {/* Mobile/Tablet & Remaining Images Grid */}
                {/* On Desktop, we show images starting from index 9. On Mobile, show ALL images using standard layout. */}
                <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8">
                    {/* Mobile: Show All */}
                    <div className="lg:hidden contents">
                        {images.map((img) => (
                            <ArtisticGalleryCard
                                key={img.id}
                                src={img.src}
                                onClick={() => setSelectedImage(img.src)}
                            />
                        ))}
                    </div>

                    {/* Desktop: Show Remaining only */}
                    <div className="hidden lg:contents">
                        {images.slice(9).map((img) => (
                            <ArtisticGalleryCard
                                key={img.id}
                                src={img.src}
                                onClick={() => setSelectedImage(img.src)}
                            />
                        ))}
                    </div>
                </div>

                {/* ---------------------------------------------------- */}
                {/* VIDEO GALLERY SECTION */}
                {/* ---------------------------------------------------- */}
                <div className="mt-24 md:mt-40 mb-12 flex flex-col items-center text-center">
                    <h2 className="font-serif text-3xl md:text-5xl mb-6">Motion & <span className="text-gold">Melody</span></h2>
                    <p className="text-gray-400 max-w-2xl text-base md:text-lg opacity-80">
                        Cinematic chronicles of live performances and musical journeys.
                    </p>
                    <div className="mt-8 h-1 w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {videos.map((vid) => (
                        <ArtisticVideoCard
                            key={vid.id}
                            src={vid.src}
                            title={vid.title}
                            onClick={() => setSelectedVideo(vid.src)}
                        />
                    ))}
                </div>
            </div>

            {/* Image Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-2 md:p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-4 right-4 text-white hover:text-gold transition-colors p-2 bg-black/50 rounded-full z-[70]">
                            <X size={28} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedImage} alt="Full view" className="max-w-full max-h-full object-contain rounded-md shadow-2xl shadow-gold/10" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Lightbox */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
                        onClick={() => setSelectedVideo(null)}
                    >
                        <button className="absolute top-6 right-6 text-white hover:text-gold transition-colors p-2 bg-black/50 rounded-full z-[70]">
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)] border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <video
                                src={selectedVideo}
                                className="w-full h-full"
                                controls
                                autoPlay
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
