import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Hanken_Grotesk, Shippori_Mincho, Tiro_Devanagari_Marathi } from "next/font/google";

import "./globals.css";

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jp = Shippori_Mincho({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const marathi = Tiro_Devanagari_Marathi({
  variable: "--font-mr-tiro",
  subsets: ["devanagari"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const OG_IMAGE = {
  url: "/herobg.jpeg",
  width: 2752,
  height: 1536,
  alt: "KOKAN SPRING — Natural Spring Water from the Sahyadri",
};

export const metadata: Metadata = {
  title: "KOKAN SPRING | Natural Spring Water from the Sahyadri",
  description:
    "Pure natural spring water sourced from the Sahyadri ranges. Clean, refreshing hydration for homes, businesses, restaurants and every journey.",
  keywords: [
    "KOKAN SPRING",
    "natural spring water",
    "Sahyadri",
    "Maharashtra",
    "packaged drinking water",
    "mineral water",
  ],
  openGraph: {
    title: "KOKAN SPRING | Natural Spring Water",
    description: "Experience premium natural spring water from the Sahyadri. Pure. Refreshing. Natural.",
    siteName: "KOKAN SPRING",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "KOKAN SPRING | Natural Spring Water",
    description: "Premium natural spring water from the Sahyadri ranges.",
    images: [OG_IMAGE.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#293681",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${jp.variable} ${marathi.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();",
          }}
        />
        {children}
      </body>
    </html>
  );
}
