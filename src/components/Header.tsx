import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Logo } from './Header/Logo';
import headerLogo from '../assets/img/header-logo.png';
import { Menu } from './Header/Menu';
import { Basket } from './Header/Basket';
import { Search } from './Header/Search';
import { selectTotalItems } from '../store/slice/cartSlice';
import getStorageItems from '../store/localStorage/localStorage';
import { setCount } from '../store/thunk/cartThunk';
import { AppDispatch } from '../store/store';

export function Header(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const totalCount = useSelector(selectTotalItems);

  useEffect(() => {
    const items = getStorageItems();
    dispatch(setCount(items.length));
  });

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Logo src={headerLogo} alt="Bosa Noga" />
      <div className="collapse navbar-collapse">
        <Menu />
        <div className=" header-controls-pics ms-auto">
          <Search />
          <Basket count={totalCount} />
        </div>
      </div>
    </nav>
  );
}

export default Header;
