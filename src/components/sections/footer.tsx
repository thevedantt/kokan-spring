export function SiteFooter() {
  return (
    <footer>
      <div className="frow">
        <div className="fbrand">
          <div className="mk serif">
            ASA<b>GIRI</b>
          </div>
          <div className="jp">朝霧 · ceremonial matcha</div>
        </div>
        <div className="fcols">
          <div className="fcol">
            <h4>Shop</h4>
            <a href="#shop">Ceremonial</a>
            <a href="#shop">Daily</a>
            <a href="#shop">Culinary</a>
            <a href="#shop">Whisks &amp; tools</a>
          </div>
          <div className="fcol">
            <h4>Learn</h4>
            <a href="#origin">Our origin</a>
            <a href="#craft">The craft</a>
            <a href="#ritual">How to whisk</a>
          </div>
          <div className="fcol">
            <h4>Studio</h4>
            <a href="#">Journal</a>
            <a href="#">Wholesale</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="fbot">
        <span>© 2026 ASAGIRI Tea Co. · Wazuka, Kyoto</span>
        <span>Privacy · Terms · Stillness, daily.</span>
      </div>
    </footer>
  );
}
