// // import React from 'react'

// // const Smartphones = () => {
// //   return (
// //     <div>Smartphones


      
// //     </div>
// //   )
// // }

// // export default Smartphones


// import React from "react";
// import axios from "axios";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

// const ProductList = (propCategory) => {
//   const { dynamicPath } = useParams();
//   //   console.log("dynamicPath", dynamicPath);
//   useEffect(() => {
//     axios
//       .get(`https://dummyjson.com/products/category/${dynamicPath}`)
//       .then((res) => console.log(res))
//       .catch((err) => console.log("err", err));
//   }, [dynamicPath]);

//   return <div>ProductList</div>;
// };

// export default ProductList;