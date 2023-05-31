import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import "./style.css";

function featureCard() {
  return (
    <article className="feature-card">
      <figure className="feature-card__figure">
        <img
          src="https://i.ibb.co/27Mdx7k/Rectangle-4-2.png"
          className="feature-card__image"
          width={313}
          height={320}
          alt="изображение кота"
        />
        <span className="feature-card__icon">Ласковый</span>
      </figure>
      <Title size={TitleSize.SMALL}>Кошка Сью</Title>
      <p className="feature-card__text">
        Эта юная красавица очень общительная и ласковая уже с первого дня, как
        приехала в кафе.
      </p>
    </article>
  );
}

export default featureCard;
