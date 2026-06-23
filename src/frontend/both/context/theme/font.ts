import { Geist, Geist_Mono, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

// ── 1. Body — clean sans-serif for paragraphs, descriptions, inputs
export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

// ── 2. Heading — monospaced for all h1–h6 (sharp, editorial feel)
export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// ── 3. Display / Accent — serif for hero text, pull-quotes, brand moments
export const cormorantGaramond = Cormorant_Garamond({
    variable: "--font-cormorant-garamond",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

// ── 4. UI — humanist sans for nav, labels, buttons, badges
export const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});




export const fonts = {
    regular: "Inter-Regular",
    medium: "Inter-Medium",
    semiBold: "Inter-SemiBold",
    bold: "Inter-Bold",

    heading: "Poppins-Bold",
    subHeading: "Poppins-SemiBold",

    mono: "JetBrains Mono",
};