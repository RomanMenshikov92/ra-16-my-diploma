import React from 'react';
import { ButtonCartProps } from '../../types/types';

export const ButtonCart: React.FC<ButtonCartProps> = ({ text, onClick, disabled }) => (
  <button type="button" className="btn btn-danger btn-block btn-lg w-100" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

export default ButtonCart;
