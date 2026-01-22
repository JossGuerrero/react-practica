import { useState } from "react";

export default function clearbuton(){
    const [text,setText]=useState ("");
    return (
        <>
        <input 
        value={text}
        onChange={(e)=>setText(e.target.value)} />

        <button onClick={()=>setText("")}>
            limpiar
        </button>

        </>


    )
}