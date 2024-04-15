import React from 'react';
import { ErrorProps } from '../../types/types';

export function Error({ error, handleRetry }: ErrorProps): JSX.Element {
  return (
    <div className="p-5 m-1 text-center fs-2 text-light bg-danger">
      Ошибка данных -
      {error}
      <div>
        <button type="button" className="btn btn-outline-primary text-light" onClick={handleRetry}>
          Повторить запрос
        </button>
      </div>
    </div>
  );
}

export default Error;
