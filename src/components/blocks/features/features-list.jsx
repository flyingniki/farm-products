import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import FeatureCard from "../../ui/feature-card/feature-card";
import Button from "../../ui/button/button";
import "./style.css";

function FeaturesList({ features }) {
  return features && features.length ? (
    <section className="features">
      <div className="features__title">
        <Title size={TitleSize.MEDIUM}>Почему фермерские продукты лучше?</Title>
      </div>
      <ul className="features__list">
        {features.map((feature) => (
          <li className="features__item" key={feature.id}>
            <FeatureCard {...feature} />
          </li>
        ))}
      </ul>
      <Button className="features__button">Купить</Button>
    </section>
  ) : null;
}

export default FeaturesList;
