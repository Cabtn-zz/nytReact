import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListItem from './components/ListItem';
import ResultList from './components/ResultLists'
import Saved from './components/Saved';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div>
        <Search onSubmit= { nytSearch }  />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));

// Functions

const nytSearch = (term, startDate, endDate) => {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=76353371401a498d84f71f88b47bae43&q=${term}&begin_date=${startDate}&end_date=${endDate}`

  fetch(url)
    .then(result => {
      console.log(result);
      return result.json();
    })
    .then(json => console.log(json))
    .fail(function(err) {
      throw err;
    })
}
