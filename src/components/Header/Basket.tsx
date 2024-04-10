import React from 'react';
import { Link } from 'react-router-dom';
import { BasketProps } from '../../types/types';

export const Basket: React.FC<BasketProps> = ({ count }: BasketProps): JSX.Element => (
  <Link to="/basket">
    <div className="header-controls-pic header-controls-cart">
      {count && count !== null ? <div className="header-controls-cart-full">{count}</div> : null}
      <div className="header-controls-cart-menu" />
    </div>
  </Link>
);

export default Basket;
