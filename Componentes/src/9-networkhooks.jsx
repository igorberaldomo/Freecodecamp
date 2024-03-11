import { useState } from "react";

function App(){
    const [tile, setTitle] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = async() =>{
        const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1'); {/*dummy hook isnt meant to work*/}
        const task = await response.json();
        console.log(task)
        setTitle(task.title);
    };

    return <h1>{title}</h1>
}