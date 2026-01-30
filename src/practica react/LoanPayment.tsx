
import React, { useState } from "react";


export function LoanPayment() {
  const [amount, setAmount] = useState("");
  const [interestPct, setInterestPct] = useState("");
  const [vip, setVip] = useState(false);


  const [interest, setInterest] = useState<number | null>(null);
  const [discount, setDiscount] = useState<number | null>(null);
  const [total, setTotal] = useState<number | null>(null);


  const calculate = () => {
    const a = Number(amount);
    const p = Number(interestPct);


    if (a > 0 && p >= 0) {
      const i = a * (p / 100);
      const d = vip ? i * 0.1 : 0;
      setInterest(i);
      setDiscount(d);
      setTotal(a + (i - d));
    }
  };


  return (
    <div>
      <label htmlFor="amount">Monto</label>
      <input
        id="amount"
        placeholder="monto"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />


      <label htmlFor="interest">Interés %</label>
      <input
        id="interest"
        placeholder="interés"
        value={interestPct}
        onChange={(e) => setInterestPct(e.target.value)}
      />


      <label>
        <input
          type="checkbox"
          checked={vip}
          onChange={(e) => setVip(e.target.checked)}
        />
        Cliente preferencial
      </label>


      <button onClick={calculate}>Calcular</button>


      {interest !== null && <p>Interés: {interest}</p>}
      {discount !== null && <p>Descuento: {discount}</p>}
      {total !== null && <p>Total a pagar: {total}</p>}
    </div>
  );
}
