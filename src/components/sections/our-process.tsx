import { Noto_Sans_Devanagari } from "next/font/google";

import { OurProcessScroller, type ProcessScene } from "@/components/our-process-scroller";

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600"],
  variable: "--font-mr",
});

const SCENES: ProcessScene[] = [
  {
    id: "nature",
    image: "/kokanspring/infra/Image 0 - Sahyadri.png",
    heading: "Inspired by Nature",
    headingMr: "निसर्गातून प्रेरित",
    desc: "Every journey begins in the untouched valleys of the Sahyadri mountains.",
    descMr: "प्रत्येक प्रवासाची सुरुवात सह्याद्रीच्या निर्मळ कुशीतून होते.",
  },
  {
    id: "entrance",
    image: "/kokanspring/infra/Image 3 – Production Area Entrance.png",
    heading: "Where Nature Meets Precision",
    headingMr: "निसर्ग आणि तंत्रज्ञानाचा संगम",
    desc: "Inspired by nature, protected by modern technology.",
    descMr: "निसर्गातून प्रेरणा, आधुनिक तंत्रज्ञानातून संरक्षण.",
  },
  {
    id: "purify",
    image: "/kokanspring/infra/Image 5 – Production Line Overview.png",
    heading: "Advanced Purification",
    headingMr: "अत्याधुनिक शुद्धीकरण",
    desc: "Every drop passes through a carefully controlled purification process.",
    descMr: "प्रत्येक थेंब अत्याधुनिक शुद्धीकरण प्रक्रियेतून प्रवास करतो.",
  },
  {
    id: "bottling",
    image: "/kokanspring/infra/Image 1 – Main Bottling & Packaging Hall.png",
    heading: "Precision Bottling",
    headingMr: "अचूक बाटलीकरण",
    desc: "Automated systems ensure consistency, hygiene and quality in every bottle.",
    descMr: "स्वयंचलित प्रणाली प्रत्येक बाटलीत गुणवत्ता आणि स्वच्छतेची खात्री देते.",
  },
  {
    id: "quality",
    image: "/kokanspring/infra/Image 4 – Quality Control Laboratory.png",
    heading: "Quality Without Compromise",
    headingMr: "गुणवत्तेशी कोणतीही तडजोड नाही",
    desc: "Every batch is tested to meet strict quality and safety standards.",
    descMr: "प्रत्येक बॅचची कठोर गुणवत्ता आणि सुरक्षितता तपासणी केली जाते.",
  },
  {
    id: "packaging",
    image: "/kokanspring/infra/Image 2 – Packaging Section.png",
    heading: "Ready for Every Journey",
    headingMr: "प्रत्येक प्रवासासाठी सज्ज",
    desc: "Safely packed and prepared to deliver freshness to every customer.",
    descMr: "निर्मळता आणि विश्वास प्रत्येक ग्राहकापर्यंत सुरक्षितपणे पोहोचवण्यासाठी.",
  },
];

export function OurProcess() {
  return (
    <section className={`process ${devanagari.variable}`} id="process">
      <div className="head">
        <span className="eyebrow c" data-rv="true">
          Our Process
          <br />
          <span className="mr process-eyebrow-mr">आमची प्रक्रिया</span>
        </span>
        <h2 className="serif" data-rv="true">
          From the pristine Sahyadri springs
          <br />
          to every bottle you trust.
          <span className="mr process-sub-mr">
            सह्याद्रीच्या नैसर्गिक झऱ्यांपासून विश्वासाच्या प्रत्येक थेंबापर्यंत.
          </span>
        </h2>
      </div>
      <OurProcessScroller scenes={SCENES} />
    </section>
  );
}
