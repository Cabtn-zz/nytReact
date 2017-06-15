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
        
        //Props is not working
        this.props.onSubmit(searchParams.term, searchParams.startDate, searchParams.endDate);
        let results = this.props.onSubmit(searchParams.term, searchParams.startDate, searchParams.endDate);
    }
    render () {
        return (
            <div>
                <input value={this.state.term} onChange={event => this.setState({ term: event.target.value })} />
                <input value={this.state.startDate} placeholder="YYYYMMD" onChange={event => this.setState({ startDate: event.target.value })} />
                <input value={this.state.endDate} placeholder="YYYYMMD" onChange={event => this.setState({ endDate: event.target.value })} />
                <button onClick={ () => this.submitSearch() } />
            </div>
        );
    }
}


export default Search;
