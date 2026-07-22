"use client";

import * as React from "react";
import { Mail, MapPin } from "lucide-react";

import { footerCopy } from "@/translations/footer";
import { useLanguage } from "@/lib/language-context";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons/social-icons";

const MAPS_VIEW_URL =
  "https://www.google.com/maps/place/Amey+Beverages+india+Corporation/@16.5031634,73.6954315,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc03108dff16d99:0xf05566a3b494da05!8m2!3d16.5031634!4d73.6954315!16s%2Fg%2F11vcwhsx11";

export function SiteFooter() {
  const { locale } = useLanguage();
  const copy = footerCopy[locale];

  return (
    <footer>
      <div className="ffoot-grid">
        <div className="fbrand">
          <div className="mk serif">
            KOKAN <b>SPRING</b>
          </div>
          <div className="fbrand-mr">सह्याद्रीतील नैसर्गिक झऱ्याचे पाणी</div>
          <div className="fbrand-en">Natural Spring Water</div>
          <p className="fbrand-desc">
            {copy.brandDescription.map((line, i) => (
              <React.Fragment key={line}>
                {i > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="fcol">
          <h4>Products</h4>
          <a href="#shop">200 ml</a>
          <a href="#shop">500 ml</a>
          <a href="#shop">1 L</a>
          <a href="#shop">2 L</a>
          <a href="#shop">5 L</a>
        </div>

        <div className="fcol">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#origin">Our Source</a>
          <a href="#craft">Quality Process</a>
          <a href="#">Sustainability</a>
          <a href="#">Gallery</a>
        </div>

        <div className="fcol">
          <h4>Support</h4>
          <a href="#">Contact Us</a>
          <a href="#">Become a Distributor</a>
          <a href="#">Bulk Orders</a>
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="fcol">
          <h4>Connect</h4>
          <div className="fsocial-row">
            <a
              href="https://wa.me/918788003569"
              className="fsocial-btn"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="https://instagram.com/kokanspring"
              className="fsocial-btn"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a href="mailto:hello@kokanspring.com" className="fsocial-btn" aria-label="Email">
              <Mail size={16} strokeWidth={1.7} />
            </a>
            <a
              href={MAPS_VIEW_URL}
              className="fsocial-btn"
              aria-label="Google Maps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={16} strokeWidth={1.7} />
            </a>
          </div>
        </div>
      </div>

      <div className="fdivider" />

      <div className="ftagline serif">
        {copy.tagline.map((line, i) => (
          <React.Fragment key={line}>
            {i > 0 && <br />}
            {line}
          </React.Fragment>
        ))}
      </div>

      <div className="fbot">
        <div className="fbot-left">
          <span>Amey Beverages India Corporation</span>
          <span>Sahyadri, Maharashtra, India</span>
        </div>
        <div className="fbot-right">
          <span>© 2026 KOKAN SPRING. All Rights Reserved.</span>
          <span className="fbot-links">{copy.bottomLinks}</span>
        </div>
      </div>
    </footer>
  );
}
