import {useState,useEffect} from  "react";

type Props ={
  clearSignal : Props
};


export default function ({clearSignal}:Props){
  const [text,setText]=useState <string> (" ");
  const [copy,setCopy]=useState <string> ("");

  useEffect (()=>{
    setText (""),
    setCopy ("")
  },[clearSignal])

  return (
    <div>
      <input
      value={text}
      placeholder="escriba aca :v"
      onChange={(e)=>setText (e.target.value)}
      />
      
      <button
      onClick={()=>{
        if(text === (" ")){
          setCopy ("no hay texto")
        }else {
          setCopy (text)
        }
      }}>
        copiar

      </button>
      <p>original:{text}</p>
      <p>copiado:{copy}</p>


    </div>

  )







};

