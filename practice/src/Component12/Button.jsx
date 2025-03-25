// import React, { useContext, useState } from 'react'
// import { data } from './context'

// const Button = () => {
//     const {isChecked,setIsChecked} = useContext(data)
//     const handleClick=()=>{
//         setIsChecked((curr)=>!curr)
//     }

//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }         

// export default Button


import React, { useContext } from 'react'
import { data } from './Context'

const Button = () => {
  const {toggleHandle} = useContext(data)
  return (
    <div>
      <button onClick={toggleHandle}>Click</button>
    </div>
  )
}

export default Button
