import React, { useState } from "react";


export function RectangleCalc() {
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [factor, setFactor] = useState("");
  const [area, setArea] = useState<number | null>(null);
  const [perimeter, setPerimeter] = useState<number | null>(null);


  const calculate = () => {
    const b = Number(base);
    const h = Number(height);
    const f = Number(factor);


    if (b > 0 && h > 0 && f > 0) {
      setArea(b * h * f);
      setPerimeter(2 * (b + h) * f);
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


      <label htmlFor="factor">Factor</label>
      <input
        id="factor"
        placeholder="factor"
        value={factor}
        onChange={(e) => setFactor(e.target.value)}
      />


      <button onClick={calculate}>Calcular</button>


      {area !== null && <p>Área ajustada: {area}</p>}
      {perimeter !== null && <p>Perímetro ajustado: {perimeter}</p>}
    </div>
  );
}
