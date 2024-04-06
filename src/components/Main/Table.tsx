import React from 'react';
import { ProductDetails } from '../../types/types';

export const Table: React.FC<ProductDetails> = ({ productDetails }: ProductDetails) => (
  <table className="table table-bordered">
    <tbody>
      <tr>
        <td>Артикул</td>
        <td>{productDetails.sku || ''}</td>
      </tr>
      <tr>
        <td>Производитель</td>
        <td>{productDetails.manufacturer || ''}</td>
      </tr>
      <tr>
        <td>Цвет</td>
        <td>{productDetails.color || ''}</td>
      </tr>
      <tr>
        <td>Материалы</td>
        <td>{productDetails.material || ''}</td>
      </tr>
      <tr>
        <td>Сезон</td>
        <td>{productDetails.season || ''}</td>
      </tr>
      <tr>
        <td>Повод</td>
        <td>{productDetails.reason || ''}</td>
      </tr>
    </tbody>
  </table>
);

export default Table;
