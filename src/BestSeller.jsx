import React,{useState,useEffect} from 'react'
import axios from 'axios'

const BestSeller = () => {
  const url="https://dummyjson.com/products"

  const[post,setPost]=useState([])

  useEffect(() => {
    axios.get(url).then((response)=>{
      setPost(response.data.products)
      console.log(post);
      console.log(response.data);


    }).catch((error)=>{
      console.log(error);
    }


    )
  
   
  },[post])
  return (
    <div>
       <div className='text-[65px]  flex justify-center '><h1>BestSellers....</h1></div>
      
      <div className="main border border-black p-8 grid grid-cols-5 gap-10">


     {post.filter(((val)=>(val.id>=1 && val.id<=10))).map((val)=>(
      <div>
          {/* <div>{val.id}</div> */}

          <div className='mai border border-black flex-col w-[250px] rounded-xl overflow-hidden justify-between shadow-xl shadow-black-[100/20]'>
          <img className='' src={val.thumbnail}style={{height:"150px",width:'1000px'}}  alt="" srcset="" />
          <div className='  border border-black text-center text-[15px] p-2 m-2'>{val.title}</div>
          <div className=' border border-black  text-center text-[15px] p-2 m-2'>Price: Rs.{val.price}</div>
          <div className=' border border-black  text-center  text-[10px] p-2 m-2'>{val.description}</div>
          <div className=' border border-black  flex justify-around  m-2 border border-red-500'>
              <button className='border border-red-500 text-[20px] px-3 py-2' onClick={''}>Add To Cart</button>
              <button className='border border-red-500 text-[20px] px-3 py-2'>Buy</button>
          </div>

          </div>
      </div>
     ))}</div>
    </div>
  )
}

export default BestSeller