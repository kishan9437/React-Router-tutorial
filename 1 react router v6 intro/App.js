import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
function App() {
  return (
    <div className="App">
      <h1>React Router v6</h1>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />

        </Routes>
      </Router>

    </div>


  );
}

export default App;
