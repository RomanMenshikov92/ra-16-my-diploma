import React from 'react';
import { Catalog } from '../components/Main/Catalog';
import { SearchCatalog } from '../components/Main/SearchCatalog';
import { Title } from '../components/Main/Title';

export function CatalogPage(): JSX.Element {
  return (
    <section className="catalog">
      <Title classes="text-center" title="Каталог" />
      <SearchCatalog />
      <Catalog />
    </section>
  );
}

export default CatalogPage;
