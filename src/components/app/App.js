import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import cardList from "/src/mocks/feature-cards";
import "./style.css";

export default function App() {
  return <PageWrapper cards={cardList} />;
}
