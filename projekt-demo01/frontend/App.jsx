import React, { useState } from 'react';
import Login from './Login.jsx';
import Participants from './Participants.jsx';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return loggedIn ? <Participants /> : <Login onLogin={() => setLoggedIn(true)} />;
}
