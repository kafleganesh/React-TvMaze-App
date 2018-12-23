import React, { Component } from 'react';
import Details from './program';
import Readmore from './Readmore';
import Search from './Search';
import logo from '../tvm-header-logo.png';
import StarRatingComponent from 'react-star-rating-component';
class homePage extends Component {
   constructor(props){
       super(props);
       this.state = {
           items : []
       }
   }

    componentDidMount(){
        fetch('http://api.tvmaze.com/shows')
        .then(res => res.json())
        .then(json =>{
            this.setState({

                items : json

            })
        });
    }
     
    render() {
        var { items} = this.state;
        return (
            <div>
                    <nav class="navbar fixed-top">
                        <div className = "container">
                        <div className = "row ">
                            <div className =  " col-sm-4">
                                <img class="img-fluid image-size"  src= {logo} alt="Tvmaze_logo"/>
                            </div>
                            <div className = "col-sm-8">
                                <Search/>
                            </div>
                        </div>
                        </div>

                        
                    </nav> 
                    <div className = "main_body">         
                            <ul>
                                {items.map(item =>(
                                        <div className = "container information" key = {item.id}>
                                            <div className = "row">
                                                    <div className="col-sm-3 ">
                                                        <img className="img-thumbnail" src={item.image.medium}/>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <div className = "main_info">
                                                            <span>Name: </span> {item.name}<br></br>
                                                            <span>Average Rating: </span>
                                                            <StarRatingComponent 
                                                                    name="rate2" 
                                                                    editing={false}
                                                                    starCount={10}
                                                                    value={item.rating.average}
                                                                    /><br></br>
                                                            <span>Summary: </span>{item.summary}<br></br>
                                                            {/* <button  onClick = {this.readMore} className="btn btn-primary readMoreButton">Read more ...</button> */}
                                                            <Readmore item = {item}/>

                                                        </div>


                                                    </div>
                                            </div>
                                        </div>
                                    ))};
                            </ul>
                            </div> 
            </div>
        );
    }
}

export default homePage;