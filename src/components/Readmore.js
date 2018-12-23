import React, { Component } from 'react';
import Detailpage from './Detailpage';

class Readmore extends Component {

   state = {
       show : false,
       text : "Read more ..."
   };
   readMore = (e)=>{
       const {show} = this.state;
       this.setState({show :!show})  
   }

    render() {
        return (
            <div className = "readmore_button_div">
                    {this.state.show && <Detailpage  detail = {this.props.item}/>}
                    <button  onClick = {this.readMore} value = "read more"className="btn btn-primary readMoreButton">Read More ...</button> 
            </div>
        );
    }
}

export default Readmore;