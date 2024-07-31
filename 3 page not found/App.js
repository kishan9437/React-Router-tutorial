import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Navbar from './Component/Navbar';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="App">
      <h1>React Router v6</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/*" element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
