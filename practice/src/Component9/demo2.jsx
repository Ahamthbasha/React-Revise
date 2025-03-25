import React, { useContext } from 'react'
import { data } from './demo'

const Demo2 = () => {
    const value = useContext(data)
  return (
    <div>
      <h1>{value}</h1>
    </div>
  )
}

export default Demo2
