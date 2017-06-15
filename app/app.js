import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import ListItem from './components/ListItem';
// import ResultList from './components/ResultList'
import Saved from './components/Saved';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: "",
      startDate: "",
      endDate: "",
      articles: []
    }
    console.log("STATE", this.state)
  }

  nytSearch(term, startDate, endDate)  {
    this.setState({
      term: term,
      startDate: startDate,
      endDate: endDate
    })
    console.log("SECOND STATE",this.state)
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=76353371401a498d84f71f88b47bae43&q=${term}&begin_date=${startDate}&end_date=${endDate}`
    console.log(url);
    fetch(url)
    .then(result => {
      console.log(result)
      return result.json();
    })
    .then(json => {
      console.log("JSON",json)
    })
    // .then((json) => this.showAbtinUpdates(json));
  }

  // showAbtinUpdates(json) {
  //   this.setState({articles: json});
  //   console.log("HURRAY",this.state.articles);
  // }
  render() {
    return (
      <div className='page-header'>
      <h1> Welcome to the NewYork Times Search Site </h1>
        <Search onSubmit= {(term, startDate, endDate) => this.nytSearch(term, startDate, endDate) }  />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));
