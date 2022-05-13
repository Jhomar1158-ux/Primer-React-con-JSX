import React from 'react';

const Groceries = props =>{

    const groceriesList = ["onions", "thyme", "butter" ,"mushrooms"];

    return(
        <ul>
            {
                // item -> elemento de la lista, i -> La posición del elemento
                groceriesList.map( (item, i) =>
                    <li>{item} - {i} </li>
                )
            }
        </ul>
    );
}

export default Groceries;