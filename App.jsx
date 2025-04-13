import { useState } from "react";

const options = [
  {
    category: "Ancrage & Amarrage",
    items: [
      {
        label: "Rouleau d'étrave rétractable avec ancre inox",
        retailPrice: 9438,
        dealerPrice: 8494.2,
      },
    ],
  },
  {
    category: "Audio & Divertissement",
    items: [
      {
        label: "Caméra d'action",
        retailPrice: 876,
        dealerPrice: 750,
      },
      {
        label: "Système audio Fusion Marine",
        retailPrice: 13645,
        dealerPrice: 11500,
      },
    ],
  },
];

export default function App() {
  const [selected, setSelected] = useState({});

  const handleToggle = (label) => {
    setSelected((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const total = options.reduce(
    (acc, group) => {
      group.items.forEach((item) => {
        if (selected[item.label]) {
          acc.retail += item.retailPrice;
          acc.dealer += item.dealerPrice;
        }
      });
      return acc;
    },
    { retail: 0, dealer: 0 }
  );

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Configurateur WAMA 26</h1>
      {options.map((group) => (
        <div key={group.category} style={{ marginBottom: 20 }}>
          <h2>{group.category}</h2>
          {group.items.map((item) => (
            <label key={item.label} style={{ display: 'block', marginBottom: 8 }}>
              <input
                type="checkbox"
                checked={!!selected[item.label]}
                onChange={() => handleToggle(item.label)}
              />
              {" "}{item.label} — {item.retailPrice} DT (revendeur: {item.dealerPrice} DT)
            </label>
          ))}
        </div>
      ))}
      <hr />
      <h3>Total prix détail : {total.retail} DT</h3>
      <h3>Total prix revendeur : {total.dealer} DT</h3>
      <h3>Marge estimée : {total.retail - total.dealer} DT</h3>
    </div>
  );
}