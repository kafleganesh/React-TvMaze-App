import React, { Component } from 'react';

class Detailpage extends Component {
    render() {
        return (
            <div>
                <span>Language: </span>{this.props.detail.language}<br></br>
                <span>Status: </span>{this.props.detail.status}<br></br>
                <span>country of origin: </span> {this.props.detail.network.country.name}<br></br>
                <span>premiered on: </span>{this.props.detail.premiered}<br></br>
                <span>Official site: </span>{this.props.detail.officialSite}<br></br>
                <span></span>
            </div>
        );
    }
}

export default Detailpage;