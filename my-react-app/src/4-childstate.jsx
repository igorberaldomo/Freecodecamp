import { useState } from "react";

export default function ParentComponentstate(){
    const [name,setName] = useState('John')
    return <ChildComponentstate name = {name} setName={setName}/>
} 

function ChildComponentstate(Props){
    return(
        <>
        <h1>Hello {Props.name}</h1>
        <button onClick={()=> Props.setName('Mark')}>Change Name</button>
        </>
    )
}