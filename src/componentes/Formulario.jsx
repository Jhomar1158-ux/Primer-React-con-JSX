import React, {useState} from 'react';


const Formulario = props =>{
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] =useState("");

    const createUser = (e) => {
        e.preventDefault(); 
        const newUser = { firstname, lastname, password, confirmPassword };
        console.log("Welcome", newUser);
        // setUsername("");
    };

    return(
        <div>
            <form onSubmit={createUser}>
            <div>
                <label>Nombre: </label>
                <input type="text" onChange={e => setFirstname(e.target.value)} value={firstname}/>
            </div>
            <div>
                <label>Apellido: </label>
                <input type="text" onChange={e => setLastname(e.target.value)} value={lastname}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="email" onChange={e => setEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <label>Contraseña: </label>
                <input type="password" onChange={e => setPassword(e.target.value)} value={password}/>
            </div>
            <div>
                <label>Confirmar Contraseña: </label>
                <input type="password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword}/>
            </div>
            <input type="submit" value="Create User" />

        </form>
        <h2>Nombre: {firstname}</h2>
        <h2>Apellido: {lastname}</h2>
        <h2>Email: {email}</h2>
        <h2>Contraseña:{password}</h2>
        <h2>Confirmar Contraseña: {confirmPassword}</h2>
        </div>
        
        

    )
}


export default Formulario;