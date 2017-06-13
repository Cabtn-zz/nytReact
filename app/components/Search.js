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

    submitSearch (props) {
        const searchParams = {
            term: this.state.term,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }
        // this.props.onSubmit(searchParams.term, searchParams.startDate, searchParams.endDate)
        console.log("test" + this.props.onSubmit)
        console.log(this.props)
        console.log(searchParams);
    }
    render () {
        return (
            <div>
                <input value={this.state.term} onChange={event => this.setState({ term: event.target.value })} />
                <input value={this.state.startDate} onChange={event => this.setState({ startDate: event.target.value })} />
                <input value={this.state.endDate} onChange={event => this.setState({ endDate: event.target.value })} />
                <button onClick={ () => this.submitSearch() } />
            </div>
        );
    }
}


export default Search;
