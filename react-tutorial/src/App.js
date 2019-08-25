import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table'
function App() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]

  return (
    <div className="container">
         <Table characterData={characters} />
    </div>
  );
}

export default App;
