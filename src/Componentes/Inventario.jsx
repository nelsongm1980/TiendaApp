import { Button } from "bootstrap";
import React, {useState, useEffect, DOMAttributes} from "react";
import Navbar from "./Navbar";
import Entrada from "../DB/Entrada";

export const Inventario = () => {

  const [registro, setRegistro] = useState([]);
  
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [costo, setCosto] = useState("");
  const [venta, setVenta] = useState("");

  /*useEffect(()=> {
    localStorage.setItem("registro", JSON.stringify(registro));
  }, [registro]);*/

  const limpiarFormulario = () => {
    setNombre("");
    setCantidad("");
    setCosto("");
    setVenta("");
      document.getElementById("miFormulario").reset();
  }
  
  const botonGuardar = (e) => {
    e.preventDefault();
    let miRegistro= {nombre, cantidad, costo, venta};
    setRegistro([...registro, miRegistro]);
    limpiarFormulario();
  }
  

    return (      
      <>
      <Navbar />
    <div className="align-middle">  

        <div id="miFormulario" className="flex justify-center p-3" onSubmit={botonGuardar}>
          <input className="border-2 border-r-4 w-190 m-1" placeholder="Descripción del producto" onChange={(e)=>setNombre(e.target.value)} />
          <input className="border-2 border-r-2 w-16 m-1" placeholder="Cantidad" onChange={(e)=>setCantidad(e.target.value)} />
          <input className="border-2 w-16 m-1" placeholder="$ costo" onChange={(e)=>setCosto(e.target.value)} />
          <input className="border-2 w-16 m-1" placeholder=" $ venta" onChange={(e)=>setVenta(e.target.value)} />
          <div className=" flex flex-col ">
            <button type="button" className="btn btn-accent" onClick={Entrada} >
              Entrada</button>
          </div>
        </div>

      <div className="flex justify-center p-3">  
        <table className="table p-1 max-sm:{flex}">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Descripción</th>
              <th scope="col">Cantidad</th>
              <th scope="col">costo</th>
              <th scope="col">venta</th>
              <th scope="col">Transferir</th>
              <th scope="col">Centro costo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Galleta Salada</td>
              <td>210</td>
              <td>130</td>
              <td>160</td>
              <td type="checkbox" class="checkbox-success align-middle text-center">X</td>
              <td>Almacen</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Caramelo</td>
              <td>5000</td>
              <td>10</td>
              <td>40</td>
              <td type="checkbox" class="checkbox-success align-middle text-center">X</td>
              <td>Tienda</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Ron Habana Club</td>
              <td>50</td>
              <td>1200</td>
              <td>1400</td>
              <td type="checkbox" class="checkbox-success align-middle text-center">X</td>
              <td>Tienda</td>
            </tr>
          </tbody>
      </table>
      </div>
    </div>
      </>
  )
}

export default Inventario;