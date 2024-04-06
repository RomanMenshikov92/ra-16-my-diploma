import React from 'react';
import { Link } from 'react-router-dom';

export const Basket: React.FC = () => (
  <Link to="/basket">
    <div className="header-controls-pic header-controls-cart">
      <div className="header-controls-cart-full">1</div>
      <div className="header-controls-cart-menu" />
    </div>
  </Link>
);

export default Basket;
