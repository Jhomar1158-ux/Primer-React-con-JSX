import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
                age: this.props.age
        };
    }
    
    aumenta = () =>{
        console.log("---")
        this.setState({age: this.state.age + 1});
        
    }

    render(){
        return(
            <div>
                <h1> {this.props.firstName} {this.props.lastName}</h1>
                <h4>Edad: {this.state.age}</h4>
                <h3>Hair color: {this.props.hairColor}</h3>
                <button onClick={() => this.aumenta()}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
    
}

export default PersonCard;