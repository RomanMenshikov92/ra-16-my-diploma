import React, { useState } from 'react';
import { QuantityProps } from '../../types/types';

export const Quantity: React.FC<QuantityProps> = ({ onQuantityChange, disabled }: QuantityProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrease = (): void => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = (): void => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <p>
      Количество:&nbsp;&nbsp;
      <span className="btn-group btn-group-sm pl-2">
        <button type="button" className="btn btn-secondary" onClick={handleDecrease} disabled={disabled}>
          -
        </button>
        <span className="btn btn-outline-primary">{quantity}</span>
        <button type="button" className="btn btn-secondary" onClick={handleIncrease} disabled={disabled}>
          +
        </button>
      </span>
    </p>
  );
};

export default Quantity;
