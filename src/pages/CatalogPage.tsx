/* eslint-disable import/no-duplicates */
import React from 'react';
import firstImg from '../assets/img/products/sandals_myer.jpg';
import secondImg from '../assets/img/products/sandals_keira.jpg';
import thirdImg from '../assets/img/products/superhero_sneakers.jpg';
import fourthImg from '../assets/img/products/sandals_myer.jpg';
import fifthImg from '../assets/img/products/sandals_keira.jpg';
import sixthImg from '../assets/img/products/superhero_sneakers.jpg';

export function CatalogPage() {
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <form className="catalog-search-form form-inline">
        <input className="form-control" placeholder="Поиск" />
      </form>
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="/">
            Все
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Женская обувь
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Мужская обувь
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Обувь унисекс
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">
            Детская обувь
          </a>
        </li>
      </ul>
      <div className="row">
        <div className="col-4">
          <div className="card catalog-item-card">
            <img src={firstImg} className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
            <div className="card-body">
              <p className="card-text">Босоножки &apos;MYER&apos;</p>
              <p className="card-text">34 000 руб.</p>
              <a href="/products/1.html" className="btn btn-outline-primary">
                Заказать
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card catalog-item-card">
            <img src={secondImg} className="card-img-top img-fluid" alt="Босоножки 'Keira'" />
            <div className="card-body">
              <p className="card-text">Босоножки &apos;Keira&apos;</p>
              <p className="card-text">7 600 руб.</p>
              <a href="/products/1.html" className="btn btn-outline-primary">
                Заказать
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card catalog-item-card">
            <img src={thirdImg} className="card-img-top img-fluid" alt="Супергеройские кеды" />
            <div className="card-body">
              <p className="card-text">Супергеройские кеды</p>
              <p className="card-text">1 400 руб.</p>
              <a href="/products/1.html" className="btn btn-outline-primary">
                Заказать
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card catalog-item-card">
            <img src={fourthImg} className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
            <div className="card-body">
              <p className="card-text">Босоножки &apos;MYER&apos;</p>
              <p className="card-text">34 000 руб.</p>
              <a href="/products/1.html" className="btn btn-outline-primary">
                Заказать
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card catalog-item-card">
            <img src={fifthImg} className="card-img-top img-fluid" alt="Босоножки 'Keira'" />
            <div className="card-body">
              <p className="card-text">Босоножки &apos;Keira&apos;</p>
              <p className="card-text">7 600 руб.</p>
              <a href="/products/1.html" className="btn btn-outline-primary">
                Заказать
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card catalog-item-card">
            <img src={sixthImg} className="card-img-top img-fluid" alt="Супергеройские кеды" />
            <div className="card-body">
              <p className="card-text">Супергеройские кеды</p>
              <p className="card-text">1 400 руб.</p>
              <a href="/products/1.html" className="btn btn-outline-primary">
                Заказать
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button type="button" className="btn btn-outline-primary">
          Загрузить ещё
        </button>
      </div>
    </section>
  );
}

export default CatalogPage;
