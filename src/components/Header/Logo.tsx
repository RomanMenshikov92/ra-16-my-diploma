import React from 'react';
import { Link } from 'react-router-dom';
import { LogoProps } from '../../types/types';

export const Logo: React.FC<LogoProps> = ({ src, alt }: LogoProps): JSX.Element => (
  <Link to="/">
    <img src={src} alt={alt} />
  </Link>
);

export default Logo;
