import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListItem from './components/ListItem';
import ResultList from './components/ResultList'
// import Saved from './components/Saved';
import Search from './components/Search';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: "",
      startDate: "",
      endDate: "",
      articles: [],
      search: false,
    }
    console.log("STATE", this.state)
  }

  nytSearch()  {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=76353371401a498d84f71f88b47bae43&q=${this.state.term}&begin_date=${this.state.startDate}&end_date=${this.state.endDate}`
    fetch(url)
    .then(result => {
      return result.json();
    })
    .then(json => {
      this.addToState(json);
      console.log(this.state)
      console.log("articles",this.state.articles)
    })
}

  addToState(json) {
    this.setState({articles: json});
    this.setState({search: true})
  }

  savetoDB(obj) {
    Articles.update({ "_id": req.body._id}, req.body, { upsert: true }, (err, saved) => {
      if (err) {
        console.log(err)
      } else {
        res.json(saved)
      }
    })
  }

  render () {
      return (
        <div className="header"><h1> Welcome to the NewerYork Times</h1>
          <div className="jumbotron">
              <input className="form-control" value={this.state.term} placeholder="Search Term" onChange={event => this.setState({ term: event.target.value })} />
              <br />
              <input className="form-control" value={this.state.startDate} placeholder="YYYYMMD" onChange={event => this.setState({ startDate: event.target.value })} />
              <br />
              <input className="form-control" value={this.state.endDate} placeholder="YYYYMMD" onChange={event => this.setState({ endDate: event.target.value })} />
              <br />
              <button className="btn btn-primary" onClick={() => this.nytSearch() }> SHAKE SHAKE SHAKE SENORA </button>
          </div>
          {
            (this.state.search)
            ?<ResultList articles={ this.state.articles } />
            : "Search Something!"
          }
        </div>
      );
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));
