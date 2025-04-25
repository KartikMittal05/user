import React from 'react';
import UserTable from './components/UserTable';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>MY USER APP</h1>
      </header>
      <main className="app-main">
        <UserTable />
      </main>
      <footer className="app-footer">
        <p>Design and Developed By kARTIK Mittal</p>
      </footer>
    </div>
  );
}

export default App;
