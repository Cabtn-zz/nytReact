import React, { Component} from 'react';
import ListItem from './ListItem';



class ResultList extends Component {
  render () {
    console.log(this.props)
    const articlesArray = props.articles.map(article => {
      return <ListeItem key={ articles.name } name={ article }
    })
    return (
      <div className="Welcome">
        <ul>
          <ListItem />
        </ul>
      </div>
    );
  }
}

export default ResultList
