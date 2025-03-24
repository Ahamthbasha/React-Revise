import React, { useState,useEffect } from 'react'

const BackGround = ({count}) => {
    const [color,setColor] =useState("black")

    useEffect(()=>{
        document.body.style.backgroundColor=color
    },[color])
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>setColor('red')}>Red</button>
      <button onClick={()=>setColor('pink')}>pink</button>
      <button onClick={()=>setColor('yellow')}>Yellow</button>
    </div>
  )
}

export default React.memo(BackGround)
