import {useState} from "react";

type Props = {onAttempt: ()=> void};

export default function Email({ onAttempt }: Props) {
  const [email, setEmail] = useState("");
  
  
  const isValid = email.includes("@") && email.includes(".") && email.length >= 5;

  return (
    <>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      
      <button onClick={() => {
        if (isValid) onAttempt(); 
      }}>
        Validar
      </button>

     
      <p>{isValid ? "Email válido " : "Email inválido "}</p>
    </>
  );
}




