import { Route, Routes } from "react-router-dom";
import Api from "./Api";
import "./App.css";
import Mainroot from "./Mainroot";
import Home from "./Home";


import Navbar from "./Navbar";

import BestSeller from "./BestSeller";
import FeaturedProducts from "./FeaturedProducts";

function App() {
  return (
    <div className="">
      <Navbar />

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
    </div>
  );
}

export default App;











