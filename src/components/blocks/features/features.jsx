import React from "react";
import Title from "../../ui/title/title";
import FeatureCard from "../../ui/feature-card/feature-card";
import Button from "../../ui/button/button";
import "./style.css";

function Features() {
  return (
    <section className="feature-list">
      <Title>Наши звёзды</Title>
      <ul className="feature-list__list">
        <li className="feature-list__item">
          <FeatureCard />
        </li>
      </ul>
      <Button minWidth={353}>Купить</Button>
    </section>
  );
}

export default Features;
