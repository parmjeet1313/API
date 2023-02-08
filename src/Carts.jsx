import axios from "axios";
import React, { useState, useEffect } from "react";

const Carts = () => {
  const url = "https://dummyjson.com/carts";
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCart(response.data.carts);
        console.log('cart11', response.data.carts)
        console.log("11111111", response);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

  // const array1 = cart.filter((item) => item.id === 1);
  // console.log(array1,"array1");
  // console.log(array1,"array1");
  // const array2 = cart.filter((item) => item.id === 2);
  // console.log(array2,"array2");
  // // const array3 = [...array1, ...array2];
  // const array3 = Array.prototype.push.apply(array1,array2);
  // console.log("array3", array1.concat(array2));

  return (
    <div>
      <div className="text-[65px]  flex justify-center ">
        <h1>Carts...</h1>
      </div>

      <div className="main border border-black p-8 grid grid-cols-5 gap-10">
        {cart
          .filter((val) => val.id <= 2)
          .map((val) => (
            <div>
              <div>{val.id}</div>

              <div className="mai border border-black flex-col w-[250px] rounded-xl overflow-hidden justify-between shadow-xl shadow-black-[100/20]">
                {val.products.map((e) => (
                  <div className=" border border-black  text-center  text-[10px] p-2 m-2">
                    {e.id}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
{/* 
      {array3.map((items)=>(<div className="border border-black flex-col w-[250px] rounded-xl overflow-hidden justify-between shadow-xl shadow-black-[100/20]">{console.log(items.products,"items22")}

      {items.products.map((en) => (
                  <div className="">
                    {en.id}
                  </div>
                ))} */}
      {/* </div>))} */}
    </div>
  );
};

export default Carts;
