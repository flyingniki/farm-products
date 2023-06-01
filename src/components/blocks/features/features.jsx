import React from "react";
import Title from "/src/components/ui/title/title";
import FeatureCard from "/src/components/blocks/feature-card/feature-card";
import Button from "/src/components/ui/button/button";
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
