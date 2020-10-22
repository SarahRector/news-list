/* eslint-disable max-len */
export const getNews = (search) => {
  const API_KEY = '38f289b6bf4d42d08d092d1f8b213f16';

  return fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`, {
    header: {
      Origin: null
    }
  })
    .then(res => res.json())
    .then(json => json.map(article => ({
      title: article.title,
      author: article.author,
      description: article.description
    })));
};

