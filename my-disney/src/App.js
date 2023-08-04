import "./App.css";
import Details from "./components/Details";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import  { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Details" element={<Details/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
