/* eslint-disable no-unused-expressions */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { fetchProducts, setQuery } from '../../store/thunk/productsThunk';
import { selectSelectedCategory } from '../../store/slice/categoriesSlice';

export const Search: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [isSearchVisible, setSearchVisible] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const searchInput = useRef<HTMLInputElement>(null);
  const selectedCategory = useSelector(selectSelectedCategory);

  useEffect(() => {
    if (isSearchVisible && searchInput.current) {
      searchInput.current.focus();
    }
  }, [isSearchVisible]);

  const handleSearchClick = (): void => {
    if (isSearchVisible && searchText.trim().length > 3) {
      dispatch(setQuery(searchText));
      dispatch(fetchProducts({ offset: 0, query: searchText, category: selectedCategory }));
      navigate('/catalog/');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleSearchClick();
    }
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label="Поиск"
        className="header-controls-pic header-controls-search"
        onClick={handleSearchClick}
        onKeyDown={handleKeyPress}
      />
      <form
        data-id="search-form"
        className={`header-controls-search-form form-inline ${!isSearchVisible ? 'invisible' : ''}`}
      >
        <input
          type="text"
          id="search"
          className="form-control"
          placeholder="Поиск"
          value={searchText}
          ref={searchInput}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    </>
  );
};

export default Search;
