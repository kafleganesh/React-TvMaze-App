import React, { Component } from 'react';
import Detailpage from './Detailpage';

class Readmore extends Component {

    state = {
       show : false,
       isOpen: false,
   };
   readMore = (e)=>{
       const {show} = this.state;
       this.setState({
        show :!show,
        isOpen: !this.state.isOpen
    })     
   }

    render() {
        return (
            <div className = "readmore_button_div">
                    {this.state.show && <Detailpage  detail = {this.props.item}/>}
                    <button  onClick = {this.readMore} value = "read more"className="btn btn-primary readMoreButton"> {this.state.isOpen ? 'Less' : 'Read more ...'}</button>          
            </div>
        );
    }
}

export default Readmore;