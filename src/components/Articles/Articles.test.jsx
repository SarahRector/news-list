/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Articles from './Articles';

const testArray = [
  { title: 'Wow!', author: 'Bob Barker', description: 'These are words about things.' },
  { title: 'You\'re Wearing That?', author: 'Anne Hathaway', description: 'I guess if that\'s the impression you want to give.' },
  { title: 'Why Are You Doing It THAT Way?', author: 'Brandon Roy', description: 'I\'m just saying, I usually do it this other way and it\'s better.' },
];

describe('Articles component', () => {
  afterEach(() => cleanup());
  it('renders Articles', () => {
    const { asFragment } = render(<Articles
      articles={testArray}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
