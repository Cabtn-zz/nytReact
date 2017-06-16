import React, { Component} from 'react';
import SavedItem from './SavedItem'


class SavedList extends Component {
  render () {
    console.log(this.props)
    const savedArray = this.props.articles.map(article => {
      console.log(article);
      return <SavedItem key={article._id} article={ article } deleteArticle= { this.props.delete } />
    })
    return (
      <div className="Welcome">
        <ul>
          {savedArray}
        </ul>
      </div>
    );
  }
}

export default SavedList
