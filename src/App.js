import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 id="name">CART</h1>
      <Cart/>
    </div>
  );
}

export default App;
