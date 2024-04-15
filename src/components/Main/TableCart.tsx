import React from 'react';
import { Link } from 'react-router-dom';
import { CartProduct, TableCartProps } from '../../types/types';

export const TableCart: React.FC<TableCartProps> = ({ data, totalPrice, onDelete }): JSX.Element => (
  <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Название</th>
        <th scope="col">Размер</th>
        <th scope="col">Кол-во</th>
        <th scope="col">Стоимость</th>
        <th scope="col">Итого</th>
        <th scope="col">Действия</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item: CartProduct, index: number) => (
        <tr key={item.nano}>
          <td>{index + 1}</td>
          <td>
            <Link to={`/catalog/${item.id}`}>{item.title}</Link>
          </td>
          <td>{item.selectedSize}</td>
          <td>{item.selectedQuantity}</td>
          <td>{item.price}</td>
          <td>
            {item.price * item.selectedQuantity}
            &nbsp;руб.
          </td>
          <td>
            <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => onDelete(item.nano)}>
              Удалить
            </button>
          </td>
        </tr>
      ))}
      <tr className="end">
        <td colSpan={5} className="text-end">
          Общая стоимость
        </td>
        <td>
          {totalPrice}
          &nbsp;руб.
        </td>
        <td aria-label="None" />
      </tr>
    </tbody>
  </table>
);

export default TableCart;
