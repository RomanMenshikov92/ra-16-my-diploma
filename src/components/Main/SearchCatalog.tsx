import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setQuery } from '../../store/thunk/productsThunk';
import { AppDispatch } from '../../store/store';
import { selectSelectedCategory } from '../../store/slice/categoriesSlice';
import { selectSearchQuery } from '../../store/slice/productsSlice';

export const SearchCatalog: React.FC = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const selectedCategory = useSelector(selectSelectedCategory);
  const query = useSelector(selectSearchQuery);
  const [searchText, setSearchText] = useState<string>(query || '');
  const [searchRes, setSearchRes] = useState<boolean>(false);

  useEffect(() => {
    setSearchText(query || '');
  }, [query]);

  const handleSearch = (e: string): void => {
    setSearchText(e);
    // setSearchRes(false);
    if (e.trim().length === 0) {
      dispatch(setQuery(''));
      dispatch(fetchProducts({ offset: 0, query: '', category: selectedCategory }));
    } else if (e.trim().length > 3) {
      dispatch(setQuery(e));
      dispatch(fetchProducts({ offset: 0, query: e, category: selectedCategory }));
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSearch(event.currentTarget.value);
    }
  };

  return (
    <form className="catalog-search-form form-inline">
      <input
        className="form-control"
        placeholder="Поиск"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </form>
  );
};
export default SearchCatalog;
