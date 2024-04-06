/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Title } from './Title';

export const Order: React.FC = () => (
  <section className="order">
    <Title classes="my-3 text-center" title="Оформить заказ" />
    <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
      <form className="card-body">
        <div className="form-group mb-2">
          <label htmlFor="phone">Телефон</label>
          <input className="form-control" id="phone" placeholder="Ваш телефон" />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="address">Адрес доставки</label>
          <input className="form-control" id="address" placeholder="Адрес доставки" />
        </div>
        <div className="form-group form-check mb-2">
          <input type="checkbox" className="form-check-input" id="agreement" />
          <label htmlFor="agreement" className="form-check-label">
            Согласен с правилами доставки
          </label>
        </div>
        <button type="submit" className="btn btn-outline-secondary">
          Оформить
        </button>
      </form>
    </div>
  </section>
);

export default Order;
