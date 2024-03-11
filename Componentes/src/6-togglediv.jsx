import { useState } from "react";

function togglediv(){
    const [ isParagraphVisible, SetIsParagraphVisible] = useState(true);
    const toggleStatus= ()=>{
        SetIsParagraphVisible(!isParagraphVisible);
    };
    return (
        <>
        <h1>Change UI Based on click</h1>
        {isParagraphVisible &&(
        <p>This paragraph Will be shown/hidden on click</p>
    )}
    <button onClick={toggleStatus}>
        {isParagraphVisible?'Hide':'Show'} Paragraph
    </button>
        </>
    );
}

export default togglediv