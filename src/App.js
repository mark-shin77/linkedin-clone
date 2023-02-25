import React from 'react';
import './App.css';
import Login from './Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="App">
      <Header/>

      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Sidebar/>
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;

