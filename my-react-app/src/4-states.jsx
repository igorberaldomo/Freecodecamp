import { useState } from "react";

function States(){
    const [name,SetName] = useState('John')
    return( <><h1>Hello {name}</h1>
    <button onClick={()=> SetName('Mark')}>Change Name</button></> 
    )
} 

export default States