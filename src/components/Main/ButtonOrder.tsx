import React from 'react';
import { ButtonOrderProps } from '../../types/types';

const ButtonOrder: React.FC<ButtonOrderProps> = ({ text, onClick }) => (
  <button type="button" className="btn btn-outline-primary" onClick={onClick}>
    {text}
  </button>
);

export default ButtonOrder;
