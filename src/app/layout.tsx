import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "ASAGIRI 朝霧 · Ceremonial matcha, stone-ground",
  description:
    "ASAGIRI · first-flush, shade-grown, stone-ground ceremonial matcha. We don't sell caffeine. We sell ninety seconds of quiet.",
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
