import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

export function Nav() {
  return (
    <nav id="nav">
      <div className="brand serif">
        KOKAN <b>SPRING</b>
      </div>
      <div className="nlinks">
        <a href="#origin">Origin</a>
        <a href="#craft">Craft</a>
        <a href="#moments">Moments</a>
        <a href="#shop">Shop</a>
        <a href="#contact">Contact</a>
        <LanguageToggle />
        <ThemeToggle />
        <a href="#shop" className="nbtn">
          Begin ritual
        </a>
      </div>
    </nav>
  );
}
