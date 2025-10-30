import React, { useState } from "react";

// Komponente mit React Hook useState

export function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const reset = () => setCount(0);

    return (
        <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <p>Aktueller Zählerstand: {count}</p>
            <button onClick={increment}>Erhöhen</button>
            <button onClick={reset}>Zurücksetzen</button>
        </div>
    );
}