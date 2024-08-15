import './App.css';
import Homepage from './components/Umic(Home)/Homepage';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Competition from './components/Competitions/Competitions';
import Sponsors from './components/Sponsors/Sponsors';
import Alumni from './components/Alumni/Alumni';
import Sedrica from './components/Sedrica-Homepage/Sedrica';

function App() {
  return (
    <div className="App">
     <Router>
     <Routes>
         <Route exact path="/" element={<Homepage />} />
         <Route path="/competitions" element={<Competition />} />
         <Route path="/sponsors" element={<Sponsors/>} />
         <Route path="/alumni" element={<Alumni/>} />
         <Route path="/Teams/Sedrica" element={<Sedrica/>} />
     </Routes>
 </Router>
 </div>
  );
}

export default App;
