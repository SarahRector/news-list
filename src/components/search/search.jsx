/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Search = ({
  search,
  onChange,
  onSubmit
}) => (
  <>
    <label htmlFor="search">News Search</label>
    <input
      id="search"
      type="search"
      name="search"
      value={search}
      onChange={onChange}
    />
    <button onClick={onSubmit} data-testid="button">Search For Articles</button>
  </>
);

Search.propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Search;
