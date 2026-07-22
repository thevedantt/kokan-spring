import { PageBg } from "@/components/page-bg";
import { SiteAnimations } from "@/components/site-animations";
import { LanguageProvider } from "@/lib/language-context";
import { Loader } from "@/components/sections/loader";
import { Nav } from "@/components/sections/nav";
import { HeroSection } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { OurProcess } from "@/components/sections/our-process";
import { Moments } from "@/components/sections/moments";
import { Origin } from "@/components/sections/origin";
import { Craft } from "@/components/sections/craft";
import { Range } from "@/components/sections/range";
import { Numbers } from "@/components/sections/numbers";
import { Interlude } from "@/components/sections/interlude";
import { CtaSection } from "@/components/sections/cta-section";
import { SiteFooter } from "@/components/sections/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <PageBg />
      <Loader />
      <Nav />
      <HeroSection />
      <Manifesto />
      <OurProcess />
      <Moments />
      <Origin />
      <Craft />
      <Range />
      <Numbers />
      <Interlude />
      <CtaSection />
      <SiteFooter />
      <SiteAnimations />
    </LanguageProvider>
  );
}
