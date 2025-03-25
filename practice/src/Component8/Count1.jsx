import React,{useState} from 'react'
import Increment from './Increment'
const Count1 = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <Increment count={count} setCount={setCount}/>
    </div>
  )
}

export default Count1
