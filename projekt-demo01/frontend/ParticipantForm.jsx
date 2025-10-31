import React, { useState } from 'react';

export default function ParticipantForm({ onAdd }) {
    const [name, setName] = useState('');
    const submit = async () => {
        if (!name) return;
        const res = await fetch('http://localhost:4000/participants', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });
        const data = await res.json();
        onAdd(data);
        setName('');
    };
    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
            <button onClick={submit}>Hinzufügen</button>
        </div>
    );
}
