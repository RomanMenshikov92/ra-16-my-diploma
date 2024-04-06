import React, { useState } from 'react';

interface QuantityProps {
  onQuantityChange: (quantity: number) => void;
}

export const Quantity: React.FC<QuantityProps> = ({ onQuantityChange }: QuantityProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <p>
      Количество:&nbsp;&nbsp;
      <span className="btn-group btn-group-sm pl-2">
        <button type="button" className="btn btn-secondary" onClick={handleDecrease}>
          -
        </button>
        <span className="btn btn-outline-primary">{quantity}</span>
        <button type="button" className="btn btn-secondary" onClick={handleIncrease}>
          +
        </button>
      </span>
    </p>
  );
};

export default Quantity;
