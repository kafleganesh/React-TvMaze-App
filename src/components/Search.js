import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }
    updateSearch = (e) => {
            this.setState({
                Search : e.target.value
            });
    }
    render() {
        return (
            <div className = "search-body">
               <input className = "search"  name = "searchSeries" placeholder = "Search Shows and People" onChange = {this.updateSearch}/>
            </div>
        );
    }
}

export default Search;