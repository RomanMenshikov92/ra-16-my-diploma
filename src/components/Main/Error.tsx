import React from 'react';
import { ErrorProps } from '../../types/types';

export function Error({ error }: ErrorProps): JSX.Element {
  return (
    <div className="p-5 m-1 text-center fs-2 text-light bg-danger">
      Ошибка данных -
      {error}
    </div>
  );
}

export default Error;
