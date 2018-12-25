import React, { Component } from 'react';
import Readmore from './Readmore';
import logo from '../tvm-header-logo.png';
import StarRatingComponent from 'react-star-rating-component';
class homePage extends Component {
   constructor(props){
       super(props);
       this.state = {
           items : [],
           search: ''
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

    updateSearch(event){
        this.setState({search : event.target.value});
    }
     
    render() {
        var { items} = this.state;
        let filteredSeries = items.filter((item) =>{
            return item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        });
        return (
            <div>
                    <nav class="navbar fixed-top">
                        <div className = "container">
                        <div className = "row ">
                            <div className =  " col-sm-4">
                                <img class="img-fluid image-size"  src= {logo} alt="Tvmaze_logo"/>
                            </div>
                            <div className = "col-sm-8">
                                {/* <Search /> */}
                                <div className = "search-body">
                                <input type = "text" className = "search" placeholder = "Search Shows and People" value = {this.state.search}  onChange = {this.updateSearch.bind(this)}/>
                                </div>
                            </div>
                        </div>
                        </div>

                        
                    </nav> 
                    <div className = "main_body">         
                            <ul>
                                {filteredSeries.map(item =>(
                                        <div className = "container information" key = {item.id}>
                                            <div className = "row">
                                                    <div className="col-sm-3 ">
                                                        <img className="img-thumbnail" alt = " " src={item.image.medium}/>
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