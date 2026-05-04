import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Live Concerts | Himali Joshi",
    description: "Experience the high energy and magical moments of Himali Joshi's live concerts.",
};

const concertImages = [
    "/Concert/DSC04529.jpg",
    "/Concert/DSC04537.jpg",
    "/Concert/DSC04563.jpg",
    "/Concert/DSC04653.jpg",
    "/Concert/DSC04684.jpg",
    "/Concert/DSC04697.jpg",
    "/Concert/DSC04859.jpg",
    "/Concert/DSC05859.jpg",
    "/Concert/DSC06658.jpg",
    "/Concert/IMG_7069 2.JPG",
    "/Concert/IMG_7069.JPG",
    "/Concert/IMG_7070.JPG",
    "/Concert/IMG_7071.JPG",
    "/Concert/IMG_7072.JPG",
    "/Concert/IMG_7074.JPG",
    "/Concert/IMG_7077 2.JPG",
    "/Concert/IMG_7077.JPG",
    "/Concert/IMG_7078 2.JPG",
    "/Concert/IMG_7092.JPG",
    "/Concert/IMG_7093.JPG",
    "/Concert/IMG_7094.JPG",
    "/Concert/IMG_7095.JPG",
    "/Concert/IMG_7096.JPG",
    "/Concert/IMG_7097.JPG",
    "/Concert/IMG_7098.JPG",
    "/Concert/music1.jpg"
];

export default function ConcertsGalleryPage() {
    return (
        <main className="bg-black min-h-screen text-white pt-32 pb-0">
            <div className="w-full px-4 md:px-8 max-w-[1600px] mx-auto">
                {/* Header Section */}
                <div className="mb-16 text-center relative flex flex-col items-center">
                    <Link href="/gallery" className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gold/60 hover:text-gold transition-colors group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        <span className="hidden md:inline tracking-widest text-sm font-bold uppercase">Back to Hub</span>
                    </Link>
                    
                    <h1 className="font-serif text-4xl md:text-6xl mb-6 tracking-tighter uppercase">
                        LIVE <span className="text-gold italic ml-4 font-allura normal-case tracking-normal">Concerts</span>
                    </h1>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
                </div>
                
                {/* Pure CSS Masonry Grid */}
                <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 mb-32">
                    {concertImages.map((src, index) => (
                        <div key={index} className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl cursor-pointer">
                            <Image
                                src={src}
                                alt={`Live Concert by Himali Joshi - ${index + 1}`}
                                width={800}
                                height={1200}
                                className="w-full h-auto object-cover filter contrast-[1.05] group-hover:scale-[1.03] group-hover:contrast-125 transition-all duration-700"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                            />
                            {/* Premium Glass Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 pointer-events-none">
                                <span className="text-gold font-serif italic text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    Stage Energy
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <Footer />
        </main>
    );
}
