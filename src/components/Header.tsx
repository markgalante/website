import "./Header.style.css";

import { LargeLogo } from "./LargeLogo";
import { Section } from "./Section";

export function Header() {
  return (
    <header className="header">
      <Section>
        <LargeLogo />
      </Section>
    </header>
  );
}
