import './App.css';
import Homepage from './components/Homepage';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Competition from './components/Competitions';
import Sponsors from './components/Sponsors';
import Alumni from './components/Alumni';

function App() {
  return (
    <div className="App">
     <Router>
     <Routes>
         <Route exact path="/" element={<Homepage />} />
         <Route path="/competitions" element={<Competition />} />
         <Route path="/sponsors" element={<Sponsors/>} />
         <Route path="/alumni" element={<Alumni/>} />
     </Routes>
 </Router>
 </div>
  );
}

export default App;
