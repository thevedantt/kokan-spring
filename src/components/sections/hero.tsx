export function HeroSection() {
  return (
    <header className="hero" id="top">
      <div className="bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/herobg.jpeg" alt="" />
      </div>
      <canvas id="steam" />
      <div className="vjp">朝霧 · 一服</div>
      <div className="inner">
        <h1 className="serif">
          <span className="hl">Stone-ground</span>
          <span className="hl">
            <em>stillness.</em>
          </span>
        </h1>
        <p className="sub">
          First-flush, shade-grown, stone-ground ceremonial matcha. We don&apos;t sell caffeine.
          We sell ninety seconds of quiet.
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
        <span className="ln" /> Scroll to steep
      </div>
    </header>
  );
}
