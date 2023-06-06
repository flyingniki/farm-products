import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import features from "../../mocks/features";
import "./style.css";

export default function App() {
  return <PageWrapper features={features} />;
}
