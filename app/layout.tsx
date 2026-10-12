import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "St. Thomas Aquinas Foundation",
    template: "%s | St. Thomas Aquinas Foundation",
  },

  description:
    "St. Thomas Aquinas Foundation is a Catholic foundation committed to forming minds, building character and serving God through faith, academic excellence, discipline and hard work.",

  keywords: [
    "St. Thomas Aquinas Foundation",
    "STAF Tanzania",
    "Wari Secondary School",
    "Wari Secondary School Tanzania",
    "A-Level school Tanzania",
    "Advanced Level education Tanzania",
    "Catholic school Tanzania",
    "Kilimanjaro secondary school",
    "Form Five Tanzania",
    "Form Six Tanzania",
  ],

  authors: [
    {
      name: "St. Thomas Aquinas Foundation",
    },
  ],

  creator: "St. Thomas Aquinas Foundation",
  publisher: "St. Thomas Aquinas Foundation",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "St. Thomas Aquinas Foundation",
    description:
      "Forming Minds. Building Character. Serving God.",
    type: "website",
    locale: "en_TZ",
    siteName: "St. Thomas Aquinas Foundation",
    images: [
      {
        url: "/images/logo/thomas-logo.jpeg",
        width: 1200,
        height: 630,
        alt: "St. Thomas Aquinas Foundation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "St. Thomas Aquinas Foundation",
    description:
      "Forming Minds. Building Character. Serving God.",
    images: ["/images/logo/thomas-logo.jpeg"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
