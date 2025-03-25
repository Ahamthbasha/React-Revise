// import React, { createContext,useState } from 'react'

// export const data=createContext()
// const Context = ({children}) => {
//     const [isChecked,setIsChecked] = useState(false)

//   return (
//     <data.Provider value={{isChecked,setIsChecked}}>
//       {children}
//     </data.Provider>
//   )
// }

// export default Context

import React, {createContext, useState } from 'react'

export const data=createContext()

const Context = ({children}) => {
  const [isChecked,setIsChecked] = useState(false)

  const toggleHandle=()=>{
    setIsChecked((curr)=>!curr)
  }

  return (
    <data.Provider value={{isChecked,toggleHandle}}>
      {children}
    </data.Provider>
  )
}

export default Context
