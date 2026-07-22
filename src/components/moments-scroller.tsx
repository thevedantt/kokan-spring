"use client";

import * as React from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";
import { momentsCopy } from "@/translations/moments";
import { useLanguage } from "@/lib/language-context";

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}

/**
 * "04 · Everyday Moments" — a static editorial text column beside a
 * horizontally-scrubbing card track. Reuses the exact pin/scrub mechanism
 * (and 1.18x scroll-distance multiplier) from the "03 · The ritual" section,
 * scoped to a section-local Marathi/English toggle (no site-wide i18n exists
 * to plug into). Self-contained — own effect, own ScrollTrigger, own
 * cleanup — independent of the site-wide SiteAnimations controller.
 */
export function MomentsScroller() {
  const { locale } = useLanguage();
  const copy = momentsCopy[locale];

  const gridRef = React.useRef<HTMLDivElement>(null);
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    registerGsap();
    const grid = gridRef.current;
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!grid || !wrap || !track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 820px)": () => {
          const dist = () => Math.max(1, track.scrollWidth - wrap.clientWidth);
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: grid,
              start: "top top",
              end: () => "+=" + dist() * 1.18,
              scrub: true,
              pin: grid,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
          tl.to(track, { x: () => -dist(), ease: "none", duration: 1 });
          tl.to(track, { x: () => -dist(), ease: "none", duration: 0.18 });
        },
      });
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <div className="moments-grid" ref={gridRef}>
      <div className="moments-copy">
        <span className="eyebrow">{copy.label}</span>
        <h2 className="serif">
          <Lines lines={copy.heading} />
        </h2>
        <p className="moments-intro">
          <Lines lines={copy.intro} />
        </p>
        <p className="moments-body">
          <Lines lines={copy.body} />
        </p>
        <p className="moments-italic">{copy.italic}</p>
      </div>

      <div className="moments-track-wrap" ref={wrapRef}>
        <div className="moments-track" ref={trackRef}>
          {copy.cards.map((card) => (
            <div className="moments-card" key={card.image}>
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 819px) 74vw, 30vw"
                className="moments-card-image"
                loading="lazy"
              />
              <div className="moments-card-lab">
                <h3 className="serif">{card.title}</h3>
                <p>
                  <Lines lines={card.desc} />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
