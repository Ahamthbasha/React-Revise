import React,{useState} from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
      <h1>count is :{count}</h1>
      <button onClick={()=>setCount((count)=>count+1)}>Increment</button>

      <button onClick={()=>setCount((count)=>count-1)}>Decrement</button>
    </div>
  )
}

export default Counter
