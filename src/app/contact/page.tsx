import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import ThreeDContactCard from "@/components/ThreeDContactCard";

export const metadata: Metadata = {
    title: "Hire Best Singer in Vadodara | Contact Top Performer in Gujarat | Himali Joshi",
    description: "Book Himali Joshi, the top playback and Garba singer in Vadodara, Gujarat. Contact for wedding bookings, corporate events, and live concerts. Best Gujarati & Bollywood singer.",
    keywords: ["Hire Singer Vadodara", "Book Singer Gujarat", "Himali Joshi Contact", "Best Wedding Singer Vadodara", "Top Garba Performer Gujarat"],
};

export default function ContactPage() {
    return (
        <main className="bg-black min-h-screen text-white pt-24 selection:bg-gold selection:text-black overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative py-20 px-6 text-center">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-maroon)_0%,_black_70%)] -z-10 opacity-40 animate-pulse" />

                <div className="container mx-auto">
                    <div className="inline-block p-1 px-3 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                        Inquiries
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
                        Get in <span className="text-gold italic">Touch</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
                        Ready to create an unforgettable musical experience? Reach out for bookings, collaborations, and press inquiries.
                    </p>
                </div>
            </section>

            {/* 3D Contact Cards */}
            <section className="container mx-auto px-6 mb-24 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ThreeDContactCard
                        title="Management"
                        info="+91 6359012805"
                        subInfo="Mon-Sat, 10am - 7pm"
                        icon={<Phone className="text-gold w-8 h-8" />}
                    />
                    <ThreeDContactCard
                        title="Email"
                        info="inquiry.himalijoshi@gmail.com"
                        subInfo="Response within 24 hours"
                        icon={<Mail className="text-gold w-8 h-8" />}
                    />
                    <ThreeDContactCard
                        title="Location"
                        info="India | UK | USA | Dubai"
                        subInfo="Available Globally"
                        icon={<MapPin className="text-gold w-8 h-8" />}
                    />
                </div>
            </section>

            {/* Booking Form Section */}
            <BookingForm />

            <Footer />
        </main>
    );
}
