import React, { Component } from 'react';
import Detailpage from './Detailpage';

class Readmore extends Component {

   state = {
       show : false,
       text : "Read more ..."
   };
   readMore = ()=>{
       const {show} = this.state;
       this.setState({show :!show})  
   }

    render() {
        return (
            <div>
                    {this.state.show && <Detailpage  detail = {this.props.item}/>}
                    <button  onClick = {this.readMore} className="btn btn-primary readMoreButton">Read More ...</button> 
            </div>
        );
    }
}

export default Readmore;