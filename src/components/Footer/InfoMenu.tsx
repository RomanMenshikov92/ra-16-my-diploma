import React from 'react';
import { Link } from 'react-router-dom';

export const InfoMenu: React.FC = () => (
  <section>
    <h5>Информация</h5>
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link text-secondary-emphasis" to="/ra-16-my-diploma/about">
          О магазине
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-secondary-emphasis" to="/ra-16-my-diploma/catalog">
          Каталог
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-secondary-emphasis" to="/ra-16-my-diploma/contact">
          Контакты
        </Link>
      </li>
    </ul>
  </section>
);

export default InfoMenu;
