import React, {useState} from 'react';

const GeneradorCajasForm = props =>{

    const [color, setColor]=useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        // =============
        props.onNewColor(color);
        setColor("")
    }

    return(
        <form onSubmit={ handleSubmit }>
            <h1>Color: </h1>
            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => setColor(e.target.value) }
                value={ color }
            ></textarea>
            <input type="submit" value="Add" />
        </form>
    );
}

export default GeneradorCajasForm;