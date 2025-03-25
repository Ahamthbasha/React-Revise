import React, { useContext } from 'react'
import { context } from './Example1'

const Example3 = () => {
    const {count,setCount} = useContext(context)

  return (
    <div>
    <button onClick={()=>setCount((count)=>count-1)}>Decrement</button>  
    </div>
  )
}

export default Example3
