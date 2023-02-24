import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>

      {/* App Body */}
      <div className="app-body">
        <Sidebar/>
      </div>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
    </div>
  );
}

export default App;

