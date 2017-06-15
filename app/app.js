import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListItem from './components/ListItem';
import ResultList from './components/ResultList'
import Saved from './components/Saved';
import Search from './components/Search';
// Functions

const nytSearch = (term, startDate, endDate) => {
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=76353371401a498d84f71f88b47bae43&q=${term}&begin_date=${startDate}&end_date=${endDate}`
  console.log("URL" + url);
  fetch(url)
    .then(result => {
      console.log(result);
      return result.json();
    })
    .then(json => {
      var articlesReturned = json
      console.log(articlesReturned)
    });
}





class App extends Component {
  render() {
    return (
      <div>
        <Search onSubmit= { nytSearch }  />
        {
          (nytSearch)
          ? <ResultList />
          : <div> Search something </div>
        }
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));


