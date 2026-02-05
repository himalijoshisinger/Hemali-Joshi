import type { Metadata } from "next";
import { Award, Calendar, Star, Trophy, Mic, Crown } from "lucide-react";
import Footer from "@/components/Footer";
import ThreeDAwardCard from "@/components/ThreeDAwardCard";

export const metadata: Metadata = {
    title: "Award-Winning Singer in Vadodara | Best Singer Gujarat Recognition | Himali Joshi",
    description: "Discover the awards and accolades of Himali Joshi, the best playback and Garba singer in Vadodara, Gujarat. Awarded for musical excellence and live performances.",
    keywords: ["Award Winning Singer Vadodara", "Best Singer Gujarat Awards", "Top Performer Vadodara", "Playback Singer Recognition India", "Garba Singer Awards Gujarat"],
};

const AWARDS = [
    {
        year: "2025",
        org: "Vadodara Got Talent",
        title: "Best Singer",
        desc: "Awarded Best Singer for outstanding vocal performance and artistic expression in 2025.",
        image: "/assets/Gal/IMG_7083.JPG",
        icon: Crown,
        isFeatured: true
    },
    {
        year: "2024",
        org: "Parul University",
        title: "Singing Competition Judge",
        desc: "Honoring Excellence in Judging Singing Competitions, mentoring the next generation of talent.",
        image: "/assets/Gal/IMG_7092.JPG",
        icon: Award
    },
    {
        year: "2023",
        org: "Patidar Navratri Morbi",
        title: "Best Garba Performer",
        desc: "Recognized as the Best Garba Performer of the season for energetic and soulful performances.",
        image: "/assets/Gal/IMG_7071.JPG",
        icon: Trophy
    },
    {
        year: "2022",
        org: "Bajkhedaval Brahman Samaj",
        title: "Best Female Anchorage Icon",
        desc: "Celebrates excellence in hosting and acknowledges remarkable contributions to the community.",
        image: "/assets/Gal/IMG_7088.JPG",
        icon: Mic
    },
    {
        year: "2010",
        org: "Maa Krishna Ashram",
        title: "Devotional Singing Excellence",
        desc: "Recognizing excellence in devotional singing, celebrating the divine through music.",
        image: "/assets/Gal/IMG_7093.JPG",
        icon: Star
    },
];

export default function AwardsPage() {
    return (
        <main className="min-h-screen text-white pt-24 bg-black selection:bg-gold selection:text-black perspective-2000 overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative py-24 px-6 text-center overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-maroon)_0%,_black_60%)] -z-10 opacity-30 animate-pulse" />

                <div className="container mx-auto relative z-10">
                    <div className="inline-block p-1 px-3 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
                        The Trophy Room
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-gold via-yellow-100 to-amber-700 drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
                        Awards & <span className="italic">Recognition</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        "A legacy of excellence, carved in melody and gold."
                    </p>
                </div>
            </section>

            {/* 3D Awards Grid */}
            <section className="relative pb-32 px-6">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 xl:gap-16">
                        {AWARDS.map((award, index) => (
                            <div key={index} className={`${index % 2 !== 0 ? "lg:mt-24" : ""} ${award.isFeatured ? "md:col-span-2 lg:col-span-2 lg:mt-0 flex justify-center mb-12" : ""}`}>
                                <div className={award.isFeatured ? "w-full max-w-2xl" : "w-full"}>
                                    <ThreeDAwardCard
                                        title={award.title}
                                        year={award.year}
                                        org={award.org}
                                        desc={award.desc}
                                        image={award.image}
                                        icon={<award.icon className="text-gold w-8 h-8" />}
                                        isFeatured={award.isFeatured}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing Quote */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto relative p-12 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm">
                        <div className="absolute top-8 left-8 text-6xl text-gold/20 font-serif leading-none">"</div>
                        <p className="text-2xl md:text-3xl text-gray-300 font-serif italic leading-relaxed relative z-10">
                            Looking forward to creating more musical milestones and touching more hearts.
                        </p>
                        <div className="absolute bottom-8 right-8 text-6xl text-gold/20 font-serif leading-none">"</div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
