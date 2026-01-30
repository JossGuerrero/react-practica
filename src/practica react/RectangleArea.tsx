import React, { useState } from "react";


export function RectangleArea() {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState<number | null>(null);


  const calculate = () => {
    const b = Number(base);
    const h = Number(height);
    if (b > 0 && h > 0) {
      setArea(b * h);
    }
  };


  return (
    <div>
      <label htmlFor="base">Base</label>
      <input
        id="base"
        placeholder="base"
        value={base}
        onChange={(e) => setBase(e.target.value)}
      />


      <label htmlFor="height">Altura</label>
      <input
        id="height"
        placeholder="altura"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />


      <button onClick={calculate}>Calcular</button>


      {area !== null && <p>Área: {area}</p>}
    </div>
  );
}
