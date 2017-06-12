import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      startDate: '',
      endDate: ''.
     };

  }

  render () {
    return (
      <div>
        <input value={this.state.term} onChange={event => this.setState({ term: event.target.value })} />
        <input value={this.state.startDate} onChange={event => this.setState({ startDate: event.target.value })} />
        <input value={this.state.endDate} onChange={event => this.setState({ endDate: event.target.value })} />
      </div>
    );
  }
}





export default Search;
