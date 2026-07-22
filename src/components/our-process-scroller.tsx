"use client";

import * as React from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";

export interface ProcessScene {
  id: string;
  image: string;
  heading: string;
  headingMr: string;
  desc: string;
  descMr: string;
}

/**
 * A pinned scroll section that simply crossfades from one photo to the next
 * as the user scrolls — no video, no baked-in motion, just a clean
 * scroll-driven image swap. Self-contained (own effect, own ScrollTrigger,
 * own cleanup) — independent of the site-wide SiteAnimations controller.
 */
export function OurProcessScroller({ scenes }: { scenes: ProcessScene[] }) {
  const pinRef = React.useRef<HTMLDivElement>(null);
  const layerRefs = React.useRef<Array<HTMLDivElement | null>>([]);

  React.useEffect(() => {
    registerGsap();
    const pin = pinRef.current;
    if (!pin) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const layers = layerRefs.current.filter((el): el is HTMLDivElement => Boolean(el));
    if (layers.length === 0) return;

    if (reduced) {
      gsap.set(layers[0], { autoAlpha: 1 });
      return;
    }

    gsap.set(layers[0], { autoAlpha: 1 });
    gsap.set(layers.slice(1), { autoAlpha: 0 });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => "+=" + window.innerHeight * layers.length,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 0; i < layers.length - 1; i++) {
        tl.to(layers[i], { autoAlpha: 0, duration: 0.6, ease: "power1.inOut" }, i + 0.7).to(
          layers[i + 1],
          { autoAlpha: 1, duration: 0.6, ease: "power1.inOut" },
          i + 0.7
        );
      }
    }, pin);

    // This section adds real scroll-height dynamically. If web fonts are
    // still swapping in (reflowing text height) or images are still
    // decoding when other sections' ScrollTriggers first measure the page,
    // every pin lower on the page (e.g. the ritual section) can end up
    // pinning/unpinning at the wrong scroll offset. Refresh once everything
    // has genuinely settled so all ScrollTriggers re-measure against final
    // layout — not just this one.
    const refresh = () => ScrollTrigger.refresh();
    document.fonts.ready.then(refresh).catch(() => {});
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [scenes.length]);

  return (
    <div className="process-track" ref={pinRef}>
      {scenes.map((scene, i) => (
        <div
          className="process-scene"
          key={scene.id}
          ref={(el) => {
            layerRefs.current[i] = el;
          }}
        >
          <Image
            src={scene.image}
            alt={scene.heading}
            fill
            sizes="100vw"
            className="process-image"
            priority={i === 0}
          />
          <div className="process-scrim" />
          <div className="process-copy">
            <h3 className="serif">{scene.heading}</h3>
            <span className="mr process-heading-mr">{scene.headingMr}</span>
            <p>{scene.desc}</p>
            <span className="mr process-desc-mr">{scene.descMr}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
