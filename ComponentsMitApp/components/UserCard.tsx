import React from "react";

// Typ für Props (Objekt)
type UserCardProps = {
    user: {
        name: string;
        age: number;
        job: string;
    };
};

// Inline-Styles als Objekt
const cardStyle: React.CSSProperties = {
    border: "2px solid lightblue",
    borderRadius: "8px",
    padding: "10px",
    margin: "10px",
    backgroundColor: "#f0f8ff",
};

// Komponente zeigt Benutzerinformationen an
export function UserCard({ user }: UserCardProps) {
    return (
        <div style={cardStyle}>
            <h3>{user.name}</h3>
            <p>Alter: {user.age}</p>
            <p>Beruf: {user.job}</p>
        </div>
    );
}