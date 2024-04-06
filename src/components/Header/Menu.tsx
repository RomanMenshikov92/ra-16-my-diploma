import React from 'react';
import { NavLink } from 'react-router-dom';

export const Menu: React.FC = (): JSX.Element => {
  const activeLink = ({ isActive }: { isActive: boolean }) => (isActive ? 'nav-item active' : 'nav-item');

  return (
    <ul className="navbar-nav mr-auto">
      <li className={activeLink({ isActive: true })}>
        <NavLink className="nav-link" to="/" end>
          Главная
        </NavLink>
      </li>
      <li className={activeLink({ isActive: false })}>
        <NavLink className="nav-link" to="/catalog">
          Каталог
        </NavLink>
      </li>
      <li className={activeLink({ isActive: false })}>
        <NavLink className="nav-link" to="/about">
          О магазине
        </NavLink>
      </li>
      <li className={activeLink({ isActive: false })}>
        <NavLink className="nav-link" to="/contact">
          Контакты
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
