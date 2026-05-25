"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const rangbastraImages = [
    "/assets/Brandshoot/rang1.jpeg",
    "/assets/Brandshoot/rang2.jpeg",
    "/assets/Brandshoot/rang3.jpeg",
    "/assets/Brandshoot/rang4.jpeg",
    "/assets/Brandshoot/rang5.jpeg",
    "/assets/Brandshoot/rang6.jpeg"
];

const bansiImages = [
    "/assets/Bansi/bansi1.jpeg",
    "/assets/Bansi/bansi2.jpeg",
    "/assets/Bansi/bansi3.jpeg",
    "/assets/Bansi/bansi4.jpeg",
    "/assets/Bansi/bansi5.jpeg",
    "/assets/Bansi/bansi6.jpeg"
];

const rajviImages = [
    "/assets/Bansi/Rajvi1.jpeg",
    "/assets/Bansi/Rajvi2.jpeg"
];

const binniImages = [
    "/assets/Bansi/binni1.jpeg",
    "/assets/Bansi/binni2.jpeg",
    "/assets/Bansi/binni3.jpeg",
    "/assets/Bansi/binni4.jpeg"
];


export default function BrandsGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="w-full px-4 md:px-8 max-w-[1600px] mx-auto">
            {/* Header Section */}
            <div className="mb-16 text-center relative flex flex-col items-center">
                <Link href="/gallery" className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gold/60 hover:text-gold transition-colors group">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    <span className="hidden md:inline tracking-widest text-sm font-bold uppercase">Back to Hub</span>
                </Link>
                
                <h1 className="font-serif text-4xl md:text-6xl mb-6 tracking-tighter uppercase">
                    BRAND <span className="text-gold italic ml-4 font-allura normal-case tracking-normal">Shoot</span>
                </h1>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>

            {/* SECTION 1: Rangbastra */}
            <div className="mb-20">
                <div className="mb-12 text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-3xl md:text-4xl tracking-wide uppercase text-white"
                    >
                        Rangbastra <span className="text-gold italic font-allura normal-case ml-2">Collection</span>
                    </motion.h2>
                    <p className="text-white/50 text-sm md:text-base mt-2 max-w-md mx-auto">
                        By Bhagirathi Patel-Aanad
                    </p>
                    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
                </div>

                {/* Pure CSS Masonry Grid for Rangbastra */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {rangbastraImages.map((src, index) => (
                        <motion.div 
                            key={`rang-${index}`} 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={() => setSelectedImage(src)}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl cursor-pointer transition-all duration-700 hover:border-gold/30 hover:shadow-gold/20"
                        >     
                            <Image
                                src={encodeURI(src)}
                                alt={`Rangbastra Collection by Himali Joshi - ${index + 1}`}
                                width={800}
                                height={1200}
                                unoptimized
                                style={{ width: '100%', height: 'auto' }}
                                className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            {/* Modern Glass Corner Accents */}
                            <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/40 transition-all duration-700 rounded-tr-xl pointer-events-none" />
                            <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/40 transition-all duration-700 rounded-bl-xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* SECTION 2: Banshi Boutique */}
            <div className="mb-20">
                <div className="mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-3xl md:text-4xl tracking-wide uppercase text-white"
                    >
                        Banshi Boutique <span className="text-gold italic font-allura normal-case ml-2">Collection</span>
                    </motion.h2>
                    <p className="text-white/50 text-sm md:text-base mt-2 max-w-md mx-auto">
                        By Jagruti Vadodara
                    </p>
                    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
                </div>

                {/* Pure CSS Masonry Grid for Banshi Boutique */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {bansiImages.map((src, index) => (
                        <motion.div
                            key={`bansi-${index}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={() => setSelectedImage(src)}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl cursor-pointer transition-all duration-700 hover:border-gold/30 hover:shadow-gold/20"
                        >
                            <Image
                                src={encodeURI(src)}
                                alt={`Banshi Boutique by Jagruti Vadodara - ${index + 1}`}
                                width={800}
                                height={1200}
                                unoptimized
                                style={{ width: '100%', height: 'auto' }}
                                className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            {/* Modern Glass Corner Accents */}
                            <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/40 transition-all duration-700 rounded-tr-xl pointer-events-none" />
                            <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/40 transition-all duration-700 rounded-bl-xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* SECTION 3: The Royal Fest */}
            <div className="mb-20">
                <div className="mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-3xl md:text-4xl tracking-wide uppercase text-white"
                    >
                        The Royal Fest <span className="text-gold italic font-allura normal-case ml-2">Collection</span>
                    </motion.h2>
                    <p className="text-white/50 text-sm md:text-base mt-2 max-w-md mx-auto">
                        By Rajvi Patel
                    </p>
                    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
                </div>

                {/* Pure CSS Masonry Grid for The Royal Fest */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {rajviImages.map((src, index) => (
                        <motion.div
                            key={`rajvi-${index}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={() => setSelectedImage(src)}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl cursor-pointer transition-all duration-700 hover:border-gold/30 hover:shadow-gold/20"
                        >
                            <Image
                                src={encodeURI(src)}
                                alt={`The Royal Fest by Rajvi Patel - ${index + 1}`}
                                width={800}
                                height={1200}
                                unoptimized
                                style={{ width: '100%', height: 'auto' }}
                                className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            {/* Modern Glass Corner Accents */}
                            <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/40 transition-all duration-700 rounded-tr-xl pointer-events-none" />
                            <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/40 transition-all duration-700 rounded-bl-xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* SECTION 4: Binniesbliss */}
            <div className="mb-20">
                <div className="mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-3xl md:text-4xl tracking-wide uppercase text-white"
                    >
                        Binniesbliss <span className="text-gold italic font-allura normal-case ml-2">Collection</span>
                    </motion.h2>
                    <p className="text-white/50 text-sm md:text-base mt-2 max-w-md mx-auto">
                        By Binny Patel Vadodara
                    </p>
                    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
                </div>

                {/* Pure CSS Masonry Grid for Binniesbliss */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {binniImages.map((src, index) => (
                        <motion.div
                            key={`binni-${index}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={() => setSelectedImage(src)}
                            className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl cursor-pointer transition-all duration-700 hover:border-gold/30 hover:shadow-gold/20"
                        >
                            <Image
                                src={encodeURI(src)}
                                alt={`Binniesbliss Collection by Binny Patel Vadodara - ${index + 1}`}
                                width={800}
                                height={1200}
                                unoptimized
                                style={{ width: '100%', height: 'auto' }}
                                className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            {/* Modern Glass Corner Accents */}
                            <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/40 transition-all duration-700 rounded-tr-xl pointer-events-none" />
                            <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/40 transition-all duration-700 rounded-bl-xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>


            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-2 md:p-4 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button 
                            className="absolute top-4 right-4 text-white hover:text-gold transition-colors p-2 bg-black/50 rounded-full z-[70]"
                            aria-label="Close Lightbox"
                        >
                            <X size={28} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={encodeURI(selectedImage)}
                                alt="Full view"
                                width={1200}
                                height={1800}
                                unoptimized
                                style={{ maxWidth: '100%', maxHeight: '85vh', width: 'auto', height: 'auto' }}
                                className="object-contain rounded-md shadow-2xl shadow-gold/10"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
