import React from 'react';
import Footer from './Footer';
import Header from "./Header";
import Navbar from "./Navbar";

export const Home = () => {
  return (
    <>      
      <Header />
      <Navbar />    
        Esta pagina es el Home
      <Footer />
    </>
  )
}
export default Home;