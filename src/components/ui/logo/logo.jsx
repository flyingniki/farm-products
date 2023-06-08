import React from "react";
import { ReactComponent as LogoImg } from "../../../assets/logo.svg";
import { Text, StyledLogo } from "./style";

// Логотип сайта с названием
function Logo() {
  return (
    <StyledLogo href="/">
      <LogoImg />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
