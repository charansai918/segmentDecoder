// import logo from './logo.svg';
import './App.css';
import React, {BrowserRouter,Routes,Route} from "react-router-dom"
import Simulation from './components/Simulation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Simulation></Simulation>}></Route>


      </Routes>
      </BrowserRouter>

     
     
    </div>
  );
}

export default App;
