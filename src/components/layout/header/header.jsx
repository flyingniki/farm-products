import React from "react";
import Logo from "/src/components/ui/logo/logo";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Nav from "/src/components/layout/nav/nav";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Title size={TitleSize.SMALL} />
      <Nav />
    </header>
  );
}

export default Header;
