import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mousein, Setmousein] = useState(false);

  return (
    <div>
      <div className="main flex justify-around border border-red-500 relative">
        <div className="logo text-[25px] font-bold items-center flex">
          MyAPP
        </div>
        <div className="lists flex justify-around w-[750px] border border-red-500 items-center text-[20px] font-bold ">
          <Link to="/">
            <span className="list cursor-pointer">Home</span>
          </Link>
          <div
            className="list p-2 flex flex-col cursor-pointer"
            onMouseOver={() => {
              Setmousein(true);
            }}
          >
            Catagories
            {mousein && (
              <div
                className="flex-col flex border-2 bg-white border-red-500 items-center absolute top-[50px] p-3 ml-[-35px]"
                onMouseOut={() => {
                  Setmousein(false);
                }}
              >
                <span className="list  p-2 text-[18px] font-semibold cursor-pointer ">
                  <Link to="/category/Fragrances">Fragrances</Link>
                </span>

                <span className="list  p-2 text-[18px] font-semibold mt-1 cursor-pointer">
                  <Link to="/category/Smartphones">Smartphones</Link>
                </span>

                <span className="list  p-2 text-[18px] font-semibold mt-1 cursor-pointer">
                  <Link to="/category/Laptops">Laptops</Link>
                </span>
                <span className="list  p-2 text-[18px] font-semibold mt-1 cursor-pointer">
                  <Link to="/category/Skincare">SkinCare</Link>
                </span>
              </div>
            )}
          </div>
          <span className="list cursor-pointer">
            <Link to="/featuredproducts">Featured Products</Link>{" "}
          </span>
          <span className="list cursor-pointer">
            <Link to="/bestseller"> BestSellers</Link>{" "}
          </span>
        </div>
        <div className="div flex justify-around w-[250px]">
          {/* <span className="list">cart</span> */}
          <span className="flex">
            <img
              src="https://img.icons8.com/ios-glyphs/512/shopping-cart--v1.png"
              height="50px"
              width="50px"
              alt=""
              srcset=""
            />
            <button>0</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
