import React from "react";
import About from "/src/components/blocks/about/about";
import Features from "/src/components/blocks/features/features";

function MainPage({ cards }) {
  return (
    <>
      <About />
      <Features cards={cards} />
    </>
  );
}

export default MainPage;
