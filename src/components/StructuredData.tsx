import Script from "next/script";

export default function StructuredData() {
    const personData = {
        "@context": "https://schema.org",
        "@type": "MusicGroup",
        "name": "Himali Joshi",
        "alternateName": ["Himali Joshi Singer", "Best Playback Singer in Vadodara", "Top Garba Singer in Gujarat"],
        "description": "Himali Joshi is the best playback singer in Vadodara and a top performer in Gujarat. Known for Bollywood playback, traditional Garba, and Sufi music. Professional voice artist and live performer for weddings and corporate events across India and globally.",
        "url": "https://himalijoshi.com",
        "genre": ["Bollywood", "Indian Classical", "Sufi", "Traditional", "Garba", "Gujarati Folk"],
        "image": "https://himalijoshi.com/icon.png",
        "sameAs": [
            "https://www.instagram.com/himalijoshiofficial",
            "https://www.facebook.com/himalijoshiofficial",
            "https://www.youtube.com/@himalijoshiofficial",
        ],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Vadodara",
            "addressRegion": "Gujarat",
            "addressCountry": "India"
        },
        "jobTitle": ["Playback Singer", "Garba Singer", "Voice Artist", "Live Performer"],
        "knowsAbout": ["Classical Music", "Vocal Training", "Performance Arts", "Indian Music", "Garba Events", "Bollywood Soundtrack", "Studio Recording"]
    };

    return (
        <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
        />
    );
}
