import React, { useState } from 'react';
import './App.css';
import bulbOn from './assets/bulb-on.svg';
import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import LoginPage from './pages/LoginPage';
import AdminHomePage from './pages/AdminHomePage';
import AdminSignupPage from './pages/AdminSignupPage';
import PrivatePage from './pages/PrivatePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeContext } from './contexts/ThemeContext';
import reportWebVitals from './reportWebVitals';

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/experience' element={<ExperiencePage />} />
            <Route path='/project' element={<ProjectsPage />} />
            <Route path='/project/:id' element={<ProjectDetailsPage />} />
            <Route path='/signin' element={<LoginPage />} />
            <Route path='/signup' element={<AdminSignupPage />} />
            <Route path='/admin' element={<PrivatePage element={AdminHomePage} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;