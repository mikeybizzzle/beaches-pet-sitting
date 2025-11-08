import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beaches Pet Sitting | Professional In-Home Pet Care",
  description: "Professional in-home pet sitting from a Veterinary Assistant with 11+ years experience. Overnight care for all small animals including reptiles. Free interview. Call today!",
  keywords: [
    "pet sitting beaches",
    "in-home pet sitting",
    "overnight pet sitting",
    "professional pet sitter",
    "veterinary assistant pet sitting",
    "reptile pet sitting",
    "dog sitting",
    "cat sitting",
    "small animal care",
    "bondable pet sitter"
  ],
  authors: [{ name: "Beaches Pet Sitting" }],
  openGraph: {
    title: "Beaches Pet Sitting | Professional In-Home Pet Care",
    description: "Professional in-home pet sitting from a Veterinary Assistant with 11+ years experience. Free consultation available.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "add-your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
