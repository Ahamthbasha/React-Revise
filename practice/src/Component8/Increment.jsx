import React from 'react'
import Decrement from './Decrement'

const Increment = ({count,setCount}) => {
  return (
    <div>
      <button onClick={()=>setCount((count)=>count+1)}>Increment</button>

      <Decrement count={count} setCount={setCount}/>
    </div>
  )
}

export default Increment
