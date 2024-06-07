import React, { useState } from "react";

export default function Sayac() {
  const [sayi, setSayi] = useState(0);

  const artirici = () => {
    setSayi(sayi + 1);
  };
  const azaltici = () => {
    setSayi(sayi - 1);
  };
  const reset = () => {
    setSayi(0);
  };

  const stil = {
    fontSize: "1.5em",
    marginBottom: "0.4em",
    color: sayi % 2 === 0 ? "pink" : "brown",
  };

  return (
    <div className="widget-counter container">
      <h2>Sayaç</h2>
      <div id="sayici" style={stil}>
        Sayı: {sayi} {sayi % 2 === 0 ? "çift" : "tek"} sayıdır {}
      </div>
      <div>
        <button id="artirici" onClick={artirici}>
          Artırıcı
        </button>
        <button id="decrement" onClick={azaltici}>
          Azaltıcı
        </button>
        <button id="resetCount" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
