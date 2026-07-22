"use client";

import * as React from "react";

import { craftCopy } from "@/translations/craft";
import { useLanguage } from "@/lib/language-context";

export function Craft() {
  const { locale } = useLanguage();
  const copy = craftCopy[locale];

  return (
    <section className="wrap craft" id="craft">
      <div className="split rev">
        <div className="media" data-rv="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/craft.jpeg"
            alt="KOKAN SPRING bottles moving through the automated bottling and packaging line"
          />
          <span className="cap">Bottling line · Kokan Spring</span>
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
          <div className="microsteps" data-rv="true">
            {copy.stats.map((stat) => (
              <div key={stat.n}>
                <div className="n jp">{stat.n}</div>
                <div className="t">{stat.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
