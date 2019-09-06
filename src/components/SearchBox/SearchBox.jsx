import React from 'react';

import './SearchBox.css';

const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='SearchBox'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default SearchBox;
