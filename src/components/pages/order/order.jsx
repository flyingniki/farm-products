import React from "react";
import Panel from "../../ui/panel/panel";
import Title, { TitleSize } from "../../ui/title/title";
import Button from "../../ui/button/button";
import {
  LeftColumn,
  StyledOrder,
  AddressInput,
  PriceLabel,
  PriceValue,
} from "./style";

// Оформление заказа
function Order() {
  return (
    <StyledOrder as="form">
      <LeftColumn>
        <Panel marginBottom={20} paddingTop={24} paddingBottom={10}>
          <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
            Выберите продукты
          </Title>
          Чекбокс со списком продуктов
        </Panel>
        <Panel>
          <Title size={TitleSize.EXTRA_SMALL} marginBottom={24}>
            Сделать заказ
          </Title>
          <AddressInput placeholder="Введите адрес доставки" />
          <PriceLabel as="span">Цена</PriceLabel>
          <PriceValue>400</PriceValue>
          <Button maxWidth>Купить</Button>
        </Panel>
      </LeftColumn>
      <div>Сюда нужно добавить слайдер с продуктами</div>
    </StyledOrder>
  );
}

export default Order;
