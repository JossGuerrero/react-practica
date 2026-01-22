import {useState} from "react" ;

export default function ClearButton (){
    const[text,setText]= useState <string> ("");

    return(
        <>
        <input 
        value={text} 
        onChange={(e)=> setText (e.target.value)}
        />
        <button onClick ={()=> setText ("")}>
            LIMPIAR
        </button>
        </>
    );


}