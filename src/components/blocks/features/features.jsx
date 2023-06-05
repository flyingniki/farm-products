import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import Button from "/src/components/ui/button/button";
import "./style.css";

function Features() {
  return (
    <section className="features">
      <div className="features__title">
        <Title size={TitleSize.MEDIUM}>Почему фермерские продукты лучше?</Title>
      </div>
      <ul className="features__list">
        <li className="features__item">
          <FeatureCard />
        </li>
      </ul>
      <Button minWidth={353}>Купить</Button>
    </section>
  );
}

export default Features;
