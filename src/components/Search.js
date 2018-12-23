import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className = "search-body">
               <input className = "search" icon = "search" name = "searchSeries" placeholder = "Search Shows and People" onChange = {this.onchange}/>
                
            </div>
        );
    }
}

export default Search;