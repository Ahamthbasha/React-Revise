import React from 'react'
import { useContext } from 'react'
import { context } from './Example1'
import Example3 from './Example3'

const Example2 = () => {
    const {count,setCount} = useContext(context)

  return (
    <div>
      <button onClick={()=>setCount((count)=>count+1)}>Increment</button>

      <Example3 />
    </div>
  )
}

export default Example2
