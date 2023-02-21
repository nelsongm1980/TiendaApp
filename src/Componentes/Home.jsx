import React from 'react';
import Footer from './Footer';
import Header from "./Header";
import Navbar from "./Navbar";

export const Home = () => {
  return (
    <>      
      <Header /> 
      <Navbar />      
      <p></p>     
      <body>
        <div class="max-w-md p-4 mx-auto mt-4 bg-gray-200 sm:shadow-md sm::rounded-md sm:bg-gray-100 sm:p-6 md:bg-green-100">
        <h2 class="text-lg font-semibold text-center text-blue-500 sm:text-xl">Me adapto a todo</h2>
          <p class="mt-3 text-gray-600">Esta caja es adaptable. Diseño primero para las dimensiones pequeñas y voy aumentando para las grandes.</p>
        </div>
      </body>
          <p></p>
      <Footer />
    </>
  )
}
export default Home;