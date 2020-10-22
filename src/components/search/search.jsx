import React from 'react';
import PropTypes from 'prop-types';

const Search = ({
  text,
  onChange,
  onSubmit
}) => (
  <>
    <form onSubmit={onSubmit}>
      <label htmlFor="text">News Search</label>
      <input
        id="text"
        type="text"
        name="text"
        value={text}
        onChange={onChange}
      />
      <button>Search For Articles</button>
    </form>
  </>
);

Search.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Search;
