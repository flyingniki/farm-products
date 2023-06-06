import React from "react";
import Title, { TitleSize } from "../title/title";
import "./style.css";

function FeatureCard({ card }) {
  return (
    <article className="feature-card">
      <div className="feature-card__title">
        <img src="../../../assets/cultery.png" alt="cultery" />
        <div className="feature-card__description">
          <p className="feature-card__category">{card.category}</p>
          <Title size={TitleSize.DEFAULT}>{card.title}</Title>
        </div>
      </div>
      <p className="feature-card__text">{card.text}</p>
    </article>
  );
}

export default FeatureCard;
