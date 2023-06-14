import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page/main-page";
import Order from "../../pages/order/order";
import { Main } from "./style";

// Обёртка для контента страниц
function PageWrapper({ products }) {
  return (
    <>
      <Header />
      <Main>
        <Order products={products} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
