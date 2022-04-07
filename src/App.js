import './App.css';
import Home from './components/Home';
import Couple from './components/Couple';
import Event from './components/Event';
import Wishes from './components/Wishes';
import Attending from './components/kehadiran/Attending'
import { useState, useEffect} from 'react';



function App() {

  return (
    <div className="App">
        <Home/>
        <Couple/>
        <Event/>
        <Wishes/>
        <Attending/>
    </div>
  );
}

export default App;
