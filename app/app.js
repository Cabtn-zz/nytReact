import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListItem from './components/ListItem';
import ResultList from './components/ResultList'
import Saved from './components/Saved';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: "",
      startDate: "",
      endDate: "",
      articles: [],
      savedArticles: [],
      search: false,
    }
  }

  nytSearch()  {
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=76353371401a498d84f71f88b47bae43&q=${this.state.term}&begin_date=${this.state.startDate}&end_date=${this.state.endDate}`
    fetch(url)
    .then(result => {
      return result.json();
    })
    .then(obj => {
      this.addToState(obj);
      console.log("articles",this.state.articles)
    })
}

  addToState(json) {
    this.setState({articles: json});
    this.setState({search: true})
  }

  savetoDB(title, link) {
    const url = '/api/article';
    const body = JSON.stringify({
      title: title,
      link: link,
    });

    fetch(url, {
      method: "POST",
      body: body,
    })
    .then(() => {
      console.log("Saved")
    })
  }

  pullSavedArticles() {
    const url = "/api/article"
    fetch(url)
    .then(result => {
      return result.json();
    })
    .then((obj,err) => {
        if (err){
          console.log("You have an error",err);
        }
        else {
          this.setState({savedArticles: obj});
          console.log(this.state.savedArticles)
      }
    });
  }

  deleteArticle(id) {
    console.log("DELETING")
    console.log("ID", id)
    Articles.findByIdAndRemove({id})
  }

  componentWillMount() {
    this.pullSavedArticles();
  }

  render () {
      return (
        <div className="header"><h1> Welcome to the NewerYork Times</h1>
        {
          (this.state.search)
          ?<div>
            <ResultList articles={ this.state.articles } save={ this.savetoDB } />
            <Saved articles={ this.state.savedArticles} delete={ this.state.deleteArticle } />
          </div>
          :<div className="jumbotron">
              <h3>Search Term</h3>
              <input className="form-control" value={this.state.term} placeholder="Search Term" onChange={event => this.setState({ term: event.target.value })} />
              <br />
              <h3>Start Date</h3>
              <input className="form-control" value={this.state.startDate} placeholder="YYYYMMD" onChange={event => this.setState({ startDate: event.target.value })} />
              <br />
              <h3>End Date</h3>
              <input className="form-control" value={this.state.endDate} placeholder="YYYYMMD" onChange={event => this.setState({ endDate: event.target.value })} />
              <br />
              <button className="btn btn-primary" onClick={() => this.nytSearch() }> Search Articles </button>
          </div>

          }
        </div>
      );
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));
