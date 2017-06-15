import React, { Component} from 'react';
import ListItem from './ListItem';



class ResultList extends Component {
  render () {
    console.log(this.props)
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