import React from 'react';
import { ProductDetails } from '../../types/types';

export const Image: React.FC<ProductDetails> = ({ productDetails, classes }: ProductDetails) => {
  const placeholderImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/660px-No-Image-Placeholder.svg.png';

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    e.currentTarget.src = placeholderImage;
  };

  return (
    <div>
      {productDetails.images && productDetails.images.length > 0 ? (
        <img
          src={productDetails.images[0] || productDetails.images[1]}
          className={`${classes}`}
          onError={handleImageError}
          alt={productDetails.title || 'Not Title'}
        />
      ) : (
        <img src={placeholderImage} className="img-fluid" alt="NotImage" />
      )}
    </div>
  );
};

export default Image;
