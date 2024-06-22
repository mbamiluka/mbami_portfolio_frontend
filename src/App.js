import React, { useState } from 'react';
import './App.css';
import bulbOn from './assets/bulb-on.svg';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ThemeContext } from './contexts/ThemeContext';
import reportWebVitals from './reportWebVitals';

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <Router>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/experience' element={<ExperiencePage />} />
          <Route path='/project' element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;