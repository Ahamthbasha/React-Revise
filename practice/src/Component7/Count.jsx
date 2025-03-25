import React, { useRef, useState } from 'react'

const Count = () => {
    const [count,setCount] = useState(0)
    const money=useRef(0)
    console.log('rendered based on state')
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount((count)=>count+1)}>Increment</button>

      <h2>{money.current}</h2>
    <button onClick={()=>money.current=money.current+1}>Increment</button>
    </div>
  )
}

export default Count
