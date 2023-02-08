import { Route, Routes } from "react-router-dom";
import Api from "./Api";
import "./App.css";
import Mainroot from "./Mainroot";
import Home from "./Home";


import Navbar from "./Navbar";

import BestSeller from "./BestSeller";
import FeaturedProducts from "./FeaturedProducts";
import Carts from "./Carts";
// import { ApiContext, ContextExample} from "./Provider/UseContext";
import { useState } from "react";
import ContextExample from "./Provider/ContextExample";
import { ApiContext } from "./Provider/UseContext";
// import ContextExample from "./Provider/ContextExample";


function App() {

  const [cart,setCart]=useState([]);

  return (
    <div className="">
      {/* <Navbar /> */}
      {/* <Carts/> */}
      {/* <ApiContext.Provider value={[cart,setCart]}> */}


      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category/:dynamicPath"  element={<Mainroot />}></Route>
        <Route path="/category/:dynamicPath" element={<Mainroot />}></Route>
        <Route path="/category/:dynamicPath" element={<Mainroot />}></Route>
        <Route path="/category/:dynamicPath" element={<Mainroot/>}></Route>
        <Route path="/category/:dynamicPath" element={<Mainroot />}></Route>
        <Route path="/bestseller" element={<BestSeller />}></Route>
        <Route path="/featuredproducts" element={<FeaturedProducts />}></Route>
      </Routes>


        {/* <ContextExample/>
      </ApiContext.Provider> */}


    </div>
  );
}

export default App;











