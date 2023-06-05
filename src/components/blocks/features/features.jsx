import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import Button from "/src/components/ui/button/button";
import "./style.css";

function Features({ cards }) {
  return (
    <section className="features">
      {cards.length ? (
        <>
          <div className="features__title">
            <Title size={TitleSize.MEDIUM}>
              Почему фермерские продукты лучше?
            </Title>
          </div>
          <ul className="features__list">
            {cards.map((card) => {
              <li className="features__item" key={card.id}>
                <FeatureCard {...card} />
              </li>;
            })}
          </ul>
          <Button minWidth={353}>Купить</Button>
        </>
      ) : null}
    </section>
  );
}

export default Features;
