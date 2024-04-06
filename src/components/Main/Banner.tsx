import React from 'react';
import { BannerProps } from '../../types/types';

export function Banner({ src, alt }: BannerProps): JSX.Element {
  return (
    <div className="banner">
      <img src={src} alt={alt} className="img-fluid" />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  );
}

export default Banner;
