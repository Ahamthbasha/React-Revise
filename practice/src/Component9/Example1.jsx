import React, { createContext, useState } from 'react'
import Example2 from './Example2'
export const context=createContext()
const Example1 = () => {

    const [count,setCount] = useState(0)

  return (
    <context.Provider value={{count,setCount}}>
      <h1>{count}</h1>
      <Example2/>
    </context.Provider>
  )
}

export default Example1
