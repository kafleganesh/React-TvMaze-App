import React, { Component } from 'react';

class Detailpage extends Component {
    render() {
        return (
            <div>
                I am in detail page
                {this.props.detail.name}
            </div>
        );
    }
}

export default Detailpage;