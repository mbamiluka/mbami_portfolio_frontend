import React, { useState } from 'react';
import './App.css';
import bulbOn from './assets/bulb-on.svg';
import HomePage from './pages/HomePage';

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <HomePage />
  );
}

export default App;