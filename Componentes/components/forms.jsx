import { useState } from "react";

export default function Form (){
    const[username,setUsername] = useState();
    const[usernameError,setUsernameError] = useState();

    const handleSubmit= (e)=>{
        e.preventDefault();
        if(usernameError){
            alert('Unable to submit: form contain errors')
        }else{
        alert(username);
        }
    }
    const handleUsername= e =>{
        const {value} = e.target;
        setUsername(value);
        //validação de user

        if(value.length<=6){
            setUsernameError('Username length must be more than 6 characters');
        } else{
            setUsernameError();
        }
    };
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="iusername">Username:</label>
            <input type="text" name="username" id="iusername" value={username} onChange={e=> handleUsername(e.target.value)}/>
            <p>{usernameError}</p>
            <button>Submit</button>
        </form>
    );
}
    