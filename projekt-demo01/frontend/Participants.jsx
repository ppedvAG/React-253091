import React, { useEffect, useState } from 'react';
import ParticipantForm from './ParticipantForm.jsx';

export default function Participants() {
    const [participants, setParticipants] = useState([]);
    const fetchParticipants = async () => {
        const res = await fetch('http://localhost:4000/participants');
        setParticipants(await res.json());
    };
    useEffect(() => { fetchParticipants() }, []);
    const addParticipant = p => setParticipants([...participants, p]);
    return (
        <div>
            <h2>Teilnehmer</h2>
            <ul>{participants.map(p => <li key={p.id}>{p.name}</li>)}</ul>
            <ParticipantForm onAdd={addParticipant} />
        </div>
    );
}
