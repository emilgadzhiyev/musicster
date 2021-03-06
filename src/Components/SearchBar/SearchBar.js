import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value })
    }

    render() {
        // console.log(this.props.search);
        return (
            <div className="SearchBar">
                <input onChange={this.handleTermChange} placeholder="Start typing" />
                <button className="SearchButton" onClick={() => this.props.onSearch(this.state.term)}>Search</button>
            </div>
        )
    }
}

export default SearchBar;