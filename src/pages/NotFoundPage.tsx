import React from 'react';
import { Title } from '../components/Main/Title';

export function NotFoundPage(): JSX.Element {
  return (
    <section className="top-sales">
      <Title classes="my-2 text-center" title="Страница не найдена" />
      <p>Извините, такая страница не найдена!</p>
    </section>
  );
}

export default NotFoundPage;
