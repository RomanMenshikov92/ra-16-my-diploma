import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, setCategories } from '../../store/thunk/categoriesThunk';
import { AppDispatch } from '../../store/store';
import { Loader } from './Loader';
import { Error } from './Error';
import {
  selectCategories,
  selectCategoriesLoading,
  selectCategoriesError,
  selectSelectedCategory,
} from '../../store/slice/categoriesSlice';
import { fetchProducts } from '../../store/thunk/productsThunk';
import { selectSearchQuery, setProductsListLoading, setProductsListStart } from '../../store/slice/productsSlice';

export const CategoryFilter: React.FC = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const loading = useSelector(selectCategoriesLoading);
  const error = useSelector(selectCategoriesError);
  const selectedCategory = useSelector(selectSelectedCategory);
  const query = useSelector(selectSearchQuery);
  const hasAllCategory = categories.some((category) => category.id === 0);

  useEffect(() => {
    if (!loading && !error && categories.length === 1 && hasAllCategory) {
      dispatch(fetchCategories());
    }
  }, [dispatch, loading, error, categories.length, hasAllCategory, query, selectedCategory]);

  const handleCategoryClick = (categoryId: string): void => {
    dispatch(setProductsListLoading(true));
    dispatch(setProductsListStart({}));
    dispatch(setCategories(categoryId));
    dispatch(fetchProducts({ offset: 0, query, category: categoryId }));
    dispatch(setProductsListLoading(false));
  };

  const handleRetry = () => {
    dispatch(setProductsListLoading(true));
    dispatch(fetchCategories());
    dispatch(setProductsListLoading(false));
  };

  return (
    <>
      {loading && !error && <Loader />}
      {error && !loading && <Error error={error} handleRetry={handleRetry} />}
      {categories && categories.length > 1 && !loading && !error && (
        <ul className="catalog-categories nav justify-content-center">
          {categories.map((category) => (
            <li key={category.id} className="nav-item">
              <button
                type="button"
                className={`nav-link ${selectedCategory === String(category.id) ? 'active' : ''}`}
                onClick={() => handleCategoryClick(String(category.id))}
              >
                {category.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CategoryFilter;
