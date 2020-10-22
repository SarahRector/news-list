import React, { Component } from 'react';
import Search from '../components/search/search';
import Articles from '../components/Articles/Articles';
import Loading from '../components/loading/loading';
import { getNews } from '../services/news-api';

export default class NewsSearch extends Component {
  state = {
    loading: true,
    search: '',
    articles: [] 
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSearch = async() => {
    const newsArray = await getNews(this.state.search);

    this.setState({ articles: newsArray, loading: false });
  }

  render() {
    const { loading, articles, search } = this.state;
    if(loading) return <>
      <Search
        search={search}
        onSubmit={this.handleSearch}
        onChange={this.handleChange}
      />
      <br />
      <Loading />
    </>;

    return ( 
      <>
        <Search
          search={search}
          onSubmit={this.handleSearch}
          onChange={this.handleChange}
        />
        <Articles articles={articles} />
      </>
    );
  }
}

