import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import "./style.css";

function FeatureCard() {
  return (
    <article className="feature-card">
      <Title size={TitleSize.SMALL}></Title>
      <p className="feature-card__text"></p>
    </article>
  );
}

export default FeatureCard;
