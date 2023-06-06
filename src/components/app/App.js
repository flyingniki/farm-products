import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import cardList from "../../mocks/card-list";
import "./style.css";

export default function App() {
  return <PageWrapper cards={cardList} />;
}
