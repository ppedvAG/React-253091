import React, { useState, useEffect } from "react";
import { UserCard } from "./UserCard";

// Komponente, die mehrere Benutzer anzeigt
export function Dashboard() {
    const [users, setUsers] = useState([
        { name: "Anna", age: 28, job: "Designerin" },
        { name: "Ben", age: 34, job: "Entwickler" },
        { name: "Clara", age: 25, job: "Marketing" },
    ]);

    // useEffect: wird nach jedem Rendern aufgerufen (ähnlich Lifecycle)
    useEffect(() => {
        console.log("Dashboard wurde gerendert:", users);
    }, [users]); // Nur ausführen, wenn sich users ändern

    // Funktion fügt neuen Benutzer hinzu
    const addUser = () => {
        const newUser = { name: "David", age: 30, job: "Manager" };
        setUsers([...users, newUser]);
    };

    return (
        <div>
            <h2>Benutzer-Dashboard</h2>
            {users.map((user, index) => (
                <UserCard key={index} user={user} />
            ))}
            <button onClick={addUser} style={{ marginTop: "10px" }}>
                Neuen Benutzer hinzufügen
            </button>
        </div>
    );

}