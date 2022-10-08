import React from "react";
import logo1 from "../../src/images/logos/Logo_Panamericana-ACM-W_Color_Simbolo.png";

function Home(){
  return (
    <div className="h-56 grid grid-cols-2 place-items-center gap-4">
      <div className="content-center align-middle items-center mt-10 w-full h-full">
        <h3>ACM-W Panamericana</h3>
        <h2>¿Quienes somos?</h2>
        <h1>ACM-W es una asociación con la visión de motivar a mujeres </h1>
      </div>
      <div className="items-center">
        <img className="w-80 h-full" src={logo1} alt="logo1" />
      </div>

      {/* <style>
  .img_logo1 {
    display: flex;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  </style>  */}
    </div>

    
  );
}

export default Home;
