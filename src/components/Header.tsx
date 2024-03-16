import React from 'react';
import { Logo } from './Header/Logo';
import headerLogo from '../assets/img/header-logo.png';
import { Menu } from './Header/Menu';
import { Basket } from './Header/Basket';
import { Search } from './Header/Search';

export function Header(): JSX.Element {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Logo src={headerLogo} alt="Bosa Noga" />
      <div className="collapse navbar-collapse">
        <Menu />
        <div className=" header-controls-pics ms-auto">
          <Search />
          <Basket />
        </div>
      </div>
    </nav>
  );
}

export default Header;
