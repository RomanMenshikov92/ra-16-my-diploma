import React from 'react';

export function ContactPage(): JSX.Element {
  return (
    <section className="top-sales">
      <h2 className="my-2 text-center">Контакты</h2>
      <p>
        Наш головной офис расположен в г.Москва, по адресу: Варшавское шоссе, д. 17, бизнес-центр W
        Plaza.
      </p>
      <h5 className="text-center">Координаты для связи:</h5>
      <p>
        Телефон:
        <a className="d-inline mx-1 text-secondary-emphasis" href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
        (ежедневно: с 09-00 до 21-00)
      </p>
      <p>
        Email:
        <a className="d-inline ms-1 text-secondary-emphasis" href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
      </p>
    </section>
  );
}

export default ContactPage;
