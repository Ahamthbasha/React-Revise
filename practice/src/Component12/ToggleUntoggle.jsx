import React, { useState } from 'react'

const ToggleUntoggle = () => {
const [check,setChecked] = useState(false)
  return (
    <div>
      <input type="checkbox" checked={check}/>
      <button onClick={()=>setChecked((curr)=>!curr)}>change</button>
    </div>
  )
}

export default ToggleUntoggle
