import React from "react";
import { ReactComponent } from "../../../assets/logo.svg";
import { Text, StyledLogo, StyledLogoMainPage } from "./style";
import { AppRoute } from "../../../const";
import { useLocation } from "react-router-dom";

// Логотип сайта с названием
function Logo() {
  const { pathname } = useLocation();

  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <ReactComponent />
      <Text>Фермерские продукты</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <ReactComponent />
      <Text>Фермерские продукты</Text>
    </StyledLogo>
  );
}

export default Logo;
