import React, { Component} from 'react';
import ListItem from './ListItem';

class ResultList extends Component {
  render () {
    console.log(this.props.articles.response)
    const articlesArray = this.props.articles.response.docs.map(article => {
      console.log(article);
      return <ListItem key={article._id} article={ article } />
    })
    return (
      <div className="Welcome">
        <ul>
          {articlesArray}
        </ul>
      </div>
    );
  }
}

export default ResultList
