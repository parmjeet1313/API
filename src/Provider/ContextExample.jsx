import React, { useEffect,useContext } from 'react'
import { ApiContext } from './UseContext'

const ContextExample = () => {
    
 

   const {cart,setCart}= useContext(ApiContext)
   console.log(cart,"cc");



    

  return (
    <div>ContextExample
        <button onClick={()=>{setCart([...cart]);console.log(setCart,"hii"); }}>click me</button>
    </div>
  )
}

export default ContextExample