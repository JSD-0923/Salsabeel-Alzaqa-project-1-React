import React, { useEffect } from 'react';
import './App.css';
import Router from './Router.js';
import { useTheme } from './ThemeContext'; 
function App() {
  const { theme } = useTheme();

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Router />
    </div>
  );
}

export default App;