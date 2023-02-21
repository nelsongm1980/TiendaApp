import { useState } from 'react'
import './App.css';
import Home from "./Componentes/Home";
import Error from "./Componentes/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Support from "./Componentes/Support";
import Inventario from "./Componentes/Inventario";


function App() {
  const [count, setCount] = useState(0);

  return (    
    <>      
      <BrowserRouter>           
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="*" element={<Error/>}/>
          <Route exact path="/inventario" element={<Inventario />}/>
          <Route exact path="/support" element={<Support/>}/>                      
        </Routes>
      </BrowserRouter>  
    </>
  )    
}

export default App