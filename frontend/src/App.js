import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, useLocation, Routes } from 'react-router-dom';

import MyClass from './components/Nav';
import Competition from './components/Competitions/Competitions';
import Sponsors from './components/Sponsors/Sponsors';
import Alumni from './components/Alumni/Alumni';
import Sedrica from './components/Sedrica-Homepage/Sedrica';
import Homepage from './components/Umic(Home)/Homepage';

function PageTransition({ children }) {
  const [fade, setFade] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => {
      setFade(false);
    }, 500); // Duration of the fade-out effect

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className={`page ${fade ? 'fade-out' : 'fade-in'}`}>
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <MyClass />
        <PageTransition>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/competitions" element={<Competition />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/Teams/Sedrica" element={<Sedrica />} />
          </Routes>
        </PageTransition>
      </Router>
    </div>
  );
}

export default App;
