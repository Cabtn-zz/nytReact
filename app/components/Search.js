import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            startDate: '',
            endDate: '',
        };
    }

    submitSearch () {
        const searchParams = {
            term: this.state.term,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }

        this.props.onSubmit(searchParams.term, searchParams.startDate, searchParams.endDate);
        console.log("SEARCH FILE", json)
    }
    render () {
        return (
            <div className="jumbotron">
                <input className="form-control" value={this.state.term} placeholder="Search Term" onChange={event => this.setState({ term: event.target.value })} />
                <br />
                <input className="form-control" value={this.state.startDate} placeholder="YYYYMMD" onChange={event => this.setState({ startDate: event.target.value })} />
                <br />
                <input className="form-control" value={this.state.endDate} placeholder="YYYYMMD" onChange={event => this.setState({ endDate: event.target.value })} />
                <br />
                <button className="btn btn-primary" onClick={ () => this.submitSearch() }> SHAKE SHAKE SHAKE SENORA </button>
            </div>
        );
    }
}


export default Search;
