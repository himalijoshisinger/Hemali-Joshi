import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Great_Vibes, Allura } from "next/font/google"; // Import Allura
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import ClientGlobalEffects from "@/components/ClientGlobalEffects";
import SecurityProvider from "@/components/SecurityProvider";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
  display: "swap",
});

// Configure Allura (Halimun alternative)
const allura = Allura({
  weight: "400",
  variable: "--font-allura",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Note: allow user scaling for accessibility (Google mobile-friendly requirement)
};

export const metadata: Metadata = {
  title: {
    default: "Himali Joshi | Singer | Performer | Musician",
    template: "%s | Himali Joshi"
  },
  metadataBase: new URL('https://himalijoshi.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/en-IN',
    },
  },
  description: "Official website of Himali Joshi, a top music artist and best singer in Vadodara, Gujarat. Renowned for soulful vocals, live performances, Bollywood covers, and vibrant Garba performances. Available for live shows, events, weddings, and international bookings from India.",
  keywords: [
    "Himali Joshi", "Best Singer in Vadodara", "Top Singer in Vadodara", "Top 5 Singer in Gujarat", "Professional Live Performer in Vadodara",
    "Event Singer in Gujarat", "Playback Singer in India", "Music Artist in India", "Garba Singer in Vadodara",
    "Bollywood Singer for Events", "Devotional Singer in Gujarat", "Wedding Singer in India", "International Booking Singer from India",
    "Live Show Singer", "Music Creator", "Musician", "Best Singer in India", "Top Female Singer India"
  ],
  authors: [{ name: "Himali Joshi" }],
  creator: "Himali Joshi",
  publisher: "Himali Joshi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Himali Joshi | Singer | Performer | Musician",
    description: "Official portal of Himali Joshi - Singer, Performer, and Music Creator. Experience the magic of soulful Indian music and book for international events.",
    url: "https://himalijoshi.com",
    siteName: "Himali Joshi Official",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 800,
        alt: "Himali Joshi Official Icon Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himali Joshi | Singer | Performer | Musician",
    description: "Soulful vocals and vibrant live performances by top music artist Himali Joshi.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${inter.variable} ${greatVibes.variable} ${allura.variable} antialiased font-sans bg-black text-white`}
      >
        <StructuredData />
        <ClientGlobalEffects />
        <SecurityProvider>
          <Navbar />
          {children}
        </SecurityProvider>
      </body>
    </html>
  );
}
