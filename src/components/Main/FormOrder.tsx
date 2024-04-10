import React, { useState } from 'react';
import { FormOrderProps } from '../../types/types';

export const FormOrder: React.FC<FormOrderProps> = ({ handleOrder }: FormOrderProps): JSX.Element => {
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [agreementChecked, setAgreementChecked] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<string>('');
  const [addressError, setAddressError] = useState<string>('');

  const validatePhone = (value: string): boolean => {
    if (value.trim() === '') {
      setPhoneError('Поле "Телефон" обязательно для заполнения');
      return false;
    }
    if (!value.match(/^(?:\+7|8)\d{10}$/)) {
      setPhoneError('Неверный формат телефона, номер телефона начинается + 7 / 8 и всего 10 цифр');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const validateAddress = (value: string): boolean => {
    if (value.trim() === '') {
      setAddressError('Поле "Адрес доставки" обязательно для заполнения');
      return false;
    }
    setAddressError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const isPhoneValid = validatePhone(phone);
    const isAddressValid = validateAddress(address);

    if (isPhoneValid && isAddressValid && agreementChecked) {
      handleOrder(e);
    }
  };

  return (
    <form className="card-body" onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <label className="d-block w-100" htmlFor="phone">
          Телефон
          <input
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Ваш телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <span className="text-danger">{phoneError}</span>
        </label>
      </div>
      <div className="form-group mb-2">
        <label className="d-block w-100" htmlFor="address">
          Адрес доставки
          <input
            className="form-control"
            id="address"
            name="address"
            placeholder="Адрес доставки"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <span className="text-danger">{addressError}</span>
        </label>
      </div>
      <div className="form-group form-check mb-2">
        <label htmlFor="agreement" className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            id="agreement"
            checked={agreementChecked}
            onChange={() => setAgreementChecked(!agreementChecked)}
            required
          />
          Согласен с правилами доставки
        </label>
      </div>
      <button type="submit" className="btn btn-outline-secondary">
        Оформить
      </button>
    </form>
  );
};

export default FormOrder;
