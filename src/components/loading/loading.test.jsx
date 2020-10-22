import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loading from './loading';

describe('Loading component', () => {
  afterEach(() => cleanup());
  it('renders Loading Screen', () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment()).toMatchSnapshot();
  });
});
