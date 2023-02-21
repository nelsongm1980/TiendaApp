import { Button } from "bootstrap";
import React from "react";
import Navbar from "./Navbar";
import Entrada from "../DB/Entrada";

export const Inventario = () => {
    return (      
      <>
      <Navbar />
        <div className="flex p-2">
          <input className="dropdown border-2 border-r-2 w-80 m-1" placeholder="Descripción del producto"/>
          <input className="border-2 border-r-2 w-16 m-1" placeholder="Cantidad"/>
          <input className="border-2 w-16 m-1" placeholder="$ costo"/>
          <input className="border-2 w-16 m-1" placeholder=" $ venta"/>
          <div className="col-span-2 flex-1">
            <button type="button" class="btn btn-accent" onClick={Entrada}>
              Entrada</button>
          </div>
        </div>
      <div class="p-3 align-middle">  
      <table className="table flex-grow align-middle p-1 max-sm:{flex}">
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
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      </div>
      </>
  )
}

export default Inventario;