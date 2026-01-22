import { useRef, useState } from "react";

export default function Cont() {
  const count = useRef(0);
  const [, forceRender] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          count.current++;
          forceRender(x => x + 1);
        }}
      >
        contar intento
      </button>

      <p>intentos: {count.current}</p>
    </>
  );
}
