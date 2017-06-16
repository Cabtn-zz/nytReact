import React, { Component} from 'react';
import ListItem from './ListItem';

class ResultList extends Component {
  render () {
    const articlesArray = this.props.articles.response.docs.map(article => {
      return <ListItem key={article._id} article={ article } saveArticle={ this.props.save } />
    })
    return (
      <div><h1>Search Results</h1>
        <ul>
          {articlesArray}
        </ul>
      </div>
    );
  }
}

export default ResultList
