import React, {useState} from 'react';


const Formulario = props =>{
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");

    const [lastname, setLastname]=useState("");
    const [lastnameError, setLastnameError] = useState("");


    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const [confirmPassword, setConfirmPassword] =useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [subido, setSubido] = useState(false);

    const createUser = (e) => {
        e.preventDefault(); 
        const newUser = { firstname, lastname, password, confirmPassword };
        console.log("Welcome", newUser);
        // Cambiamos el valor de nuestra var
        setSubido(true);
    };

    // const formMessage = () =>{
    //     if(subido){
    //         return "Has sido registrado!";
    //     }return "Por favor, regístrate!";
    // }

    const handleFirstname = e =>{
        setFirstname(e.target.value);
        if(e.target.value.length<2){
            if(e.target.value == ""){
                setFirstnameError("");
            }else if(e.target.value.length<2){
                setFirstnameError("First name must be at leaste 2 characters");
            }
        }else{
            setFirstnameError("");
        }

    }

    const handleLastname = e =>{
        setLastname(e.target.value);
        if(e.target.value.length<2){
            if(e.target.value == ""){
                setLastnameError("");
            }else if(e.target.value.length<2){
                setLastnameError("Last name must be at leaste 2 characters");
            }
        }else{
            setLastnameError("");
        }
    }
    const handleEmail = e =>{
        setEmail(e.target.value);
        if(e.target.value.length<5){
            if(e.target.value == ""){
                setLastnameError("");
            }else if(e.target.value.length<5){
                setLastnameError("Email must be at leaste 5 characters");
            }
        }else{
            setLastnameError("");
        }
    }

    const handlePassword = e =>{
            setPassword(e.target.value);
            if(e.target.value.length<8){
                if(e.target.value == ""){
                    setPasswordError("");
                }else if(e.target.value.length<8){
                    setPasswordError("Password must be at leaste 8 characters");
                }
            }else{
                setPasswordError("");
            }
        }

    const handleConfirmPassword = e =>{
        console.log("==================")
        console.log(e)
        // console.log(e.target)
        console.log(e.target.value)
        console.log("==================")

            setConfirmPassword(e.target.value);
            if(e.target.value.length<8){
                if(e.target.value == ""){
                    setConfirmPasswordError("");
                }else{
                    setConfirmPasswordError("Contraseña incorrecta!");
                }
            }else{
                console.log(password)
                console.log(confirmPassword)

                if(password!==e.target.value){
                    setConfirmPasswordError("Las contraseñas no coinciden!");
                }else{
                    setConfirmPasswordError("");
                }
            }
        
    }



    return(
        <div>
            <form onSubmit={createUser}>
                {/* Mensaje */}
                {/* Usando el operador Ternario */}
            {
                subido ?
                <h2>Gracias, te registraste!</h2> :
                <h2>Registrate por favor!</h2>
            }
            <div>
                <label>Nombre: </label>
                <input type="text" onChange={ handleFirstname } value={firstname}/>
                {
                    firstnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Apellido: </label>
                <input type="text" onChange={ handleLastname }  value={lastname}/>
                {
                    lastnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="email" onChange={ handleEmail } value={email}/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Contraseña: </label>
                <input type="password" onChange={handlePassword} name="password" value={password}/>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirmar Contraseña: </label>
                <input type="password" onChange={handleConfirmPassword} name="confirmPassword"/>
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                }
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