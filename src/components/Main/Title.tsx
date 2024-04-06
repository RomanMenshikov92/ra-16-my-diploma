import React from 'react';
import { TitleProps } from '../../types/types';

export const Title: React.FC<TitleProps> = ({ title, classes }: TitleProps): JSX.Element => (
  <h2 className={classes}>{title}</h2>
);

export default Title;
