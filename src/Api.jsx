import React,{useState,useEffect} from 'react'
import axios from 'axios'
const url="https://dummyjson.com/products"



const Api = () => {

    const[post,setPost]=useState([])
    // const[cart,setCart]=useState([])
    const [cart, setCart] = useState([]);
    const [itemIndex, setitemIndex] = useState(1);
    const[posts,setPosts]=useState(1)


    useEffect(() => {
      axios.get(url).then((response)=>{
        setPost(response.data.products)
        // console.log(post);
        // console.log(response.data);


      }).catch((error)=>{
        console.log(error);
      }


      )
    
     
    },[post])

console.log('post2222222', post)
    // const dodo = async() =>{

    // try {
        
    //     const data  = await  axios.get('/')
    // } catch (error) {
        
    // }
    // }
    
  return (
    <div>
      <div className='text-[65px]  flex justify-center '><h1>Our Products</h1></div>
      
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
      <div className='text-[65px]  flex justify-center '><h1>Featured Products </h1></div>
      
        <div className="main border border-black p-8 grid grid-cols-5 gap-10">


       {post.filter(((val)=>(val.id>=11 && val.id<=20))).map((val)=>(
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
      <div className='text-[65px]  flex justify-center '><h1>Popular Products</h1></div>
      
        <div className="main border border-black p-8 grid grid-cols-5 gap-10">


<div className='border border-green-500'>
        {cart.length === 0 && <p>Cart: (empty)</p>}
      {cart.length > 0 && <p>Cart: {cart.toString()}</p>}
      </div>
       {post.filter(((val)=>(val.id>=21 && val.id<=30))).map((val)=>(
        <div>
            {/* <div>{val.id}</div> */}
            <div className='mai border border-black flex-col w-[250px] rounded-xl overflow-hidden justify-between shadow-xl shadow-black-[100/20]'>
            <img className='' src={val.thumbnail}style={{height:"150px",width:'1000px'}}  alt="" srcset="" />
            <div className='  border border-black text-center text-[15px] p-2 m-2'>{val.title}</div>
            <div className=' border border-black  text-center text-[15px] p-2 m-2'>Price: Rs.{val.price}</div>
            <div className=' border border-black  text-center  text-[10px] p-2 m-2'>{val.description}</div>
            <div className=' border border-black  flex justify-around  m-2 border border-red-500'>
                <button className='border border-red-500 text-[20px] px-3 py-2'   onClick={() => {
          setCart([...cart,  ` item ${itemIndex}`]);
          setitemIndex(itemIndex + 1);
        }}>Add To Cart</button>
                <button className='border border-red-500 text-[20px] px-3 py-2'>Buy</button>
            </div>

            </div>
        </div>
       ))}</div>
      
      
      
        
    </div>
  )
}

export default Api
