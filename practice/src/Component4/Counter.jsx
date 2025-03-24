import React,{useState}from 'react'
import BackGround from './BackGround'

const Counter = () => {
    const [count,setCount] = useState(0)

  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount((count)=>count+1)}>Increment</button>
    <button onClick={()=>setCount((count)=>count-1)}>Decrement</button>
    <BackGround count={count}/>
    </div>
  )
}

export default Counter
