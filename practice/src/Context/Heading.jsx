import React, { useContext } from 'react'
import { context } from './ContextProvider'

const Heading = () => {
    const {theme,toggleTheme} = useContext(context)

  return (
    <div>
      <h1>{theme}</h1>
      <button onClick={toggleTheme}>click</button>
    </div>
  )
}

export default Heading
