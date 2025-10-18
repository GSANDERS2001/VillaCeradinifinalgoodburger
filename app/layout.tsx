import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";

export const metadata: Metadata = {
  title: "Villa Ceradini",
  description: "Private villa experience on the Sorrentine & Amalfi Coast",
  openGraph: {
    title: "Villa Ceradini",
    description: "Private villa experience on the Sorrentine & Amalfi Coast",
    images: ["/images/villa-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Ceradini",
    description: "Private villa experience on the Sorrentine & Amalfi Coast",
    images: ["/images/villa-hero.jpg"],
  },
};

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
export const viewport = {
  width: "device-width",
  initialScale: 1,
};
