import { useState } from "react";

 export default function ParentComponentstate(){
    const [name1,setName] = useState('John')
    return <ChildComponentstate name1 = {name1} setName={setName}/>
} 

function ChildComponentstate(Props1){
    return(
        <>
        <h1>Hello {Props1.name1}</h1>
        <button onClick={()=> Props1.setName('Mark')}>Change Name</button>
        </>
    )
}
