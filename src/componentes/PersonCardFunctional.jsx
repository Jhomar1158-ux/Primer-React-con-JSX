import React from 'react';


const PersonCardFunctional = props =>{

    return(
        <div>
            <h1> {props.firstName} {props.lastName}</h1>
            <h4>Edad: {props.age}</h4>
            <h3>Hair color: {props.hairColor}</h3>
        </div>
    )
}

export default PersonCardFunctional;