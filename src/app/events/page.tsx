import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Star, MapPin, Calendar, ArrowRight } from "lucide-react";

import EventsHeaderTitle from "@/components/EventsHeaderTitle";

export const metadata: Metadata = {
    title: "Book Best Singer in Vadodara | Top Garba & Wedding Performer in Gujarat | Himali Joshi",
    description: "Book Himali Joshi, the best singer in Vadodara, for live concerts, weddings, and corporate events in Gujarat and globally. Expert Garba & Bollywood performer.",
    keywords: ["Book Singer Vadodara", "Best Wedding Singer Gujarat", "Top Garba Performer Vadodara", "Corporate Event Singer Gujarat", "Playback Singer India Bookings"],
};

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-black text-white pt-24 selection:bg-gold selection:text-black">
            {/* Hero Section */}
            <section className="relative px-6 py-20 text-center container mx-auto">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-gold/50" />

                <EventsHeaderTitle />
                <p className="text-xl md:text-2xl text-gold/80 font-serif italic tracking-wider mb-12">
                    Performing on stages across the globe.
                </p>

                <div className="flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
                </div>
            </section>

            {/* Artistic Events List */}
            <section className="container mx-auto px-6 pb-24 max-w-5xl">
                <div className="grid gap-8">
                    {/* Event 1 */}
                    <div className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                            <div className="text-center md:text-left">
                                <span className="inline-block px-3 py-1 border border-gold/30 rounded-full text-xs uppercase tracking-widest text-gold mb-4">International</span>
                                <h3 className="text-3xl md:text-4xl font-serif mb-2 text-white">Event at Dubai</h3>
                                <p className="text-gray-400 flex items-center justify-center md:justify-start gap-2">
                                    <MapPin size={16} className="text-gold" /> Dubai, UAE
                                </p>
                            </div>
                            <div className="w-full md:w-auto border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-12 flex flex-col items-center md:items-end gap-3">
                                <span className="text-4xl font-serif text-gold/20 group-hover:text-gold transition-colors duration-500">01</span>
                                <button className="text-sm uppercase tracking-widest border-b border-gold/50 pb-1 hover:text-gold hover:border-gold transition-all">View Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Event 2 */}
                    <div className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-maroon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                            <div className="text-center md:text-left">
                                <span className="inline-block px-3 py-1 border border-maroon/50 rounded-full text-xs uppercase tracking-widest text-maroon-400 mb-4 text-gold">Cultural</span>
                                <h3 className="text-3xl md:text-4xl font-serif mb-2 text-white">Ratri Before Navratri</h3>
                                <p className="text-gray-400 flex items-center justify-center md:justify-start gap-2">
                                    <Calendar size={16} className="text-gold" /> Upcoming Festival
                                </p>
                            </div>
                            <div className="w-full md:w-auto border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-12 flex flex-col items-center md:items-end gap-3">
                                <span className="text-4xl font-serif text-gold/20 group-hover:text-gold transition-colors duration-500">02</span>
                                <button className="text-sm uppercase tracking-widest border-b border-gold/50 pb-1 hover:text-gold hover:border-gold transition-all">View Details</button>
                            </div>
                        </div>
                    </div>

                    {/* Event 3 */}
                    <div className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                            <div className="text-center md:text-left">
                                <span className="inline-block px-3 py-1 border border-purple-500/30 rounded-full text-xs uppercase tracking-widest text-purple-400 mb-4 text-gold">Bollywood</span>
                                <h3 className="text-3xl md:text-4xl font-serif mb-2 text-white">Work at Yash Raj Films</h3>
                                <p className="text-gray-400 flex items-center justify-center md:justify-start gap-2">
                                    <Star size={16} className="text-gold" /> Exclusive Project
                                </p>
                            </div>
                            <div className="w-full md:w-auto border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-12 flex flex-col items-center md:items-end gap-3">
                                <span className="text-4xl font-serif text-gold/20 group-hover:text-gold transition-colors duration-500">03</span>
                                <button className="text-sm uppercase tracking-widest border-b border-gold/50 pb-1 hover:text-gold hover:border-gold transition-all">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Quote */}
                <div className="mt-20 text-center">
                    <p className="font-serif italic text-2xl text-gray-500">
                        "Creating moments that last a lifetime."
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
