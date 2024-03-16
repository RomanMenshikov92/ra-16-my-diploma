import React, { useState } from 'react';

export const Search: React.FC = (): JSX.Element => {
  const [isSearchVisible, setSearchVisible] = useState<boolean>(false);

  const handleSearchClick = (): void => {
    setSearchVisible(!isSearchVisible);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleSearchClick();
    }
  };

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label="Поиск"
        className="header-controls-pic header-controls-search"
        onClick={handleSearchClick}
        onKeyDown={handleKeyPress}
      />
      <form
        data-id="search-form"
        className={`header-controls-search-form form-inline ${!isSearchVisible ? 'invisible' : ''}`}
      >
        <input type="text" id="search" className="form-control" placeholder="Поиск" />
      </form>
    </>
  );
};

export default Search;
