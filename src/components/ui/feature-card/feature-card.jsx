import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import "./style.css";

function FeatureCard() {
  return (
    <article className="feature-card">
      <div className="feature-card__title">
        <img src="" alt="cultery" />
        <div className="feature-card__description">
          <p className="feature-card__category">Фермерские продукты</p>
          <Title size={TitleSize.DEFAULT}>Еда намного вкуснее</Title>
        </div>
      </div>
      <p className="feature-card__text">
        Домашняя колбаса из мяса, соли и специй и колбаса из магазина —
        два настолько разных продукта, что они даже не родственники
      </p>
    </article>
  );
}

export default FeatureCard;
