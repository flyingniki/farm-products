import React from "react";
import Title, { TitleSize } from "../title/title";
import "./style.css";

function FeatureCard({ title, owner, about, isNegative, image }) {
  return (
    <article className="feature-card">
      <div className="feature-card__title">
        <img
          src={image}
          className="feature-card__image"
          width={56}
          height={56}
          alt={title}
        />
        <div className="feature-card__description">
          <span className="feature-card__category">{owner}</span>
          <Title size={TitleSize.DEFAULT}>{title}</Title>
        </div>
      </div>
      <p
        className="feature-card__text"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </article>
  );
}

export default FeatureCard;
