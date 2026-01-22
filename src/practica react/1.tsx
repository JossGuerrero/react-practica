import { useState, useEffect } from "react";

type Props = {
  clearSignal: number;
};

export default function CopyBox({ clearSignal }: Props) {
  const [text, setText] = useState<string>("");
  const [copy, setCopy] = useState<string>("");

  useEffect(() => {
    setText("");
    setCopy("");
  }, [clearSignal]);

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={() => {
          if (text === "") {
            setCopy("No hay texto para copiar");
          } else {
            setCopy(text);
          }
        }}
      >
        Copiar
      </button>

      <p>Original: {text}</p>
      <p>Copiado: {copy}</p>
    </div>
  );
}
