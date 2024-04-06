import React, { useState } from 'react';
import { SizeProps } from '../../types/types';

export const Size: React.FC<SizeProps> = ({ productDetails, onSizeSelect }: SizeProps) => {
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleSizeSelection = (size: string): void => {
    if (selectedSize === size) {
      setSelectedSize('');
      onSizeSelect('');
    } else {
      setSelectedSize(size);
      onSizeSelect(size);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>, size: string): void => {
    if (event.key === 'Enter') {
      handleSizeSelection(size);
    }
  };

  return (
    <p>
      Размеры в наличии:&nbsp;&nbsp;
      {productDetails.sizes.map((size) => (size.available === true ? (
        <span
          key={size.size}
          className={`catalog-item-size ${selectedSize === size.size ? 'selected' : ''}`}
          onClick={() => handleSizeSelection(size.size)}
          onKeyDown={(e) => handleKeyDown(e, size.size)}
          role="button"
          tabIndex={0}
        >
          {size.size}
        </span>
      ) : null))}
    </p>
  );
};

export default Size;
