import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from './search';

describe('Search component', () => {
  afterEach(() => cleanup());

  it('renders Search', () => {
    const { asFragment } = render(<Search
      text="Words and Stuff"
      handleChange={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
