"use client";

import * as React from "react";

import { heroCopy } from "@/translations/hero";
import { useLanguage } from "@/lib/language-context";

export function HeroSection() {
  const { locale } = useLanguage();
  const copy = heroCopy[locale];

  return (
    <header className="hero" id="top">
      <div className="bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/herobg.jpeg" alt="" />
      </div>
      <canvas id="steam" />
      <div className="vjp">
        {copy.signatureLine1}
        <span className="sig-sub">{copy.signatureLine2}</span>
      </div>
      <div className="inner">
        <h1 className="serif">
          <span className="hl">{copy.headingLine1}</span>
          <span className="hl">
            <em>{copy.headingEm}</em>
          </span>
        </h1>
        <p className="sub">
          {copy.description.map((line, i) => (
            <React.Fragment key={line}>
              {i > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </p>
        <div className="cta">
          <a href="#shop" className="btn solid">
            Begin your ritual
          </a>
          <a href="#origin" className="btn ghost">
            Our origin
          </a>
        </div>
      </div>
      <div className="scrolln">
        <span className="ln" /> {copy.scroll}
      </div>
    </header>
  );
}
