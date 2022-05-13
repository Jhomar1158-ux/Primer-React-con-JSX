import React, {useState} from 'react';

const DisplayCajasForm = ({currentColor}) =>{


    // const boxStyle ={
    //     background: props.boxColor,
    //     height:'20px',
    //     width:'20px',
    // }

    console.log(currentColor);

    return(
        <> 
            {
                currentColor.map((item, i) =>
                    <div style={{background:item, height:'20px',width:'20px'}} key={i}>
                    </div>
                )
            }
        </>
    );
}

export default DisplayCajasForm;