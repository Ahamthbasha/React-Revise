import React, { createContext } from 'react'

export const userContext=createContext()

export const UserContext = ({children}) => {
    
    const userDetails={
        name:"ahamathbasha",
        email:"ahamathbasha@gmail.com"
    }

  return (
    <userContext.Provider value={userDetails}>
      {children}
    </userContext.Provider>
  )
}


