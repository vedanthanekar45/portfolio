import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// import { Provider } from "@/components/ui/provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vedant Thanekar | Software Developer",
  description:
    "Software Developer with expertise Cloud Infrastructure, Backend development using Python and Golang, and Data Engineering.",
  keywords: [
    "Vedant Thanekar",
    "Software Developer",
    "Backend Engineer",
    "Portfolio",
  ],

  verification: {
    google: "DyHlD191vpcQPHXAMi_5Nt_aSfi-SZPy9oZBKD85A9E",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vedant Thanekar",
    url: "https://vedanthanekar.vercel.app",
    image: "https://your-domain.com/photo.jpg",
    jobTitle: "Software Developer",
    worksFor: {
      "@type": "IgnAIte",
      name: "Software Engineer Intern", // Update as needed
    },
    alumniOf: {
      "@type": "Savitribai Phule Pune University",
      name: "K. K. Wagh Institute of Engineering Education of Research",
    },
    sameAs: [
      "https://linkedin.com/in/vedant-thanekar",
      "https://github.com/vedanthanekar45",
      "https://x.com/ThanekarVedant",
      "https://medium.com/@vedanthanekar45",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
