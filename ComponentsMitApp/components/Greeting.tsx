import React from 'react';

// Typdefinition für Props
type GreetingsProps = {
    name: string;
};

// Komponente, die eine Begrüßung anzeigt
export function Greeting({ name }: GreetingsProps) {
    return <h2>Hallo {name}, Willkommen</h2>;
}