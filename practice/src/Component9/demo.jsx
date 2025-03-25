import React, { createContext } from 'react'
import Demo2 from './demo2'


export const data=createContext("basha")

const Demo = () => {

  return (
    <data.Provider value="hello world">
      <Demo2 />
    </data.Provider>
  )
}

export default Demo
