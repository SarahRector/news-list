/* eslint-disable max-len */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import { getNews } from '../services/news-api';

jest.mock('../services/news-api');

describe('NewsSearch container', () => {
  it('displays a list of articles', async() => {
    getNews.mockResolvedValue([
      { title: 'Wow!', author: 'Bob Barker', description: 'These are words about things.' },
      { title: 'You\'re Wearing That?', author: 'Anne Hathaway', description: 'I guess if that\'s the impression you want to give.' },
      { title: 'Why Are You Doing It THAT Way?', author: 'Brandon Roy', description: 'I\'m just saying, I usually do it this other way and it\'s better.' },
    ]);

    render(<NewsSearch />);

    const button = screen.getByTestId('button');

    await fireEvent.click(button);

    const articleList = await screen.findByTestId('articles');

    expect(articleList).not.toBeEmptyDOMElement();
  });
});
