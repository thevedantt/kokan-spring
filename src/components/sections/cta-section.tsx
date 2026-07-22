"use client";

import * as React from "react";

import { ctaCopy } from "@/translations/cta";
import { useLanguage } from "@/lib/language-context";

export function CtaSection() {
  const { locale } = useLanguage();
  const copy = ctaCopy[locale];

  return (
    <section className="wrap cta-sec">
      <div className="cta-grid">
        <div className="cta-image cta-image--truck" data-rv="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/truck.png" alt="KOKAN SPRING delivery truck" />
          <div className="cta-image cta-image--box" data-rv="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/box.png" alt="KOKAN SPRING packaged case box" />
          </div>
        </div>
        <div className="cta-text-col">
          <div className="cta-copy">
            <span className="eyebrow c" data-rv="true">
              {copy.label}
            </span>
            <h2 className="serif" data-rv="true">
              {copy.heading.map((line, i) => (
                <React.Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </h2>
            <p data-rv="true">{copy.body}</p>
            <a href="#shop" className="cta-order-btn" data-rv="true">
              {copy.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
