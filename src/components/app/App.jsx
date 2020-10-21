/* eslint-disable max-len */
import React from 'react';
import Articles from '../Articles/Articles';


export default function App() {
  return <Articles
    articles={[
      // eslint-disable-next-line max-len
      { title: 'Wow!', author: 'Bob Barker', description: 'These are words about things.' },
      { title: 'You\'re Wearing That?', author: 'Anne Hathaway', description: 'I guess if that\'s the impression you want to give.' },
      { title: 'Why Are You Doing It THAT Way?', author: 'Brandon Roy', description: 'I\'m just saying, I usually do it this other way and it\'s better.' },
    ]}/>;
}
