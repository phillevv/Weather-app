import React from 'react';
import {} from 'react-bootstrap'
import GetCity from './getCity';

function SearchBar() {
  return (
    <div className="SearchBar m-2 p-2">
<div className="m-3" style={{display: 'flex', justifyContent: 'center'}}>
      <GetCity></GetCity>

    </div>
    </div>
  );
}

export default SearchBar;
