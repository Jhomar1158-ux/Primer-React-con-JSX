import React from 'react';

const PersonCard = (props) =>{
    // Desestructuramos!
    const {firstName:nombre, lastName:apellido, age:edad, hairColor:colorCabello}=props;
    return(
        <div>
            <h1>{nombre} {apellido}</h1>
            <h4>Edad: {edad}</h4>
            <h3>Hair color: {colorCabello}</h3>
        </div>
    )
}

export default PersonCard;