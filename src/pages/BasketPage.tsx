import React from 'react';
import { Order } from '../components/Main/Order';
import { Cart } from '../components/Main/Cart';

export function BasketPage(): JSX.Element {
  return (
    <>
      <Cart />
      <Order />
    </>
  );
}

export default BasketPage;
