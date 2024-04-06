import React from 'react';
import { CategoryFilter } from './CategoryFilter';
import { ProductList } from './ProductList';

export const Catalog: React.FC = (): JSX.Element => (
  <>
    <CategoryFilter />
    <ProductList />
  </>
);

export default Catalog;
