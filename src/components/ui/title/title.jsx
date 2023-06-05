import React from "react";
import "./style.css";

export const TitleSize = {
  BIG: "big",  
  MEDIUM: "medium",
  DEFAULT: "",
};

function Title({ children, size }) {
  return <h1 className={`title${size ? ` title--${size}` : ""}`}>{children}</h1>;
}

export default Title;
