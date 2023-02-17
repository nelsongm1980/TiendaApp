import React from "react";
import error404 from "../imagenes/404-picture-not-found.png";

const Error =() => {
    return (
    <>
    <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">      
      <div className="text-center">      
        <p className="text-base font-semibold text-indigo-600">404</p>       
        <p className="mt-6 text-base leading-7 text-gray-600">Lo sentimos, pero su página no fue encontrada.</p>
        <img src={error404} alt="..."/>
        <footer className="mt-10 flex items-center justify-center gap-x-6">
          <a type="button" className="btn btn-primary" href="/" autofocus>Regresar a la página Principal</a>
          <div className="container"></div>
          <a type="button" className="btn btn-secondary" href="/support" autofocus>Contacta con Soporte
          </a>          
        </footer>        
      </div>
    </main>
    </>
    )
}
export default Error;