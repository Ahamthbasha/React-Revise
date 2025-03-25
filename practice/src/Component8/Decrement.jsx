import React from 'react'
import Reset from './Reset'

const Decrement = ({count,setCount}) => {
  return (
    <div>
      <button onClick={()=>setCount((count)=>count-1)}>Decrement</button>

      <Reset count={count} setCount={setCount}/>
    </div>
  )
}

export default Decrement
