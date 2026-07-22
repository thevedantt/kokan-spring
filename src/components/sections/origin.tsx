"use client";

import * as React from "react";

import { originCopy } from "@/translations/origin";
import { useLanguage } from "@/lib/language-context";

export function Origin() {
  const { locale } = useLanguage();
  const copy = originCopy[locale];

  return (
    <section className="wrap" id="origin">
      <div className="split">
        <div className="media" data-rv="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/kokanspring/varad-parulekar-_Y84HXfunEM-unsplash.jpg"
            alt="Aerial view of a waterfall deep in the Sahyadri mountain range"
          />
          <span className="cap">Sahyadri · Western Ghats</span>
        </div>
        <div className="copy">
          <span className="eyebrow" data-rv="true">
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
          {copy.description.map((paragraph) => (
            <p key={paragraph} data-rv="true">
              {paragraph}
            </p>
          ))}
          <div className="meta" data-rv="true">
            {copy.stats.map((stat) => (
              <div key={stat.l}>
                <div className="k serif">{stat.k}</div>
                <div className="l">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
