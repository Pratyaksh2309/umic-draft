import './App.css';
import Homepage from './components/Homepage';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Competition from './components/Competitions';

function App() {
  return (
    <div className="App">
     <Router>
     <Routes>
         <Route exact path="/" element={<Homepage />} />
         <Route path="/competitions" element={<Competition />} />
     </Routes>
 </Router>
 </div>
  );
}

export default App;
