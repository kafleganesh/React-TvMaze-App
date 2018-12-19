import React, { Component } from 'react';
import Details from './program';
import Readmore from './Readmore';
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
                <h1 className = "title"> 
                    Tv Maze progrms
                </h1>
                <ul>
                    {items.map(item =>(
                            <div className = "container information" key = {item.id}>
                                <div className = "row">
                                        <div className="col-sm-3">
                                            <img className="img-thumbnail" src={item.image.medium}/>
                                        </div>
                                        <div className="col-sm-9">
                                            <p>Name: {item.name}</p> 
                                            <p>Average Rating: {item.rating.average} </p>
                                            <p>Summary :{item.summary} </p>
                                            {/* <button  onClick = {this.readMore} className="btn btn-primary readMoreButton">Read more ...</button> */}
                                            <Readmore item = {item}/>
                                        </div>

                                </div>
                            </div>
                        ))};
                </ul>
            </div>
        );
    }
}

export default homePage;