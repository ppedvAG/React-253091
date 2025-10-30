import React from 'react';
import './index.css';

// Importiere alle Komponenten
import { Greeting } from './components/Greeting';
import { Counter } from './components/Counter';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <h1>React Überblick - Modul 1 bis 3</h1>

      {/* Props-Beispiel */}
      <Greeting name="Max" />
      {/* useState-Beispiel */}
      <Counter />
      {/* useEffect-Beispiel mit Kommunikation */}
      <Dashboard />
    </div>
  );
}

export default App;
