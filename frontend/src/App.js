import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Competition from './components/Competitions/Competitions';
import Sponsors from './components/Sponsors/Sponsors';
import Sedrica from './components/Sedrica-Homepage/Sedrica';
import Homepage from './components/Umic(Home)/Homepage';


function App() {
  return (
    <div className="App">
      <Router>

          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/competitions" element={<Competition />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/Teams/Sedrica" element={<Sedrica />} />
          </Routes>
       
      </Router>
    </div>
  );
}

export default App;
