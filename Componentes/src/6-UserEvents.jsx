function app (){
    const handleClick = (event)=>{
        console.log("Hello World!");
        console.log(event);
    }
    return(
        <button onClick={handleClick}>
            Click me
        </button>
    )
}

export default app