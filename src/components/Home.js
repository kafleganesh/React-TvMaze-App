import React, { Component } from 'react';
import Programs from '../components/program'

class homePage extends Component {
    state = {
        name : undefined,
    }

    displayPrograms = async (e) => {
        e.preventDefault();

        const reqURL=`http://api.tvmaze.com/shows `;
        const api_call = await fetch(reqURL);

        const data = await api_call.json();

        console.log(data);

        this.setState({
            name : data.name,
            
        });
        console.log(this.name);
        
    }
    
    

    render() {
        return (
            <div>
                <h1>
                    Tv Maze progrms
                </h1>
                <button onClick = {this.displayPrograms}>Look All the Programs</button>
                <Programs
                    name = {this.state.name}

                />
            </div>
        );
    }
}

export default homePage;