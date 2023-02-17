import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Navbar from './Componentes/Navbar';
import Home from "./Componentes/Home";
import Footer from "./Componentes/Footer";
import Error from "./Componentes/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Support from "./Componentes/Support";


function App() {
  const [count, setCount] = useState(0);

  return (    
    <>      
      <BrowserRouter>           
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="*" element={<Error/>}/>
          <Route exact path="/support" element={<Support/>}/>                      
        </Routes>
      </BrowserRouter>  
    </>
  )    
}

export default App