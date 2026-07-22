"use client";

import { rangeCopy } from "@/translations/range";
import { useLanguage } from "@/lib/language-context";

export function Range() {
  const { locale } = useLanguage();
  const copy = rangeCopy[locale];

  return (
    <section className="wrap range" id="shop">
      <div className="head">
        <span className="eyebrow c" data-rv="true">
          {copy.label}
        </span>
        <h2 className="serif" data-rv="true">
          {copy.heading}
        </h2>
      </div>
      <div className="grades">
        {copy.products.map((p) => (
          <div className="grade" data-rv="true" key={p.image}>
            <div className="pic">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={`KOKAN SPRING ${p.badge} bottle`} />
            </div>
            <div className="body">
              <span className="g">{p.badge}</span>
              {p.title && <h3 className="serif">{p.title}</h3>}
              <p>{p.description}</p>
              <div className="row">
                <span className="price">{p.price}</span>
                <span className="mrp">{copy.mrpLabel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
