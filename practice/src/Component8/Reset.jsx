import React from 'react'

const Reset = ({count,setCount}) => {
  return (
    <div>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Reset
