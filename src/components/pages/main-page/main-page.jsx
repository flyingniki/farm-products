import React from "react";
import About from "../../blocks/about/about";
import Features from "../../blocks/features/features";

function MainPage({ cards }) {
  return (
    <>
      <About />
      <Features cards={cards} />
    </>
  );
}

export default MainPage;
