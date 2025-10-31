import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]); // Liste
  const [input, setInput] = useState(""); // Eingabefeld
  const [editIndex, setEditIndex] = useState(null); // aktuell bearbeitetes Element

  const addOrEditItem = () => {
    if (input.trim() === "") return; // leere Eingaben verhindern
    if (editIndex !== null) {
      // bearbeiten
      const updated = [...items];
      updated[editIndex] = input;
      setItems(updated);
      setEditIndex(null);
    } else {
      // hinzufügen
      setItems([...items, input]);
    }
    setInput("");
  };

  const deleteItem = (i) => setItems(items.filter((_, idx) => idx !== i));
  const editItem = (i) => {
    setInput(items[i]);
    setEditIndex(i);
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2> Listenverwaltung</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Neues Element..."
      />
      <button onClick={addOrEditItem}>
        {editIndex !== null ? "Speichern" : "Hinzufügen"}
      </button>

      <ul>
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              marginTop: 5,
              padding: 5,
              background: i === editIndex ? "#000000ff" : "#000000ff",
              borderRadius: 5,
            }}
          >
            {item}
            <button onClick={() => editItem(i)} style={{ marginLeft: 10 }}>
              Edit
            </button>
            <button onClick={() => deleteItem(i)} style={{ marginLeft: 5 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
