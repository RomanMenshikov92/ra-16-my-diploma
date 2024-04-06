import React from 'react';
import { ProductItemProps } from '../../types/types';
import { Image } from './Image';
import ButtonOrder from './ButtonOrder';

export const ProductItem: React.FC<ProductItemProps> = ({ product, handleClick }): JSX.Element => (
  <li className="col-4 mb-3">
    <div className="card catalog-item-card h-100">
      <Image productDetails={product} classes="card-img-top img-fluid" />
      <div className="card-body d-flex flex-column align-items-start justify-content-end">
        <div className="card-text mb-3">{product.title}</div>
        <div className="card-text mb-3">
          {product.price}
          &nbsp;руб.
        </div>
        <ButtonOrder text="Заказать" onClick={() => handleClick(product.id)} />
      </div>
    </div>
  </li>
);

export default ProductItem;
