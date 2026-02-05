import type { Metadata } from "next";
import { Playfair_Display, Inter, Great_Vibes, Allura } from "next/font/google"; // Import Allura
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import ClientGlobalEffects from "@/components/ClientGlobalEffects";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

// Configure Allura (Halimun alternative)
const allura = Allura({
  weight: "400",
  variable: "--font-allura",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Himali Joshi | Best Singer in India & Gujarat",
    template: "%s | Himali Joshi"
  },
  description: "Official website of Himali Joshi, one of the best singers in India and Gujarat. Renowned for soulful vocals, live performances, Bollywood covers, and vibrant Garba performances.",
  keywords: [
    "Himali Joshi", "Best Singer in India", "Best Singer in Gujarat", "Best Singer in Vadodara",
    "Top Female Singer India", "Garba Singer Gujarat", "Bollywood Singer", "Live Performer Dubai",
    "Professional Vocalist", "Navratri Singer", "Yash Raj Films Singer", "Soulful Artist India",
    "Best Voice India", "Top Artist Gujarat", "Celebrity Performer", "Voice Artist Vadodara",
    "Playback Singer Bollywood", "Event Singer India", "Best Female Voice"
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
    title: "Himali Joshi | Best Singer in India & Gujarat",
    description: "Official portal of Himali Joshi - Singer, Performer, and Composer. Experience the magic of soulful Indian music.",
    url: "https://himalijoshi.com",
    siteName: "Himali Joshi Official",
    images: [
      {
        url: "/assets/logo-gold.png",
        width: 800,
        height: 600,
        alt: "Himali Joshi Official Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himali Joshi | Best Singer in India & Gujarat",
    description: "Soulful vocals and vibrant live performances by Himali Joshi.",
    images: ["/assets/logo-gold.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${inter.variable} ${greatVibes.variable} ${allura.variable} antialiased font-sans bg-black text-white`}
      >
        <StructuredData />
        <ClientGlobalEffects />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
