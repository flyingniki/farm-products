import React from "react";
import Logo from "../../ui/logo/logo";
import Title, { TitleSize } from "../../ui/title/title";
import Nav from "../../layout/nav/nav";
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
