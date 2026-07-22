"use client";

import * as React from "react";
import { Phone, PhoneCall, Mail, MapPin, ExternalLink } from "lucide-react";

import { ctaCopy } from "@/translations/cta";
import { useLanguage } from "@/lib/language-context";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons/social-icons";

const MAPS_VIEW_URL =
  "https://www.google.com/maps/place/Amey+Beverages+india+Corporation/@16.5031634,73.6954315,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc03108dff16d99:0xf05566a3b494da05!8m2!3d16.5031634!4d73.6954315!16s%2Fg%2F11vcwhsx11";
const MAPS_EMBED_URL = "https://www.google.com/maps?q=16.5031634,73.6954315&hl=en&z=17&output=embed";

export function CtaSection() {
  const { locale } = useLanguage();
  const copy = ctaCopy[locale];

  return (
    <section className="wrap cta-sec" id="contact">
      <div className="cta-grid">
        <div className="cta-image cta-image--truck" data-rv="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/truck.png" alt="KOKAN SPRING delivery truck" />
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

            <div className="cta-contact" data-rv="true">
              <a href="tel:+918788003569" className="cta-phone">
                <Phone size={15} strokeWidth={1.7} />
                +91 878 800 3569
              </a>
              <a href="tel:+918692042333" className="cta-phone">
                <PhoneCall size={15} strokeWidth={1.7} />
                +91 86920 42333
              </a>
            </div>

            <div className="cta-quick-connect" data-rv="true">
              <span className="cta-quick-connect-label">{copy.quickConnect}</span>
              <div className="cta-social-row">
                <a
                  href="https://wa.me/918788003569"
                  className="cta-social-btn"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                </a>
                <a
                  href="https://instagram.com/kokanspring"
                  className="cta-social-btn"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
                <a href="mailto:hello@kokanspring.com" className="cta-social-btn" aria-label="Email">
                  <Mail size={17} strokeWidth={1.7} />
                </a>
              </div>
            </div>

            <div className="cta-location-card" data-rv="true">
              <div className="cta-location-head">
                <MapPin size={15} strokeWidth={1.7} />
                <div>
                  <span className="cta-location-label">{copy.locationLabel}</span>
                  <span className="cta-location-name">Amey Beverages India Corporation</span>
                </div>
              </div>
              <div className="cta-map-frame">
                <iframe
                  src={MAPS_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Amey Beverages India Corporation location"
                />
              </div>
              <a
                href={MAPS_VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-map-link"
              >
                {copy.viewOnMaps}
                <ExternalLink size={12} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
