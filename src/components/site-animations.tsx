"use client";

import * as React from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";

interface Particle {
  x: number;
  y: number;
  r: number;
  v: number;
  a: number;
  av: number;
  drift: number;
  ph: number;
}

/**
 * A near-literal port of desging.txt's page-wide vanilla script: image-load
 * loader, nav dock-on-scroll, the hero steam canvas, Lenis+GSAP scroll sync,
 * the hero entrance timeline, generic [data-rv]/[data-par]/[data-count]
 * scroll effects, and the pinned horizontal "ritual" scrub. Operates on the
 * DOM by id/class/data-attribute, same as the original, instead of refs.
 */
export function SiteAnimations() {
  React.useEffect(() => {
    registerGsap();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---------------- loader (waits for the hero + key images) ----------------
    const loader = document.getElementById("loader");
    const lbar = document.getElementById("lbar");
    const lsub = document.getElementById("lsub");
    const imgs = Array.from(document.images);
    let done = 0;
    const total = Math.max(1, imgs.length);
    let finished = false;
    let finishTimeoutId: number | undefined;

    function bump() {
      done++;
      const p = Math.round((done / total) * 100);
      if (lbar) lbar.style.width = `${p}%`;
      if (lsub) lsub.textContent = `steeping · ${p}%`;
      if (done >= total) finish();
    }

    function finish() {
      if (finished) return;
      finished = true;
      finishTimeoutId = window.setTimeout(() => {
        loader?.classList.add("done");
        start();
      }, 350);
    }

    const imgListeners: Array<{ img: HTMLImageElement; onLoad: () => void; onError: () => void }> =
      [];
    imgs.forEach((img) => {
      if (img.complete) {
        bump();
      } else {
        const onLoad = () => bump();
        const onError = () => bump();
        img.addEventListener("load", onLoad);
        img.addEventListener("error", onError);
        imgListeners.push({ img, onLoad, onError });
      }
    });
    const safetyTimeoutId = window.setTimeout(finish, 6000);

    // ---------------- nav dock ----------------
    const nav = document.getElementById("nav");
    const onScroll = () => {
      nav?.classList.toggle("docked", (window.scrollY || 0) > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // ---------------- hero steam canvas (light, pre-rendered sprites) ----------------
    let steamCleanup: (() => void) | undefined;
    const canvas = document.getElementById("steam") as HTMLCanvasElement | null;
    if (canvas) {
      const ctx2d = canvas.getContext("2d");
      let W = 0;
      let H = 0;
      const DPR = 1;
      let parts: Particle[] = [];
      let running = false;
      let raf = 0;
      let lastT = 0;

      function sprite() {
        const s = 128;
        const c = document.createElement("canvas");
        c.width = c.height = s;
        const g = c.getContext("2d");
        if (g) {
          const gr = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
          gr.addColorStop(0, "rgba(244,240,230,.5)");
          gr.addColorStop(1, "rgba(244,240,230,0)");
          g.fillStyle = gr;
          g.fillRect(0, 0, s, s);
        }
        return c;
      }
      function size() {
        const r = canvas!.getBoundingClientRect();
        W = canvas!.width = Math.max(2, r.width * DPR);
        H = canvas!.height = Math.max(2, r.height * DPR);
      }
      function mk(): Particle {
        return {
          x: Math.random() * W,
          y: H * (0.5 + Math.random() * 0.6),
          r: (30 + Math.random() * 60) * DPR,
          v: (0.15 + Math.random() * 0.35) * DPR,
          a: 0,
          av: 0.002 + Math.random() * 0.004,
          drift: (Math.random() - 0.5) * 0.3 * DPR,
          ph: Math.random() * 6.28,
        };
      }
      function seed() {
        parts = [];
        const n = Math.min(14, Math.round(W / 130));
        for (let i = 0; i < n; i++) parts.push(mk());
      }
      const spr = sprite();
      function frame(t: number) {
        raf = requestAnimationFrame(frame);
        if (!running || !ctx2d) return;
        if (t - lastT < 33) return;
        lastT = t;
        ctx2d.clearRect(0, 0, W, H);
        ctx2d.globalCompositeOperation = "screen";
        for (const p of parts) {
          p.y -= p.v;
          p.x += p.drift + Math.sin(t * 0.0004 + p.ph) * 0.25 * DPR;
          p.a += p.av;
          const life = Math.max(0, Math.min(1, Math.sin(p.a)));
          if (p.y < H * 0.18 || p.a > 3.14) {
            Object.assign(p, mk());
            continue;
          }
          const s = p.r * (1 + p.a * 0.35);
          ctx2d.globalAlpha = life * 0.5;
          ctx2d.drawImage(spr, p.x - s / 2, p.y - s / 2, s, s);
        }
        ctx2d.globalAlpha = 1;
      }

      size();
      seed();
      const onResize = () => {
        size();
        seed();
      };
      window.addEventListener("resize", onResize);

      let io: IntersectionObserver | undefined;
      try {
        io = new IntersectionObserver(
          (entries) => {
            running = entries[0].isIntersecting && !reduced;
          },
          { threshold: 0.02 }
        );
        io.observe(canvas);
      } catch {
        running = !reduced;
      }
      if (!reduced) {
        running = true;
        raf = requestAnimationFrame(frame);
      }

      steamCleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("resize", onResize);
        io?.disconnect();
      };
    }

    // ---------------- everything below needs GSAP ----------------
    let lenis: Lenis | null = null;
    let tickerFn: ((time: number) => void) | undefined;
    let gsapCtx: gsap.Context | undefined;
    let refreshTimeoutId: number | undefined;
    const anchorCleanups: Array<() => void> = [];

    function start() {
      gsap.registerPlugin(ScrollTrigger);

      lenis = !reduced ? new Lenis({ lerp: 0.07, smoothWheel: true, wheelMultiplier: 1 }) : null;

      if (lenis) {
        const activeLenis = lenis;
        activeLenis.on("scroll", ScrollTrigger.update);
        tickerFn = (time: number) => activeLenis.raf(time * 1000);
        gsap.ticker.add(tickerFn);
        gsap.ticker.lagSmoothing(0);
      }

      // anchor links via lenis
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        const href = a.getAttribute("href");
        if (!href || href.length < 2) return;
        const onClick = (e: Event) => {
          const target = document.querySelector(href);
          if (!target) return;
          e.preventDefault();
          if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -10, duration: 1.3 });
          else (target as HTMLElement).scrollIntoView({ behavior: "smooth" });
        };
        a.addEventListener("click", onClick);
        anchorCleanups.push(() => a.removeEventListener("click", onClick));
      });

      gsapCtx = gsap.context(() => {
        if (reduced) {
          // reduced-motion: gentle opacity-only fades, final numerals, no scroll-hijack/parallax
          gsap.utils.toArray<HTMLElement>("[data-rv]").forEach((el) =>
            gsap.fromTo(
              el,
              { opacity: 0 },
              {
                opacity: 1,
                duration: 0.7,
                ease: "power1.out",
                scrollTrigger: { trigger: el, start: "top 94%" },
              }
            )
          );
          document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
            const t = Number(el.getAttribute("data-count"));
            const em = el.querySelectorAll("em");
            if (em.length === 2) el.innerHTML = em[0].outerHTML + t + em[1].outerHTML;
            else if (em.length === 1) el.innerHTML = t + em[0].outerHTML;
            else el.textContent = String(t);
          });
          return;
        }

        // hero parallax
        gsap.to(".hero .bg img", {
          yPercent: 14,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
        });

        // misty page background parallax
        gsap.to(".page-bg .pi", {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });

        // hero entrance (plays as the loader clears)
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
        heroTl
          .from(".hero h1 .hl", { y: 54, opacity: 0, duration: 1.1, stagger: 0.13 })
          .from(".hero .sub", { y: 24, opacity: 0, duration: 0.9 }, "-=0.65")
          .from(".hero .cta > *", { y: 18, opacity: 0, duration: 0.75, stagger: 0.1 }, "-=0.6")
          .from(".scrolln", { opacity: 0, y: 10, duration: 0.7 }, "-=0.45")
          .from(".hero .vjp", { opacity: 0, y: 70, duration: 1.6, ease: "power2.out" }, "-=1.55");

        // generic reveals (more present)
        gsap.utils.toArray<HTMLElement>("[data-rv]").forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: 52 },
            {
              opacity: 1,
              y: 0,
              duration: 1.25,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%" },
            }
          );
        });

        // image parallax inside media frames
        gsap.utils.toArray<HTMLElement>("[data-par]").forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: {
                trigger: img.closest("section") || img,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });

        // numbers count-up
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const target = Number(el.getAttribute("data-count"));
          const o = { v: 0 };
          ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: () => {
              gsap.to(o, {
                v: target,
                duration: 1.6,
                ease: "power2.out",
                onUpdate: () => {
                  const txt = Math.round(o.v);
                  const em = el.querySelectorAll("em");
                  if (em.length === 2) el.innerHTML = em[0].outerHTML + txt + em[1].outerHTML;
                  else if (em.length === 1) el.innerHTML = txt + em[0].outerHTML;
                  else el.textContent = String(txt);
                },
              });
            },
          });
        });

        // ritual pinned horizontal scrub
        const track = document.getElementById("track");
        const wrap = document.getElementById("trackWrap");
        const sect = document.querySelector(".ritual");
        if (track && wrap && sect) {
          const dist = () => Math.max(1, track.scrollWidth - wrap.clientWidth);
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: sect,
              start: "top top",
              end: () => "+=" + dist() * 1.18,
              scrub: true,
              pin: sect,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
          tl.to(track, { x: () => -dist(), ease: "none", duration: 1 });
          tl.to(track, { x: () => -dist(), ease: "none", duration: 0.18 });
        }
      });

      refreshTimeoutId = window.setTimeout(() => ScrollTrigger.refresh(), 300);
    }

    return () => {
      window.clearTimeout(finishTimeoutId);
      window.clearTimeout(safetyTimeoutId);
      window.clearTimeout(refreshTimeoutId);
      imgListeners.forEach(({ img, onLoad, onError }) => {
        img.removeEventListener("load", onLoad);
        img.removeEventListener("error", onError);
      });
      window.removeEventListener("scroll", onScroll);
      steamCleanup?.();
      anchorCleanups.forEach((fn) => fn());
      if (tickerFn) gsap.ticker.remove(tickerFn);
      lenis?.destroy();
      gsapCtx?.revert();
    };
  }, []);

  return null;
}
