import React, { Component } from 'react';
// import Programs from '../components/program'

class homePage extends Component {
   constructor(props){
       super(props);
       this.state = {
           items : []
       }
   }

    // displayPrograms = async (e) => {
    //     e.preventDefault();

    //     const reqURL=`http://api.tvmaze.com/shows `;
    //     const api_call = await fetch(reqURL);
    //     const data = await api_call.json();
    //     console.log(data);
    //     this.setState({
    //         name : data.name,
            
    //     });
    //     console.log(this.name);

    componentDidMount(){
        fetch('http://api.tvmaze.com/shows')
        .then(res => res.json())
        .then(json =>{
            this.setState({

                items : json

            })
        });
    }
    // }
    
    render() {
        var { items} = this.state;
        return (
            <div>
                <h1>
                    Tv Maze progrms
                </h1>
                <button onClick = {this.displayPrograms}>Look All the Programs</button>
                {/* <Programs
                    name = {this.state.name}

                /> */}
                <ul>
                    {items.map(item =>(
                        <p key = {item.id}>
                        {item.name} | {item.rating.average} | {item.summary} | {item.image.medium}|{item.image.original}
                        <button>Read more</button>
                        </p>
                    ))};
                </ul>
            </div>
        );
    }
}

export default homePage;