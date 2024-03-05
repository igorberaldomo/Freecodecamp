import { useState } from "react";

export default function ParentComponent(){
    const [name,setName] = useState('John')
    return <ChildComponent name = {name} setName={setName}/>
} 

function ChildComponent(Props){
    return(
        <>
        <h1>Hello {Props.name}</h1>
        <button onClick={()=> Props.setName('Mark')}>Change Name</button>
        </>
    )
}