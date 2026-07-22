import { Noto_Sans_Devanagari } from "next/font/google";

import { MomentsScroller } from "@/components/moments-scroller";

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  variable: "--font-mr",
});

export function Moments() {
  return (
    <section className={`moments ${devanagari.variable}`} id="moments">
      <MomentsScroller />
    </section>
  );
}
