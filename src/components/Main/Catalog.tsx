import React from 'react';
import { CategoryFilter } from './CategoryFilter';
import { ProductList } from './ProductList';

export const Catalog: React.FC = (): JSX.Element => (
  <div className="catalog">
    <CategoryFilter />
    <ProductList />
  </div>
);

export default Catalog;
