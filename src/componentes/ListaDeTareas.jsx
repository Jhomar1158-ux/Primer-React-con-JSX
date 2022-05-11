import React from 'react';

const ListaDeTareas = (props) =>{
    const {tareita} = props;
    return(
        <ul>
            <li>Learn React</li>
            <li>Climb Mt. Everest</li>
            <li>Run a marathon</li>
            <li>Feed the dogs</li>
            <li>{tareita}</li>
        </ul>
    )
}


export default ListaDeTareas;