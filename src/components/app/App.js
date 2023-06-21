import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import MainPage from "../../components/pages/main-page/main-page";
import Order from "../pages/order/order";
import features from "../../mocks/features";
import products from "../../mocks/products";
import { GlobalStyle } from "./style";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import ScrollTop from "../ui/scroll-top/scroll-top";

// Корневой компонент всего приложения
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={features} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<Order products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
